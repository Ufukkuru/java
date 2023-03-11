//Calling items in array with forEach

const PRODUCTS =["xiaomi", "iphone", "huawei", "oppo", "samsung", "nokia"]

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)
console.log(PRODUCTS)
