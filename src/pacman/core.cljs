(ns pacman.core
  (:require 
    [reagent.core :as reagent :refer [atom]]
    [pacman.random :as random]))
(enable-console-print!)

(def tick reagent/next-tick)

(defn render [entities]
  (let [renderables 
        (filter #(contains? % :renderable) (vals entities))]
     (doseq [e renderables] 
     ; (prn (:name e) )
     )))

(defn render-pacman [e] )

(def E {
    1 {
        :name "Pacman"
        :position {:x 0 :y 10}
        :speed {:v 0}
        :points {:v 0}
        :alive? {:v true}
        :renderable {:fn render-pacman}
       }
    2 "sss"
      }
    )

; Systems
(def S [])

; Game-state atom
(def game-state (atom E))


(defn renderAll []
  (do
    ;(prn (random/string 10))
    ; (render E)
    (swap! game-state #(assoc % 2 (random/string 10)))
    (tick renderAll)))



(renderAll)

(defn game-map [s]
  [:div s]
)

(defn game-component []
  [game-map (get @game-state 2)])

(defn mountit []
  (reagent/render-component [game-component]
                            (.-body js/document)))
(mountit)
; (def click-count (atom 0))

; (defn state-ful-with-atom []
;   [:div {:on-click #(swap! click-count inc)}
;    "I have been clicked " @click-count " times."])

; (defn some-component []
;   [:div
;    [:h3 "I am a component!"]
;    [:p.someclass 
;     "I have " [:strong "bold"]
;     [:span {:style {:color "red"}} " and red"]
;     " text."]])

; (defn calling-component []
;   [:div "Parent component"
;    [some-component]])

; (defn child [name]
;   [:p "Hi, I am " name])

; (defn childcaller []
;   [child "Foo Bar"])