!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){return new Promise((function(t,r){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}var u=document.querySelector(".form");u.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,r=n.step,a=n.amount,c=Number(t.value),l=Number(r.value),f=Number(a.value);if(f<0||l<0||c<0)return void o.Notify.failure("Please enter number more then 0");for(var s=1;s<=f;s+=1)i(s,c).then((function(e){console.log(e),o.Notify.success(e)})).catch((function(e){o.Notify.failure(e)})),c+=l;u.reset()}))}();
//# sourceMappingURL=03-promises.1bd8c01c.js.map