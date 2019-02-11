(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nav.default)();

_product.default.factoryProduct(1);

},{"./nav":2,"./product":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// creates the navbar
const factoryNav = () => {
  document.querySelector("#navbar").innerHTML = `<span><a href="#categories">Categories</a></span>
    <span><a href="#orders">Orders</a></span>
    <span><a href="./logout">Log Out</a></span>`;
};

var _default = factoryNav;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createCard = itemArray => {
  document.querySelector("#productList").innerHTML = "";
  itemArray.forEach(element => {
    document.querySelector("#productList").innerHTML += `<section>
        <div>${element.title}</div>
        <div>${element.desc}</div>
        <div>$${element.price}</div>
        <div>${element.quant}</div>
        <div><img src="${element.img}" /></div>
        </section>`;
  });
};

var _default = createCard;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFFQTs7QUFDQSxpQkFBWSxjQUFaLENBQTJCLENBQTNCOzs7Ozs7Ozs7O0FDSkE7QUFFQSxNQUFNLFVBQVUsR0FBRyxNQUFNO0FBQ3JCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBK0M7O2dEQUEvQztBQUdILENBSkQ7O2VBTWUsVTs7Ozs7Ozs7Ozs7QUNSZixNQUFNLFVBQVUsR0FBRyxTQUFTLElBQUk7QUFDNUIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixFQUF1QyxTQUF2QyxHQUFtRCxFQUFuRDtBQUNBLEVBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsT0FBTyxJQUFJO0FBQ3pCLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsU0FBdkMsSUFBcUQ7ZUFDOUMsT0FBTyxDQUFDLEtBQU07ZUFDZCxPQUFPLENBQUMsSUFBSztnQkFDWixPQUFPLENBQUMsS0FBTTtlQUNmLE9BQU8sQ0FBQyxLQUFNO3lCQUNKLE9BQU8sQ0FBQyxHQUFJO21CQUw3QjtBQU9ILEdBUkQ7QUFTSCxDQVhEOztlQWFlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZmFjdG9yeU5hdiBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBjYXJkRmFjdG9yeSBmcm9tIFwiLi9wcm9kdWN0XCI7XG5cbmZhY3RvcnlOYXYoKTtcbmNhcmRGYWN0b3J5LmZhY3RvcnlQcm9kdWN0KDEpOyIsIi8vIGNyZWF0ZXMgdGhlIG5hdmJhclxuXG5jb25zdCBmYWN0b3J5TmF2ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLmlubmVySFRNTCA9IGA8c3Bhbj48YSBocmVmPVwiI2NhdGVnb3JpZXNcIj5DYXRlZ29yaWVzPC9hPjwvc3Bhbj5cbiAgICA8c3Bhbj48YSBocmVmPVwiI29yZGVyc1wiPk9yZGVyczwvYT48L3NwYW4+XG4gICAgPHNwYW4+PGEgaHJlZj1cIi4vbG9nb3V0XCI+TG9nIE91dDwvYT48L3NwYW4+YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZhY3RvcnlOYXY7IiwiY29uc3QgY3JlYXRlQ2FyZCA9IGl0ZW1BcnJheSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9kdWN0TGlzdFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGl0ZW1BcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3RMaXN0XCIpLmlubmVySFRNTCArPSBgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+JHtlbGVtZW50LnRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2PiR7ZWxlbWVudC5kZXNjfTwvZGl2PlxuICAgICAgICA8ZGl2PiQke2VsZW1lbnQucHJpY2V9PC9kaXY+XG4gICAgICAgIDxkaXY+JHtlbGVtZW50LnF1YW50fTwvZGl2PlxuICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiJHtlbGVtZW50LmltZ31cIiAvPjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkOyJdfQ==
