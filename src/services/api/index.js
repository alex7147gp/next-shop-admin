const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  product: {
    products: `${API}/api/${VERSION}/products/`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getList: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
    isAvalible: `${API}/api/${VERSION}/users/is-avalible`,
  },
  categoris: {
    getList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategory: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductByCategory: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
