// Compiled by ClojureScript 0.0-2311
goog.provide('pacman.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('pacman.random');
goog.require('pacman.random');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
pacman.core.next_tick = reagent.core.next_tick;
pacman.core.grid_width = (10);
pacman.core.grid_height = (10);
pacman.core.render_pacman = (function render_pacman(e){return cljs.core.conj.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"yellow",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"O"], null));
});
pacman.core.render_ghost = (function render_ghost(e){cljs.core.conj.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(e),"G");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,pacman.core.grid_width),cljs.core.rand_int.call(null,pacman.core.grid_height),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,"G"], null)], null);
});
pacman.core.render_rand = (function render_rand(n,e){cljs.core.conj.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(e),n);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,pacman.core.grid_width),cljs.core.rand_int.call(null,pacman.core.grid_height),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,pacman.random.char$.call(null)], null)], null);
});
/**
* Blank grid of width w and height h
*/
pacman.core.make_grid = (function make_grid(w,h){return cljs.core.vec.call(null,cljs.core.repeat.call(null,h,cljs.core.vec.call(null,cljs.core.take.call(null,w,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY," "], null))))));
});
pacman.core.blank_grid = pacman.core.make_grid.call(null,pacman.core.grid_width,pacman.core.grid_height);
pacman.core.add_to_grid = (function add_to_grid(grid,p__11745){var vec__11747 = p__11745;var x = cljs.core.nth.call(null,vec__11747,(0),null);var y = cljs.core.nth.call(null,vec__11747,(1),null);var v = cljs.core.nth.call(null,vec__11747,(2),null);return cljs.core.assoc_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),v);
});
/**
* Find intermediate value given two values and the fraction in-between
*/
pacman.core.interpolate = (function interpolate(v1,v2,r){return (v1 + (r * (v2 - v1)));
});
/**
* Find intermediate point given two points and fraction in-between
*/
pacman.core.interpolate_point = (function interpolate_point(p__11748,p__11749,r){var vec__11752 = p__11748;var x1 = cljs.core.nth.call(null,vec__11752,(0),null);var y1 = cljs.core.nth.call(null,vec__11752,(1),null);var vec__11753 = p__11749;var x2 = cljs.core.nth.call(null,vec__11753,(0),null);var y2 = cljs.core.nth.call(null,vec__11753,(1),null);return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[Math.round.call(null,pacman.core.interpolate.call(null,x1,x2,r)),Math.round.call(null,pacman.core.interpolate.call(null,y1,y2,r))],null));
});
/**
* Returns a region (a list of points)
*/
pacman.core.line = (function line(p__11755,p__11756){var vec__11759 = p__11755;var x1 = cljs.core.nth.call(null,vec__11759,(0),null);var y1 = cljs.core.nth.call(null,vec__11759,(1),null);var vec__11760 = p__11756;var x2 = cljs.core.nth.call(null,vec__11760,(0),null);var y2 = cljs.core.nth.call(null,vec__11760,(1),null);var num_intervals = (function (){var x__3855__auto__ = Math.abs.call(null,(x2 - x1));var y__3856__auto__ = Math.abs.call(null,(y2 - y1));return ((x__3855__auto__ > y__3856__auto__) ? x__3855__auto__ : y__3856__auto__);
})();return cljs.core.map.call(null,((function (num_intervals,vec__11759,x1,y1,vec__11760,x2,y2){
return (function (p1__11754_SHARP_){return pacman.core.interpolate_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),(p1__11754_SHARP_ / num_intervals));
});})(num_intervals,vec__11759,x1,y1,vec__11760,x2,y2))
,cljs.core.range.call(null,num_intervals));
});
/**
* Transform component with style and fill functions
*/
pacman.core.transform_component = (function transform_component(component,style_fn,fill_fn){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,component),style_fn.call(null,cljs.core.second.call(null,component)),fill_fn.call(null,cljs.core.last.call(null,component))],null));
});
/**
* put a layer on the grid
*/
pacman.core.render_layer = (function render_layer(grid,p__11762){var map__11766 = p__11762;var map__11766__$1 = ((cljs.core.seq_QMARK_.call(null,map__11766))?cljs.core.apply.call(null,cljs.core.hash_map,map__11766):map__11766);var fill = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"fill","fill",883462889));var style = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"style","style",-496642736));var region = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"region","region",270415120));return cljs.core.reduce.call(null,((function (map__11766,map__11766__$1,fill,style,region){
return (function (grid__$1,p__11767){var vec__11768 = p__11767;var x = cljs.core.nth.call(null,vec__11768,(0),null);var y = cljs.core.nth.call(null,vec__11768,(1),null);new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null);
return fill;
});})(map__11766,map__11766__$1,fill,style,region))
,grid,region);
});
pacman.core.render_layers = (function render_layers(grid,p__11769){var map__11771 = p__11769;var map__11771__$1 = ((cljs.core.seq_QMARK_.call(null,map__11771))?cljs.core.apply.call(null,cljs.core.hash_map,map__11771):map__11771);var layers = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));return cljs.core.reduce.call(null,pacman.core.render_layer,grid,layers);
});
pacman.core.E = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Pacman",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.03,(0)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(5),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"alive?","alive?",-372447621),true,new cljs.core.Keyword(null,"render","render",-1408033454),pacman.core.render_pacman], null),(2),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Ghost",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(0),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"alive?","alive?",-372447621),true,new cljs.core.Keyword(null,"render","render",-1408033454),pacman.core.render_ghost], null),new cljs.core.Keyword(null,"walls","walls",-268788818),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),pacman.core.render_layers,new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"region","region",270415120),pacman.core.line.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8)], null)),new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__11772_SHARP_){return cljs.core.assoc.call(null,p1__11772_SHARP_,new cljs.core.Keyword(null,"color","color",1011675173),"red");
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (_){return pacman.random.char$;
})], null)], null)], null),new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.PersistentVector.EMPTY], null);
pacman.core.game_state = reagent.core.atom.call(null,cljs.core.apply.call(null,cljs.core.assoc,pacman.core.E,cljs.core.interleave.call(null,cljs.core.range.call(null,(3),(100)),cljs.core.repeat.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),pacman.core.render_rand], null)))));
pacman.core.key_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),false,new cljs.core.Keyword(null,"right","right",-452581833),false,new cljs.core.Keyword(null,"up","up",-269712113),false,new cljs.core.Keyword(null,"down","down",1565245570),false], null));
/**
* Return all entities which contain keyword
*/
pacman.core.filter_e = (function filter_e(kw,entities){return cljs.core.filter.call(null,(function (p1__11773_SHARP_){return cljs.core.contains_QMARK_.call(null,p1__11773_SHARP_,kw);
}),cljs.core.vals.call(null,entities));
});
pacman.core.render_e = (function render_e(entity){var render = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(entity);return render.call(null,entity);
});
pacman.core.update_grid = (function update_grid(grid){return cljs.core.swap_BANG_.call(null,pacman.core.game_state,(function (p1__11774_SHARP_){return cljs.core.assoc.call(null,p1__11774_SHARP_,new cljs.core.Keyword(null,"grid","grid",402978600),grid);
}));
});
/**
* Loop through render entities and render them.
*/
pacman.core.render = (function render(entities){return pacman.core.update_grid.call(null,cljs.core.reduce.call(null,pacman.core.add_to_grid,pacman.core.blank_grid,cljs.core.map.call(null,pacman.core.render_e,pacman.core.filter_e.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),entities))));
});
pacman.core.frame_ms = (function frame_ms(fps){return ((1000) / fps);
});
window.addEventListener("keydown",(function (e){var keynum = e.which;if(cljs.core._EQ_.call(null,keynum,(37)))
{return cljs.core.swap_BANG_.call(null,pacman.core.game_state,((function (keynum){
return (function (p1__11775_SHARP_){return cljs.core.assoc_in.call(null,p1__11775_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.Keyword(null,"left","left",-399115937));
});})(keynum))
);
} else
{if(cljs.core._EQ_.call(null,keynum,(38)))
{return cljs.core.swap_BANG_.call(null,pacman.core.game_state,((function (keynum){
return (function (p1__11776_SHARP_){return cljs.core.assoc_in.call(null,p1__11776_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.Keyword(null,"up","up",-269712113));
});})(keynum))
);
} else
{if(cljs.core._EQ_.call(null,keynum,(39)))
{return cljs.core.swap_BANG_.call(null,pacman.core.game_state,((function (keynum){
return (function (p1__11777_SHARP_){return cljs.core.assoc_in.call(null,p1__11777_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.Keyword(null,"right","right",-452581833));
});})(keynum))
);
} else
{if(cljs.core._EQ_.call(null,keynum,(40)))
{return cljs.core.swap_BANG_.call(null,pacman.core.game_state,((function (keynum){
return (function (p1__11778_SHARP_){return cljs.core.assoc_in.call(null,p1__11778_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.Keyword(null,"down","down",1565245570));
});})(keynum))
);
} else
{return null;
}
}
}
}
}));
pacman.core.valid_position_QMARK_ = (function valid_position_QMARK_(p__11779){var vec__11781 = p__11779;var x = cljs.core.nth.call(null,vec__11781,(0),null);var y = cljs.core.nth.call(null,vec__11781,(1),null);return ((x >= (0))) && ((x < pacman.core.grid_width)) && ((y >= (0))) && ((y < pacman.core.grid_height));
});
pacman.core.update_pacman_position = (function update_pacman_position(delta,p__11782,pacman__$1){var map__11786 = p__11782;var map__11786__$1 = ((cljs.core.seq_QMARK_.call(null,map__11786))?cljs.core.apply.call(null,cljs.core.hash_map,map__11786):map__11786);var pacman__$2 = map__11786__$1;var speed = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));var direction = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));var position = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"position","position",-2011731912));var delta__$1 = (delta / (1000));var movement = (speed * delta__$1);var vec__11787 = position;var x = cljs.core.nth.call(null,vec__11787,(0),null);var y = cljs.core.nth.call(null,vec__11787,(1),null);var new_position = (function (){var G__11788 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);switch (G__11788) {
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(movement + y)], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - movement)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - movement),y], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(movement + x),y], null);

