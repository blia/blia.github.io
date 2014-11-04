var Foo = (function(){"use strict";var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var proto$0={};
  function Foo(msg){
    this.msg = msg
  }DP$0(Foo,"prototype",{"configurable":false,"enumerable":false,"writable":false});
  proto$0.show = function() {
    console.log(this.msg);
  };
MIXIN$0(Foo.prototype,proto$0);proto$0=void 0;return Foo;})();
