const add = (a,b) => {
    //console.log(arguments);
    return a+b;
}

console.log(add(12,10,1000));

const user = {
    name:'jay',
    cities: ['korea','japan', 'dubland'],
    printPlacesLived(){
        const cityMessages = this.cities.map((city)=>{
            return city+'!';
        });
        return cityMessages;
        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
};


const multiplier = {
    numbers:[2,3,5,2,3],
    multiply(multiplyBy){
        const result = this.numbers.map((number)=>{
            return multiplyBy * number;
        });
        return result;
    }
}

console.log(multiplier.multiply(2));