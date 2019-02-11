import createCard from "./product"

const cardFactory = {
    "factoryProductAll": () => {
        API.get().then(
            itemArray => {
                createCard(itemArray);
            }
        )
    },
    "factoryProduct": id => {
        API.get().then(
            itemArray => {
                let thisItem = [];
                thisItem.push(itemArray.find(item => item.id === id));
                createCard(thisItem);
            }
        )
    }
}

export default cardFactory;