import {inventory} from "../src/constants/inventory.js";

function tvSold () {
    let sold_total = 0
    for (const i in inventory) {
        sold_total += inventory[i].sold
    }
    return sold_total
}

function tvBought () {
    let bought_total= 0
    for (const i in inventory) {
        bought_total += inventory[i].originalStock
    }
    return bought_total
}

function toSell (sold, bought) {
    return bought-sold
}

export default tvSold;
export {tvBought};
export {toSell};