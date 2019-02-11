const API = {
    get: () => {
        return fetch("http://127.0.0.1:8088/product")
            .then(res => res.json());
    },
    create: newItemObject => {
        return fetch("http://127.0.0.1:8088/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItemObject)
        })
            .then(res => res.json());
    },
    delete: itemId => {
        return fetch(`http://127.0.0.1:8088/product/${itemId}`, {
                method: "DELETE"
        })
    }
};

export default API;