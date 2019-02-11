//  title, short description, price, quantity, and an image.

import API from "./productData";

const factoryProductAll = () => {
    API.get().then(
        itemArray => {
            itemArray.forEach(element => {
                return `<section>
                <div>${element.title}</div>
                <div>${element.desc}</div>
                <div>$${element.price}</div>
                <div>${element.quant}</div>
                <div><img src="${element.img}" /></div>
                </section>`;
            });
        }
    )
}

const factoryProduct = id => {
    API.get().then(
        itemArray => {
            itemArray
        }
    )
}

export { factoryProductAll }