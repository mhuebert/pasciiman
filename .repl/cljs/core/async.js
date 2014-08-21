// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11020 = (function (f,fn_handler,meta11021){
this.f = f;
this.fn_handler = fn_handler;
this.meta11021 = meta11021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11020.cljs$lang$type = true;
cljs.core.async.t11020.cljs$lang$ctorStr = "cljs.core.async/t11020";
cljs.core.async.t11020.cljs$lang$ctorPrWriter = (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t11020");
});
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11022){var self__ = this;
var _11022__$1 = this;return self__.meta11021;
});
cljs.core.async.t11020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11022,meta11021__$1){var self__ = this;
var _11022__$1 = this;return (new cljs.core.async.t11020(self__.f,self__.fn_handler,meta11021__$1));
});
cljs.core.async.__GT_t11020 = (function __GT_t11020(f__$1,fn_handler__$1,meta11021){return (new cljs.core.async.t11020(f__$1,fn_handler__$1,meta11021));
});
}
return (new cljs.core.async.t11020(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11024 = buff;if(G__11024)
{var bit__4198__auto__ = null;if(cljs.core.truth_((function (){var or__3548__auto__ = bit__4198__auto__;if(cljs.core.truth_(or__3548__auto__))
{return or__3548__auto__;
} else
{return G__11024.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11024.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11024);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11024);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11025 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11025);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11025,ret){
return (function (){return fn1.call(null,val_11025);
});})(val_11025,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4404__auto___11026 = n;var x_11027 = (0);while(true){
if((x_11027 < n__4404__auto___11026))
{(a[x_11027] = (0));
{
var G__11028 = (x_11027 + (1));
x_11027 = G__11028;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11029 = (i + (1));
i = G__11029;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11033 = (function (flag,alt_flag,meta11034){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11034 = meta11034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11033.cljs$lang$type = true;
cljs.core.async.t11033.cljs$lang$ctorStr = "cljs.core.async/t11033";
cljs.core.async.t11033.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t11033");
});})(flag))
;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11035){var self__ = this;
var _11035__$1 = this;return self__.meta11034;
});})(flag))
;
cljs.core.async.t11033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11035,meta11034__$1){var self__ = this;
var _11035__$1 = this;return (new cljs.core.async.t11033(self__.flag,self__.alt_flag,meta11034__$1));
});})(flag))
;
cljs.core.async.__GT_t11033 = ((function (flag){
return (function __GT_t11033(flag__$1,alt_flag__$1,meta11034){return (new cljs.core.async.t11033(flag__$1,alt_flag__$1,meta11034));
});})(flag))
;
}
return (new cljs.core.async.t11033(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11039 = (function (cb,flag,alt_handler,meta11040){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11040 = meta11040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11039.cljs$lang$type = true;
cljs.core.async.t11039.cljs$lang$ctorStr = "cljs.core.async/t11039";
cljs.core.async.t11039.cljs$lang$ctorPrWriter = (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t11039");
});
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11041){var self__ = this;
var _11041__$1 = this;return self__.meta11040;
});
cljs.core.async.t11039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11041,meta11040__$1){var self__ = this;
var _11041__$1 = this;return (new cljs.core.async.t11039(self__.cb,self__.flag,self__.alt_handler,meta11040__$1));
});
cljs.core.async.__GT_t11039 = (function __GT_t11039(cb__$1,flag__$1,alt_handler__$1,meta11040){return (new cljs.core.async.t11039(cb__$1,flag__$1,alt_handler__$1,meta11040));
});
}
return (new cljs.core.async.t11039(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11042_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11042_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11043_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11043_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3548__auto__ = wport;if(cljs.core.truth_(or__3548__auto__))
{return or__3548__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11044 = (i + (1));
i = G__11044;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3548__auto__ = ret;if(cljs.core.truth_(or__3548__auto__))
{return or__3548__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3536__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3536__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3536__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11045){var map__11047 = p__11045;var map__11047__$1 = ((cljs.core.seq_QMARK_.call(null,map__11047))?cljs.core.apply.call(null,cljs.core.hash_map,map__11047):map__11047);var opts = map__11047__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11045 = null;if (arguments.length > 1) {
  p__11045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11045);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11048){
var ports = cljs.core.first(arglist__11048);
var p__11045 = cljs.core.rest(arglist__11048);
return alts_BANG___delegate(ports,p__11045);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8272__auto___11143 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___11143){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___11143){
return (function (state_11119){var state_val_11120 = (state_11119[(1)]);if((state_val_11120 === (7)))
{var inst_11115 = (state_11119[(2)]);var state_11119__$1 = state_11119;var statearr_11121_11144 = state_11119__$1;(statearr_11121_11144[(2)] = inst_11115);
(statearr_11121_11144[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (1)))
{var state_11119__$1 = state_11119;var statearr_11122_11145 = state_11119__$1;(statearr_11122_11145[(2)] = null);
(statearr_11122_11145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (4)))
{var inst_11098 = (state_11119[(7)]);var inst_11098__$1 = (state_11119[(2)]);var inst_11099 = (inst_11098__$1 == null);var state_11119__$1 = (function (){var statearr_11123 = state_11119;(statearr_11123[(7)] = inst_11098__$1);
return statearr_11123;
})();if(cljs.core.truth_(inst_11099))
{var statearr_11124_11146 = state_11119__$1;(statearr_11124_11146[(1)] = (5));
} else
{var statearr_11125_11147 = state_11119__$1;(statearr_11125_11147[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (13)))
{var state_11119__$1 = state_11119;var statearr_11126_11148 = state_11119__$1;(statearr_11126_11148[(2)] = null);
(statearr_11126_11148[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (6)))
{var inst_11098 = (state_11119[(7)]);var state_11119__$1 = state_11119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11119__$1,(11),to,inst_11098);
} else
{if((state_val_11120 === (3)))
{var inst_11117 = (state_11119[(2)]);var state_11119__$1 = state_11119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11119__$1,inst_11117);
} else
{if((state_val_11120 === (12)))
{var state_11119__$1 = state_11119;var statearr_11127_11149 = state_11119__$1;(statearr_11127_11149[(2)] = null);
(statearr_11127_11149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (2)))
{var state_11119__$1 = state_11119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11119__$1,(4),from);
} else
{if((state_val_11120 === (11)))
{var inst_11108 = (state_11119[(2)]);var state_11119__$1 = state_11119;if(cljs.core.truth_(inst_11108))
{var statearr_11128_11150 = state_11119__$1;(statearr_11128_11150[(1)] = (12));
} else
{var statearr_11129_11151 = state_11119__$1;(statearr_11129_11151[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (9)))
{var state_11119__$1 = state_11119;var statearr_11130_11152 = state_11119__$1;(statearr_11130_11152[(2)] = null);
(statearr_11130_11152[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (5)))
{var state_11119__$1 = state_11119;if(cljs.core.truth_(close_QMARK_))
{var statearr_11131_11153 = state_11119__$1;(statearr_11131_11153[(1)] = (8));
} else
{var statearr_11132_11154 = state_11119__$1;(statearr_11132_11154[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (14)))
{var inst_11113 = (state_11119[(2)]);var state_11119__$1 = state_11119;var statearr_11133_11155 = state_11119__$1;(statearr_11133_11155[(2)] = inst_11113);
(statearr_11133_11155[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (10)))
{var inst_11105 = (state_11119[(2)]);var state_11119__$1 = state_11119;var statearr_11134_11156 = state_11119__$1;(statearr_11134_11156[(2)] = inst_11105);
(statearr_11134_11156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11120 === (8)))
{var inst_11102 = cljs.core.async.close_BANG_.call(null,to);var state_11119__$1 = state_11119;var statearr_11135_11157 = state_11119__$1;(statearr_11135_11157[(2)] = inst_11102);
(statearr_11135_11157[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___11143))
;return ((function (switch__8207__auto__,c__8272__auto___11143){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11139 = [null,null,null,null,null,null,null,null];(statearr_11139[(0)] = state_machine__8208__auto__);
(statearr_11139[(1)] = (1));
return statearr_11139;
});
var state_machine__8208__auto____1 = (function (state_11119){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11119);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11140){if((e11140 instanceof Object))
{var ex__8211__auto__ = e11140;var statearr_11141_11158 = state_11119;(statearr_11141_11158[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11140;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11159 = state_11119;
state_11119 = G__11159;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11119){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___11143))
})();var state__8274__auto__ = (function (){var statearr_11142 = f__8273__auto__.call(null);(statearr_11142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___11143);
return statearr_11142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___11143))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11343){var vec__11344 = p__11343;var v = cljs.core.nth.call(null,vec__11344,(0),null);var p = cljs.core.nth.call(null,vec__11344,(1),null);var job = vec__11344;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__8272__auto___11526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___11526,res,vec__11344,v,p,job,jobs,results){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___11526,res,vec__11344,v,p,job,jobs,results){
return (function (state_11349){var state_val_11350 = (state_11349[(1)]);if((state_val_11350 === (2)))
{var inst_11346 = (state_11349[(2)]);var inst_11347 = cljs.core.async.close_BANG_.call(null,res);var state_11349__$1 = (function (){var statearr_11351 = state_11349;(statearr_11351[(7)] = inst_11346);
return statearr_11351;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11349__$1,inst_11347);
} else
{if((state_val_11350 === (1)))
{var state_11349__$1 = state_11349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11349__$1,(2),res,v);
} else
{return null;
}
}
});})(c__8272__auto___11526,res,vec__11344,v,p,job,jobs,results))
;return ((function (switch__8207__auto__,c__8272__auto___11526,res,vec__11344,v,p,job,jobs,results){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11355 = [null,null,null,null,null,null,null,null];(statearr_11355[(0)] = state_machine__8208__auto__);
(statearr_11355[(1)] = (1));
return statearr_11355;
});
var state_machine__8208__auto____1 = (function (state_11349){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11349);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11356){if((e11356 instanceof Object))
{var ex__8211__auto__ = e11356;var statearr_11357_11527 = state_11349;(statearr_11357_11527[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11349);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11356;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11528 = state_11349;
state_11349 = G__11528;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11349){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___11526,res,vec__11344,v,p,job,jobs,results))
})();var state__8274__auto__ = (function (){var statearr_11358 = f__8273__auto__.call(null);(statearr_11358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___11526);
return statearr_11358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___11526,res,vec__11344,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11359){var vec__11360 = p__11359;var v = cljs.core.nth.call(null,vec__11360,(0),null);var p = cljs.core.nth.call(null,vec__11360,(1),null);var job = vec__11360;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4404__auto___11529 = n;var __11530 = (0);while(true){
if((__11530 < n__4404__auto___11529))
{var G__11361_11531 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11361_11531) {
case "async":
var c__8272__auto___11533 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11530,c__8272__auto___11533,G__11361_11531,n__4404__auto___11529,jobs,results,process,async){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (__11530,c__8272__auto___11533,G__11361_11531,n__4404__auto___11529,jobs,results,process,async){
return (function (state_11374){var state_val_11375 = (state_11374[(1)]);if((state_val_11375 === (7)))
{var inst_11370 = (state_11374[(2)]);var state_11374__$1 = state_11374;var statearr_11376_11534 = state_11374__$1;(statearr_11376_11534[(2)] = inst_11370);
(statearr_11376_11534[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (6)))
{var state_11374__$1 = state_11374;var statearr_11377_11535 = state_11374__$1;(statearr_11377_11535[(2)] = null);
(statearr_11377_11535[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (5)))
{var state_11374__$1 = state_11374;var statearr_11378_11536 = state_11374__$1;(statearr_11378_11536[(2)] = null);
(statearr_11378_11536[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (4)))
{var inst_11364 = (state_11374[(2)]);var inst_11365 = async.call(null,inst_11364);var state_11374__$1 = state_11374;if(cljs.core.truth_(inst_11365))
{var statearr_11379_11537 = state_11374__$1;(statearr_11379_11537[(1)] = (5));
} else
{var statearr_11380_11538 = state_11374__$1;(statearr_11380_11538[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (3)))
{var inst_11372 = (state_11374[(2)]);var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11374__$1,inst_11372);
} else
{if((state_val_11375 === (2)))
{var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11374__$1,(4),jobs);
} else
{if((state_val_11375 === (1)))
{var state_11374__$1 = state_11374;var statearr_11381_11539 = state_11374__$1;(statearr_11381_11539[(2)] = null);
(statearr_11381_11539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11530,c__8272__auto___11533,G__11361_11531,n__4404__auto___11529,jobs,results,process,async))
;return ((function (__11530,switch__8207__auto__,c__8272__auto___11533,G__11361_11531,n__4404__auto___11529,jobs,results,process,async){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11385 = [null,null,null,null,null,null,null];(statearr_11385[(0)] = state_machine__8208__auto__);
(statearr_11385[(1)] = (1));
return statearr_11385;
});
var state_machine__8208__auto____1 = (function (state_11374){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11374);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11386){if((e11386 instanceof Object))
{var ex__8211__auto__ = e11386;var statearr_11387_11540 = state_11374;(statearr_11387_11540[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11541 = state_11374;
state_11374 = G__11541;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11374){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(__11530,switch__8207__auto__,c__8272__auto___11533,G__11361_11531,n__4404__auto___11529,jobs,results,process,async))
})();var state__8274__auto__ = (function (){var statearr_11388 = f__8273__auto__.call(null);(statearr_11388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___11533);
return statearr_11388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(__11530,c__8272__auto___11533,G__11361_11531,n__4404__auto___11529,jobs,results,process,async))
);

break;
case "compute":
var c__8272__auto___11542 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11530,c__8272__auto___11542,G__11361_11531,n__4404__auto___11529,jobs,results,process,async){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (__11530,c__8272__auto___11542,G__11361_11531,n__4404__auto___11529,jobs,results,process,async){
return (function (state_11401){var state_val_11402 = (state_11401[(1)]);if((state_val_11402 === (7)))
{var inst_11397 = (state_11401[(2)]);var state_11401__$1 = state_11401;var statearr_11403_11543 = state_11401__$1;(statearr_11403_11543[(2)] = inst_11397);
(statearr_11403_11543[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11402 === (6)))
{var state_11401__$1 = state_11401;var statearr_11404_11544 = state_11401__$1;(statearr_11404_11544[(2)] = null);
(statearr_11404_11544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11402 === (5)))
{var state_11401__$1 = state_11401;var statearr_11405_11545 = state_11401__$1;(statearr_11405_11545[(2)] = null);
(statearr_11405_11545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11402 === (4)))
{var inst_11391 = (state_11401[(2)]);var inst_11392 = process.call(null,inst_11391);var state_11401__$1 = state_11401;if(cljs.core.truth_(inst_11392))
{var statearr_11406_11546 = state_11401__$1;(statearr_11406_11546[(1)] = (5));
} else
{var statearr_11407_11547 = state_11401__$1;(statearr_11407_11547[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11402 === (3)))
{var inst_11399 = (state_11401[(2)]);var state_11401__$1 = state_11401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11401__$1,inst_11399);
} else
{if((state_val_11402 === (2)))
{var state_11401__$1 = state_11401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11401__$1,(4),jobs);
} else
{if((state_val_11402 === (1)))
{var state_11401__$1 = state_11401;var statearr_11408_11548 = state_11401__$1;(statearr_11408_11548[(2)] = null);
(statearr_11408_11548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__11530,c__8272__auto___11542,G__11361_11531,n__4404__auto___11529,jobs,results,process,async))
;return ((function (__11530,switch__8207__auto__,c__8272__auto___11542,G__11361_11531,n__4404__auto___11529,jobs,results,process,async){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11412 = [null,null,null,null,null,null,null];(statearr_11412[(0)] = state_machine__8208__auto__);
(statearr_11412[(1)] = (1));
return statearr_11412;
});
var state_machine__8208__auto____1 = (function (state_11401){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11401);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11413){if((e11413 instanceof Object))
{var ex__8211__auto__ = e11413;var statearr_11414_11549 = state_11401;(statearr_11414_11549[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11401);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11413;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11550 = state_11401;
state_11401 = G__11550;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11401){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(__11530,switch__8207__auto__,c__8272__auto___11542,G__11361_11531,n__4404__auto___11529,jobs,results,process,async))
})();var state__8274__auto__ = (function (){var statearr_11415 = f__8273__auto__.call(null);(statearr_11415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___11542);
return statearr_11415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(__11530,c__8272__auto___11542,G__11361_11531,n__4404__auto___11529,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11551 = (__11530 + (1));
__11530 = G__11551;
continue;
}
} else
{}
break;
}
var c__8272__auto___11552 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___11552,jobs,results,process,async){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___11552,jobs,results,process,async){
return (function (state_11437){var state_val_11438 = (state_11437[(1)]);if((state_val_11438 === (9)))
{var inst_11430 = (state_11437[(2)]);var state_11437__$1 = (function (){var statearr_11439 = state_11437;(statearr_11439[(7)] = inst_11430);
return statearr_11439;
})();var statearr_11440_11553 = state_11437__$1;(statearr_11440_11553[(2)] = null);
(statearr_11440_11553[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11438 === (8)))
{var inst_11423 = (state_11437[(8)]);var inst_11428 = (state_11437[(2)]);var state_11437__$1 = (function (){var statearr_11441 = state_11437;(statearr_11441[(9)] = inst_11428);
return statearr_11441;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11437__$1,(9),results,inst_11423);
} else
{if((state_val_11438 === (7)))
{var inst_11433 = (state_11437[(2)]);var state_11437__$1 = state_11437;var statearr_11442_11554 = state_11437__$1;(statearr_11442_11554[(2)] = inst_11433);
(statearr_11442_11554[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11438 === (6)))
{var inst_11418 = (state_11437[(10)]);var inst_11423 = (state_11437[(8)]);var inst_11423__$1 = cljs.core.async.chan.call(null,(1));var inst_11424 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11425 = [inst_11418,inst_11423__$1];var inst_11426 = (new cljs.core.PersistentVector(null,2,(5),inst_11424,inst_11425,null));var state_11437__$1 = (function (){var statearr_11443 = state_11437;(statearr_11443[(8)] = inst_11423__$1);
return statearr_11443;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11437__$1,(8),jobs,inst_11426);
} else
{if((state_val_11438 === (5)))
{var inst_11421 = cljs.core.async.close_BANG_.call(null,jobs);var state_11437__$1 = state_11437;var statearr_11444_11555 = state_11437__$1;(statearr_11444_11555[(2)] = inst_11421);
(statearr_11444_11555[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11438 === (4)))
{var inst_11418 = (state_11437[(10)]);var inst_11418__$1 = (state_11437[(2)]);var inst_11419 = (inst_11418__$1 == null);var state_11437__$1 = (function (){var statearr_11445 = state_11437;(statearr_11445[(10)] = inst_11418__$1);
return statearr_11445;
})();if(cljs.core.truth_(inst_11419))
{var statearr_11446_11556 = state_11437__$1;(statearr_11446_11556[(1)] = (5));
} else
{var statearr_11447_11557 = state_11437__$1;(statearr_11447_11557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11438 === (3)))
{var inst_11435 = (state_11437[(2)]);var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11437__$1,inst_11435);
} else
{if((state_val_11438 === (2)))
{var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11437__$1,(4),from);
} else
{if((state_val_11438 === (1)))
{var state_11437__$1 = state_11437;var statearr_11448_11558 = state_11437__$1;(statearr_11448_11558[(2)] = null);
(statearr_11448_11558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___11552,jobs,results,process,async))
;return ((function (switch__8207__auto__,c__8272__auto___11552,jobs,results,process,async){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11452 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11452[(0)] = state_machine__8208__auto__);
(statearr_11452[(1)] = (1));
return statearr_11452;
});
var state_machine__8208__auto____1 = (function (state_11437){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11437);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11453){if((e11453 instanceof Object))
{var ex__8211__auto__ = e11453;var statearr_11454_11559 = state_11437;(statearr_11454_11559[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11453;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11560 = state_11437;
state_11437 = G__11560;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11437){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___11552,jobs,results,process,async))
})();var state__8274__auto__ = (function (){var statearr_11455 = f__8273__auto__.call(null);(statearr_11455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___11552);
return statearr_11455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___11552,jobs,results,process,async))
);
var c__8272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto__,jobs,results,process,async){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto__,jobs,results,process,async){
return (function (state_11493){var state_val_11494 = (state_11493[(1)]);if((state_val_11494 === (7)))
{var inst_11489 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11495_11561 = state_11493__$1;(statearr_11495_11561[(2)] = inst_11489);
(statearr_11495_11561[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (20)))
{var state_11493__$1 = state_11493;var statearr_11496_11562 = state_11493__$1;(statearr_11496_11562[(2)] = null);
(statearr_11496_11562[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (1)))
{var state_11493__$1 = state_11493;var statearr_11497_11563 = state_11493__$1;(statearr_11497_11563[(2)] = null);
(statearr_11497_11563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (4)))
{var inst_11458 = (state_11493[(7)]);var inst_11458__$1 = (state_11493[(2)]);var inst_11459 = (inst_11458__$1 == null);var state_11493__$1 = (function (){var statearr_11498 = state_11493;(statearr_11498[(7)] = inst_11458__$1);
return statearr_11498;
})();if(cljs.core.truth_(inst_11459))
{var statearr_11499_11564 = state_11493__$1;(statearr_11499_11564[(1)] = (5));
} else
{var statearr_11500_11565 = state_11493__$1;(statearr_11500_11565[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (15)))
{var inst_11471 = (state_11493[(8)]);var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11493__$1,(18),to,inst_11471);
} else
{if((state_val_11494 === (21)))
{var inst_11484 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11501_11566 = state_11493__$1;(statearr_11501_11566[(2)] = inst_11484);
(statearr_11501_11566[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (13)))
{var inst_11486 = (state_11493[(2)]);var state_11493__$1 = (function (){var statearr_11502 = state_11493;(statearr_11502[(9)] = inst_11486);
return statearr_11502;
})();var statearr_11503_11567 = state_11493__$1;(statearr_11503_11567[(2)] = null);
(statearr_11503_11567[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (6)))
{var inst_11458 = (state_11493[(7)]);var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11493__$1,(11),inst_11458);
} else
{if((state_val_11494 === (17)))
{var inst_11479 = (state_11493[(2)]);var state_11493__$1 = state_11493;if(cljs.core.truth_(inst_11479))
{var statearr_11504_11568 = state_11493__$1;(statearr_11504_11568[(1)] = (19));
} else
{var statearr_11505_11569 = state_11493__$1;(statearr_11505_11569[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (3)))
{var inst_11491 = (state_11493[(2)]);var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11493__$1,inst_11491);
} else
{if((state_val_11494 === (12)))
{var inst_11468 = (state_11493[(10)]);var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11493__$1,(14),inst_11468);
} else
{if((state_val_11494 === (2)))
{var state_11493__$1 = state_11493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11493__$1,(4),results);
} else
{if((state_val_11494 === (19)))
{var state_11493__$1 = state_11493;var statearr_11506_11570 = state_11493__$1;(statearr_11506_11570[(2)] = null);
(statearr_11506_11570[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (11)))
{var inst_11468 = (state_11493[(2)]);var state_11493__$1 = (function (){var statearr_11507 = state_11493;(statearr_11507[(10)] = inst_11468);
return statearr_11507;
})();var statearr_11508_11571 = state_11493__$1;(statearr_11508_11571[(2)] = null);
(statearr_11508_11571[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (9)))
{var state_11493__$1 = state_11493;var statearr_11509_11572 = state_11493__$1;(statearr_11509_11572[(2)] = null);
(statearr_11509_11572[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (5)))
{var state_11493__$1 = state_11493;if(cljs.core.truth_(close_QMARK_))
{var statearr_11510_11573 = state_11493__$1;(statearr_11510_11573[(1)] = (8));
} else
{var statearr_11511_11574 = state_11493__$1;(statearr_11511_11574[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (14)))
{var inst_11471 = (state_11493[(8)]);var inst_11473 = (state_11493[(11)]);var inst_11471__$1 = (state_11493[(2)]);var inst_11472 = (inst_11471__$1 == null);var inst_11473__$1 = cljs.core.not.call(null,inst_11472);var state_11493__$1 = (function (){var statearr_11512 = state_11493;(statearr_11512[(8)] = inst_11471__$1);
(statearr_11512[(11)] = inst_11473__$1);
return statearr_11512;
})();if(inst_11473__$1)
{var statearr_11513_11575 = state_11493__$1;(statearr_11513_11575[(1)] = (15));
} else
{var statearr_11514_11576 = state_11493__$1;(statearr_11514_11576[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (16)))
{var inst_11473 = (state_11493[(11)]);var state_11493__$1 = state_11493;var statearr_11515_11577 = state_11493__$1;(statearr_11515_11577[(2)] = inst_11473);
(statearr_11515_11577[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (10)))
{var inst_11465 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11516_11578 = state_11493__$1;(statearr_11516_11578[(2)] = inst_11465);
(statearr_11516_11578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (18)))
{var inst_11476 = (state_11493[(2)]);var state_11493__$1 = state_11493;var statearr_11517_11579 = state_11493__$1;(statearr_11517_11579[(2)] = inst_11476);
(statearr_11517_11579[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11494 === (8)))
{var inst_11462 = cljs.core.async.close_BANG_.call(null,to);var state_11493__$1 = state_11493;var statearr_11518_11580 = state_11493__$1;(statearr_11518_11580[(2)] = inst_11462);
(statearr_11518_11580[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto__,jobs,results,process,async))
;return ((function (switch__8207__auto__,c__8272__auto__,jobs,results,process,async){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11522 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11522[(0)] = state_machine__8208__auto__);
(statearr_11522[(1)] = (1));
return statearr_11522;
});
var state_machine__8208__auto____1 = (function (state_11493){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11493);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11523){if((e11523 instanceof Object))
{var ex__8211__auto__ = e11523;var statearr_11524_11581 = state_11493;(statearr_11524_11581[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11582 = state_11493;
state_11493 = G__11582;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11493){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto__,jobs,results,process,async))
})();var state__8274__auto__ = (function (){var statearr_11525 = f__8273__auto__.call(null);(statearr_11525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_11525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto__,jobs,results,process,async))
);
return c__8272__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8272__auto___11683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___11683,tc,fc){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___11683,tc,fc){
return (function (state_11658){var state_val_11659 = (state_11658[(1)]);if((state_val_11659 === (7)))
{var inst_11654 = (state_11658[(2)]);var state_11658__$1 = state_11658;var statearr_11660_11684 = state_11658__$1;(statearr_11660_11684[(2)] = inst_11654);
(statearr_11660_11684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (1)))
{var state_11658__$1 = state_11658;var statearr_11661_11685 = state_11658__$1;(statearr_11661_11685[(2)] = null);
(statearr_11661_11685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (4)))
{var inst_11635 = (state_11658[(7)]);var inst_11635__$1 = (state_11658[(2)]);var inst_11636 = (inst_11635__$1 == null);var state_11658__$1 = (function (){var statearr_11662 = state_11658;(statearr_11662[(7)] = inst_11635__$1);
return statearr_11662;
})();if(cljs.core.truth_(inst_11636))
{var statearr_11663_11686 = state_11658__$1;(statearr_11663_11686[(1)] = (5));
} else
{var statearr_11664_11687 = state_11658__$1;(statearr_11664_11687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (13)))
{var state_11658__$1 = state_11658;var statearr_11665_11688 = state_11658__$1;(statearr_11665_11688[(2)] = null);
(statearr_11665_11688[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (6)))
{var inst_11635 = (state_11658[(7)]);var inst_11641 = p.call(null,inst_11635);var state_11658__$1 = state_11658;if(cljs.core.truth_(inst_11641))
{var statearr_11666_11689 = state_11658__$1;(statearr_11666_11689[(1)] = (9));
} else
{var statearr_11667_11690 = state_11658__$1;(statearr_11667_11690[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (3)))
{var inst_11656 = (state_11658[(2)]);var state_11658__$1 = state_11658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11658__$1,inst_11656);
} else
{if((state_val_11659 === (12)))
{var state_11658__$1 = state_11658;var statearr_11668_11691 = state_11658__$1;(statearr_11668_11691[(2)] = null);
(statearr_11668_11691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (2)))
{var state_11658__$1 = state_11658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11658__$1,(4),ch);
} else
{if((state_val_11659 === (11)))
{var inst_11635 = (state_11658[(7)]);var inst_11645 = (state_11658[(2)]);var state_11658__$1 = state_11658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11658__$1,(8),inst_11645,inst_11635);
} else
{if((state_val_11659 === (9)))
{var state_11658__$1 = state_11658;var statearr_11669_11692 = state_11658__$1;(statearr_11669_11692[(2)] = tc);
(statearr_11669_11692[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (5)))
{var inst_11638 = cljs.core.async.close_BANG_.call(null,tc);var inst_11639 = cljs.core.async.close_BANG_.call(null,fc);var state_11658__$1 = (function (){var statearr_11670 = state_11658;(statearr_11670[(8)] = inst_11638);
return statearr_11670;
})();var statearr_11671_11693 = state_11658__$1;(statearr_11671_11693[(2)] = inst_11639);
(statearr_11671_11693[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (14)))
{var inst_11652 = (state_11658[(2)]);var state_11658__$1 = state_11658;var statearr_11672_11694 = state_11658__$1;(statearr_11672_11694[(2)] = inst_11652);
(statearr_11672_11694[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (10)))
{var state_11658__$1 = state_11658;var statearr_11673_11695 = state_11658__$1;(statearr_11673_11695[(2)] = fc);
(statearr_11673_11695[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11659 === (8)))
{var inst_11647 = (state_11658[(2)]);var state_11658__$1 = state_11658;if(cljs.core.truth_(inst_11647))
{var statearr_11674_11696 = state_11658__$1;(statearr_11674_11696[(1)] = (12));
} else
{var statearr_11675_11697 = state_11658__$1;(statearr_11675_11697[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___11683,tc,fc))
;return ((function (switch__8207__auto__,c__8272__auto___11683,tc,fc){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11679 = [null,null,null,null,null,null,null,null,null];(statearr_11679[(0)] = state_machine__8208__auto__);
(statearr_11679[(1)] = (1));
return statearr_11679;
});
var state_machine__8208__auto____1 = (function (state_11658){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11658);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11680){if((e11680 instanceof Object))
{var ex__8211__auto__ = e11680;var statearr_11681_11698 = state_11658;(statearr_11681_11698[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11699 = state_11658;
state_11658 = G__11699;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11658){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___11683,tc,fc))
})();var state__8274__auto__ = (function (){var statearr_11682 = f__8273__auto__.call(null);(statearr_11682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___11683);
return statearr_11682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___11683,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto__){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto__){
return (function (state_11746){var state_val_11747 = (state_11746[(1)]);if((state_val_11747 === (7)))
{var inst_11742 = (state_11746[(2)]);var state_11746__$1 = state_11746;var statearr_11748_11764 = state_11746__$1;(statearr_11748_11764[(2)] = inst_11742);
(statearr_11748_11764[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11747 === (6)))
{var inst_11735 = (state_11746[(7)]);var inst_11732 = (state_11746[(8)]);var inst_11739 = f.call(null,inst_11732,inst_11735);var inst_11732__$1 = inst_11739;var state_11746__$1 = (function (){var statearr_11749 = state_11746;(statearr_11749[(8)] = inst_11732__$1);
return statearr_11749;
})();var statearr_11750_11765 = state_11746__$1;(statearr_11750_11765[(2)] = null);
(statearr_11750_11765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11747 === (5)))
{var inst_11732 = (state_11746[(8)]);var state_11746__$1 = state_11746;var statearr_11751_11766 = state_11746__$1;(statearr_11751_11766[(2)] = inst_11732);
(statearr_11751_11766[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11747 === (4)))
{var inst_11735 = (state_11746[(7)]);var inst_11735__$1 = (state_11746[(2)]);var inst_11736 = (inst_11735__$1 == null);var state_11746__$1 = (function (){var statearr_11752 = state_11746;(statearr_11752[(7)] = inst_11735__$1);
return statearr_11752;
})();if(cljs.core.truth_(inst_11736))
{var statearr_11753_11767 = state_11746__$1;(statearr_11753_11767[(1)] = (5));
} else
{var statearr_11754_11768 = state_11746__$1;(statearr_11754_11768[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11747 === (3)))
{var inst_11744 = (state_11746[(2)]);var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11746__$1,inst_11744);
} else
{if((state_val_11747 === (2)))
{var state_11746__$1 = state_11746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11746__$1,(4),ch);
} else
{if((state_val_11747 === (1)))
{var inst_11732 = init;var state_11746__$1 = (function (){var statearr_11755 = state_11746;(statearr_11755[(8)] = inst_11732);
return statearr_11755;
})();var statearr_11756_11769 = state_11746__$1;(statearr_11756_11769[(2)] = null);
(statearr_11756_11769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__8272__auto__))
;return ((function (switch__8207__auto__,c__8272__auto__){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11760 = [null,null,null,null,null,null,null,null,null];(statearr_11760[(0)] = state_machine__8208__auto__);
(statearr_11760[(1)] = (1));
return statearr_11760;
});
var state_machine__8208__auto____1 = (function (state_11746){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11746);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11761){if((e11761 instanceof Object))
{var ex__8211__auto__ = e11761;var statearr_11762_11770 = state_11746;(statearr_11762_11770[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11771 = state_11746;
state_11746 = G__11771;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11746){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto__))
})();var state__8274__auto__ = (function (){var statearr_11763 = f__8273__auto__.call(null);(statearr_11763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_11763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto__))
);
return c__8272__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto__){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto__){
return (function (state_11845){var state_val_11846 = (state_11845[(1)]);if((state_val_11846 === (7)))
{var inst_11827 = (state_11845[(2)]);var state_11845__$1 = state_11845;var statearr_11847_11870 = state_11845__$1;(statearr_11847_11870[(2)] = inst_11827);
(statearr_11847_11870[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (1)))
{var inst_11821 = cljs.core.seq.call(null,coll);var inst_11822 = inst_11821;var state_11845__$1 = (function (){var statearr_11848 = state_11845;(statearr_11848[(7)] = inst_11822);
return statearr_11848;
})();var statearr_11849_11871 = state_11845__$1;(statearr_11849_11871[(2)] = null);
(statearr_11849_11871[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (4)))
{var inst_11822 = (state_11845[(7)]);var inst_11825 = cljs.core.first.call(null,inst_11822);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,(7),ch,inst_11825);
} else
{if((state_val_11846 === (13)))
{var inst_11839 = (state_11845[(2)]);var state_11845__$1 = state_11845;var statearr_11850_11872 = state_11845__$1;(statearr_11850_11872[(2)] = inst_11839);
(statearr_11850_11872[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (6)))
{var inst_11830 = (state_11845[(2)]);var state_11845__$1 = state_11845;if(cljs.core.truth_(inst_11830))
{var statearr_11851_11873 = state_11845__$1;(statearr_11851_11873[(1)] = (8));
} else
{var statearr_11852_11874 = state_11845__$1;(statearr_11852_11874[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (3)))
{var inst_11843 = (state_11845[(2)]);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else
{if((state_val_11846 === (12)))
{var state_11845__$1 = state_11845;var statearr_11853_11875 = state_11845__$1;(statearr_11853_11875[(2)] = null);
(statearr_11853_11875[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (2)))
{var inst_11822 = (state_11845[(7)]);var state_11845__$1 = state_11845;if(cljs.core.truth_(inst_11822))
{var statearr_11854_11876 = state_11845__$1;(statearr_11854_11876[(1)] = (4));
} else
{var statearr_11855_11877 = state_11845__$1;(statearr_11855_11877[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (11)))
{var inst_11836 = cljs.core.async.close_BANG_.call(null,ch);var state_11845__$1 = state_11845;var statearr_11856_11878 = state_11845__$1;(statearr_11856_11878[(2)] = inst_11836);
(statearr_11856_11878[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (9)))
{var state_11845__$1 = state_11845;if(cljs.core.truth_(close_QMARK_))
{var statearr_11857_11879 = state_11845__$1;(statearr_11857_11879[(1)] = (11));
} else
{var statearr_11858_11880 = state_11845__$1;(statearr_11858_11880[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (5)))
{var inst_11822 = (state_11845[(7)]);var state_11845__$1 = state_11845;var statearr_11859_11881 = state_11845__$1;(statearr_11859_11881[(2)] = inst_11822);
(statearr_11859_11881[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (10)))
{var inst_11841 = (state_11845[(2)]);var state_11845__$1 = state_11845;var statearr_11860_11882 = state_11845__$1;(statearr_11860_11882[(2)] = inst_11841);
(statearr_11860_11882[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (8)))
{var inst_11822 = (state_11845[(7)]);var inst_11832 = cljs.core.next.call(null,inst_11822);var inst_11822__$1 = inst_11832;var state_11845__$1 = (function (){var statearr_11861 = state_11845;(statearr_11861[(7)] = inst_11822__$1);
return statearr_11861;
})();var statearr_11862_11883 = state_11845__$1;(statearr_11862_11883[(2)] = null);
(statearr_11862_11883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto__))
;return ((function (switch__8207__auto__,c__8272__auto__){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_11866 = [null,null,null,null,null,null,null,null];(statearr_11866[(0)] = state_machine__8208__auto__);
(statearr_11866[(1)] = (1));
return statearr_11866;
});
var state_machine__8208__auto____1 = (function (state_11845){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_11845);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e11867){if((e11867 instanceof Object))
{var ex__8211__auto__ = e11867;var statearr_11868_11884 = state_11845;(statearr_11868_11884[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11867;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11885 = state_11845;
state_11845 = G__11885;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto__))
})();var state__8274__auto__ = (function (){var statearr_11869 = f__8273__auto__.call(null);(statearr_11869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_11869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto__))
);
return c__8272__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11887 = {};return obj11887;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3536__auto__ = _;if(and__3536__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3536__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4175__auto__ = (((_ == null))?null:_);return (function (){var or__3548__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11889 = {};return obj11889;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12111 = (function (cs,ch,mult,meta12112){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12112 = meta12112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12111.cljs$lang$type = true;
cljs.core.async.t12111.cljs$lang$ctorStr = "cljs.core.async/t12111";
cljs.core.async.t12111.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t12111");
});})(cs))
;
cljs.core.async.t12111.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12111.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12111.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12111.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12111.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12113){var self__ = this;
var _12113__$1 = this;return self__.meta12112;
});})(cs))
;
cljs.core.async.t12111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12113,meta12112__$1){var self__ = this;
var _12113__$1 = this;return (new cljs.core.async.t12111(self__.cs,self__.ch,self__.mult,meta12112__$1));
});})(cs))
;
cljs.core.async.__GT_t12111 = ((function (cs){
return (function __GT_t12111(cs__$1,ch__$1,mult__$1,meta12112){return (new cljs.core.async.t12111(cs__$1,ch__$1,mult__$1,meta12112));
});})(cs))
;
}
return (new cljs.core.async.t12111(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8272__auto___12332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___12332,cs,m,dchan,dctr,done){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___12332,cs,m,dchan,dctr,done){
return (function (state_12244){var state_val_12245 = (state_12244[(1)]);if((state_val_12245 === (7)))
{var inst_12240 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12246_12333 = state_12244__$1;(statearr_12246_12333[(2)] = inst_12240);
(statearr_12246_12333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (20)))
{var inst_12145 = (state_12244[(7)]);var inst_12155 = cljs.core.first.call(null,inst_12145);var inst_12156 = cljs.core.nth.call(null,inst_12155,(0),null);var inst_12157 = cljs.core.nth.call(null,inst_12155,(1),null);var state_12244__$1 = (function (){var statearr_12247 = state_12244;(statearr_12247[(8)] = inst_12156);
return statearr_12247;
})();if(cljs.core.truth_(inst_12157))
{var statearr_12248_12334 = state_12244__$1;(statearr_12248_12334[(1)] = (22));
} else
{var statearr_12249_12335 = state_12244__$1;(statearr_12249_12335[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (27)))
{var inst_12192 = (state_12244[(9)]);var inst_12187 = (state_12244[(10)]);var inst_12116 = (state_12244[(11)]);var inst_12185 = (state_12244[(12)]);var inst_12192__$1 = cljs.core._nth.call(null,inst_12185,inst_12187);var inst_12193 = cljs.core.async.put_BANG_.call(null,inst_12192__$1,inst_12116,done);var state_12244__$1 = (function (){var statearr_12250 = state_12244;(statearr_12250[(9)] = inst_12192__$1);
return statearr_12250;
})();if(cljs.core.truth_(inst_12193))
{var statearr_12251_12336 = state_12244__$1;(statearr_12251_12336[(1)] = (30));
} else
{var statearr_12252_12337 = state_12244__$1;(statearr_12252_12337[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (1)))
{var state_12244__$1 = state_12244;var statearr_12253_12338 = state_12244__$1;(statearr_12253_12338[(2)] = null);
(statearr_12253_12338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (24)))
{var inst_12145 = (state_12244[(7)]);var inst_12162 = (state_12244[(2)]);var inst_12163 = cljs.core.next.call(null,inst_12145);var inst_12125 = inst_12163;var inst_12126 = null;var inst_12127 = (0);var inst_12128 = (0);var state_12244__$1 = (function (){var statearr_12254 = state_12244;(statearr_12254[(13)] = inst_12128);
(statearr_12254[(14)] = inst_12125);
(statearr_12254[(15)] = inst_12126);
(statearr_12254[(16)] = inst_12127);
(statearr_12254[(17)] = inst_12162);
return statearr_12254;
})();var statearr_12255_12339 = state_12244__$1;(statearr_12255_12339[(2)] = null);
(statearr_12255_12339[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (39)))
{var state_12244__$1 = state_12244;var statearr_12259_12340 = state_12244__$1;(statearr_12259_12340[(2)] = null);
(statearr_12259_12340[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (4)))
{var inst_12116 = (state_12244[(11)]);var inst_12116__$1 = (state_12244[(2)]);var inst_12117 = (inst_12116__$1 == null);var state_12244__$1 = (function (){var statearr_12260 = state_12244;(statearr_12260[(11)] = inst_12116__$1);
return statearr_12260;
})();if(cljs.core.truth_(inst_12117))
{var statearr_12261_12341 = state_12244__$1;(statearr_12261_12341[(1)] = (5));
} else
{var statearr_12262_12342 = state_12244__$1;(statearr_12262_12342[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (15)))
{var inst_12128 = (state_12244[(13)]);var inst_12125 = (state_12244[(14)]);var inst_12126 = (state_12244[(15)]);var inst_12127 = (state_12244[(16)]);var inst_12141 = (state_12244[(2)]);var inst_12142 = (inst_12128 + (1));var tmp12256 = inst_12125;var tmp12257 = inst_12126;var tmp12258 = inst_12127;var inst_12125__$1 = tmp12256;var inst_12126__$1 = tmp12257;var inst_12127__$1 = tmp12258;var inst_12128__$1 = inst_12142;var state_12244__$1 = (function (){var statearr_12263 = state_12244;(statearr_12263[(13)] = inst_12128__$1);
(statearr_12263[(14)] = inst_12125__$1);
(statearr_12263[(15)] = inst_12126__$1);
(statearr_12263[(18)] = inst_12141);
(statearr_12263[(16)] = inst_12127__$1);
return statearr_12263;
})();var statearr_12264_12343 = state_12244__$1;(statearr_12264_12343[(2)] = null);
(statearr_12264_12343[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (21)))
{var inst_12166 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12268_12344 = state_12244__$1;(statearr_12268_12344[(2)] = inst_12166);
(statearr_12268_12344[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (31)))
{var inst_12192 = (state_12244[(9)]);var inst_12196 = done.call(null,null);var inst_12197 = cljs.core.async.untap_STAR_.call(null,m,inst_12192);var state_12244__$1 = (function (){var statearr_12269 = state_12244;(statearr_12269[(19)] = inst_12196);
return statearr_12269;
})();var statearr_12270_12345 = state_12244__$1;(statearr_12270_12345[(2)] = inst_12197);
(statearr_12270_12345[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (32)))
{var inst_12186 = (state_12244[(20)]);var inst_12187 = (state_12244[(10)]);var inst_12185 = (state_12244[(12)]);var inst_12184 = (state_12244[(21)]);var inst_12199 = (state_12244[(2)]);var inst_12200 = (inst_12187 + (1));var tmp12265 = inst_12186;var tmp12266 = inst_12185;var tmp12267 = inst_12184;var inst_12184__$1 = tmp12267;var inst_12185__$1 = tmp12266;var inst_12186__$1 = tmp12265;var inst_12187__$1 = inst_12200;var state_12244__$1 = (function (){var statearr_12271 = state_12244;(statearr_12271[(20)] = inst_12186__$1);
(statearr_12271[(22)] = inst_12199);
(statearr_12271[(10)] = inst_12187__$1);
(statearr_12271[(12)] = inst_12185__$1);
(statearr_12271[(21)] = inst_12184__$1);
return statearr_12271;
})();var statearr_12272_12346 = state_12244__$1;(statearr_12272_12346[(2)] = null);
(statearr_12272_12346[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (40)))
{var inst_12212 = (state_12244[(23)]);var inst_12216 = done.call(null,null);var inst_12217 = cljs.core.async.untap_STAR_.call(null,m,inst_12212);var state_12244__$1 = (function (){var statearr_12273 = state_12244;(statearr_12273[(24)] = inst_12216);
return statearr_12273;
})();var statearr_12274_12347 = state_12244__$1;(statearr_12274_12347[(2)] = inst_12217);
(statearr_12274_12347[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (33)))
{var inst_12203 = (state_12244[(25)]);var inst_12205 = cljs.core.chunked_seq_QMARK_.call(null,inst_12203);var state_12244__$1 = state_12244;if(inst_12205)
{var statearr_12275_12348 = state_12244__$1;(statearr_12275_12348[(1)] = (36));
} else
{var statearr_12276_12349 = state_12244__$1;(statearr_12276_12349[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (13)))
{var inst_12135 = (state_12244[(26)]);var inst_12138 = cljs.core.async.close_BANG_.call(null,inst_12135);var state_12244__$1 = state_12244;var statearr_12277_12350 = state_12244__$1;(statearr_12277_12350[(2)] = inst_12138);
(statearr_12277_12350[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (22)))
{var inst_12156 = (state_12244[(8)]);var inst_12159 = cljs.core.async.close_BANG_.call(null,inst_12156);var state_12244__$1 = state_12244;var statearr_12278_12351 = state_12244__$1;(statearr_12278_12351[(2)] = inst_12159);
(statearr_12278_12351[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (36)))
{var inst_12203 = (state_12244[(25)]);var inst_12207 = cljs.core.chunk_first.call(null,inst_12203);var inst_12208 = cljs.core.chunk_rest.call(null,inst_12203);var inst_12209 = cljs.core.count.call(null,inst_12207);var inst_12184 = inst_12208;var inst_12185 = inst_12207;var inst_12186 = inst_12209;var inst_12187 = (0);var state_12244__$1 = (function (){var statearr_12279 = state_12244;(statearr_12279[(20)] = inst_12186);
(statearr_12279[(10)] = inst_12187);
(statearr_12279[(12)] = inst_12185);
(statearr_12279[(21)] = inst_12184);
return statearr_12279;
})();var statearr_12280_12352 = state_12244__$1;(statearr_12280_12352[(2)] = null);
(statearr_12280_12352[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (41)))
{var inst_12203 = (state_12244[(25)]);var inst_12219 = (state_12244[(2)]);var inst_12220 = cljs.core.next.call(null,inst_12203);var inst_12184 = inst_12220;var inst_12185 = null;var inst_12186 = (0);var inst_12187 = (0);var state_12244__$1 = (function (){var statearr_12281 = state_12244;(statearr_12281[(20)] = inst_12186);
(statearr_12281[(10)] = inst_12187);
(statearr_12281[(12)] = inst_12185);
(statearr_12281[(21)] = inst_12184);
(statearr_12281[(27)] = inst_12219);
return statearr_12281;
})();var statearr_12282_12353 = state_12244__$1;(statearr_12282_12353[(2)] = null);
(statearr_12282_12353[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (43)))
{var state_12244__$1 = state_12244;var statearr_12283_12354 = state_12244__$1;(statearr_12283_12354[(2)] = null);
(statearr_12283_12354[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (29)))
{var inst_12228 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12284_12355 = state_12244__$1;(statearr_12284_12355[(2)] = inst_12228);
(statearr_12284_12355[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (44)))
{var inst_12237 = (state_12244[(2)]);var state_12244__$1 = (function (){var statearr_12285 = state_12244;(statearr_12285[(28)] = inst_12237);
return statearr_12285;
})();var statearr_12286_12356 = state_12244__$1;(statearr_12286_12356[(2)] = null);
(statearr_12286_12356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (6)))
{var inst_12176 = (state_12244[(29)]);var inst_12175 = cljs.core.deref.call(null,cs);var inst_12176__$1 = cljs.core.keys.call(null,inst_12175);var inst_12177 = cljs.core.count.call(null,inst_12176__$1);var inst_12178 = cljs.core.reset_BANG_.call(null,dctr,inst_12177);var inst_12183 = cljs.core.seq.call(null,inst_12176__$1);var inst_12184 = inst_12183;var inst_12185 = null;var inst_12186 = (0);var inst_12187 = (0);var state_12244__$1 = (function (){var statearr_12287 = state_12244;(statearr_12287[(20)] = inst_12186);
(statearr_12287[(10)] = inst_12187);
(statearr_12287[(12)] = inst_12185);
(statearr_12287[(30)] = inst_12178);
(statearr_12287[(21)] = inst_12184);
(statearr_12287[(29)] = inst_12176__$1);
return statearr_12287;
})();var statearr_12288_12357 = state_12244__$1;(statearr_12288_12357[(2)] = null);
(statearr_12288_12357[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (28)))
{var inst_12184 = (state_12244[(21)]);var inst_12203 = (state_12244[(25)]);var inst_12203__$1 = cljs.core.seq.call(null,inst_12184);var state_12244__$1 = (function (){var statearr_12289 = state_12244;(statearr_12289[(25)] = inst_12203__$1);
return statearr_12289;
})();if(inst_12203__$1)
{var statearr_12290_12358 = state_12244__$1;(statearr_12290_12358[(1)] = (33));
} else
{var statearr_12291_12359 = state_12244__$1;(statearr_12291_12359[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (25)))
{var inst_12186 = (state_12244[(20)]);var inst_12187 = (state_12244[(10)]);var inst_12189 = (inst_12187 < inst_12186);var inst_12190 = inst_12189;var state_12244__$1 = state_12244;if(cljs.core.truth_(inst_12190))
{var statearr_12292_12360 = state_12244__$1;(statearr_12292_12360[(1)] = (27));
} else
{var statearr_12293_12361 = state_12244__$1;(statearr_12293_12361[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (34)))
{var state_12244__$1 = state_12244;var statearr_12294_12362 = state_12244__$1;(statearr_12294_12362[(2)] = null);
(statearr_12294_12362[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (17)))
{var state_12244__$1 = state_12244;var statearr_12295_12363 = state_12244__$1;(statearr_12295_12363[(2)] = null);
(statearr_12295_12363[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (3)))
{var inst_12242 = (state_12244[(2)]);var state_12244__$1 = state_12244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12244__$1,inst_12242);
} else
{if((state_val_12245 === (12)))
{var inst_12171 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12296_12364 = state_12244__$1;(statearr_12296_12364[(2)] = inst_12171);
(statearr_12296_12364[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (2)))
{var state_12244__$1 = state_12244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12244__$1,(4),ch);
} else
{if((state_val_12245 === (23)))
{var state_12244__$1 = state_12244;var statearr_12297_12365 = state_12244__$1;(statearr_12297_12365[(2)] = null);
(statearr_12297_12365[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (35)))
{var inst_12226 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12298_12366 = state_12244__$1;(statearr_12298_12366[(2)] = inst_12226);
(statearr_12298_12366[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (19)))
{var inst_12145 = (state_12244[(7)]);var inst_12149 = cljs.core.chunk_first.call(null,inst_12145);var inst_12150 = cljs.core.chunk_rest.call(null,inst_12145);var inst_12151 = cljs.core.count.call(null,inst_12149);var inst_12125 = inst_12150;var inst_12126 = inst_12149;var inst_12127 = inst_12151;var inst_12128 = (0);var state_12244__$1 = (function (){var statearr_12299 = state_12244;(statearr_12299[(13)] = inst_12128);
(statearr_12299[(14)] = inst_12125);
(statearr_12299[(15)] = inst_12126);
(statearr_12299[(16)] = inst_12127);
return statearr_12299;
})();var statearr_12300_12367 = state_12244__$1;(statearr_12300_12367[(2)] = null);
(statearr_12300_12367[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (11)))
{var inst_12125 = (state_12244[(14)]);var inst_12145 = (state_12244[(7)]);var inst_12145__$1 = cljs.core.seq.call(null,inst_12125);var state_12244__$1 = (function (){var statearr_12301 = state_12244;(statearr_12301[(7)] = inst_12145__$1);
return statearr_12301;
})();if(inst_12145__$1)
{var statearr_12302_12368 = state_12244__$1;(statearr_12302_12368[(1)] = (16));
} else
{var statearr_12303_12369 = state_12244__$1;(statearr_12303_12369[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (9)))
{var inst_12173 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12304_12370 = state_12244__$1;(statearr_12304_12370[(2)] = inst_12173);
(statearr_12304_12370[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (5)))
{var inst_12123 = cljs.core.deref.call(null,cs);var inst_12124 = cljs.core.seq.call(null,inst_12123);var inst_12125 = inst_12124;var inst_12126 = null;var inst_12127 = (0);var inst_12128 = (0);var state_12244__$1 = (function (){var statearr_12305 = state_12244;(statearr_12305[(13)] = inst_12128);
(statearr_12305[(14)] = inst_12125);
(statearr_12305[(15)] = inst_12126);
(statearr_12305[(16)] = inst_12127);
return statearr_12305;
})();var statearr_12306_12371 = state_12244__$1;(statearr_12306_12371[(2)] = null);
(statearr_12306_12371[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (14)))
{var state_12244__$1 = state_12244;var statearr_12307_12372 = state_12244__$1;(statearr_12307_12372[(2)] = null);
(statearr_12307_12372[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (45)))
{var inst_12234 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12308_12373 = state_12244__$1;(statearr_12308_12373[(2)] = inst_12234);
(statearr_12308_12373[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (26)))
{var inst_12176 = (state_12244[(29)]);var inst_12230 = (state_12244[(2)]);var inst_12231 = cljs.core.seq.call(null,inst_12176);var state_12244__$1 = (function (){var statearr_12309 = state_12244;(statearr_12309[(31)] = inst_12230);
return statearr_12309;
})();if(inst_12231)
{var statearr_12310_12374 = state_12244__$1;(statearr_12310_12374[(1)] = (42));
} else
{var statearr_12311_12375 = state_12244__$1;(statearr_12311_12375[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (16)))
{var inst_12145 = (state_12244[(7)]);var inst_12147 = cljs.core.chunked_seq_QMARK_.call(null,inst_12145);var state_12244__$1 = state_12244;if(inst_12147)
{var statearr_12312_12376 = state_12244__$1;(statearr_12312_12376[(1)] = (19));
} else
{var statearr_12313_12377 = state_12244__$1;(statearr_12313_12377[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (38)))
{var inst_12223 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12314_12378 = state_12244__$1;(statearr_12314_12378[(2)] = inst_12223);
(statearr_12314_12378[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (30)))
{var state_12244__$1 = state_12244;var statearr_12315_12379 = state_12244__$1;(statearr_12315_12379[(2)] = null);
(statearr_12315_12379[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (10)))
{var inst_12128 = (state_12244[(13)]);var inst_12126 = (state_12244[(15)]);var inst_12134 = cljs.core._nth.call(null,inst_12126,inst_12128);var inst_12135 = cljs.core.nth.call(null,inst_12134,(0),null);var inst_12136 = cljs.core.nth.call(null,inst_12134,(1),null);var state_12244__$1 = (function (){var statearr_12316 = state_12244;(statearr_12316[(26)] = inst_12135);
return statearr_12316;
})();if(cljs.core.truth_(inst_12136))
{var statearr_12317_12380 = state_12244__$1;(statearr_12317_12380[(1)] = (13));
} else
{var statearr_12318_12381 = state_12244__$1;(statearr_12318_12381[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (18)))
{var inst_12169 = (state_12244[(2)]);var state_12244__$1 = state_12244;var statearr_12319_12382 = state_12244__$1;(statearr_12319_12382[(2)] = inst_12169);
(statearr_12319_12382[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (42)))
{var state_12244__$1 = state_12244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12244__$1,(45),dchan);
} else
{if((state_val_12245 === (37)))
{var inst_12212 = (state_12244[(23)]);var inst_12116 = (state_12244[(11)]);var inst_12203 = (state_12244[(25)]);var inst_12212__$1 = cljs.core.first.call(null,inst_12203);var inst_12213 = cljs.core.async.put_BANG_.call(null,inst_12212__$1,inst_12116,done);var state_12244__$1 = (function (){var statearr_12320 = state_12244;(statearr_12320[(23)] = inst_12212__$1);
return statearr_12320;
})();if(cljs.core.truth_(inst_12213))
{var statearr_12321_12383 = state_12244__$1;(statearr_12321_12383[(1)] = (39));
} else
{var statearr_12322_12384 = state_12244__$1;(statearr_12322_12384[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12245 === (8)))
{var inst_12128 = (state_12244[(13)]);var inst_12127 = (state_12244[(16)]);var inst_12130 = (inst_12128 < inst_12127);var inst_12131 = inst_12130;var state_12244__$1 = state_12244;if(cljs.core.truth_(inst_12131))
{var statearr_12323_12385 = state_12244__$1;(statearr_12323_12385[(1)] = (10));
} else
{var statearr_12324_12386 = state_12244__$1;(statearr_12324_12386[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___12332,cs,m,dchan,dctr,done))
;return ((function (switch__8207__auto__,c__8272__auto___12332,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_12328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12328[(0)] = state_machine__8208__auto__);
(statearr_12328[(1)] = (1));
return statearr_12328;
});
var state_machine__8208__auto____1 = (function (state_12244){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_12244);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e12329){if((e12329 instanceof Object))
{var ex__8211__auto__ = e12329;var statearr_12330_12387 = state_12244;(statearr_12330_12387[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12388 = state_12244;
state_12244 = G__12388;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_12244){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_12244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___12332,cs,m,dchan,dctr,done))
})();var state__8274__auto__ = (function (){var statearr_12331 = f__8273__auto__.call(null);(statearr_12331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___12332);
return statearr_12331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___12332,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12390 = {};return obj12390;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3536__auto__ = m;if(and__3536__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3536__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4175__auto__ = (((m == null))?null:m);return (function (){var or__3548__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12510 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12511){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12511 = meta12511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12510.cljs$lang$type = true;
cljs.core.async.t12510.cljs$lang$ctorStr = "cljs.core.async/t12510";
cljs.core.async.t12510.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t12510");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12510.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12512){var self__ = this;
var _12512__$1 = this;return self__.meta12511;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12512,meta12511__$1){var self__ = this;
var _12512__$1 = this;return (new cljs.core.async.t12510(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12511__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12510 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12510(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12511){return (new cljs.core.async.t12510(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12511));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12510(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8272__auto___12629 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___12629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___12629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12582){var state_val_12583 = (state_12582[(1)]);if((state_val_12583 === (7)))
{var inst_12526 = (state_12582[(7)]);var inst_12531 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12526);var state_12582__$1 = state_12582;var statearr_12584_12630 = state_12582__$1;(statearr_12584_12630[(2)] = inst_12531);
(statearr_12584_12630[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (20)))
{var inst_12541 = (state_12582[(8)]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12582__$1,(23),out,inst_12541);
} else
{if((state_val_12583 === (1)))
{var inst_12516 = (state_12582[(9)]);var inst_12516__$1 = calc_state.call(null);var inst_12517 = cljs.core.seq_QMARK_.call(null,inst_12516__$1);var state_12582__$1 = (function (){var statearr_12585 = state_12582;(statearr_12585[(9)] = inst_12516__$1);
return statearr_12585;
})();if(inst_12517)
{var statearr_12586_12631 = state_12582__$1;(statearr_12586_12631[(1)] = (2));
} else
{var statearr_12587_12632 = state_12582__$1;(statearr_12587_12632[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (24)))
{var inst_12534 = (state_12582[(10)]);var inst_12526 = inst_12534;var state_12582__$1 = (function (){var statearr_12588 = state_12582;(statearr_12588[(7)] = inst_12526);
return statearr_12588;
})();var statearr_12589_12633 = state_12582__$1;(statearr_12589_12633[(2)] = null);
(statearr_12589_12633[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (4)))
{var inst_12516 = (state_12582[(9)]);var inst_12522 = (state_12582[(2)]);var inst_12523 = cljs.core.get.call(null,inst_12522,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12524 = cljs.core.get.call(null,inst_12522,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12525 = cljs.core.get.call(null,inst_12522,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12526 = inst_12516;var state_12582__$1 = (function (){var statearr_12590 = state_12582;(statearr_12590[(11)] = inst_12525);
(statearr_12590[(12)] = inst_12524);
(statearr_12590[(7)] = inst_12526);
(statearr_12590[(13)] = inst_12523);
return statearr_12590;
})();var statearr_12591_12634 = state_12582__$1;(statearr_12591_12634[(2)] = null);
(statearr_12591_12634[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (15)))
{var state_12582__$1 = state_12582;var statearr_12592_12635 = state_12582__$1;(statearr_12592_12635[(2)] = null);
(statearr_12592_12635[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (21)))
{var inst_12534 = (state_12582[(10)]);var inst_12526 = inst_12534;var state_12582__$1 = (function (){var statearr_12593 = state_12582;(statearr_12593[(7)] = inst_12526);
return statearr_12593;
})();var statearr_12594_12636 = state_12582__$1;(statearr_12594_12636[(2)] = null);
(statearr_12594_12636[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (13)))
{var inst_12578 = (state_12582[(2)]);var state_12582__$1 = state_12582;var statearr_12595_12637 = state_12582__$1;(statearr_12595_12637[(2)] = inst_12578);
(statearr_12595_12637[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (22)))
{var inst_12576 = (state_12582[(2)]);var state_12582__$1 = state_12582;var statearr_12596_12638 = state_12582__$1;(statearr_12596_12638[(2)] = inst_12576);
(statearr_12596_12638[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (6)))
{var inst_12580 = (state_12582[(2)]);var state_12582__$1 = state_12582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12582__$1,inst_12580);
} else
{if((state_val_12583 === (25)))
{var state_12582__$1 = state_12582;var statearr_12597_12639 = state_12582__$1;(statearr_12597_12639[(2)] = null);
(statearr_12597_12639[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (17)))
{var inst_12556 = (state_12582[(14)]);var state_12582__$1 = state_12582;var statearr_12598_12640 = state_12582__$1;(statearr_12598_12640[(2)] = inst_12556);
(statearr_12598_12640[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (3)))
{var inst_12516 = (state_12582[(9)]);var state_12582__$1 = state_12582;var statearr_12599_12641 = state_12582__$1;(statearr_12599_12641[(2)] = inst_12516);
(statearr_12599_12641[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (12)))
{var inst_12556 = (state_12582[(14)]);var inst_12542 = (state_12582[(15)]);var inst_12537 = (state_12582[(16)]);var inst_12556__$1 = inst_12537.call(null,inst_12542);var state_12582__$1 = (function (){var statearr_12600 = state_12582;(statearr_12600[(14)] = inst_12556__$1);
return statearr_12600;
})();if(cljs.core.truth_(inst_12556__$1))
{var statearr_12601_12642 = state_12582__$1;(statearr_12601_12642[(1)] = (17));
} else
{var statearr_12602_12643 = state_12582__$1;(statearr_12602_12643[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (2)))
{var inst_12516 = (state_12582[(9)]);var inst_12519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12516);var state_12582__$1 = state_12582;var statearr_12603_12644 = state_12582__$1;(statearr_12603_12644[(2)] = inst_12519);
(statearr_12603_12644[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (23)))
{var inst_12567 = (state_12582[(2)]);var state_12582__$1 = state_12582;if(cljs.core.truth_(inst_12567))
{var statearr_12604_12645 = state_12582__$1;(statearr_12604_12645[(1)] = (24));
} else
{var statearr_12605_12646 = state_12582__$1;(statearr_12605_12646[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (19)))
{var inst_12564 = (state_12582[(2)]);var state_12582__$1 = state_12582;if(cljs.core.truth_(inst_12564))
{var statearr_12606_12647 = state_12582__$1;(statearr_12606_12647[(1)] = (20));
} else
{var statearr_12607_12648 = state_12582__$1;(statearr_12607_12648[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (11)))
{var inst_12541 = (state_12582[(8)]);var inst_12547 = (inst_12541 == null);var state_12582__$1 = state_12582;if(cljs.core.truth_(inst_12547))
{var statearr_12608_12649 = state_12582__$1;(statearr_12608_12649[(1)] = (14));
} else
{var statearr_12609_12650 = state_12582__$1;(statearr_12609_12650[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (9)))
{var inst_12534 = (state_12582[(10)]);var inst_12534__$1 = (state_12582[(2)]);var inst_12535 = cljs.core.get.call(null,inst_12534__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12536 = cljs.core.get.call(null,inst_12534__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12537 = cljs.core.get.call(null,inst_12534__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12582__$1 = (function (){var statearr_12610 = state_12582;(statearr_12610[(17)] = inst_12536);
(statearr_12610[(10)] = inst_12534__$1);
(statearr_12610[(16)] = inst_12537);
return statearr_12610;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12582__$1,(10),inst_12535);
} else
{if((state_val_12583 === (5)))
{var inst_12526 = (state_12582[(7)]);var inst_12529 = cljs.core.seq_QMARK_.call(null,inst_12526);var state_12582__$1 = state_12582;if(inst_12529)
{var statearr_12611_12651 = state_12582__$1;(statearr_12611_12651[(1)] = (7));
} else
{var statearr_12612_12652 = state_12582__$1;(statearr_12612_12652[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (14)))
{var inst_12542 = (state_12582[(15)]);var inst_12549 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12542);var state_12582__$1 = state_12582;var statearr_12613_12653 = state_12582__$1;(statearr_12613_12653[(2)] = inst_12549);
(statearr_12613_12653[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (26)))
{var inst_12572 = (state_12582[(2)]);var state_12582__$1 = state_12582;var statearr_12614_12654 = state_12582__$1;(statearr_12614_12654[(2)] = inst_12572);
(statearr_12614_12654[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (16)))
{var inst_12552 = (state_12582[(2)]);var inst_12553 = calc_state.call(null);var inst_12526 = inst_12553;var state_12582__$1 = (function (){var statearr_12615 = state_12582;(statearr_12615[(18)] = inst_12552);
(statearr_12615[(7)] = inst_12526);
return statearr_12615;
})();var statearr_12616_12655 = state_12582__$1;(statearr_12616_12655[(2)] = null);
(statearr_12616_12655[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (10)))
{var inst_12541 = (state_12582[(8)]);var inst_12542 = (state_12582[(15)]);var inst_12540 = (state_12582[(2)]);var inst_12541__$1 = cljs.core.nth.call(null,inst_12540,(0),null);var inst_12542__$1 = cljs.core.nth.call(null,inst_12540,(1),null);var inst_12543 = (inst_12541__$1 == null);var inst_12544 = cljs.core._EQ_.call(null,inst_12542__$1,change);var inst_12545 = (inst_12543) || (inst_12544);var state_12582__$1 = (function (){var statearr_12617 = state_12582;(statearr_12617[(8)] = inst_12541__$1);
(statearr_12617[(15)] = inst_12542__$1);
return statearr_12617;
})();if(cljs.core.truth_(inst_12545))
{var statearr_12618_12656 = state_12582__$1;(statearr_12618_12656[(1)] = (11));
} else
{var statearr_12619_12657 = state_12582__$1;(statearr_12619_12657[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (18)))
{var inst_12542 = (state_12582[(15)]);var inst_12536 = (state_12582[(17)]);var inst_12537 = (state_12582[(16)]);var inst_12559 = cljs.core.empty_QMARK_.call(null,inst_12537);var inst_12560 = inst_12536.call(null,inst_12542);var inst_12561 = cljs.core.not.call(null,inst_12560);var inst_12562 = (inst_12559) && (inst_12561);var state_12582__$1 = state_12582;var statearr_12620_12658 = state_12582__$1;(statearr_12620_12658[(2)] = inst_12562);
(statearr_12620_12658[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12583 === (8)))
{var inst_12526 = (state_12582[(7)]);var state_12582__$1 = state_12582;var statearr_12621_12659 = state_12582__$1;(statearr_12621_12659[(2)] = inst_12526);
(statearr_12621_12659[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___12629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8207__auto__,c__8272__auto___12629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_12625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12625[(0)] = state_machine__8208__auto__);
(statearr_12625[(1)] = (1));
return statearr_12625;
});
var state_machine__8208__auto____1 = (function (state_12582){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_12582);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e12626){if((e12626 instanceof Object))
{var ex__8211__auto__ = e12626;var statearr_12627_12660 = state_12582;(statearr_12627_12660[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12582);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12661 = state_12582;
state_12582 = G__12661;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_12582){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_12582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___12629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8274__auto__ = (function (){var statearr_12628 = f__8273__auto__.call(null);(statearr_12628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___12629);
return statearr_12628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___12629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12663 = {};return obj12663;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3536__auto__ = p;if(and__3536__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3536__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4175__auto__ = (((p == null))?null:p);return (function (){var or__3548__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3536__auto__ = p;if(and__3536__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3536__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4175__auto__ = (((p == null))?null:p);return (function (){var or__3548__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3536__auto__ = p;if(and__3536__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3536__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4175__auto__ = (((p == null))?null:p);return (function (){var or__3548__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3536__auto__ = p;if(and__3536__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3536__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4175__auto__ = (((p == null))?null:p);return (function (){var or__3548__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4175__auto__)]);if(or__3548__auto__)
{return or__3548__auto__;
} else
{var or__3548__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3548__auto____$1)
{return or__3548__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3548__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3548__auto__))
{return or__3548__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3548__auto__,mults){
return (function (p1__12664_SHARP_){if(cljs.core.truth_(p1__12664_SHARP_.call(null,topic)))
{return p1__12664_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12664_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3548__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12787 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12788){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12788 = meta12788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12787.cljs$lang$type = true;
cljs.core.async.t12787.cljs$lang$ctorStr = "cljs.core.async/t12787";
cljs.core.async.t12787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t12787");
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12789){var self__ = this;
var _12789__$1 = this;return self__.meta12788;
});})(mults,ensure_mult))
;
cljs.core.async.t12787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12789,meta12788__$1){var self__ = this;
var _12789__$1 = this;return (new cljs.core.async.t12787(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12788__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12787 = ((function (mults,ensure_mult){
return (function __GT_t12787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12788){return (new cljs.core.async.t12787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12788));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12787(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8272__auto___12909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___12909,mults,ensure_mult,p){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___12909,mults,ensure_mult,p){
return (function (state_12861){var state_val_12862 = (state_12861[(1)]);if((state_val_12862 === (7)))
{var inst_12857 = (state_12861[(2)]);var state_12861__$1 = state_12861;var statearr_12863_12910 = state_12861__$1;(statearr_12863_12910[(2)] = inst_12857);
(statearr_12863_12910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (20)))
{var state_12861__$1 = state_12861;var statearr_12864_12911 = state_12861__$1;(statearr_12864_12911[(2)] = null);
(statearr_12864_12911[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (1)))
{var state_12861__$1 = state_12861;var statearr_12865_12912 = state_12861__$1;(statearr_12865_12912[(2)] = null);
(statearr_12865_12912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (24)))
{var inst_12840 = (state_12861[(7)]);var inst_12849 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12840);var state_12861__$1 = state_12861;var statearr_12866_12913 = state_12861__$1;(statearr_12866_12913[(2)] = inst_12849);
(statearr_12866_12913[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (4)))
{var inst_12792 = (state_12861[(8)]);var inst_12792__$1 = (state_12861[(2)]);var inst_12793 = (inst_12792__$1 == null);var state_12861__$1 = (function (){var statearr_12867 = state_12861;(statearr_12867[(8)] = inst_12792__$1);
return statearr_12867;
})();if(cljs.core.truth_(inst_12793))
{var statearr_12868_12914 = state_12861__$1;(statearr_12868_12914[(1)] = (5));
} else
{var statearr_12869_12915 = state_12861__$1;(statearr_12869_12915[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (15)))
{var inst_12834 = (state_12861[(2)]);var state_12861__$1 = state_12861;var statearr_12870_12916 = state_12861__$1;(statearr_12870_12916[(2)] = inst_12834);
(statearr_12870_12916[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (21)))
{var inst_12854 = (state_12861[(2)]);var state_12861__$1 = (function (){var statearr_12871 = state_12861;(statearr_12871[(9)] = inst_12854);
return statearr_12871;
})();var statearr_12872_12917 = state_12861__$1;(statearr_12872_12917[(2)] = null);
(statearr_12872_12917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (13)))
{var inst_12816 = (state_12861[(10)]);var inst_12818 = cljs.core.chunked_seq_QMARK_.call(null,inst_12816);var state_12861__$1 = state_12861;if(inst_12818)
{var statearr_12873_12918 = state_12861__$1;(statearr_12873_12918[(1)] = (16));
} else
{var statearr_12874_12919 = state_12861__$1;(statearr_12874_12919[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (22)))
{var inst_12846 = (state_12861[(2)]);var state_12861__$1 = state_12861;if(cljs.core.truth_(inst_12846))
{var statearr_12875_12920 = state_12861__$1;(statearr_12875_12920[(1)] = (23));
} else
{var statearr_12876_12921 = state_12861__$1;(statearr_12876_12921[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (6)))
{var inst_12792 = (state_12861[(8)]);var inst_12842 = (state_12861[(11)]);var inst_12840 = (state_12861[(7)]);var inst_12840__$1 = topic_fn.call(null,inst_12792);var inst_12841 = cljs.core.deref.call(null,mults);var inst_12842__$1 = cljs.core.get.call(null,inst_12841,inst_12840__$1);var state_12861__$1 = (function (){var statearr_12877 = state_12861;(statearr_12877[(11)] = inst_12842__$1);
(statearr_12877[(7)] = inst_12840__$1);
return statearr_12877;
})();if(cljs.core.truth_(inst_12842__$1))
{var statearr_12878_12922 = state_12861__$1;(statearr_12878_12922[(1)] = (19));
} else
{var statearr_12879_12923 = state_12861__$1;(statearr_12879_12923[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (25)))
{var inst_12851 = (state_12861[(2)]);var state_12861__$1 = state_12861;var statearr_12880_12924 = state_12861__$1;(statearr_12880_12924[(2)] = inst_12851);
(statearr_12880_12924[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (17)))
{var inst_12816 = (state_12861[(10)]);var inst_12825 = cljs.core.first.call(null,inst_12816);var inst_12826 = cljs.core.async.muxch_STAR_.call(null,inst_12825);var inst_12827 = cljs.core.async.close_BANG_.call(null,inst_12826);var inst_12828 = cljs.core.next.call(null,inst_12816);var inst_12802 = inst_12828;var inst_12803 = null;var inst_12804 = (0);var inst_12805 = (0);var state_12861__$1 = (function (){var statearr_12881 = state_12861;(statearr_12881[(12)] = inst_12805);
(statearr_12881[(13)] = inst_12827);
(statearr_12881[(14)] = inst_12803);
(statearr_12881[(15)] = inst_12804);
(statearr_12881[(16)] = inst_12802);
return statearr_12881;
})();var statearr_12882_12925 = state_12861__$1;(statearr_12882_12925[(2)] = null);
(statearr_12882_12925[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (3)))
{var inst_12859 = (state_12861[(2)]);var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12861__$1,inst_12859);
} else
{if((state_val_12862 === (12)))
{var inst_12836 = (state_12861[(2)]);var state_12861__$1 = state_12861;var statearr_12883_12926 = state_12861__$1;(statearr_12883_12926[(2)] = inst_12836);
(statearr_12883_12926[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (2)))
{var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12861__$1,(4),ch);
} else
{if((state_val_12862 === (23)))
{var state_12861__$1 = state_12861;var statearr_12884_12927 = state_12861__$1;(statearr_12884_12927[(2)] = null);
(statearr_12884_12927[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (19)))
{var inst_12792 = (state_12861[(8)]);var inst_12842 = (state_12861[(11)]);var inst_12844 = cljs.core.async.muxch_STAR_.call(null,inst_12842);var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12861__$1,(22),inst_12844,inst_12792);
} else
{if((state_val_12862 === (11)))
{var inst_12802 = (state_12861[(16)]);var inst_12816 = (state_12861[(10)]);var inst_12816__$1 = cljs.core.seq.call(null,inst_12802);var state_12861__$1 = (function (){var statearr_12885 = state_12861;(statearr_12885[(10)] = inst_12816__$1);
return statearr_12885;
})();if(inst_12816__$1)
{var statearr_12886_12928 = state_12861__$1;(statearr_12886_12928[(1)] = (13));
} else
{var statearr_12887_12929 = state_12861__$1;(statearr_12887_12929[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (9)))
{var inst_12838 = (state_12861[(2)]);var state_12861__$1 = state_12861;var statearr_12888_12930 = state_12861__$1;(statearr_12888_12930[(2)] = inst_12838);
(statearr_12888_12930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (5)))
{var inst_12799 = cljs.core.deref.call(null,mults);var inst_12800 = cljs.core.vals.call(null,inst_12799);var inst_12801 = cljs.core.seq.call(null,inst_12800);var inst_12802 = inst_12801;var inst_12803 = null;var inst_12804 = (0);var inst_12805 = (0);var state_12861__$1 = (function (){var statearr_12889 = state_12861;(statearr_12889[(12)] = inst_12805);
(statearr_12889[(14)] = inst_12803);
(statearr_12889[(15)] = inst_12804);
(statearr_12889[(16)] = inst_12802);
return statearr_12889;
})();var statearr_12890_12931 = state_12861__$1;(statearr_12890_12931[(2)] = null);
(statearr_12890_12931[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (14)))
{var state_12861__$1 = state_12861;var statearr_12894_12932 = state_12861__$1;(statearr_12894_12932[(2)] = null);
(statearr_12894_12932[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (16)))
{var inst_12816 = (state_12861[(10)]);var inst_12820 = cljs.core.chunk_first.call(null,inst_12816);var inst_12821 = cljs.core.chunk_rest.call(null,inst_12816);var inst_12822 = cljs.core.count.call(null,inst_12820);var inst_12802 = inst_12821;var inst_12803 = inst_12820;var inst_12804 = inst_12822;var inst_12805 = (0);var state_12861__$1 = (function (){var statearr_12895 = state_12861;(statearr_12895[(12)] = inst_12805);
(statearr_12895[(14)] = inst_12803);
(statearr_12895[(15)] = inst_12804);
(statearr_12895[(16)] = inst_12802);
return statearr_12895;
})();var statearr_12896_12933 = state_12861__$1;(statearr_12896_12933[(2)] = null);
(statearr_12896_12933[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (10)))
{var inst_12805 = (state_12861[(12)]);var inst_12803 = (state_12861[(14)]);var inst_12804 = (state_12861[(15)]);var inst_12802 = (state_12861[(16)]);var inst_12810 = cljs.core._nth.call(null,inst_12803,inst_12805);var inst_12811 = cljs.core.async.muxch_STAR_.call(null,inst_12810);var inst_12812 = cljs.core.async.close_BANG_.call(null,inst_12811);var inst_12813 = (inst_12805 + (1));var tmp12891 = inst_12803;var tmp12892 = inst_12804;var tmp12893 = inst_12802;var inst_12802__$1 = tmp12893;var inst_12803__$1 = tmp12891;var inst_12804__$1 = tmp12892;var inst_12805__$1 = inst_12813;var state_12861__$1 = (function (){var statearr_12897 = state_12861;(statearr_12897[(12)] = inst_12805__$1);
(statearr_12897[(14)] = inst_12803__$1);
(statearr_12897[(15)] = inst_12804__$1);
(statearr_12897[(17)] = inst_12812);
(statearr_12897[(16)] = inst_12802__$1);
return statearr_12897;
})();var statearr_12898_12934 = state_12861__$1;(statearr_12898_12934[(2)] = null);
(statearr_12898_12934[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (18)))
{var inst_12831 = (state_12861[(2)]);var state_12861__$1 = state_12861;var statearr_12899_12935 = state_12861__$1;(statearr_12899_12935[(2)] = inst_12831);
(statearr_12899_12935[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12862 === (8)))
{var inst_12805 = (state_12861[(12)]);var inst_12804 = (state_12861[(15)]);var inst_12807 = (inst_12805 < inst_12804);var inst_12808 = inst_12807;var state_12861__$1 = state_12861;if(cljs.core.truth_(inst_12808))
{var statearr_12900_12936 = state_12861__$1;(statearr_12900_12936[(1)] = (10));
} else
{var statearr_12901_12937 = state_12861__$1;(statearr_12901_12937[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___12909,mults,ensure_mult,p))
;return ((function (switch__8207__auto__,c__8272__auto___12909,mults,ensure_mult,p){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_12905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12905[(0)] = state_machine__8208__auto__);
(statearr_12905[(1)] = (1));
return statearr_12905;
});
var state_machine__8208__auto____1 = (function (state_12861){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_12861);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e12906){if((e12906 instanceof Object))
{var ex__8211__auto__ = e12906;var statearr_12907_12938 = state_12861;(statearr_12907_12938[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12939 = state_12861;
state_12861 = G__12939;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_12861){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_12861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___12909,mults,ensure_mult,p))
})();var state__8274__auto__ = (function (){var statearr_12908 = f__8273__auto__.call(null);(statearr_12908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___12909);
return statearr_12908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___12909,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8272__auto___13076 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___13076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___13076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13046){var state_val_13047 = (state_13046[(1)]);if((state_val_13047 === (7)))
{var state_13046__$1 = state_13046;var statearr_13048_13077 = state_13046__$1;(statearr_13048_13077[(2)] = null);
(statearr_13048_13077[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (1)))
{var state_13046__$1 = state_13046;var statearr_13049_13078 = state_13046__$1;(statearr_13049_13078[(2)] = null);
(statearr_13049_13078[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (4)))
{var inst_13010 = (state_13046[(7)]);var inst_13012 = (inst_13010 < cnt);var state_13046__$1 = state_13046;if(cljs.core.truth_(inst_13012))
{var statearr_13050_13079 = state_13046__$1;(statearr_13050_13079[(1)] = (6));
} else
{var statearr_13051_13080 = state_13046__$1;(statearr_13051_13080[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (15)))
{var inst_13042 = (state_13046[(2)]);var state_13046__$1 = state_13046;var statearr_13052_13081 = state_13046__$1;(statearr_13052_13081[(2)] = inst_13042);
(statearr_13052_13081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (13)))
{var inst_13035 = cljs.core.async.close_BANG_.call(null,out);var state_13046__$1 = state_13046;var statearr_13053_13082 = state_13046__$1;(statearr_13053_13082[(2)] = inst_13035);
(statearr_13053_13082[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (6)))
{var state_13046__$1 = state_13046;var statearr_13054_13083 = state_13046__$1;(statearr_13054_13083[(2)] = null);
(statearr_13054_13083[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (3)))
{var inst_13044 = (state_13046[(2)]);var state_13046__$1 = state_13046;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13046__$1,inst_13044);
} else
{if((state_val_13047 === (12)))
{var inst_13032 = (state_13046[(8)]);var inst_13032__$1 = (state_13046[(2)]);var inst_13033 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13032__$1);var state_13046__$1 = (function (){var statearr_13055 = state_13046;(statearr_13055[(8)] = inst_13032__$1);
return statearr_13055;
})();if(cljs.core.truth_(inst_13033))
{var statearr_13056_13084 = state_13046__$1;(statearr_13056_13084[(1)] = (13));
} else
{var statearr_13057_13085 = state_13046__$1;(statearr_13057_13085[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (2)))
{var inst_13009 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13010 = (0);var state_13046__$1 = (function (){var statearr_13058 = state_13046;(statearr_13058[(9)] = inst_13009);
(statearr_13058[(7)] = inst_13010);
return statearr_13058;
})();var statearr_13059_13086 = state_13046__$1;(statearr_13059_13086[(2)] = null);
(statearr_13059_13086[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (11)))
{var inst_13010 = (state_13046[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13046,(10),Object,null,(9));var inst_13019 = chs__$1.call(null,inst_13010);var inst_13020 = done.call(null,inst_13010);var inst_13021 = cljs.core.async.take_BANG_.call(null,inst_13019,inst_13020);var state_13046__$1 = state_13046;var statearr_13060_13087 = state_13046__$1;(statearr_13060_13087[(2)] = inst_13021);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13046__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (9)))
{var inst_13010 = (state_13046[(7)]);var inst_13023 = (state_13046[(2)]);var inst_13024 = (inst_13010 + (1));var inst_13010__$1 = inst_13024;var state_13046__$1 = (function (){var statearr_13061 = state_13046;(statearr_13061[(10)] = inst_13023);
(statearr_13061[(7)] = inst_13010__$1);
return statearr_13061;
})();var statearr_13062_13088 = state_13046__$1;(statearr_13062_13088[(2)] = null);
(statearr_13062_13088[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (5)))
{var inst_13030 = (state_13046[(2)]);var state_13046__$1 = (function (){var statearr_13063 = state_13046;(statearr_13063[(11)] = inst_13030);
return statearr_13063;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13046__$1,(12),dchan);
} else
{if((state_val_13047 === (14)))
{var inst_13032 = (state_13046[(8)]);var inst_13037 = cljs.core.apply.call(null,f,inst_13032);var state_13046__$1 = state_13046;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13046__$1,(16),out,inst_13037);
} else
{if((state_val_13047 === (16)))
{var inst_13039 = (state_13046[(2)]);var state_13046__$1 = (function (){var statearr_13064 = state_13046;(statearr_13064[(12)] = inst_13039);
return statearr_13064;
})();var statearr_13065_13089 = state_13046__$1;(statearr_13065_13089[(2)] = null);
(statearr_13065_13089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (10)))
{var inst_13014 = (state_13046[(2)]);var inst_13015 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13046__$1 = (function (){var statearr_13066 = state_13046;(statearr_13066[(13)] = inst_13014);
return statearr_13066;
})();var statearr_13067_13090 = state_13046__$1;(statearr_13067_13090[(2)] = inst_13015);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13046__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13047 === (8)))
{var inst_13028 = (state_13046[(2)]);var state_13046__$1 = state_13046;var statearr_13068_13091 = state_13046__$1;(statearr_13068_13091[(2)] = inst_13028);
(statearr_13068_13091[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___13076,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8207__auto__,c__8272__auto___13076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13072[(0)] = state_machine__8208__auto__);
(statearr_13072[(1)] = (1));
return statearr_13072;
});
var state_machine__8208__auto____1 = (function (state_13046){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13046);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13073){if((e13073 instanceof Object))
{var ex__8211__auto__ = e13073;var statearr_13074_13092 = state_13046;(statearr_13074_13092[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13046);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13073;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13093 = state_13046;
state_13046 = G__13093;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13046){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___13076,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8274__auto__ = (function (){var statearr_13075 = f__8273__auto__.call(null);(statearr_13075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13076);
return statearr_13075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___13076,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___13201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___13201,out){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___13201,out){
return (function (state_13177){var state_val_13178 = (state_13177[(1)]);if((state_val_13178 === (7)))
{var inst_13156 = (state_13177[(7)]);var inst_13157 = (state_13177[(8)]);var inst_13156__$1 = (state_13177[(2)]);var inst_13157__$1 = cljs.core.nth.call(null,inst_13156__$1,(0),null);var inst_13158 = cljs.core.nth.call(null,inst_13156__$1,(1),null);var inst_13159 = (inst_13157__$1 == null);var state_13177__$1 = (function (){var statearr_13179 = state_13177;(statearr_13179[(7)] = inst_13156__$1);
(statearr_13179[(8)] = inst_13157__$1);
(statearr_13179[(9)] = inst_13158);
return statearr_13179;
})();if(cljs.core.truth_(inst_13159))
{var statearr_13180_13202 = state_13177__$1;(statearr_13180_13202[(1)] = (8));
} else
{var statearr_13181_13203 = state_13177__$1;(statearr_13181_13203[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (1)))
{var inst_13148 = cljs.core.vec.call(null,chs);var inst_13149 = inst_13148;var state_13177__$1 = (function (){var statearr_13182 = state_13177;(statearr_13182[(10)] = inst_13149);
return statearr_13182;
})();var statearr_13183_13204 = state_13177__$1;(statearr_13183_13204[(2)] = null);
(statearr_13183_13204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (4)))
{var inst_13149 = (state_13177[(10)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13177__$1,(7),inst_13149);
} else
{if((state_val_13178 === (6)))
{var inst_13173 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13184_13205 = state_13177__$1;(statearr_13184_13205[(2)] = inst_13173);
(statearr_13184_13205[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (3)))
{var inst_13175 = (state_13177[(2)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13177__$1,inst_13175);
} else
{if((state_val_13178 === (2)))
{var inst_13149 = (state_13177[(10)]);var inst_13151 = cljs.core.count.call(null,inst_13149);var inst_13152 = (inst_13151 > (0));var state_13177__$1 = state_13177;if(cljs.core.truth_(inst_13152))
{var statearr_13186_13206 = state_13177__$1;(statearr_13186_13206[(1)] = (4));
} else
{var statearr_13187_13207 = state_13177__$1;(statearr_13187_13207[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (11)))
{var inst_13149 = (state_13177[(10)]);var inst_13166 = (state_13177[(2)]);var tmp13185 = inst_13149;var inst_13149__$1 = tmp13185;var state_13177__$1 = (function (){var statearr_13188 = state_13177;(statearr_13188[(11)] = inst_13166);
(statearr_13188[(10)] = inst_13149__$1);
return statearr_13188;
})();var statearr_13189_13208 = state_13177__$1;(statearr_13189_13208[(2)] = null);
(statearr_13189_13208[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (9)))
{var inst_13157 = (state_13177[(8)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,(11),out,inst_13157);
} else
{if((state_val_13178 === (5)))
{var inst_13171 = cljs.core.async.close_BANG_.call(null,out);var state_13177__$1 = state_13177;var statearr_13190_13209 = state_13177__$1;(statearr_13190_13209[(2)] = inst_13171);
(statearr_13190_13209[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (10)))
{var inst_13169 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13191_13210 = state_13177__$1;(statearr_13191_13210[(2)] = inst_13169);
(statearr_13191_13210[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (8)))
{var inst_13156 = (state_13177[(7)]);var inst_13157 = (state_13177[(8)]);var inst_13158 = (state_13177[(9)]);var inst_13149 = (state_13177[(10)]);var inst_13161 = (function (){var c = inst_13158;var v = inst_13157;var vec__13154 = inst_13156;var cs = inst_13149;return ((function (c,v,vec__13154,cs,inst_13156,inst_13157,inst_13158,inst_13149,state_val_13178,c__8272__auto___13201,out){
return (function (p1__13094_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13094_SHARP_);
});
;})(c,v,vec__13154,cs,inst_13156,inst_13157,inst_13158,inst_13149,state_val_13178,c__8272__auto___13201,out))
})();var inst_13162 = cljs.core.filterv.call(null,inst_13161,inst_13149);var inst_13149__$1 = inst_13162;var state_13177__$1 = (function (){var statearr_13192 = state_13177;(statearr_13192[(10)] = inst_13149__$1);
return statearr_13192;
})();var statearr_13193_13211 = state_13177__$1;(statearr_13193_13211[(2)] = null);
(statearr_13193_13211[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___13201,out))
;return ((function (switch__8207__auto__,c__8272__auto___13201,out){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13197 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13197[(0)] = state_machine__8208__auto__);
(statearr_13197[(1)] = (1));
return statearr_13197;
});
var state_machine__8208__auto____1 = (function (state_13177){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13177);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13198){if((e13198 instanceof Object))
{var ex__8211__auto__ = e13198;var statearr_13199_13212 = state_13177;(statearr_13199_13212[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13198;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13213 = state_13177;
state_13177 = G__13213;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13177){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___13201,out))
})();var state__8274__auto__ = (function (){var statearr_13200 = f__8273__auto__.call(null);(statearr_13200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13201);
return statearr_13200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___13201,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___13306 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___13306,out){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___13306,out){
return (function (state_13283){var state_val_13284 = (state_13283[(1)]);if((state_val_13284 === (7)))
{var inst_13265 = (state_13283[(7)]);var inst_13265__$1 = (state_13283[(2)]);var inst_13266 = (inst_13265__$1 == null);var inst_13267 = cljs.core.not.call(null,inst_13266);var state_13283__$1 = (function (){var statearr_13285 = state_13283;(statearr_13285[(7)] = inst_13265__$1);
return statearr_13285;
})();if(inst_13267)
{var statearr_13286_13307 = state_13283__$1;(statearr_13286_13307[(1)] = (8));
} else
{var statearr_13287_13308 = state_13283__$1;(statearr_13287_13308[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (1)))
{var inst_13260 = (0);var state_13283__$1 = (function (){var statearr_13288 = state_13283;(statearr_13288[(8)] = inst_13260);
return statearr_13288;
})();var statearr_13289_13309 = state_13283__$1;(statearr_13289_13309[(2)] = null);
(statearr_13289_13309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (4)))
{var state_13283__$1 = state_13283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13283__$1,(7),ch);
} else
{if((state_val_13284 === (6)))
{var inst_13278 = (state_13283[(2)]);var state_13283__$1 = state_13283;var statearr_13290_13310 = state_13283__$1;(statearr_13290_13310[(2)] = inst_13278);
(statearr_13290_13310[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (3)))
{var inst_13280 = (state_13283[(2)]);var inst_13281 = cljs.core.async.close_BANG_.call(null,out);var state_13283__$1 = (function (){var statearr_13291 = state_13283;(statearr_13291[(9)] = inst_13280);
return statearr_13291;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13283__$1,inst_13281);
} else
{if((state_val_13284 === (2)))
{var inst_13260 = (state_13283[(8)]);var inst_13262 = (inst_13260 < n);var state_13283__$1 = state_13283;if(cljs.core.truth_(inst_13262))
{var statearr_13292_13311 = state_13283__$1;(statearr_13292_13311[(1)] = (4));
} else
{var statearr_13293_13312 = state_13283__$1;(statearr_13293_13312[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (11)))
{var inst_13260 = (state_13283[(8)]);var inst_13270 = (state_13283[(2)]);var inst_13271 = (inst_13260 + (1));var inst_13260__$1 = inst_13271;var state_13283__$1 = (function (){var statearr_13294 = state_13283;(statearr_13294[(10)] = inst_13270);
(statearr_13294[(8)] = inst_13260__$1);
return statearr_13294;
})();var statearr_13295_13313 = state_13283__$1;(statearr_13295_13313[(2)] = null);
(statearr_13295_13313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (9)))
{var state_13283__$1 = state_13283;var statearr_13296_13314 = state_13283__$1;(statearr_13296_13314[(2)] = null);
(statearr_13296_13314[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (5)))
{var state_13283__$1 = state_13283;var statearr_13297_13315 = state_13283__$1;(statearr_13297_13315[(2)] = null);
(statearr_13297_13315[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (10)))
{var inst_13275 = (state_13283[(2)]);var state_13283__$1 = state_13283;var statearr_13298_13316 = state_13283__$1;(statearr_13298_13316[(2)] = inst_13275);
(statearr_13298_13316[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (8)))
{var inst_13265 = (state_13283[(7)]);var state_13283__$1 = state_13283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13283__$1,(11),out,inst_13265);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___13306,out))
;return ((function (switch__8207__auto__,c__8272__auto___13306,out){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13302 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13302[(0)] = state_machine__8208__auto__);
(statearr_13302[(1)] = (1));
return statearr_13302;
});
var state_machine__8208__auto____1 = (function (state_13283){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13283);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13303){if((e13303 instanceof Object))
{var ex__8211__auto__ = e13303;var statearr_13304_13317 = state_13283;(statearr_13304_13317[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13303;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13318 = state_13283;
state_13283 = G__13318;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13283){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___13306,out))
})();var state__8274__auto__ = (function (){var statearr_13305 = f__8273__auto__.call(null);(statearr_13305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13306);
return statearr_13305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___13306,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13326 = (function (ch,f,map_LT_,meta13327){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13327 = meta13327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13326.cljs$lang$type = true;
cljs.core.async.t13326.cljs$lang$ctorStr = "cljs.core.async/t13326";
cljs.core.async.t13326.cljs$lang$ctorPrWriter = (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t13326");
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13329 = (function (fn1,_,meta13327,ch,f,map_LT_,meta13330){
this.fn1 = fn1;
this._ = _;
this.meta13327 = meta13327;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13330 = meta13330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13329.cljs$lang$type = true;
cljs.core.async.t13329.cljs$lang$ctorStr = "cljs.core.async/t13329";
cljs.core.async.t13329.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t13329");
});})(___$1))
;
cljs.core.async.t13329.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13329.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13319_SHARP_){return f1.call(null,(((p1__13319_SHARP_ == null))?null:self__.f.call(null,p1__13319_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13331){var self__ = this;
var _13331__$1 = this;return self__.meta13330;
});})(___$1))
;
cljs.core.async.t13329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13331,meta13330__$1){var self__ = this;
var _13331__$1 = this;return (new cljs.core.async.t13329(self__.fn1,self__._,self__.meta13327,self__.ch,self__.f,self__.map_LT_,meta13330__$1));
});})(___$1))
;
cljs.core.async.__GT_t13329 = ((function (___$1){
return (function __GT_t13329(fn1__$1,___$2,meta13327__$1,ch__$2,f__$2,map_LT___$2,meta13330){return (new cljs.core.async.t13329(fn1__$1,___$2,meta13327__$1,ch__$2,f__$2,map_LT___$2,meta13330));
});})(___$1))
;
}
return (new cljs.core.async.t13329(fn1,___$1,self__.meta13327,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3536__auto__ = ret;if(cljs.core.truth_(and__3536__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3536__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13326.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13328){var self__ = this;
var _13328__$1 = this;return self__.meta13327;
});
cljs.core.async.t13326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13328,meta13327__$1){var self__ = this;
var _13328__$1 = this;return (new cljs.core.async.t13326(self__.ch,self__.f,self__.map_LT_,meta13327__$1));
});
cljs.core.async.__GT_t13326 = (function __GT_t13326(ch__$1,f__$1,map_LT___$1,meta13327){return (new cljs.core.async.t13326(ch__$1,f__$1,map_LT___$1,meta13327));
});
}
return (new cljs.core.async.t13326(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13335 = (function (ch,f,map_GT_,meta13336){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13336 = meta13336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13335.cljs$lang$type = true;
cljs.core.async.t13335.cljs$lang$ctorStr = "cljs.core.async/t13335";
cljs.core.async.t13335.cljs$lang$ctorPrWriter = (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t13335");
});
cljs.core.async.t13335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13335.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13337){var self__ = this;
var _13337__$1 = this;return self__.meta13336;
});
cljs.core.async.t13335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13337,meta13336__$1){var self__ = this;
var _13337__$1 = this;return (new cljs.core.async.t13335(self__.ch,self__.f,self__.map_GT_,meta13336__$1));
});
cljs.core.async.__GT_t13335 = (function __GT_t13335(ch__$1,f__$1,map_GT___$1,meta13336){return (new cljs.core.async.t13335(ch__$1,f__$1,map_GT___$1,meta13336));
});
}
return (new cljs.core.async.t13335(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13341 = (function (ch,p,filter_GT_,meta13342){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13342 = meta13342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13341.cljs$lang$type = true;
cljs.core.async.t13341.cljs$lang$ctorStr = "cljs.core.async/t13341";
cljs.core.async.t13341.cljs$lang$ctorPrWriter = (function (this__4115__auto__,writer__4116__auto__,opt__4117__auto__){return cljs.core._write.call(null,writer__4116__auto__,"cljs.core.async/t13341");
});
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13343){var self__ = this;
var _13343__$1 = this;return self__.meta13342;
});
cljs.core.async.t13341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13343,meta13342__$1){var self__ = this;
var _13343__$1 = this;return (new cljs.core.async.t13341(self__.ch,self__.p,self__.filter_GT_,meta13342__$1));
});
cljs.core.async.__GT_t13341 = (function __GT_t13341(ch__$1,p__$1,filter_GT___$1,meta13342){return (new cljs.core.async.t13341(ch__$1,p__$1,filter_GT___$1,meta13342));
});
}
return (new cljs.core.async.t13341(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___13426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___13426,out){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___13426,out){
return (function (state_13405){var state_val_13406 = (state_13405[(1)]);if((state_val_13406 === (7)))
{var inst_13401 = (state_13405[(2)]);var state_13405__$1 = state_13405;var statearr_13407_13427 = state_13405__$1;(statearr_13407_13427[(2)] = inst_13401);
(statearr_13407_13427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (1)))
{var state_13405__$1 = state_13405;var statearr_13408_13428 = state_13405__$1;(statearr_13408_13428[(2)] = null);
(statearr_13408_13428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (4)))
{var inst_13387 = (state_13405[(7)]);var inst_13387__$1 = (state_13405[(2)]);var inst_13388 = (inst_13387__$1 == null);var state_13405__$1 = (function (){var statearr_13409 = state_13405;(statearr_13409[(7)] = inst_13387__$1);
return statearr_13409;
})();if(cljs.core.truth_(inst_13388))
{var statearr_13410_13429 = state_13405__$1;(statearr_13410_13429[(1)] = (5));
} else
{var statearr_13411_13430 = state_13405__$1;(statearr_13411_13430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (6)))
{var inst_13387 = (state_13405[(7)]);var inst_13392 = p.call(null,inst_13387);var state_13405__$1 = state_13405;if(cljs.core.truth_(inst_13392))
{var statearr_13412_13431 = state_13405__$1;(statearr_13412_13431[(1)] = (8));
} else
{var statearr_13413_13432 = state_13405__$1;(statearr_13413_13432[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (3)))
{var inst_13403 = (state_13405[(2)]);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13405__$1,inst_13403);
} else
{if((state_val_13406 === (2)))
{var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13405__$1,(4),ch);
} else
{if((state_val_13406 === (11)))
{var inst_13395 = (state_13405[(2)]);var state_13405__$1 = state_13405;var statearr_13414_13433 = state_13405__$1;(statearr_13414_13433[(2)] = inst_13395);
(statearr_13414_13433[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (9)))
{var state_13405__$1 = state_13405;var statearr_13415_13434 = state_13405__$1;(statearr_13415_13434[(2)] = null);
(statearr_13415_13434[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (5)))
{var inst_13390 = cljs.core.async.close_BANG_.call(null,out);var state_13405__$1 = state_13405;var statearr_13416_13435 = state_13405__$1;(statearr_13416_13435[(2)] = inst_13390);
(statearr_13416_13435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (10)))
{var inst_13398 = (state_13405[(2)]);var state_13405__$1 = (function (){var statearr_13417 = state_13405;(statearr_13417[(8)] = inst_13398);
return statearr_13417;
})();var statearr_13418_13436 = state_13405__$1;(statearr_13418_13436[(2)] = null);
(statearr_13418_13436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13406 === (8)))
{var inst_13387 = (state_13405[(7)]);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13405__$1,(11),out,inst_13387);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___13426,out))
;return ((function (switch__8207__auto__,c__8272__auto___13426,out){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13422 = [null,null,null,null,null,null,null,null,null];(statearr_13422[(0)] = state_machine__8208__auto__);
(statearr_13422[(1)] = (1));
return statearr_13422;
});
var state_machine__8208__auto____1 = (function (state_13405){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13405);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13423){if((e13423 instanceof Object))
{var ex__8211__auto__ = e13423;var statearr_13424_13437 = state_13405;(statearr_13424_13437[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13423;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13438 = state_13405;
state_13405 = G__13438;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13405){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___13426,out))
})();var state__8274__auto__ = (function (){var statearr_13425 = f__8273__auto__.call(null);(statearr_13425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13426);
return statearr_13425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___13426,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto__){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto__){
return (function (state_13604){var state_val_13605 = (state_13604[(1)]);if((state_val_13605 === (7)))
{var inst_13600 = (state_13604[(2)]);var state_13604__$1 = state_13604;var statearr_13606_13647 = state_13604__$1;(statearr_13606_13647[(2)] = inst_13600);
(statearr_13606_13647[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (20)))
{var inst_13570 = (state_13604[(7)]);var inst_13581 = (state_13604[(2)]);var inst_13582 = cljs.core.next.call(null,inst_13570);var inst_13556 = inst_13582;var inst_13557 = null;var inst_13558 = (0);var inst_13559 = (0);var state_13604__$1 = (function (){var statearr_13607 = state_13604;(statearr_13607[(8)] = inst_13558);
(statearr_13607[(9)] = inst_13557);
(statearr_13607[(10)] = inst_13559);
(statearr_13607[(11)] = inst_13581);
(statearr_13607[(12)] = inst_13556);
return statearr_13607;
})();var statearr_13608_13648 = state_13604__$1;(statearr_13608_13648[(2)] = null);
(statearr_13608_13648[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (1)))
{var state_13604__$1 = state_13604;var statearr_13609_13649 = state_13604__$1;(statearr_13609_13649[(2)] = null);
(statearr_13609_13649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (4)))
{var inst_13545 = (state_13604[(13)]);var inst_13545__$1 = (state_13604[(2)]);var inst_13546 = (inst_13545__$1 == null);var state_13604__$1 = (function (){var statearr_13610 = state_13604;(statearr_13610[(13)] = inst_13545__$1);
return statearr_13610;
})();if(cljs.core.truth_(inst_13546))
{var statearr_13611_13650 = state_13604__$1;(statearr_13611_13650[(1)] = (5));
} else
{var statearr_13612_13651 = state_13604__$1;(statearr_13612_13651[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (15)))
{var state_13604__$1 = state_13604;var statearr_13616_13652 = state_13604__$1;(statearr_13616_13652[(2)] = null);
(statearr_13616_13652[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (21)))
{var state_13604__$1 = state_13604;var statearr_13617_13653 = state_13604__$1;(statearr_13617_13653[(2)] = null);
(statearr_13617_13653[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (13)))
{var inst_13558 = (state_13604[(8)]);var inst_13557 = (state_13604[(9)]);var inst_13559 = (state_13604[(10)]);var inst_13556 = (state_13604[(12)]);var inst_13566 = (state_13604[(2)]);var inst_13567 = (inst_13559 + (1));var tmp13613 = inst_13558;var tmp13614 = inst_13557;var tmp13615 = inst_13556;var inst_13556__$1 = tmp13615;var inst_13557__$1 = tmp13614;var inst_13558__$1 = tmp13613;var inst_13559__$1 = inst_13567;var state_13604__$1 = (function (){var statearr_13618 = state_13604;(statearr_13618[(14)] = inst_13566);
(statearr_13618[(8)] = inst_13558__$1);
(statearr_13618[(9)] = inst_13557__$1);
(statearr_13618[(10)] = inst_13559__$1);
(statearr_13618[(12)] = inst_13556__$1);
return statearr_13618;
})();var statearr_13619_13654 = state_13604__$1;(statearr_13619_13654[(2)] = null);
(statearr_13619_13654[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (22)))
{var state_13604__$1 = state_13604;var statearr_13620_13655 = state_13604__$1;(statearr_13620_13655[(2)] = null);
(statearr_13620_13655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (6)))
{var inst_13545 = (state_13604[(13)]);var inst_13554 = f.call(null,inst_13545);var inst_13555 = cljs.core.seq.call(null,inst_13554);var inst_13556 = inst_13555;var inst_13557 = null;var inst_13558 = (0);var inst_13559 = (0);var state_13604__$1 = (function (){var statearr_13621 = state_13604;(statearr_13621[(8)] = inst_13558);
(statearr_13621[(9)] = inst_13557);
(statearr_13621[(10)] = inst_13559);
(statearr_13621[(12)] = inst_13556);
return statearr_13621;
})();var statearr_13622_13656 = state_13604__$1;(statearr_13622_13656[(2)] = null);
(statearr_13622_13656[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (17)))
{var inst_13570 = (state_13604[(7)]);var inst_13574 = cljs.core.chunk_first.call(null,inst_13570);var inst_13575 = cljs.core.chunk_rest.call(null,inst_13570);var inst_13576 = cljs.core.count.call(null,inst_13574);var inst_13556 = inst_13575;var inst_13557 = inst_13574;var inst_13558 = inst_13576;var inst_13559 = (0);var state_13604__$1 = (function (){var statearr_13623 = state_13604;(statearr_13623[(8)] = inst_13558);
(statearr_13623[(9)] = inst_13557);
(statearr_13623[(10)] = inst_13559);
(statearr_13623[(12)] = inst_13556);
return statearr_13623;
})();var statearr_13624_13657 = state_13604__$1;(statearr_13624_13657[(2)] = null);
(statearr_13624_13657[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (3)))
{var inst_13602 = (state_13604[(2)]);var state_13604__$1 = state_13604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13604__$1,inst_13602);
} else
{if((state_val_13605 === (12)))
{var inst_13590 = (state_13604[(2)]);var state_13604__$1 = state_13604;var statearr_13625_13658 = state_13604__$1;(statearr_13625_13658[(2)] = inst_13590);
(statearr_13625_13658[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (2)))
{var state_13604__$1 = state_13604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13604__$1,(4),in$);
} else
{if((state_val_13605 === (23)))
{var inst_13598 = (state_13604[(2)]);var state_13604__$1 = state_13604;var statearr_13626_13659 = state_13604__$1;(statearr_13626_13659[(2)] = inst_13598);
(statearr_13626_13659[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (19)))
{var inst_13585 = (state_13604[(2)]);var state_13604__$1 = state_13604;var statearr_13627_13660 = state_13604__$1;(statearr_13627_13660[(2)] = inst_13585);
(statearr_13627_13660[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (11)))
{var inst_13570 = (state_13604[(7)]);var inst_13556 = (state_13604[(12)]);var inst_13570__$1 = cljs.core.seq.call(null,inst_13556);var state_13604__$1 = (function (){var statearr_13628 = state_13604;(statearr_13628[(7)] = inst_13570__$1);
return statearr_13628;
})();if(inst_13570__$1)
{var statearr_13629_13661 = state_13604__$1;(statearr_13629_13661[(1)] = (14));
} else
{var statearr_13630_13662 = state_13604__$1;(statearr_13630_13662[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (9)))
{var inst_13592 = (state_13604[(2)]);var inst_13593 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13604__$1 = (function (){var statearr_13631 = state_13604;(statearr_13631[(15)] = inst_13592);
return statearr_13631;
})();if(cljs.core.truth_(inst_13593))
{var statearr_13632_13663 = state_13604__$1;(statearr_13632_13663[(1)] = (21));
} else
{var statearr_13633_13664 = state_13604__$1;(statearr_13633_13664[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (5)))
{var inst_13548 = cljs.core.async.close_BANG_.call(null,out);var state_13604__$1 = state_13604;var statearr_13634_13665 = state_13604__$1;(statearr_13634_13665[(2)] = inst_13548);
(statearr_13634_13665[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (14)))
{var inst_13570 = (state_13604[(7)]);var inst_13572 = cljs.core.chunked_seq_QMARK_.call(null,inst_13570);var state_13604__$1 = state_13604;if(inst_13572)
{var statearr_13635_13666 = state_13604__$1;(statearr_13635_13666[(1)] = (17));
} else
{var statearr_13636_13667 = state_13604__$1;(statearr_13636_13667[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (16)))
{var inst_13588 = (state_13604[(2)]);var state_13604__$1 = state_13604;var statearr_13637_13668 = state_13604__$1;(statearr_13637_13668[(2)] = inst_13588);
(statearr_13637_13668[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13605 === (10)))
{var inst_13557 = (state_13604[(9)]);var inst_13559 = (state_13604[(10)]);var inst_13564 = cljs.core._nth.call(null,inst_13557,inst_13559);var state_13604__$1 = state_13604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13604__$1,(13),out,inst_13564);
} else
{if((state_val_13605 === (18)))
{var inst_13570 = (state_13604[(7)]);var inst_13579 = cljs.core.first.call(null,inst_13570);var state_13604__$1 = state_13604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13604__$1,(20),out,inst_13579);
} else
{if((state_val_13605 === (8)))
{var inst_13558 = (state_13604[(8)]);var inst_13559 = (state_13604[(10)]);var inst_13561 = (inst_13559 < inst_13558);var inst_13562 = inst_13561;var state_13604__$1 = state_13604;if(cljs.core.truth_(inst_13562))
{var statearr_13638_13669 = state_13604__$1;(statearr_13638_13669[(1)] = (10));
} else
{var statearr_13639_13670 = state_13604__$1;(statearr_13639_13670[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto__))
;return ((function (switch__8207__auto__,c__8272__auto__){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13643[(0)] = state_machine__8208__auto__);
(statearr_13643[(1)] = (1));
return statearr_13643;
});
var state_machine__8208__auto____1 = (function (state_13604){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13604);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13644){if((e13644 instanceof Object))
{var ex__8211__auto__ = e13644;var statearr_13645_13671 = state_13604;(statearr_13645_13671[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13644;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13672 = state_13604;
state_13604 = G__13672;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13604){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto__))
})();var state__8274__auto__ = (function (){var statearr_13646 = f__8273__auto__.call(null);(statearr_13646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto__);
return statearr_13646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto__))
);
return c__8272__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___13769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___13769,out){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___13769,out){
return (function (state_13744){var state_val_13745 = (state_13744[(1)]);if((state_val_13745 === (7)))
{var inst_13739 = (state_13744[(2)]);var state_13744__$1 = state_13744;var statearr_13746_13770 = state_13744__$1;(statearr_13746_13770[(2)] = inst_13739);
(statearr_13746_13770[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (1)))
{var inst_13721 = null;var state_13744__$1 = (function (){var statearr_13747 = state_13744;(statearr_13747[(7)] = inst_13721);
return statearr_13747;
})();var statearr_13748_13771 = state_13744__$1;(statearr_13748_13771[(2)] = null);
(statearr_13748_13771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (4)))
{var inst_13724 = (state_13744[(8)]);var inst_13724__$1 = (state_13744[(2)]);var inst_13725 = (inst_13724__$1 == null);var inst_13726 = cljs.core.not.call(null,inst_13725);var state_13744__$1 = (function (){var statearr_13749 = state_13744;(statearr_13749[(8)] = inst_13724__$1);
return statearr_13749;
})();if(inst_13726)
{var statearr_13750_13772 = state_13744__$1;(statearr_13750_13772[(1)] = (5));
} else
{var statearr_13751_13773 = state_13744__$1;(statearr_13751_13773[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (6)))
{var state_13744__$1 = state_13744;var statearr_13752_13774 = state_13744__$1;(statearr_13752_13774[(2)] = null);
(statearr_13752_13774[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (3)))
{var inst_13741 = (state_13744[(2)]);var inst_13742 = cljs.core.async.close_BANG_.call(null,out);var state_13744__$1 = (function (){var statearr_13753 = state_13744;(statearr_13753[(9)] = inst_13741);
return statearr_13753;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13744__$1,inst_13742);
} else
{if((state_val_13745 === (2)))
{var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13744__$1,(4),ch);
} else
{if((state_val_13745 === (11)))
{var inst_13724 = (state_13744[(8)]);var inst_13733 = (state_13744[(2)]);var inst_13721 = inst_13724;var state_13744__$1 = (function (){var statearr_13754 = state_13744;(statearr_13754[(7)] = inst_13721);
(statearr_13754[(10)] = inst_13733);
return statearr_13754;
})();var statearr_13755_13775 = state_13744__$1;(statearr_13755_13775[(2)] = null);
(statearr_13755_13775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (9)))
{var inst_13724 = (state_13744[(8)]);var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13744__$1,(11),out,inst_13724);
} else
{if((state_val_13745 === (5)))
{var inst_13721 = (state_13744[(7)]);var inst_13724 = (state_13744[(8)]);var inst_13728 = cljs.core._EQ_.call(null,inst_13724,inst_13721);var state_13744__$1 = state_13744;if(inst_13728)
{var statearr_13757_13776 = state_13744__$1;(statearr_13757_13776[(1)] = (8));
} else
{var statearr_13758_13777 = state_13744__$1;(statearr_13758_13777[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (10)))
{var inst_13736 = (state_13744[(2)]);var state_13744__$1 = state_13744;var statearr_13759_13778 = state_13744__$1;(statearr_13759_13778[(2)] = inst_13736);
(statearr_13759_13778[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13745 === (8)))
{var inst_13721 = (state_13744[(7)]);var tmp13756 = inst_13721;var inst_13721__$1 = tmp13756;var state_13744__$1 = (function (){var statearr_13760 = state_13744;(statearr_13760[(7)] = inst_13721__$1);
return statearr_13760;
})();var statearr_13761_13779 = state_13744__$1;(statearr_13761_13779[(2)] = null);
(statearr_13761_13779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___13769,out))
;return ((function (switch__8207__auto__,c__8272__auto___13769,out){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13765 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13765[(0)] = state_machine__8208__auto__);
(statearr_13765[(1)] = (1));
return statearr_13765;
});
var state_machine__8208__auto____1 = (function (state_13744){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13744);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13766){if((e13766 instanceof Object))
{var ex__8211__auto__ = e13766;var statearr_13767_13780 = state_13744;(statearr_13767_13780[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13781 = state_13744;
state_13744 = G__13781;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13744){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___13769,out))
})();var state__8274__auto__ = (function (){var statearr_13768 = f__8273__auto__.call(null);(statearr_13768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13769);
return statearr_13768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___13769,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___13916 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___13916,out){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___13916,out){
return (function (state_13886){var state_val_13887 = (state_13886[(1)]);if((state_val_13887 === (7)))
{var inst_13882 = (state_13886[(2)]);var state_13886__$1 = state_13886;var statearr_13888_13917 = state_13886__$1;(statearr_13888_13917[(2)] = inst_13882);
(statearr_13888_13917[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (1)))
{var inst_13849 = (new Array(n));var inst_13850 = inst_13849;var inst_13851 = (0);var state_13886__$1 = (function (){var statearr_13889 = state_13886;(statearr_13889[(7)] = inst_13850);
(statearr_13889[(8)] = inst_13851);
return statearr_13889;
})();var statearr_13890_13918 = state_13886__$1;(statearr_13890_13918[(2)] = null);
(statearr_13890_13918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (4)))
{var inst_13854 = (state_13886[(9)]);var inst_13854__$1 = (state_13886[(2)]);var inst_13855 = (inst_13854__$1 == null);var inst_13856 = cljs.core.not.call(null,inst_13855);var state_13886__$1 = (function (){var statearr_13891 = state_13886;(statearr_13891[(9)] = inst_13854__$1);
return statearr_13891;
})();if(inst_13856)
{var statearr_13892_13919 = state_13886__$1;(statearr_13892_13919[(1)] = (5));
} else
{var statearr_13893_13920 = state_13886__$1;(statearr_13893_13920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (15)))
{var inst_13876 = (state_13886[(2)]);var state_13886__$1 = state_13886;var statearr_13894_13921 = state_13886__$1;(statearr_13894_13921[(2)] = inst_13876);
(statearr_13894_13921[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (13)))
{var state_13886__$1 = state_13886;var statearr_13895_13922 = state_13886__$1;(statearr_13895_13922[(2)] = null);
(statearr_13895_13922[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (6)))
{var inst_13851 = (state_13886[(8)]);var inst_13872 = (inst_13851 > (0));var state_13886__$1 = state_13886;if(cljs.core.truth_(inst_13872))
{var statearr_13896_13923 = state_13886__$1;(statearr_13896_13923[(1)] = (12));
} else
{var statearr_13897_13924 = state_13886__$1;(statearr_13897_13924[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (3)))
{var inst_13884 = (state_13886[(2)]);var state_13886__$1 = state_13886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13886__$1,inst_13884);
} else
{if((state_val_13887 === (12)))
{var inst_13850 = (state_13886[(7)]);var inst_13874 = cljs.core.vec.call(null,inst_13850);var state_13886__$1 = state_13886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13886__$1,(15),out,inst_13874);
} else
{if((state_val_13887 === (2)))
{var state_13886__$1 = state_13886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13886__$1,(4),ch);
} else
{if((state_val_13887 === (11)))
{var inst_13866 = (state_13886[(2)]);var inst_13867 = (new Array(n));var inst_13850 = inst_13867;var inst_13851 = (0);var state_13886__$1 = (function (){var statearr_13898 = state_13886;(statearr_13898[(10)] = inst_13866);
(statearr_13898[(7)] = inst_13850);
(statearr_13898[(8)] = inst_13851);
return statearr_13898;
})();var statearr_13899_13925 = state_13886__$1;(statearr_13899_13925[(2)] = null);
(statearr_13899_13925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (9)))
{var inst_13850 = (state_13886[(7)]);var inst_13864 = cljs.core.vec.call(null,inst_13850);var state_13886__$1 = state_13886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13886__$1,(11),out,inst_13864);
} else
{if((state_val_13887 === (5)))
{var inst_13850 = (state_13886[(7)]);var inst_13859 = (state_13886[(11)]);var inst_13851 = (state_13886[(8)]);var inst_13854 = (state_13886[(9)]);var inst_13858 = (inst_13850[inst_13851] = inst_13854);var inst_13859__$1 = (inst_13851 + (1));var inst_13860 = (inst_13859__$1 < n);var state_13886__$1 = (function (){var statearr_13900 = state_13886;(statearr_13900[(11)] = inst_13859__$1);
(statearr_13900[(12)] = inst_13858);
return statearr_13900;
})();if(cljs.core.truth_(inst_13860))
{var statearr_13901_13926 = state_13886__$1;(statearr_13901_13926[(1)] = (8));
} else
{var statearr_13902_13927 = state_13886__$1;(statearr_13902_13927[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (14)))
{var inst_13879 = (state_13886[(2)]);var inst_13880 = cljs.core.async.close_BANG_.call(null,out);var state_13886__$1 = (function (){var statearr_13904 = state_13886;(statearr_13904[(13)] = inst_13879);
return statearr_13904;
})();var statearr_13905_13928 = state_13886__$1;(statearr_13905_13928[(2)] = inst_13880);
(statearr_13905_13928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (10)))
{var inst_13870 = (state_13886[(2)]);var state_13886__$1 = state_13886;var statearr_13906_13929 = state_13886__$1;(statearr_13906_13929[(2)] = inst_13870);
(statearr_13906_13929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13887 === (8)))
{var inst_13850 = (state_13886[(7)]);var inst_13859 = (state_13886[(11)]);var tmp13903 = inst_13850;var inst_13850__$1 = tmp13903;var inst_13851 = inst_13859;var state_13886__$1 = (function (){var statearr_13907 = state_13886;(statearr_13907[(7)] = inst_13850__$1);
(statearr_13907[(8)] = inst_13851);
return statearr_13907;
})();var statearr_13908_13930 = state_13886__$1;(statearr_13908_13930[(2)] = null);
(statearr_13908_13930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___13916,out))
;return ((function (switch__8207__auto__,c__8272__auto___13916,out){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_13912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13912[(0)] = state_machine__8208__auto__);
(statearr_13912[(1)] = (1));
return statearr_13912;
});
var state_machine__8208__auto____1 = (function (state_13886){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_13886);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e13913){if((e13913 instanceof Object))
{var ex__8211__auto__ = e13913;var statearr_13914_13931 = state_13886;(statearr_13914_13931[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13913;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13932 = state_13886;
state_13886 = G__13932;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_13886){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_13886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___13916,out))
})();var state__8274__auto__ = (function (){var statearr_13915 = f__8273__auto__.call(null);(statearr_13915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___13916);
return statearr_13915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___13916,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8272__auto___14075 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8272__auto___14075,out){
return (function (){var f__8273__auto__ = (function (){var switch__8207__auto__ = ((function (c__8272__auto___14075,out){
return (function (state_14045){var state_val_14046 = (state_14045[(1)]);if((state_val_14046 === (7)))
{var inst_14041 = (state_14045[(2)]);var state_14045__$1 = state_14045;var statearr_14047_14076 = state_14045__$1;(statearr_14047_14076[(2)] = inst_14041);
(statearr_14047_14076[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (1)))
{var inst_14004 = [];var inst_14005 = inst_14004;var inst_14006 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14045__$1 = (function (){var statearr_14048 = state_14045;(statearr_14048[(7)] = inst_14006);
(statearr_14048[(8)] = inst_14005);
return statearr_14048;
})();var statearr_14049_14077 = state_14045__$1;(statearr_14049_14077[(2)] = null);
(statearr_14049_14077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (4)))
{var inst_14009 = (state_14045[(9)]);var inst_14009__$1 = (state_14045[(2)]);var inst_14010 = (inst_14009__$1 == null);var inst_14011 = cljs.core.not.call(null,inst_14010);var state_14045__$1 = (function (){var statearr_14050 = state_14045;(statearr_14050[(9)] = inst_14009__$1);
return statearr_14050;
})();if(inst_14011)
{var statearr_14051_14078 = state_14045__$1;(statearr_14051_14078[(1)] = (5));
} else
{var statearr_14052_14079 = state_14045__$1;(statearr_14052_14079[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (15)))
{var inst_14035 = (state_14045[(2)]);var state_14045__$1 = state_14045;var statearr_14053_14080 = state_14045__$1;(statearr_14053_14080[(2)] = inst_14035);
(statearr_14053_14080[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (13)))
{var state_14045__$1 = state_14045;var statearr_14054_14081 = state_14045__$1;(statearr_14054_14081[(2)] = null);
(statearr_14054_14081[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (6)))
{var inst_14005 = (state_14045[(8)]);var inst_14030 = inst_14005.length;var inst_14031 = (inst_14030 > (0));var state_14045__$1 = state_14045;if(cljs.core.truth_(inst_14031))
{var statearr_14055_14082 = state_14045__$1;(statearr_14055_14082[(1)] = (12));
} else
{var statearr_14056_14083 = state_14045__$1;(statearr_14056_14083[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (3)))
{var inst_14043 = (state_14045[(2)]);var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14045__$1,inst_14043);
} else
{if((state_val_14046 === (12)))
{var inst_14005 = (state_14045[(8)]);var inst_14033 = cljs.core.vec.call(null,inst_14005);var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14045__$1,(15),out,inst_14033);
} else
{if((state_val_14046 === (2)))
{var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14045__$1,(4),ch);
} else
{if((state_val_14046 === (11)))
{var inst_14009 = (state_14045[(9)]);var inst_14013 = (state_14045[(10)]);var inst_14023 = (state_14045[(2)]);var inst_14024 = [];var inst_14025 = inst_14024.push(inst_14009);var inst_14005 = inst_14024;var inst_14006 = inst_14013;var state_14045__$1 = (function (){var statearr_14057 = state_14045;(statearr_14057[(7)] = inst_14006);
(statearr_14057[(11)] = inst_14023);
(statearr_14057[(8)] = inst_14005);
(statearr_14057[(12)] = inst_14025);
return statearr_14057;
})();var statearr_14058_14084 = state_14045__$1;(statearr_14058_14084[(2)] = null);
(statearr_14058_14084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (9)))
{var inst_14005 = (state_14045[(8)]);var inst_14021 = cljs.core.vec.call(null,inst_14005);var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14045__$1,(11),out,inst_14021);
} else
{if((state_val_14046 === (5)))
{var inst_14009 = (state_14045[(9)]);var inst_14006 = (state_14045[(7)]);var inst_14013 = (state_14045[(10)]);var inst_14013__$1 = f.call(null,inst_14009);var inst_14014 = cljs.core._EQ_.call(null,inst_14013__$1,inst_14006);var inst_14015 = cljs.core.keyword_identical_QMARK_.call(null,inst_14006,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14016 = (inst_14014) || (inst_14015);var state_14045__$1 = (function (){var statearr_14059 = state_14045;(statearr_14059[(10)] = inst_14013__$1);
return statearr_14059;
})();if(cljs.core.truth_(inst_14016))
{var statearr_14060_14085 = state_14045__$1;(statearr_14060_14085[(1)] = (8));
} else
{var statearr_14061_14086 = state_14045__$1;(statearr_14061_14086[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (14)))
{var inst_14038 = (state_14045[(2)]);var inst_14039 = cljs.core.async.close_BANG_.call(null,out);var state_14045__$1 = (function (){var statearr_14063 = state_14045;(statearr_14063[(13)] = inst_14038);
return statearr_14063;
})();var statearr_14064_14087 = state_14045__$1;(statearr_14064_14087[(2)] = inst_14039);
(statearr_14064_14087[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (10)))
{var inst_14028 = (state_14045[(2)]);var state_14045__$1 = state_14045;var statearr_14065_14088 = state_14045__$1;(statearr_14065_14088[(2)] = inst_14028);
(statearr_14065_14088[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14046 === (8)))
{var inst_14009 = (state_14045[(9)]);var inst_14013 = (state_14045[(10)]);var inst_14005 = (state_14045[(8)]);var inst_14018 = inst_14005.push(inst_14009);var tmp14062 = inst_14005;var inst_14005__$1 = tmp14062;var inst_14006 = inst_14013;var state_14045__$1 = (function (){var statearr_14066 = state_14045;(statearr_14066[(7)] = inst_14006);
(statearr_14066[(14)] = inst_14018);
(statearr_14066[(8)] = inst_14005__$1);
return statearr_14066;
})();var statearr_14067_14089 = state_14045__$1;(statearr_14067_14089[(2)] = null);
(statearr_14067_14089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8272__auto___14075,out))
;return ((function (switch__8207__auto__,c__8272__auto___14075,out){
return (function() {
var state_machine__8208__auto__ = null;
var state_machine__8208__auto____0 = (function (){var statearr_14071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14071[(0)] = state_machine__8208__auto__);
(statearr_14071[(1)] = (1));
return statearr_14071;
});
var state_machine__8208__auto____1 = (function (state_14045){while(true){
var ret_value__8209__auto__ = (function (){try{while(true){
var result__8210__auto__ = switch__8207__auto__.call(null,state_14045);if(cljs.core.keyword_identical_QMARK_.call(null,result__8210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8210__auto__;
}
break;
}
}catch (e14072){if((e14072 instanceof Object))
{var ex__8211__auto__ = e14072;var statearr_14073_14090 = state_14045;(statearr_14073_14090[(5)] = ex__8211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14072;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14091 = state_14045;
state_14045 = G__14091;
continue;
}
} else
{return ret_value__8209__auto__;
}
break;
}
});
state_machine__8208__auto__ = function(state_14045){
switch(arguments.length){
case 0:
return state_machine__8208__auto____0.call(this);
case 1:
return state_machine__8208__auto____1.call(this,state_14045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8208__auto____0;
state_machine__8208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8208__auto____1;
return state_machine__8208__auto__;
})()
;})(switch__8207__auto__,c__8272__auto___14075,out))
})();var state__8274__auto__ = (function (){var statearr_14074 = f__8273__auto__.call(null);(statearr_14074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8272__auto___14075);
return statearr_14074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8274__auto__);
});})(c__8272__auto___14075,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
