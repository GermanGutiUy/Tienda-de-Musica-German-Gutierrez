/*

//Trear data de api
const getProducts = () => {
    return fetch("link")
        .then((respuesta) => respuesta.json() )
        .then((data) => {
            return data
        })
        .catch((error) => console.log (error))
}

//Traer data por ID de api
const getProductsById = (idProducts) => {
    return fetch("link/" +idProducts)
        .then((respuesta) => respuesta.json() )
        .then((data) => {
            return data
        })
        .catch((error) => console.log (error))
}

//Subir un producto a la Api
const addProduct = (newProduct) => {
    const newProductJson = JSON.stringify(newProduct)
    return fetch("link", {
        method: "POST",
        headers: {
            'Conecnt-Type' : "application/json"
        },
        body: newProductJson
     })
        .then((respuesta) => respuesta.json() )
        .then((data) => {
            return data
        })
        .catch((error) => console.log (error))
}

//
const modProdcut = (idProducts, mod) => {
    const modJson = JSON.stringify(mod)
    return fetch("link"/ + idProducts, {
        method: "PUT",
        headers: {
            'Conecnt-Type' : "application/json"
        },
        body: modJson
     })
        .then((respuesta) => respuesta.json() )
        .then((data) => {
            return data
        })
        .catch((error) => console.log (error))
}



export {getProducts,getProductsById,addProduct,modProdcut}

*/