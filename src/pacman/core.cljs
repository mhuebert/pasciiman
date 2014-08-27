(ns pacman.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [cljs.core.async :refer [chan alts! <!  close! timeout put!]]
    [reagent.core :as reagent :refer [atom]]
    [pacman.random :as random]))

(enable-console-print!)

(def next-tick reagent/next-tick)

(def grid-width 10)
(def grid-height 10)

(defn render-pacman [e] 
  (conj (:position e) [:span {:style { :background-color "yellow" :color "green"}} "O"]))

(defn render-ghost [e] 
  (conj (:position e) "G")
  [(rand-int grid-width) (rand-int grid-height) [:span "G"]])

(defn render-rand [n e] 
  (conj (:position e) n)
  [(rand-int grid-width) (rand-int grid-height) [:span (random/char)]])

(defn linear-function [[x1 y1]
                        [x2 y2]]
  (let [m (/ (- y2 y1) (- x2 x1))
        b (- y1 (* m x1))]
    #(+ (* m %) b)))

(declare add-to-grid)
(defn draw-line [grid {:keys [:points :fill]} line]
  (let [[lower upper] (sort-by first points)
         line-fn (linear-function lower upper)
         xs (range (first lower) (first upper))
         ys (map line-fn xs)]
    ;; project the xs using the linear fn into the y axis
    ;; zip the xs and ys together
    ;; place the fill at each x y pair
    (reduce add-to-grid grid (map vector xs ys (repeat fill)))))

(defn render-wall [grid {:keys [:wall-list]} e]
  "Takes an entity with a :wall-list attribute containing a list of four-element
   vectors [x1 y1 x2 y2] and draws a line from point (x1, y1) to point (x2, y2)
   on the given grid and returns a new grid."
  (reduce draw-line grid wall-list))
  

(def E {
    :pacman {
        :name "Pacman"
        :position [0.03 0]
        :speed 5
        :direction :right
        :points 0
        :alive? true
        :renderable render-pacman
       }
    2 {
        :name "Ghost"
        :position [0 5]
        :speed 0
        :points 0
        :alive? true
        :renderable render-ghost
       }
    :walls {
            :renderable render-wall
            :wall-list  [{:points [[4 2] [4 8]]
                          :fill [:span {:style {:color "red"}}]}]
           }
    :grid []})


(def game-state (atom (apply assoc E (interleave (range 3 100) (repeat {:renderable render-rand})))))

(def key-state (atom {:left false :right false :up false :down false}))

(defn make-grid 
  "Blank grid of width w and height h"
  [w h]
  (vec(repeat h (vec (take w (repeat [:span " "]))))))

(def blank-grid (make-grid grid-width grid-height))

(defn filter-e 
  "Return all entities which contain keyword"
  [kw entities]
  (filter #(contains? % kw) (vals entities)))

(defn render-e
  [entity]
  (let [render-fn (:renderable entity)]
    (render-fn entity)))

(defn add-to-grid
  [grid [x y v]]
  (assoc-in grid [y x] v))

(defn update-grid
  [grid]
  (swap! game-state #(assoc % :grid grid)))

(defn render
  "Loop through renderable entities and render them."
  [entities] 
  (->> (filter-e :renderable entities)
       (map render-e)
       (reduce add-to-grid blank-grid)
       (update-grid)))

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
