"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IU: () => (/* binding */ signup),
/* harmony export */   PR: () => (/* binding */ getUser),
/* harmony export */   x4: () => (/* binding */ login)
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