(ns pacman.core
  (:require 
    [reagent.core :as reagent :refer [atom]]
    [pacman.random :as random]))

; (:use ["reagent/react.js"])

(enable-console-print!)

(def tick reagent/next-tick)

(def grid-width 60)
(def grid-height 20)


(defn render-pacman [e] 
  (conj (:position e) "O")
  [(rand-int grid-width) (rand-int grid-height) "O"]
  )

(defn render-ghost [e] 
  (conj (:position e) "G")
  [(rand-int grid-width) (rand-int grid-height) "G"]
  )
(defn render-rand [n e] 
  (conj (:position e) n)
  [(rand-int grid-width) (rand-int grid-height) (random/char)]
  )

(def E {
    1 {
        :name "Pacman"
        :position [0 0]
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
    4 {:renderable render-rand}
    5 {:renderable render-rand}
    6 {:renderable render-rand}
    7 {:renderable render-rand}
    8 {:renderable render-rand}
    9 {:renderable render-rand}
    :grid []
      }
    )

(def game-state (atom E))

(defn make-grid 
  "Blank grid of width w and height h"
  [w h]
  (vec(repeat h (vec (take w (repeat " "))))))

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

(defn begin []
  (render E)
  (tick begin))

(begin)


(defn insert-el
  [el v]
  (vec (cons el v))
  )

(defn wrap-children
  [el sx]
  (vec (map #(vec [el %]) sx))
  )

(defn to-dom
  [grid]
  (vec [:div (map (fn [row] 
         (concat [:div] (map vector (repeat :span) row))) 
       grid)]
  ))

(defn game-component []
  [to-dom (get @game-state :grid)])

(defn mountit []
  (reagent/render-component [game-component]
                            (.-body js/document)))
(mountit)
