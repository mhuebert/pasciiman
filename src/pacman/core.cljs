(ns pacman.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [cljs.core.async :refer [chan alts! <!  close! timeout put!]]
    [reagent.core :as reagent :refer [atom]]
    [pacman.random :as random]
    [clojure.browser.repl :as repl]))

;(repl/connect "http://localhost:9000/repl")
(enable-console-print!)

(def next-tick reagent/next-tick)

(def grid-width 10)
(def grid-height 10)

(defn add-to-grid
  [grid [x y v]]
  (assoc-in grid [y x] v))

(defn render-pacman [grid e] 
  (add-to-grid grid (conj (:position e) [:span {:style { :background-color "yellow" :color "green"}} "O"])))

(defn render-ghost [grid e] 
  (add-to-grid grid [(rand-int grid-width) (rand-int grid-height) [:span {} "G"]]))

(defn render-rand [grid e] 
  (add-to-grid grid [(rand-int grid-width) (rand-int grid-height) [:span {} (random/char)]]))

(defn make-grid 
  "Blank grid of width w and height h"
  [w h]
  (vec(repeat h (vec (take w (repeat [:span {} " "]))))))

(def blank-grid (make-grid grid-width grid-height))



(defn interpolate
  "Find intermediate value given two values and the fraction in-between"
  [v1 v2 r]
  (+ v1 (* r (- v2 v1)))
)

(defn interpolate-point
  "Find intermediate point given two points and fraction in-between"
  [[x1 y1] [x2 y2] r]
  (vector (Math/round (interpolate x1 x2 r)) (Math/round (interpolate y1 y2 r))) 
)

(defn line
  "Returns a region (a list of points)"
  [[x1 y1] [x2 y2]]
  (let [num-intervals (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))]
    (map #(interpolate-point [x1 y1] [x2 y2] (/ % num-intervals)) (range num-intervals))
))

(defn transform-component
  "Transform component with style and fill functions"
  [component style-fn fill-fn]
  (vector (first component) (style-fn (second component)) (fill-fn (last component)))
)

(comment 
  (transform-component 
    [:span {:color "red"} "hello"] #(assoc % :color "blue") random/char))


(defn render-layer
  "put a layer on the grid"
  [grid {:keys [:region :style :fill]}]
  ; create a function that will apply fill and style functions to 
  ; the correct parts of a reagent component (eg/ [:span {..style..} "..fill.."]) 
  (reduce (fn [grid [x y]] 
              (update-in grid [y x] transform-component style fill)) 
           grid region))

(defn render-layers [grid {:keys [:layers]}]
  "Takes an entity with a :layers attribute containing a list of render and draws a line from point (x1, y1) to point (x2, y2)
   on the given grid and returns a new grid."
   (reduce render-layer grid layers))

;(render-layers blank-grid (:walls E))
#_(render-layer 
  blank-grid 
  {:region (line [4 2] [4 8]) 
   :style #(assoc % :color "red") 
   :fill random/char})
 
(def E {
    :pacman {
        :name "Pacman"
        :position [0.03 0]
        :speed 5
        :direction :right
        :points 0
        :alive? true
        :render render-pacman
       }
    2 {
        :name "Ghost"
        :position [0 5]
        :speed 0
        :points 0
        :alive? true
        :render render-ghost
       }
    :walls {
            :name "Walls"
            :render render-layers
            :layers  [
                       {:region (line [4 2] [4 8]) :style #(assoc % :color "red") :fill random/char}
                     ]
           }
    :grid []})

;(def game-state (atom (apply assoc E (interleave (range 3 100) (repeat {:render render-rand})))))
(def game-state (atom E))

(def key-state (atom {:left false :right false :up false :down false}))

(defn filter-e 
  "Return all entities which contain keyword"
  [kw entities]
  (filter #(contains? % kw) (vals entities)))

(defn render-e
  [grid entity]
  (let [render (:render entity)]
    (render grid entity)))

(defn update-grid
  [grid]
  (swap! game-state #(assoc % :grid grid)))

(defn render
  "Loop through render entities and render them."
  [entities]
  (let [entities (filter-e :render entities)]
      (update-grid (reduce render-e blank-grid entities))
 ))

(defn frame-ms
  [fps]
  (/ 1000 fps))

; Listen for keyDown. If keyDown matches arrow set,
; update Pacman speed/direction/velocity in game state.
(.addEventListener js/window "keydown" 
  (fn [e]
    (let [keynum (.-which e)]
      (cond 
        (= keynum 37) (swap! game-state #(assoc-in % [:pacman :direction] :left))
        (= keynum 38) (swap! game-state #(assoc-in % [:pacman :direction] :up))
        (= keynum 39) (swap! game-state #(assoc-in % [:pacman :direction] :right))
        (= keynum 40) (swap! game-state #(assoc-in % [:pacman :direction] :down))))))

(defn valid-position? [[x y]]
  (and (>= x 0) (< x grid-width) (>= y 0) (< y grid-height)))

(defn update-pacman-position [delta {:keys [:position :direction :speed] :as pacman} pacman ]
  "Returns a new position for pacman given a time delta" 
    (let [delta (/ delta 1000)
          movement (* speed delta)
          [x y] position
          new-position (case direction
                         :right [(+ movement x) y]
                         :left  [(- x movement) y]
                         :up    [x (- y movement)]
                         :down  [x (+ movement y)]
                         position)]
      (if (valid-position? new-position)
        (assoc pacman :position new-position)
        pacman)))


(defn update 
  [delta state]
  (swap! state #(update-in % [:pacman] (partial update-pacman-position delta))))

(defn begin [last-update]
  (let [now (.getTime (js/Date.))
        delta (- now last-update)]
    (update delta game-state)
    (render @game-state)
    
    (next-tick (partial begin now))))

(begin (js/Date.))

(defn to-dom
  [grid]  
  (vec (concat [:div {:id "my-div"}] 
               (map 
                 (fn [row] 
                      (vec (concat [:div] row))) 
                 grid))))


(defn game-component []
  [to-dom (get @game-state :grid)])

(defn mountit []
  (reagent/render-component [game-component]
                            (.-body js/document)))
(mountit)
