(ns pacman.test
  (:require 
    [pacman.core]
    [pacman.random :as random]
))

(require 'pacman.core :reload)

pacman/blank-grid

(= (pacman/make-grid 2 2)
   [[[:span " "] [:span " "]] [[:span " "] [:span " "]]])

(= (pacman/interpolate 0 10 0.5) 5)

(= (pacman/interpolate-point [0 0] [0 10] 0.5) [0 5])

(= (pacman/line [0 0] [0 5]) 
   [[0 0] [0 1] [0 2] [0 3] [0 4]])

(transform-component [:span {:color "red"} "hello"] #(assoc % :color "blue") random/char)

(pacman/render-layer 
  pacman/blank-grid 
  {:region (pacman/line [4 2] [4 8]) 
   :style #(assoc % :color "red") 
   :fill (fn [_] random/char)})

(pacman/render-layers
  pacman/blank-grid
  (:walls pacman/E))