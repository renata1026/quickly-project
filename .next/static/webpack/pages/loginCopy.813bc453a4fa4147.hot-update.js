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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./src/components/Nav.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginCopy() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // validate form\n    function validateForm() {\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        const minLength = 6;\n        if (!email || !emailRegex.test(email)) {\n            return false;\n        }\n        if (!password || password.length < minLength) {\n            return false;\n        }\n        return true;\n    }\n    async function handleSubmit(event) {\n        event.preventDefault();\n        if (validateForm()) {\n            setError(\"\");\n            setIsLoading(true);\n            try {\n                const userData = {\n                    email,\n                    password\n                };\n                const response = await (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.login)(userData);\n                // extract token from response and save it into local storage\n                const { token } = response;\n                localStorage.setItem(\"jwttoken\", token);\n                // Redirect the user to the profile page\n                router.push(\"/profile\");\n            } catch (error) {\n                console.error(\"Login error:\", error);\n                setError(\"Invalid email address or password\");\n            }\n            setIsLoading(false);\n        } else {\n            setError(\"Invalid email address or password\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-full flex-1 flex-col justify-center px-4 py-12 lg:px-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:mx-auto sm:w-full sm:max-w-xl shadow-xl rounded-lg p-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 sm:mx-auto sm:w-full sm:max-w-xl \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-6\",\n                            action: \"#\",\n                            method: \"POST\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-center text-black mb-6\",\n                                    children: \"Log in to your account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-center text-gray-900\",\n                                    children: \"Welcome back! Please enter your details\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 mb-6 text-center\",\n                                    children: error\n                                }, void 0, false, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block text-l font-bold leading-6 text-gray-700\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email\",\n                                                name: \"email\",\n                                                type: \"email\",\n                                                autoComplete: \"email\",\n                                                required: true,\n                                                className: \"block w-full rounded-md border-0 py-4 px-6 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6\",\n                                                value: email,\n                                                onChange: (e)=>setEmail(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"block text-l font-bold leading-6 text-gray-700\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                name: \"password\",\n                                                type: \"password\",\n                                                autoComplete: \"current-password\",\n                                                required: true,\n                                                className: \"block w-full  rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6\",\n                                                value: password,\n                                                onChange: (e)=>setPassword(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"flex w-full justify-center rounded-md bg-[##398194]-600 px-6 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#398194]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                        children: \"Log in to your account\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCopy, \"BHcoUEOcxWwspAMtHX6MXrF352w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginCopy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginCopy);\nvar _c;\n$RefreshReg$(_c, \"LoginCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBVWpCO0dBbklTMUI7O1FBS1FILGtEQUFTQTs7O0tBTGpCRztBQXFJVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW5Db3B5LmpzPzk3NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FwaS9hcGknO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Db3B5KCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHZhbGlkYXRlIGZvcm1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgY29uc3QgbWluTGVuZ3RoID0gNjtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgZW1haWwsIHBhc3N3b3JkIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih1c2VyRGF0YSk7XHJcblxyXG4gICAgICAgIC8vIGV4dHJhY3QgdG9rZW4gZnJvbSByZXNwb25zZSBhbmQgc2F2ZSBpdCBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0dG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHByb2ZpbGUgcGFnZVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvcignSW52YWxpZCBlbWFpbCBhZGRyZXNzIG9yIHBhc3N3b3JkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcignSW52YWxpZCBlbWFpbCBhZGRyZXNzIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtNCBweS0xMiBsZzpweC02IFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtYXV0byBzbTp3LWZ1bGwgc206bWF4LXcteGwgc2hhZG93LXhsIHJvdW5kZWQtbGcgcC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LXhsIFwiPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNlwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPVwiI1wiXHJcbiAgICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ibGFjayBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICBMb2cgaW4gdG8geW91ciBhY2NvdW50XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIGJhY2shIFBsZWFzZSBlbnRlciB5b3VyIGRldGFpbHNcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTYgdGV4dC1jZW50ZXJcIj57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWwgZm9udC1ib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTQgcHgtNiB0ZXh0LWdyYXktNjAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtbCBzbTpsZWFkaW5nLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWwgZm9udC1ib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktNCBweC02IHRleHQtZ3JheS05MDAgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby02MDAgc206dGV4dC1sIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLVsjIzM5ODE5NF0tNjAwIHB4LTYgcHktNCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLVsjMzk4MTk0XS01MDAgZm9jdXMtdmlzaWJsZTpvdXRsaW5lIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtaW5kaWdvLTYwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBpbiB0byB5b3VyIGFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvcHk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTmF2IiwibG9naW4iLCJMb2dpbkNvcHkiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ2YWxpZGF0ZUZvcm0iLCJlbWFpbFJlZ2V4IiwibWluTGVuZ3RoIiwidGVzdCIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyRGF0YSIsInJlc3BvbnNlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwib25TdWJtaXQiLCJoMSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/loginCopy.js\n"));

/***/ })

});