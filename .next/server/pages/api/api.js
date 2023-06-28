"use strict";
(() => {
var exports = {};
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signup: () => (/* binding */ signup)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_BASE_URL = "https://api-dev.quicklyinc.com";
// Signup API call
const signup = async (userData)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${API_BASE_URL}/auth/signup`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// Login API call
const login = async (userData)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${API_BASE_URL}/auth/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
// User API call
const getUser = async (jwtToken)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${API_BASE_URL}/auth/user`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4754));
module.exports = __webpack_exports__;

})();