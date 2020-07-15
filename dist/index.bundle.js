(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "HEd1":
/*!************************!*\
  !*** ./src/printMe.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


function printMe() {
  const time = new Date();
  console.log(
    `Hi there, How are you?
  The current time is ${moment__WEBPACK_IMPORTED_MODULE_0___default()(time).format('LL')}`,
  );
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _printMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printMe */ "HEd1");
/* eslint-disable no-use-before-define */



const button = document.getElementById('justAButton');

button.addEventListener('click', () => {
  const timeToAdd = createTime();
  const timeDiv = document.querySelector('.timeDiv');
  button.classList.add('button');
  timeDiv.innerHTML = timeToAdd;
  Object(_printMe__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

function createTime() {
  const currentTime = new Date();
  const humanReadableDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentTime).format('LLLL');

  return humanReadableDate;
}


/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnRNZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBTSxvQkFBb0I7QUFDbEQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7O0FDL1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNEI7QUFDSTs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQU87QUFDVCxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQU07O0FBRWxDO0FBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcbiAgY29uc29sZS5sb2coXG4gICAgYEhpIHRoZXJlLCBIb3cgYXJlIHlvdT9cbiAgVGhlIGN1cnJlbnQgdGltZSBpcyAke21vbWVudCh0aW1lKS5mb3JtYXQoJ0xMJyl9YCxcbiAgKTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIksvdGNcIixcblx0XCIuL2FmLmpzXCI6IFwiSy90Y1wiLFxuXHRcIi4vYXJcIjogXCJqbk80XCIsXG5cdFwiLi9hci1kelwiOiBcIm8xYkVcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwibzFiRVwiLFxuXHRcIi4vYXIta3dcIjogXCJRajRKXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIlFqNEpcIixcblx0XCIuL2FyLWx5XCI6IFwiSFAzaFwiLFxuXHRcIi4vYXItbHkuanNcIjogXCJIUDNoXCIsXG5cdFwiLi9hci1tYVwiOiBcIkNvUkpcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiQ29SSlwiLFxuXHRcIi4vYXItc2FcIjogXCJnakNUXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcImdqQ1RcIixcblx0XCIuL2FyLXRuXCI6IFwiYllNNlwiLFxuXHRcIi4vYXItdG4uanNcIjogXCJiWU02XCIsXG5cdFwiLi9hci5qc1wiOiBcImpuTzRcIixcblx0XCIuL2F6XCI6IFwiU0Z4V1wiLFxuXHRcIi4vYXouanNcIjogXCJTRnhXXCIsXG5cdFwiLi9iZVwiOiBcIkg4RURcIixcblx0XCIuL2JlLmpzXCI6IFwiSDhFRFwiLFxuXHRcIi4vYmdcIjogXCJoS3JzXCIsXG5cdFwiLi9iZy5qc1wiOiBcImhLcnNcIixcblx0XCIuL2JtXCI6IFwicC9yTFwiLFxuXHRcIi4vYm0uanNcIjogXCJwL3JMXCIsXG5cdFwiLi9iblwiOiBcImtFT2FcIixcblx0XCIuL2JuLmpzXCI6IFwia0VPYVwiLFxuXHRcIi4vYm9cIjogXCIwbW8rXCIsXG5cdFwiLi9iby5qc1wiOiBcIjBtbytcIixcblx0XCIuL2JyXCI6IFwiYUlkZlwiLFxuXHRcIi4vYnIuanNcIjogXCJhSWRmXCIsXG5cdFwiLi9ic1wiOiBcIkpWU0pcIixcblx0XCIuL2JzLmpzXCI6IFwiSlZTSlwiLFxuXHRcIi4vY2FcIjogXCIxeFo0XCIsXG5cdFwiLi9jYS5qc1wiOiBcIjF4WjRcIixcblx0XCIuL2NzXCI6IFwiUEEyclwiLFxuXHRcIi4vY3MuanNcIjogXCJQQTJyXCIsXG5cdFwiLi9jdlwiOiBcIkEreGFcIixcblx0XCIuL2N2LmpzXCI6IFwiQSt4YVwiLFxuXHRcIi4vY3lcIjogXCJsNWVwXCIsXG5cdFwiLi9jeS5qc1wiOiBcImw1ZXBcIixcblx0XCIuL2RhXCI6IFwiRHhRdlwiLFxuXHRcIi4vZGEuanNcIjogXCJEeFF2XCIsXG5cdFwiLi9kZVwiOiBcInRHbFhcIixcblx0XCIuL2RlLWF0XCI6IFwicyt1a1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCJzK3VrXCIsXG5cdFwiLi9kZS1jaFwiOiBcInUzR0lcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwidTNHSVwiLFxuXHRcIi4vZGUuanNcIjogXCJ0R2xYXCIsXG5cdFwiLi9kdlwiOiBcIldZcmpcIixcblx0XCIuL2R2LmpzXCI6IFwiV1lyalwiLFxuXHRcIi4vZWxcIjogXCJqVWVZXCIsXG5cdFwiLi9lbC5qc1wiOiBcImpVZVlcIixcblx0XCIuL2VuLWF1XCI6IFwiRG12aVwiLFxuXHRcIi4vZW4tYXUuanNcIjogXCJEbXZpXCIsXG5cdFwiLi9lbi1jYVwiOiBcIk9JWWlcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiT0lZaVwiLFxuXHRcIi4vZW4tZ2JcIjogXCJPYWE3XCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIk9hYTdcIixcblx0XCIuL2VuLWllXCI6IFwiNGRPd1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCI0ZE93XCIsXG5cdFwiLi9lbi1pbFwiOiBcImN6TW9cIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiY3pNb1wiLFxuXHRcIi4vZW4taW5cIjogXCI3QzVRXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIjdDNVFcIixcblx0XCIuL2VuLW56XCI6IFwiYjFEeVwiLFxuXHRcIi4vZW4tbnouanNcIjogXCJiMUR5XCIsXG5cdFwiLi9lbi1zZ1wiOiBcInQrbXRcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwidCttdFwiLFxuXHRcIi4vZW9cIjogXCJaZHVvXCIsXG5cdFwiLi9lby5qc1wiOiBcIlpkdW9cIixcblx0XCIuL2VzXCI6IFwiaVl1TFwiLFxuXHRcIi4vZXMtZG9cIjogXCJDanpUXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIkNqelRcIixcblx0XCIuL2VzLXVzXCI6IFwiVmNscVwiLFxuXHRcIi4vZXMtdXMuanNcIjogXCJWY2xxXCIsXG5cdFwiLi9lcy5qc1wiOiBcImlZdUxcIixcblx0XCIuL2V0XCI6IFwiN0JqQ1wiLFxuXHRcIi4vZXQuanNcIjogXCI3QmpDXCIsXG5cdFwiLi9ldVwiOiBcIkQvSk1cIixcblx0XCIuL2V1LmpzXCI6IFwiRC9KTVwiLFxuXHRcIi4vZmFcIjogXCJqZlNDXCIsXG5cdFwiLi9mYS5qc1wiOiBcImpmU0NcIixcblx0XCIuL2ZpXCI6IFwiZ2VrQlwiLFxuXHRcIi4vZmkuanNcIjogXCJnZWtCXCIsXG5cdFwiLi9maWxcIjogXCIxcHBnXCIsXG5cdFwiLi9maWwuanNcIjogXCIxcHBnXCIsXG5cdFwiLi9mb1wiOiBcIkJ5RjRcIixcblx0XCIuL2ZvLmpzXCI6IFwiQnlGNFwiLFxuXHRcIi4vZnJcIjogXCJueVljXCIsXG5cdFwiLi9mci1jYVwiOiBcIjJmam5cIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiMmZqblwiLFxuXHRcIi4vZnItY2hcIjogXCJEa2t5XCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIkRra3lcIixcblx0XCIuL2ZyLmpzXCI6IFwibnlZY1wiLFxuXHRcIi4vZnlcIjogXCJjUml4XCIsXG5cdFwiLi9meS5qc1wiOiBcImNSaXhcIixcblx0XCIuL2dhXCI6IFwiVVNDeFwiLFxuXHRcIi4vZ2EuanNcIjogXCJVU0N4XCIsXG5cdFwiLi9nZFwiOiBcIjlyUmlcIixcblx0XCIuL2dkLmpzXCI6IFwiOXJSaVwiLFxuXHRcIi4vZ2xcIjogXCJpRURkXCIsXG5cdFwiLi9nbC5qc1wiOiBcImlFRGRcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwicXZKb1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCJxdkpvXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIkRLcitcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiREtyK1wiLFxuXHRcIi4vZ3VcIjogXCI0TVYzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIjRNVjNcIixcblx0XCIuL2hlXCI6IFwieDZwSFwiLFxuXHRcIi4vaGUuanNcIjogXCJ4NnBIXCIsXG5cdFwiLi9oaVwiOiBcIjNFMXJcIixcblx0XCIuL2hpLmpzXCI6IFwiM0UxclwiLFxuXHRcIi4vaHJcIjogXCJTNmxuXCIsXG5cdFwiLi9oci5qc1wiOiBcIlM2bG5cIixcblx0XCIuL2h1XCI6IFwiV3hSbFwiLFxuXHRcIi4vaHUuanNcIjogXCJXeFJsXCIsXG5cdFwiLi9oeS1hbVwiOiBcIjFyWXlcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiMXJZeVwiLFxuXHRcIi4vaWRcIjogXCJVRGhSXCIsXG5cdFwiLi9pZC5qc1wiOiBcIlVEaFJcIixcblx0XCIuL2lzXCI6IFwiQlZnM1wiLFxuXHRcIi4vaXMuanNcIjogXCJCVmczXCIsXG5cdFwiLi9pdFwiOiBcImJwaWhcIixcblx0XCIuL2l0LWNoXCI6IFwiYnhLWFwiLFxuXHRcIi4vaXQtY2guanNcIjogXCJieEtYXCIsXG5cdFwiLi9pdC5qc1wiOiBcImJwaWhcIixcblx0XCIuL2phXCI6IFwiQjU1TlwiLFxuXHRcIi4vamEuanNcIjogXCJCNTVOXCIsXG5cdFwiLi9qdlwiOiBcInRVQ3ZcIixcblx0XCIuL2p2LmpzXCI6IFwidFVDdlwiLFxuXHRcIi4va2FcIjogXCJJQnRaXCIsXG5cdFwiLi9rYS5qc1wiOiBcIklCdFpcIixcblx0XCIuL2trXCI6IFwiYlhtN1wiLFxuXHRcIi4va2suanNcIjogXCJiWG03XCIsXG5cdFwiLi9rbVwiOiBcIjZCMFlcIixcblx0XCIuL2ttLmpzXCI6IFwiNkIwWVwiLFxuXHRcIi4va25cIjogXCJQcEl3XCIsXG5cdFwiLi9rbi5qc1wiOiBcIlBwSXdcIixcblx0XCIuL2tvXCI6IFwiSXZpK1wiLFxuXHRcIi4va28uanNcIjogXCJJdmkrXCIsXG5cdFwiLi9rdVwiOiBcIkpDRi9cIixcblx0XCIuL2t1LmpzXCI6IFwiSkNGL1wiLFxuXHRcIi4va3lcIjogXCJsZ250XCIsXG5cdFwiLi9reS5qc1wiOiBcImxnbnRcIixcblx0XCIuL2xiXCI6IFwiUkF3UVwiLFxuXHRcIi4vbGIuanNcIjogXCJSQXdRXCIsXG5cdFwiLi9sb1wiOiBcInNwM3pcIixcblx0XCIuL2xvLmpzXCI6IFwic3AzelwiLFxuXHRcIi4vbHRcIjogXCJKdmxXXCIsXG5cdFwiLi9sdC5qc1wiOiBcIkp2bFdcIixcblx0XCIuL2x2XCI6IFwidVh3SVwiLFxuXHRcIi4vbHYuanNcIjogXCJ1WHdJXCIsXG5cdFwiLi9tZVwiOiBcIktUejBcIixcblx0XCIuL21lLmpzXCI6IFwiS1R6MFwiLFxuXHRcIi4vbWlcIjogXCJhSXNuXCIsXG5cdFwiLi9taS5qc1wiOiBcImFJc25cIixcblx0XCIuL21rXCI6IFwiYVFrVVwiLFxuXHRcIi4vbWsuanNcIjogXCJhUWtVXCIsXG5cdFwiLi9tbFwiOiBcIkF2dllcIixcblx0XCIuL21sLmpzXCI6IFwiQXZ2WVwiLFxuXHRcIi4vbW5cIjogXCJsWXRRXCIsXG5cdFwiLi9tbi5qc1wiOiBcImxZdFFcIixcblx0XCIuL21yXCI6IFwiT2IwWlwiLFxuXHRcIi4vbXIuanNcIjogXCJPYjBaXCIsXG5cdFwiLi9tc1wiOiBcIjYrUUJcIixcblx0XCIuL21zLW15XCI6IFwiWkFNUFwiLFxuXHRcIi4vbXMtbXkuanNcIjogXCJaQU1QXCIsXG5cdFwiLi9tcy5qc1wiOiBcIjYrUUJcIixcblx0XCIuL210XCI6IFwiRzBVeVwiLFxuXHRcIi4vbXQuanNcIjogXCJHMFV5XCIsXG5cdFwiLi9teVwiOiBcImhvbkZcIixcblx0XCIuL215LmpzXCI6IFwiaG9uRlwiLFxuXHRcIi4vbmJcIjogXCJiT010XCIsXG5cdFwiLi9uYi5qc1wiOiBcImJPTXRcIixcblx0XCIuL25lXCI6IFwiT2prVFwiLFxuXHRcIi4vbmUuanNcIjogXCJPamtUXCIsXG5cdFwiLi9ubFwiOiBcIitzMGdcIixcblx0XCIuL25sLWJlXCI6IFwiMnlrdlwiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIyeWt2XCIsXG5cdFwiLi9ubC5qc1wiOiBcIitzMGdcIixcblx0XCIuL25uXCI6IFwidUV5ZVwiLFxuXHRcIi4vbm4uanNcIjogXCJ1RXllXCIsXG5cdFwiLi9vYy1sbmNcIjogXCJGbnV5XCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCJGbnV5XCIsXG5cdFwiLi9wYS1pblwiOiBcIjgvK1JcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiOC8rUlwiLFxuXHRcIi4vcGxcIjogXCJqVmRDXCIsXG5cdFwiLi9wbC5qc1wiOiBcImpWZENcIixcblx0XCIuL3B0XCI6IFwiOG1CRFwiLFxuXHRcIi4vcHQtYnJcIjogXCIwdFJrXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIjB0UmtcIixcblx0XCIuL3B0LmpzXCI6IFwiOG1CRFwiLFxuXHRcIi4vcm9cIjogXCJseXhvXCIsXG5cdFwiLi9yby5qc1wiOiBcImx5eG9cIixcblx0XCIuL3J1XCI6IFwibFh6b1wiLFxuXHRcIi4vcnUuanNcIjogXCJsWHpvXCIsXG5cdFwiLi9zZFwiOiBcIlo0UU1cIixcblx0XCIuL3NkLmpzXCI6IFwiWjRRTVwiLFxuXHRcIi4vc2VcIjogXCIvLzl3XCIsXG5cdFwiLi9zZS5qc1wiOiBcIi8vOXdcIixcblx0XCIuL3NpXCI6IFwiN2FWOVwiLFxuXHRcIi4vc2kuanNcIjogXCI3YVY5XCIsXG5cdFwiLi9za1wiOiBcImUrYWVcIixcblx0XCIuL3NrLmpzXCI6IFwiZSthZVwiLFxuXHRcIi4vc2xcIjogXCJnVlZLXCIsXG5cdFwiLi9zbC5qc1wiOiBcImdWVktcIixcblx0XCIuL3NxXCI6IFwieVBNc1wiLFxuXHRcIi4vc3EuanNcIjogXCJ5UE1zXCIsXG5cdFwiLi9zclwiOiBcInp4NlNcIixcblx0XCIuL3NyLWN5cmxcIjogXCJFK2xWXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiRStsVlwiLFxuXHRcIi4vc3IuanNcIjogXCJ6eDZTXCIsXG5cdFwiLi9zc1wiOiBcIlVyMURcIixcblx0XCIuL3NzLmpzXCI6IFwiVXIxRFwiLFxuXHRcIi4vc3ZcIjogXCJYNzA5XCIsXG5cdFwiLi9zdi5qc1wiOiBcIlg3MDlcIixcblx0XCIuL3N3XCI6IFwiZE53QVwiLFxuXHRcIi4vc3cuanNcIjogXCJkTndBXCIsXG5cdFwiLi90YVwiOiBcIlBlVVdcIixcblx0XCIuL3RhLmpzXCI6IFwiUGVVV1wiLFxuXHRcIi4vdGVcIjogXCJYTHZOXCIsXG5cdFwiLi90ZS5qc1wiOiBcIlhMdk5cIixcblx0XCIuL3RldFwiOiBcIlYyeDlcIixcblx0XCIuL3RldC5qc1wiOiBcIlYyeDlcIixcblx0XCIuL3RnXCI6IFwiT3h2NlwiLFxuXHRcIi4vdGcuanNcIjogXCJPeHY2XCIsXG5cdFwiLi90aFwiOiBcIkVPZ1dcIixcblx0XCIuL3RoLmpzXCI6IFwiRU9nV1wiLFxuXHRcIi4vdGtcIjogXCJXdjkxXCIsXG5cdFwiLi90ay5qc1wiOiBcIld2OTFcIixcblx0XCIuL3RsLXBoXCI6IFwiRHppMFwiLFxuXHRcIi4vdGwtcGguanNcIjogXCJEemkwXCIsXG5cdFwiLi90bGhcIjogXCJ6M1ZkXCIsXG5cdFwiLi90bGguanNcIjogXCJ6M1ZkXCIsXG5cdFwiLi90clwiOiBcIkRvSHJcIixcblx0XCIuL3RyLmpzXCI6IFwiRG9IclwiLFxuXHRcIi4vdHpsXCI6IFwiejFGQ1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiejFGQ1wiLFxuXHRcIi4vdHptXCI6IFwid1FrOVwiLFxuXHRcIi4vdHptLWxhdG5cIjogXCJ0VDNKXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcInRUM0pcIixcblx0XCIuL3R6bS5qc1wiOiBcIndRazlcIixcblx0XCIuL3VnLWNuXCI6IFwiWVJleFwiLFxuXHRcIi4vdWctY24uanNcIjogXCJZUmV4XCIsXG5cdFwiLi91a1wiOiBcInJhTHJcIixcblx0XCIuL3VrLmpzXCI6IFwicmFMclwiLFxuXHRcIi4vdXJcIjogXCJVcFFXXCIsXG5cdFwiLi91ci5qc1wiOiBcIlVwUVdcIixcblx0XCIuL3V6XCI6IFwiTG94b1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIkFRNjhcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCJBUTY4XCIsXG5cdFwiLi91ei5qc1wiOiBcIkxveG9cIixcblx0XCIuL3ZpXCI6IFwiS1NGOFwiLFxuXHRcIi4vdmkuanNcIjogXCJLU0Y4XCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi9YNXZcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiL1g1dlwiLFxuXHRcIi4veW9cIjogXCJmelBnXCIsXG5cdFwiLi95by5qc1wiOiBcImZ6UGdcIixcblx0XCIuL3poLWNuXCI6IFwiWERwZ1wiLFxuXHRcIi4vemgtY24uanNcIjogXCJYRHBnXCIsXG5cdFwiLi96aC1oa1wiOiBcIlNhdE9cIixcblx0XCIuL3poLWhrLmpzXCI6IFwiU2F0T1wiLFxuXHRcIi4vemgtbW9cIjogXCJPbXdIXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIk9td0hcIixcblx0XCIuL3poLXR3XCI6IFwia09wTlwiLFxuXHRcIi4vemgtdHcuanNcIjogXCJrT3BOXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIlJuaFpcIjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludE1lJztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2p1c3RBQnV0dG9uJyk7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgdGltZVRvQWRkID0gY3JlYXRlVGltZSgpO1xuICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVEaXYnKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICB0aW1lRGl2LmlubmVySFRNTCA9IHRpbWVUb0FkZDtcbiAgcHJpbnRNZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpbWUoKSB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBtb21lbnQoY3VycmVudFRpbWUpLmZvcm1hdCgnTExMTCcpO1xuXG4gIHJldHVybiBodW1hblJlYWRhYmxlRGF0ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=