(ns pacman.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [cljs.core.async :refer [chan alts! <!  close! timeout put!]]
    [reagent.core :as reagent :refer [atom]]
    [pacman.random :as random]
    ))

; (:use ["reagent/react.js"])

(enable-console-print!)

(def next-tick reagent/next-tick)

(def grid-width 10)
(def grid-height 10)


(defn render-pacman [e] 
  (conj (:position e) [:span "O"]))

(defn render-ghost [e] 
  (conj (:position e) "G")
  [(rand-int grid-width) (rand-int grid-height) [:span "G"]]
  )
(defn render-rand [n e] 
  (conj (:position e) n)
  [(rand-int grid-width) (rand-int grid-height) [:span (random/char)]]
  )

(def E {
    :pacman {
        :name "Pacman"
        :position [0.03 0]
        :speed 0
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
    3 {:renderable render-rand}
    :grid []
      }
    )

(def game-state (atom (apply assoc E (interleave (range 4 100) (repeat {:renderable render-rand})))))

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
    (render-fn entity)
  ))

(defn add-to-grid
  [grid [x y v]]
  (assoc-in grid [y x] v)
  )

(defn update-grid
  [grid]
  (swap! game-state #(assoc % :grid grid))
  )

(defn render
  "Loop through renderable entities and render them."
  [entities] 
  (->> (filter-e :renderable entities)
       (map render-e)
       (reduce add-to-grid blank-grid)
       (update-grid)
       ))


(defn frame-ms
  [fps]
  (/ 1000 fps)
  )



; Listen for keyDown. If keyDown matches arrow set,
; update Pacman speed/direction/velocity in game state.
(.addEventListener js/window "keydown" (fn [e] 
                                          (case (.-which e)
                                            37 (swap! key-state #(assoc % :left true))
                                            38 (swap! key-state #(assoc % :up true))
                                            39 (swap! key-state #(assoc % :right true))
                                            40 (swap! key-state #(assoc % :down true))
                                            "default")))

(.addEventListener js/window "keyup" (fn [e] 
                                          (case (.-which e)
                                            37 (swap! key-state #(assoc % :left false))
                                            38 (swap! key-state #(assoc % :up false))
                                            39 (swap! key-state #(assoc % :right false))
                                            40 (swap! key-state #(assoc % :down false))
                                            "default")))


(defn update 
  [delta state]
  ;(swap! state )
  ( )
  )

;(let [delta (frame-ms 60)]
;  (js/setInterval (partial update delta game-state) delta)
;)

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
