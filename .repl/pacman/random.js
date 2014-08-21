// Compiled by ClojureScript 0.0-2311
goog.provide('pacman.random');
goog.require('cljs.core');
pacman.random.valid_chars = cljs.core.map.call(null,cljs.core.char$,cljs.core.concat.call(null,cljs.core.range.call(null,(48),(58)),cljs.core.range.call(null,(66),(91)),cljs.core.range.call(null,(97),(123))));
pacman.random.char$ = (function char$(){return cljs.core.nth.call(null,pacman.random.valid_chars,cljs.core.rand_int.call(null,cljs.core.count.call(null,pacman.random.valid_chars)));
});
pacman.random.string = (function string(length){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,length,cljs.core.repeatedly.call(null,pacman.random.char$)));
});
