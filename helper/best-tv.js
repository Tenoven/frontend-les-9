import {bestSellingTv} from "../src/constants/inventory.js";


function Best_tv_name_string() {
    return(bestSellingTv.brand +" "+ bestSellingTv.type +" "+ bestSellingTv.name )
}
function Best_tv_price() {
    return("€"+bestSellingTv.price+",-")
}
function Best_tv_inches() {
    let output_string = ""
    for (const value in bestSellingTv.availableSizes) {
        output_string += bestSellingTv.availableSizes[value]
        output_string += " inch"
        output_string += " (" + (bestSellingTv.availableSizes[value]*2.54) + " cm) "
        output_string += " | "
    }
    output_string += "."
    output_string = output_string.split(" | .")


    return output_string
}

function bestTv_image() {
    return bestSellingTv.sourceImg
}

export {Best_tv_name_string};
export {Best_tv_price};
export {Best_tv_inches};
export {bestTv_image};