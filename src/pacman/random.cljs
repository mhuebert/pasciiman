(ns pacman.random)

(def valid-chars
  (map char (concat (range 48 58) ; 0-9
            (range 66 91) ; A-Z
            (range 97 123)))) ; a-z

(defn char []
  (nth valid-chars (rand-int (count valid-chars))))

(defn string [length]
  (apply str (take length (repeatedly char))))

