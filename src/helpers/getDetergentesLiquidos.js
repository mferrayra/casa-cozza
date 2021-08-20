import { itemsLimpieza } from "../datos/itemsLimpieza";

export const getDetergentesLiquidos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsLimpieza)
        }, 2000);
    })
}