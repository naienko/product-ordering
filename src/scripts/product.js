const whereTheSingleProductGoes = document.querySelector("#productDisplay");

const createCard = singleItemObject => {
    whereTheSingleProductGoes.innerHTML = "";
    whereTheSingleProductGoes.innerHTML += `<section>
        <div>${singleItemObject.name}</div>
        <div>${singleItemObject.desc}</div>
        <div>$${singleItemObject.price}</div>
        <div>${singleItemObject.quantity}</div>
        <div><img src="${singleItemObject.img}" /></div>
        </section>`;
}

export default createCard;