// [Arguments] { '0': 2, '1': 3, '2': 4 } is called array like object 

// at first array like object ke spread out korte hobe . then sum korte hobe

// spread out korte hole ... dite hoy

function add(num1, num2){

    const args = [...arguments]
    let sum = 0;
    for(let i = 0;i < args.length; i++){
        sum+=args[i];
    }
    return sum;
}


const result = add(2,3);

console.log(result);