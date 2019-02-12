// creates the navbar

const factoryNav = {
    siteNav: () => {
        document.querySelector("#navbar").innerHTML = `<span><a href="#categories">Categories</a></span>
        <span><a href="#orders">Orders</a></span>
        <span><a href="./logout">Log Out</a></span>`;
    },
    productNav: () => {
        API.get().then(
            itemArray => {
                itemArray.forEach(element => {
                    document.querySelector("#productList").innerHTML += `<span><a href="">${element.name}<br /><img src="./images/${element.img}" /></a></span>`;
                });
            }
        )
    }
}

export default factoryNav;