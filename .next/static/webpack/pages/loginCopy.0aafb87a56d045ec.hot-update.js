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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./src/components/Nav.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginCopy() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // validate form\n    function validateForm() {\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        const minLength = 6;\n        if (!email || !emailRegex.test(email)) {\n            return false;\n        }\n        if (!password || password.length < minLength) {\n            return false;\n        }\n        return true;\n    }\n    async function handleSubmit(event) {\n        event.preventDefault();\n        if (validateForm()) {\n            setError(\"\");\n            setIsLoading(true);\n            try {\n                const userData = {\n                    email,\n                    password\n                };\n                const response = await (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.login)(userData);\n                // extract token from response and save it into local storage\n                const { token } = response;\n                localStorage.setItem(\"jwttoken\", token);\n                // Redirect the user to the profile page\n                router.push(\"/profile\");\n            } catch (error) {\n                console.error(\"Login error:\", error);\n                setError(\"Invalid email address or password\");\n            }\n            setIsLoading(false);\n        } else {\n            setError(\"Invalid email address or password\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-full flex-1 flex-col justify-center px-4 py-12 lg:px-6 bg-cloud\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:mx-auto sm:w-full sm:max-w-xl shadow-xl rounded-lg p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"mx-auto h-10 w-auto\",\n                            src: \"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600\",\n                            alt: \"Your Company\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10 sm:mx-auto sm:w-full sm:max-w-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"space-y-6\",\n                                action: \"#\",\n                                method: \"POST\",\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold text-center text-black mb-6\",\n                                        children: \"Log in to your account\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-red-500 mb-6 text-center\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                                children: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"email\",\n                                                    name: \"email\",\n                                                    type: \"email\",\n                                                    autoComplete: \"email\",\n                                                    required: true,\n                                                    className: \"block w-64 sm:w-full rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                                                    value: email,\n                                                    onChange: (e)=>setEmail(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-between\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"password\",\n                                                        className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                                        children: \"Password\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-sm\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\",\n                                                            className: \"font-semibold text-indigo-600 hover:text-indigo-500\",\n                                                            children: \"Forgot password?\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 105,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"password\",\n                                                    name: \"password\",\n                                                    type: \"password\",\n                                                    autoComplete: \"current-password\",\n                                                    required: true,\n                                                    className: \"block w-64 sm:w-full rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                                                    value: password,\n                                                    onChange: (e)=>setPassword(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 122,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCopy, \"BHcoUEOcxWwspAMtHX6MXrF352w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginCopy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginCopy);\nvar _c;\n$RefreshReg$(_c, \"LoginCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFQyxPQUFPSDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSzVDLDhEQUFDbkI7a0RBQ0MsNEVBQUN5Qjs0Q0FDQ1QsTUFBSzs0Q0FDTGYsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0EvSVMxQjs7UUFLUUgsa0RBQVNBOzs7S0FMakJHO0FBaUpULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbkNvcHkuanM/OTc0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vYXBpL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkNvcHkoKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gdmFsaWRhdGUgZm9ybVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcbiAgICBjb25zdCBtaW5MZW5ndGggPSA2O1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgIWVtYWlsUmVnZXgudGVzdChlbWFpbCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgc2V0RXJyb3IoJycpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0geyBlbWFpbCwgcGFzc3dvcmQgfTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxvZ2luKHVzZXJEYXRhKTtcclxuXHJcbiAgICAgICAgLy8gZXh0cmFjdCB0b2tlbiBmcm9tIHJlc3BvbnNlIGFuZCBzYXZlIGl0IGludG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3R0b2tlbicsIHRva2VuKTtcclxuICAgICAgICAvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcHJvZmlsZSBwYWdlXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldEVycm9yKCdJbnZhbGlkIGVtYWlsIGFkZHJlc3Mgb3IgcGFzc3dvcmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKCdJbnZhbGlkIGVtYWlsIGFkZHJlc3Mgb3IgcGFzc3dvcmQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTEyIGxnOnB4LTYgYmctY2xvdWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LXhsIHNoYWRvdy14bCByb3VuZGVkLWxnIHAtOFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTAgdy1hdXRvXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvbG9nb3MvbWFyay5zdmc/Y29sb3I9aW5kaWdvJnNoYWRlPTYwMFwiXHJcbiAgICAgICAgICAgIGFsdD1cIllvdXIgQ29tcGFueVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgc206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXcteGxcIj5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTZcIlxyXG4gICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4gICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtYmxhY2sgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgTG9nIGluIHRvIHlvdXIgYWNjb3VudFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtYi02IHRleHQtY2VudGVyXCI+e2Vycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctNjQgc206dy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktNCBweC02IHRleHQtZ3JheS05MDAgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby02MDAgc206dGV4dC1zbSBzbTpsZWFkaW5nLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy02NCBzbTp3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS00IHB4LTYgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtNiBweS00IHRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvcHk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTmF2IiwibG9naW4iLCJMb2dpbkNvcHkiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ2YWxpZGF0ZUZvcm0iLCJlbWFpbFJlZ2V4IiwibWluTGVuZ3RoIiwidGVzdCIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyRGF0YSIsInJlc3BvbnNlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwib25TdWJtaXQiLCJoMSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/loginCopy.js\n"));

/***/ })

});