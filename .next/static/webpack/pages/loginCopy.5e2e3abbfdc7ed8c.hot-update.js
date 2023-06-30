"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/loginCopy",{

/***/ "./src/pages/loginCopy.js":
/*!********************************!*\
  !*** ./src/pages/loginCopy.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./src/components/Nav.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginCopy() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // validate form\n    function validateForm() {\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        const minLength = 6;\n        if (!email || !emailRegex.test(email)) {\n            return false;\n        }\n        if (!password || password.length < minLength) {\n            return false;\n        }\n        return true;\n    }\n    async function handleSubmit(event) {\n        event.preventDefault();\n        if (validateForm()) {\n            setError(\"\");\n            setIsLoading(true);\n            try {\n                const userData = {\n                    email,\n                    password\n                };\n                const response = await (0,_api_api__WEBPACK_IMPORTED_MODULE_5__.login)(userData);\n                // extract token from response and save it into local storage\n                const { token } = response;\n                localStorage.setItem(\"jwttoken\", token);\n                // Redirect the user to the profile page\n                router.push(\"/profile\");\n            } catch (error) {\n                console.error(\"Login error:\", error);\n                setError(\"Invalid email address or password\");\n            }\n            setIsLoading(false);\n        } else {\n            setError(\"Invalid email address or password\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"flex min-h-full flex-1 flex-col justify-center px-4 py-12 lg:px-6 \",\n                children: [\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"8d7cf1d62fc7b5ef\",\n                        children: \"body.jsx-8d7cf1d62fc7b5ef{background-color:0}\"\n                    }, void 0, false, void 0, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"sm:mx-auto sm:w-full sm:max-w-xl shadow-xl rounded-lg p-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600\",\n                                alt: \"Your Company\",\n                                className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"mx-auto h-10 w-auto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"mt-10 sm:mx-auto sm:w-full sm:max-w-xl \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    action: \"#\",\n                                    method: \"POST\",\n                                    onSubmit: handleSubmit,\n                                    className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"space-y-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"text-3xl font-bold text-center text-black mb-6\",\n                                            children: \"Log in to your account\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"text-center\",\n                                            children: \"Welcome back! Please enter your details\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this),\n                                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"text-red-500 mb-6 text-center\",\n                                            children: error\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"jsx-8d7cf1d62fc7b5ef\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email\",\n                                                    className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"block text-sm font-medium leading-6 text-gray-900\",\n                                                    children: \"Email\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"mt-2\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        id: \"email\",\n                                                        name: \"email\",\n                                                        type: \"email\",\n                                                        autoComplete: \"email\",\n                                                        required: true,\n                                                        value: email,\n                                                        onChange: (e)=>setEmail(e.target.value),\n                                                        className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"block w-full rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"jsx-8d7cf1d62fc7b5ef\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"flex items-center justify-between\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"password\",\n                                                        className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"block text-sm font-medium leading-6 text-gray-900\",\n                                                        children: \"Password\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"mt-2\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        id: \"password\",\n                                                        name: \"password\",\n                                                        type: \"password\",\n                                                        autoComplete: \"current-password\",\n                                                        required: true,\n                                                        value: password,\n                                                        onChange: (e)=>setPassword(e.target.value),\n                                                        className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"block w-full  rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 121,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"jsx-8d7cf1d62fc7b5ef\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"jsx-8d7cf1d62fc7b5ef\" + \" \" + \"flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                                children: \"Log in to your account\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCopy, \"BHcoUEOcxWwspAMtHX6MXrF352w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginCopy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginCopy);\nvar _c;\n$RefreshReg$(_c, \"LoginCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0E7OztLQUxqQkc7QUFnSlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luQ29weS5qcz85NzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9hcGkvYXBpJztcclxuXHJcbmZ1bmN0aW9uIExvZ2luQ29weSgpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyB2YWxpZGF0ZSBmb3JtXHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcclxuICAgIGNvbnN0IG1pbkxlbmd0aCA9IDY7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXNzd29yZCB8fCBwYXNzd29yZC5sZW5ndGggPCBtaW5MZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBzZXRFcnJvcignJyk7XHJcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbG9naW4odXNlckRhdGEpO1xyXG5cclxuICAgICAgICAvLyBleHRyYWN0IHRva2VuIGZyb20gcmVzcG9uc2UgYW5kIHNhdmUgaXQgaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dHRva2VuJywgdG9rZW4pO1xyXG4gICAgICAgIC8vIFJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBwcm9maWxlIHBhZ2VcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0ludmFsaWQgZW1haWwgYWRkcmVzcyBvciBwYXNzd29yZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoJ0ludmFsaWQgZW1haWwgYWRkcmVzcyBvciBwYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXYgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLWZ1bGwgZmxleC0xIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMTIgbGc6cHgtNiBcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LXhsIHNoYWRvdy14bCByb3VuZGVkLWxnIHAtOFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTAgdy1hdXRvXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3MvbWFyay5zdmc/Y29sb3I9aW5kaWdvJnNoYWRlPTYwMFwiXHJcbiAgICAgICAgICAgIGFsdD1cIllvdXIgQ29tcGFueVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXcteGwgXCI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BhY2UteS02XCJcclxuICAgICAgICAgICAgICBhY3Rpb249XCIjXCJcclxuICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIExvZyBpbiB0byB5b3VyIGFjY291bnRcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIGJhY2shIFBsZWFzZSBlbnRlciB5b3VyIGRldGFpbHNcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTYgdGV4dC1jZW50ZXJcIj57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTQgcHgtNiB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsICByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTQgcHgtNiB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC02IHB5LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2cgaW4gdG8geW91ciBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db3B5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk5hdiIsImxvZ2luIiwiTG9naW5Db3B5IiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwidmFsaWRhdGVGb3JtIiwiZW1haWxSZWdleCIsIm1pbkxlbmd0aCIsInRlc3QiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlckRhdGEiLCJyZXNwb25zZSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJjb25zb2xlIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiZm9ybSIsImFjdGlvbiIsIm1ldGhvZCIsIm9uU3VibWl0IiwiaDEiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/loginCopy.js\n"));

/***/ })

});