"use strict";
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 6052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8494);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(306);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_Api__WEBPACK_IMPORTED_MODULE_4__]);
_api_Api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Login() {
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    async function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
            setError("");
            setIsLoading(true);
            console.log("email", email);
            console.log("password", password);
            try {
                const userData = {
                    email,
                    password
                };
                console.log(userData);
                const response = await (0,_api_Api__WEBPACK_IMPORTED_MODULE_4__/* .login */ .x4)(userData);
                // extract token from response and save it into local storage
                const { token } = response;
                localStorage.setItem("jwttoken", token);
                // Redirect the user to the profile page
                router.push("/profile");
            } catch (error) {
                console.error("Login error:", error);
                setError("Invalid email address or password");
            }
            setIsLoading(false);
        } else {
            setError("Invalid email address or password");
        }
    }
    function validateForm() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const minLength = 6;
        if (!email || !emailRegex.test(email)) {
            return false;
        }
        if (!password || password.length < minLength) {
            return false;
        }
        return true;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center h-screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "max-w-lg w-3/4 p-8 bg-white rounded shadow-md",
                    onSubmit: handleSubmit,
                    children: [
                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-red-500 mb-6",
                            children: error
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    autoFocus: true,
                                    type: "email",
                                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: "Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password",
                                    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "w-full py-2 px-4 bg-[#ff6661] hover:bg-[#ff6661]/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white rounded-md",
                            children: "Login"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;