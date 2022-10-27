"use strict";
exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 7364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth),
/* harmony export */   "x": () => (/* binding */ ProviderAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(788);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function ProviderAuth({ children  }) {
    const auth = useProvideAuth();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: auth,
        children: children
    });
}
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};
function useProvideAuth() {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const signIn = async (email, password)=>{
        const options = {
            headers: {
                accept: "*/*",
                "Content-Type": "application/json"
            }
        };
        const { data: access_token  } = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(_services_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].auth.login */ .Z.auth.login, {
            email,
            password
        }, options);
        if (access_token) {
            const token = access_token.access_token;
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("token", token, {
                expires: 5
            });
            axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization = `Bearer ${token}`;
            const { data: user  } = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(_services_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].auth.profile */ .Z.auth.profile);
            setUser(user);
        }
    };
    const logout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
        setUser(null);
        delete axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization;
        window.location.href = "/login";
    };
    return {
        user,
        signIn,
        logout
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;