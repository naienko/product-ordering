import createCard from "./product"

const cardFactory = {
    "factoryProductAll": () => {
        API.get().then(
            itemArray => {
                itemArray.forEach(element => {
                    createCard(element);
                });
            }
        )
    },
    "factoryProduct": id => {
        API.get().then(
            itemArray => {
                let thisItem = (itemArray.find(item => item.id === id));
                createCard(thisItem);
            }
        )
    }
}

export default cardFactory;