break;
default:
return position;

}
})();if(pacman.core.valid_position_QMARK_.call(null,new_position))
{return cljs.core.assoc.call(null,pacman__$2,new cljs.core.Keyword(null,"position","position",-2011731912),new_position);
} else
{return pacman__$2;
}
});
pacman.core.update = (function update(delta,state){return cljs.core.swap_BANG_.call(null,state,(function (p1__11790_SHARP_){return cljs.core.update_in.call(null,p1__11790_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pacman","pacman",-818240966)], null),cljs.core.partial.call(null,pacman.core.update_pacman_position,delta));
}));
});
pacman.core.begin = (function begin(last_update){var now = (new Date()).getTime();var delta = (now - last_update);pacman.core.update.call(null,delta,pacman.core.game_state);
pacman.core.render.call(null,cljs.core.deref.call(null,pacman.core.game_state));
return pacman.core.next_tick.call(null,cljs.core.partial.call(null,begin,now));
});
pacman.core.begin.call(null,(new Date()));
pacman.core.to_dom = (function to_dom(grid){return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"my-div"], null)], null),cljs.core.map.call(null,(function (row){return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),row));
}),grid)));
});
pacman.core.game_component = (function game_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pacman.core.to_dom,cljs.core.get.call(null,cljs.core.deref.call(null,pacman.core.game_state),new cljs.core.Keyword(null,"grid","grid",402978600))], null);
});
pacman.core.mountit = (function mountit(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pacman.core.game_component], null),document.body);
});
pacman.core.mountit.call(null);
