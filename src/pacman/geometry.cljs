(ns pacman.geometry)

(defn slope
  [[x1 y1] [x2 y2]]
    (/ (- y2 y1) (- x2 x1))
)

(defn y-offset
  [[x1 y1] [x2 y2]]
    (- y1 (* x1 (slope [x1 y1] [x2 y2])))
)

(defn x-in-terms-of-y
  [[p1 p2]]
  (let [m (slope p1 p2)
        b (y-offset p1 p2)]
    #(/ (- % b) m)
))

(defn y-in-terms-of-x
  [[p1 p2]]
  (let [m (slope p1 p2)
        b (y-offset p1 p2)]
    #(+ (* (m %)) b)
))

((y-in-terms-of-x [[0 0] [0 5]]) 10)

(defn draw-line 
  "Draw points on a grid"
  [grid {:keys [:points :fill]}]
  (let [ 
        [[x1 y1] [x2 y2]] points
        m (slope points)
        x-in-terms-of-y (x-in-terms-of-y points)
        y-in-terms-of-x (y-in-terms-of-x points)
        ]

      
    
      (cond 
          (> 1 m) (map y-x (range (min y1 y2) (max y1 y2)))
          (<= 1 m) (map x-y (range (min x1 x2) (max x1 x2)))
      ))
 
 
 
 (/ (- % b) m)
 
  ; determine if slope is > or < 1
  ; if slope is > 1
  ; find x for every y-value between y1 and y2
  ; if slope is < 1
  ; find y for every x-value between x1 and x2
  )