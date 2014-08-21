(ns pacman.scratch)

(defn render [entities]
  (let [renderables 
        (filter #(contains? % :renderable) (vals entities))]
     (doseq [e renderables] 
     ; (prn (:name e) )
     )))

;
;(defn renderAll []
;  (do
;    ;(prn (random/string 10))
;    ; (render E)
;    (swap! game-state #(assoc % :grid (random/string 500)))
;    (tick renderAll)))
; Systems
(def S [])
;; systems: move, eat, score, render, deferred (ordered)

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