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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ \"./src/components/Nav.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ \"./src/api/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginCopy() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // validate form\n    function validateForm() {\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        const minLength = 6;\n        if (!email || !emailRegex.test(email)) {\n            return false;\n        }\n        if (!password || password.length < minLength) {\n            return false;\n        }\n        return true;\n    }\n    async function handleSubmit(event) {\n        event.preventDefault();\n        if (validateForm()) {\n            setError(\"\");\n            setIsLoading(true);\n            try {\n                const userData = {\n                    email,\n                    password\n                };\n                const response = await (0,_api_api__WEBPACK_IMPORTED_MODULE_4__.login)(userData);\n                // extract token from response and save it into local storage\n                const { token } = response;\n                localStorage.setItem(\"jwttoken\", token);\n                // Redirect the user to the profile page\n                router.push(\"/profile\");\n            } catch (error) {\n                console.error(\"Login error:\", error);\n                setError(\"Invalid email address or password\");\n            }\n            setIsLoading(false);\n        } else {\n            setError(\"Invalid email address or password\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-full flex-1 flex-col justify-center px-4 py-12 lg:px-6 bg-cloud\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:mx-auto sm:w-full sm:max-w-xl shadow-xl rounded-lg p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"mx-auto h-10 w-auto\",\n                            src: \"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600\",\n                            alt: \"Your Company\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10 sm:mx-auto sm:w-full sm:max-w-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"space-y-6\",\n                                action: \"#\",\n                                method: \"POST\",\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold text-center text-black mb-6\",\n                                        children: \"Log in to your account\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Welcome back! Please enter your details\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-red-500 mb-6 text-center\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email\",\n                                                className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"email\",\n                                                    name: \"email\",\n                                                    type: \"email\",\n                                                    autoComplete: \"email\",\n                                                    required: true,\n                                                    className: \"block w-64 sm:w-full rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                                                    value: email,\n                                                    onChange: (e)=>setEmail(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-between\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"password\",\n                                                        className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                                        children: \"Password\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-sm\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\",\n                                                            className: \"font-semibold text-indigo-600 hover:text-indigo-500\",\n                                                            children: \"Forgot password?\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 105,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"password\",\n                                                    name: \"password\",\n                                                    type: \"password\",\n                                                    autoComplete: \"current-password\",\n                                                    required: true,\n                                                    className: \"block w-64 sm:w-full rounded-md border-0 py-4 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                                                    value: password,\n                                                    onChange: (e)=>setPassword(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                    lineNumber: 122,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pureg/Desktop/quicklyFinal/quickly-project/src/pages/loginCopy.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCopy, \"BHcoUEOcxWwspAMtHX6MXrF352w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginCopy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginCopy);\nvar _c;\n$RefreshReg$(_c, \"LoginCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW5Db3B5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDSjtBQUNEO0FBRW5DLFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNYSxTQUFTWixzREFBU0E7SUFFeEIsZ0JBQWdCO0lBRWhCLFNBQVNhO1FBQ1AsTUFBTUMsYUFBYTtRQUNuQixNQUFNQyxZQUFZO1FBRWxCLElBQUksQ0FBQ1gsU0FBUyxDQUFDVSxXQUFXRSxLQUFLWixRQUFRO1lBQ3JDLE9BQU87UUFDVDtRQUVBLElBQUksQ0FBQ0UsWUFBWUEsU0FBU1csU0FBU0YsV0FBVztZQUM1QyxPQUFPO1FBQ1Q7UUFFQSxPQUFPO0lBQ1Q7SUFFQSxlQUFlRyxhQUFhQyxLQUFLO1FBQy9CQSxNQUFNQztRQUVOLElBQUlQLGdCQUFnQjtZQUNsQkosU0FBUztZQUNURSxhQUFhO1lBRWIsSUFBSTtnQkFDRixNQUFNVSxXQUFXO29CQUFFakI7b0JBQU9FO2dCQUFTO2dCQUNuQyxNQUFNZ0IsV0FBVyxNQUFNcEIsK0NBQUtBLENBQUNtQjtnQkFFN0IsNkRBQTZEO2dCQUM3RCxNQUFNLEVBQUVFLEtBQUssRUFBRSxHQUFHRDtnQkFDbEJFLGFBQWFDLFFBQVEsWUFBWUY7Z0JBQ2pDLHdDQUF3QztnQkFDeENYLE9BQU9jLEtBQUs7WUFDZCxFQUFFLE9BQU9sQixPQUFPO2dCQUNkbUIsUUFBUW5CLE1BQU0sZ0JBQWdCQTtnQkFDOUJDLFNBQVM7WUFDWDtZQUVBRSxhQUFhO1FBQ2YsT0FBTztZQUNMRixTQUFTO1FBQ1g7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1IsdURBQUdBOzs7OzswQkFDSiw4REFBQzJCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDRCxXQUFVOzRCQUNWRSxLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7c0NBR04sOERBQUNKOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssUUFBTztnQ0FDUEMsUUFBTztnQ0FDUEMsVUFBVWxCOztrREFFViw4REFBQ21CO3dDQUFHUixXQUFVO2tEQUFpRDs7Ozs7O2tEQUcvRCw4REFBQ1M7a0RBQUU7Ozs7OztvQ0FDRjlCLHVCQUNDLDhEQUFDb0I7d0NBQUlDLFdBQVU7a0RBQWlDckI7Ozs7OztrREFHbEQsOERBQUNvQjs7MERBQ0MsOERBQUNXO2dEQUNDQyxTQUFRO2dEQUNSWCxXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDWTtvREFDQ0MsSUFBRztvREFDSEMsTUFBSztvREFDTEMsTUFBSztvREFDTEMsY0FBYTtvREFDYkMsUUFBUTtvREFDUmpCLFdBQVU7b0RBQ1ZrQixPQUFPM0M7b0RBQ1A0QyxVQUFVLENBQUNDLElBQU01QyxTQUFTNEMsRUFBRUMsT0FBT0g7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUt6Qyw4REFBQ25COzswREFDQyw4REFBQ0E7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDVTt3REFDQ0MsU0FBUTt3REFDUlgsV0FBVTtrRUFDWDs7Ozs7O2tFQUdELDhEQUFDRDt3REFBSUMsV0FBVTtrRUFDYiw0RUFBQ3NCOzREQUNDQyxNQUFLOzREQUNMdkIsV0FBVTtzRUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBS0wsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDWTtvREFDQ0MsSUFBRztvREFDSEMsTUFBSztvREFDTEMsTUFBSztvREFDTEMsY0FBYTtvREFDYkMsUUFBUTtvREFDUmpCLFdBQVU7b0RBQ1ZrQixPQUFPekM7b0RBQ1AwQyxVQUFVLENBQUNDLElBQU0xQyxZQUFZMEMsRUFBRUMsT0FBT0g7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUs1Qyw4REFBQ25CO2tEQUNDLDRFQUFDeUI7NENBQ0NULE1BQUs7NENBQ0xmLFdBQVU7c0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBL0lTMUI7O1FBS1FILGtEQUFTQTs7O0tBTGpCRztBQWlKVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW5Db3B5LmpzPzk3NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FwaS9hcGknO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Db3B5KCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHZhbGlkYXRlIGZvcm1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgY29uc3QgbWluTGVuZ3RoID0gNjtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkLmxlbmd0aCA8IG1pbkxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIHNldEVycm9yKCcnKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgZW1haWwsIHBhc3N3b3JkIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih1c2VyRGF0YSk7XHJcblxyXG4gICAgICAgIC8vIGV4dHJhY3QgdG9rZW4gZnJvbSByZXNwb25zZSBhbmQgc2F2ZSBpdCBpbnRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSByZXNwb25zZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0dG9rZW4nLCB0b2tlbik7XHJcbiAgICAgICAgLy8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHByb2ZpbGUgcGFnZVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvcignSW52YWxpZCBlbWFpbCBhZGRyZXNzIG9yIHBhc3N3b3JkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcignSW52YWxpZCBlbWFpbCBhZGRyZXNzIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtNCBweS0xMiBsZzpweC02IGJnLWNsb3VkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpteC1hdXRvIHNtOnctZnVsbCBzbTptYXgtdy14bCBzaGFkb3cteGwgcm91bmRlZC1sZyBwLThcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBoLTEwIHctYXV0b1wiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL21hcmsuc3ZnP2NvbG9yPWluZGlnbyZzaGFkZT02MDBcIlxyXG4gICAgICAgICAgICBhbHQ9XCJZb3VyIENvbXBhbnlcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHNtOm14LWF1dG8gc206dy1mdWxsIHNtOm1heC13LXhsXCI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BhY2UteS02XCJcclxuICAgICAgICAgICAgICBhY3Rpb249XCIjXCJcclxuICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIExvZyBpbiB0byB5b3VyIGFjY291bnRcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPldlbGNvbWUgYmFjayEgUGxlYXNlIGVudGVyIHlvdXIgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbWItNiB0ZXh0LWNlbnRlclwiPntlcnJvcn08L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy02NCBzbTp3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweS00IHB4LTYgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LTY0IHNtOnctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTQgcHgtNiB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC02IHB5LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29weTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJOYXYiLCJsb2dpbiIsIkxvZ2luQ29weSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsInZhbGlkYXRlRm9ybSIsImVtYWlsUmVnZXgiLCJtaW5MZW5ndGgiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImZvcm0iLCJhY3Rpb24iLCJtZXRob2QiLCJvblN1Ym1pdCIsImgxIiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/loginCopy.js\n"));

/***/ })

});