//for llop

for (let i = 0; i < 10; i++){
    const element = i;
    console.log(element);
}

// break and continue
let myHeros = ['batman', 'superman', 'thor', 'ironman', 'hulk', 'superman']
for (let i = 0; i < myHeros.length; i++){
    const element = myHeros[i];
    if(i == 2){
        console.log("continue....")
        continue;
    }
    if(i == 5){
        console.log("break....")
        break;
    }
    console.log(element);
}

// while, do while
let i = 0

while (i <= 5){
    console.log(`value of i: ${i}`)
    i++
}
let j = 11
do {
    console.log(`value of j: ${j}`)
    i++
} while (j == 10)
