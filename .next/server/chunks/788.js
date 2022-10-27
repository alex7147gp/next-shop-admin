"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API = "https://api.escuelajs.co";
const VERSION = "v1";
const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`
    },
    product: {
        products: `${API}/api/${VERSION}/products/`,
        getProduct: (id)=>`${API}/api/${VERSION}/products/${id}`,
        getProducts: (limit, offset)=>`${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/${VERSION}/products`,
        updateProduct: (id)=>`${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id)=>`${API}/api/${VERSION}/products/${id}`
    },
    users: {
        getList: (limit)=>`${API}/api/${VERSION}/users?limit=${limit}`,
        postUser: `${API}/api/${VERSION}/users`,
        isAvalible: `${API}/api/${VERSION}/users/is-avalible`
    },
    categoris: {
        getList: (limit)=>`${API}/api/${VERSION}/categories?limit=${limit}`,
        postCategory: `${API}/api/${VERSION}/categories`,
        getCategory: (id)=>`${API}/api/${VERSION}/categories/${id}`,
        putCategory: (id)=>`${API}/api/${VERSION}/categories/${id}`,
        getProductByCategory: (id)=>`${API}/api/${VERSION}/categories/${id}/products`
    },
    files: {
        upload: `${API}/api/${VERSION}/files/upload`,
        getFile: (filename)=>`${API}/api/${VERSION}/files/${filename}`
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endPoints);


/***/ })

};
;