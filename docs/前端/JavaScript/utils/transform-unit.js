export const mToKm = (val) => {
    if(val<1000){
        return  val + 'm'
    }else{
        return (val / 1000).toFixed(2) + 'km';
    }

}