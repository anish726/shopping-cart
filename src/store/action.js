export const addToCart = (id) => {
    return {
        type:'ADDTOCART',
        payload: id
    }
}
export const addQty = (id) => {
    return {
        type:'ADDQTY',
        payload:
            id
    }
}
export const decQty = (id) => {
    return {
        type:'DECQTY',
        payload: id
    }
}

export const removeToCart = (id) => {
    return {
        type:'REMOVETOCART',
        payload: id
    }
}