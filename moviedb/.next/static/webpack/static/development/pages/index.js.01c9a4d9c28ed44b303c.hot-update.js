webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MovieItem.js":
/*!*********************************!*\
  !*** ./components/MovieItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "F:\\Rifqi\\belajar-next-js\\moviedb\\components\\MovieItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MovieItem = function MovieItem(_ref) {
  var movies = _ref.movies,
      onMovieSelect = _ref.onMovieSelect;
  var URL_POSTER = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  console.log(onMovieSelect);

  if (!movies) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Loading...");
  }

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "3",
    onClick: function onClick() {
      return onMovieSelect;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    width: "100%",
    height: "200",
    src: URL_POSTER + movies.poster_path,
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, movies.title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, movies.overview.substring(0, 50), "..."))));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieItem);

/***/ })

})
//# sourceMappingURL=index.js.01c9a4d9c28ed44b303c.hot-update.js.map