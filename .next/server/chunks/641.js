"use strict";
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 8641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(306);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_Api__WEBPACK_IMPORTED_MODULE_2__]);
_api_Api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Signup = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [submitForm, setSubmitForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // validate email
    const validateEmail = (email)=>{
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return reg.test(email);
    };
    // handle password change
    const handlePasswordChange = (e)=>{
        setSubmitForm(false);
        setPassword(e.target.value);
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        setError("");
    };
    // handle confirm password change
    const handleConfirmPasswordChange = (e)=>{
        setConfirmPassword(e.target.value);
        if (password !== confirmPassword) {
            setError("Password and Confirm Password do not match");
            return;
        }
        setError("");
        setSubmitForm(true);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!submitForm) {
            return;
        }
        // validate all fields are not empty
        if (!firstName || !lastName || !email || !password || !confirmPassword || !company) {
            setError("All fields are required");
            return;
        }
        // validate email
        if (!validateEmail(email)) {
            setError("Invalid email address");
            return;
        }
        console.log(firstName, lastName, email, password, confirmPassword);
        // api calling
        try {
            const userData = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                company: {
                    name: company
                }
            };
            const response = await (0,_api_Api__WEBPACK_IMPORTED_MODULE_2__/* .signup */ .IU)(userData);
            console.log("Signup success:", response);
            setError("");
            // Redirect the user to the login page
            router.push("/login");
        // Handle success, such as redirecting to a different page
        } catch (error) {
            console.error("Signup error:", error);
            setError(error.message);
            console.error("Signup error:", error);
            return;
        }
        // Reset the form fields and error state
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCompany("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-md w-full p-8 bg-white shadow-lg rounded-lg mt-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-bold text-center mb-6",
                            children: "Signup"
                        }),
                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-red-500 mb-4    text-center",
                            children: error
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700",
                                            children: "First Name:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "border border-gray-300 rounded-md p-2 w-full",
                                            value: firstName,
                                            onChange: (e)=>setFirstName(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700",
                                            children: "Last Name:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "border border-gray-300 rounded-md p-2 w-full",
                                            value: lastName,
                                            onChange: (e)=>setLastName(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700",
                                            children: "Email:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "email",
                                            className: "border border-gray-300 rounded-md p-2 w-full",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700",
                                            children: "Password:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "password",
                                            className: "border border-gray-300 rounded-md p-2 w-full",
                                            value: password,
                                            onChange: handlePasswordChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700",
                                            children: "Confirm Password:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "password",
                                            className: "border border-gray-300 rounded-md p-2 w-full",
                                            value: confirmPassword,
                                            onChange: handleConfirmPasswordChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700",
                                            children: "Company:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "border border-gray-300 rounded-md p-2 w-full",
                                            value: company,
                                            onChange: (e)=>setCompany(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "bg-[#ff6661] text-white rounded-md py-2 px-4 w-full",
                                    children: "Signup"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;