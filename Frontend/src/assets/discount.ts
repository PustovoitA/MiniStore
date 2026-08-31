
export function hasDiscount(discount: number | null):boolean{
    if(discount !== null){
        return true
    }else {
        return false
    }
}

export function calculateDiscount(price:number, discount:number|null):number{
    if(hasDiscount(discount)){
        const result = price - (price * discount! / 100)
        return Number(result.toFixed(2));
    }else{
        return price
    }
}