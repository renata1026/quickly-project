"use strict";
exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 8494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.e118074b.svg","height":190,"width":556,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Navbar.js







const Navbar = ()=>{
    const [menuOpen, setMenuOpen] = (0,external_react_.useState)(false);
    const handleNav = ()=>{
        setMenuOpen(!menuOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "fixed w-full h-24 shadow-xl bg-black",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between items-center h-full w-full px-16 2xl:px-16",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: logo,
                            alt: "logo",
                            width: 205,
                            height: 75,
                            className: "cursor-pointer",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "hidden sm:flex",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "hidden sm:flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/login",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "ml-10 uppercase hover:border-b text-xl text-white",
                                        children: "Login"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/profile",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "ml-10 uppercase hover:border-b text-xl text-white",
                                        children: "Profile"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/signup",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "ml-10 uppercase hover:border-b text-xl text-white",
                                        children: "Signup"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: handleNav,
                            className: "sm:hidden cursor-pointer pl-24 text-white",
                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineMenu, {
                                size: 25
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex w-full items-center justify-end",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            onClick: handleNav,
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineClose, {
                                size: 25
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex-col py-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: ()=>setMenuOpen(false),
                                        className: "py-4 cursor-pointer",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/login",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: ()=>setMenuOpen(false),
                                        className: "py-4 cursor-pointer",
                                        children: "Login"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/profile",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: ()=>setMenuOpen(false),
                                        className: "py-4 cursor-pointer",
                                        children: "Profile"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/signup",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        onClick: ()=>setMenuOpen(false),
                                        className: "py-4 cursor-pointer",
                                        children: "Sign Up"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row justify-around pt-10 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineInstagram, {
                                size: 30,
                                className: "cursor-pointer"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineFacebook, {
                                size: 30,
                                className: "cursor-pointer"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineTwitter, {
                                size: 30,
                                className: "cursor-pointer"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: logo,
                    alt: "logo",
                    width: 205,
                    height: 75,
                    className: "cursor-pointer pt-6",
                    priority: true
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;