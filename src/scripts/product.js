const createCard = itemArray => {
    document.querySelector("#productList").innerHTML = "";
    itemArray.forEach(element => {
        document.querySelector("#productList").innerHTML += `<section>
        <div>${element.title}</div>
        <div>${element.desc}</div>
        <div>$${element.price}</div>
        <div>${element.quant}</div>
        <div><img src="${element.img}" /></div>
        </section>`;
    })
}

export default createCard;