// creates the navbar

const factoryNav = () => {
    document.querySelector("#navbar").innerHTML = `<span><a href="#categories">Categories</a></span>
    <span><a href="#orders">Orders</a></span>
    <span><a href="./logout">Log Out</a></span>`;
};

export default factoryNav;