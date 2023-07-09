//challenge 1
/*const markHeight = 1.69
const johnHeight = 1.95
console.log(markHeight, johnHeight);
const markMass = 78
const johnMass =92
console.log(markMass, johnMass);

markBmi =(markMass / markHeight **2)
console.log(markBmi)
johnBmi = (johnMass/johnHeight **2)
console.log(johnBmi)
const higherBmi = markBmi > johnBmi
console.log(higherBmi)*/

const markHeight = 1.88
const johnHeight = 1.76
console.log(markHeight, johnHeight);
const markMass = 95
const johnMass = 85
console.log(markMass, johnMass);

markBmi =(markMass / markHeight **2)
console.log(markBmi)
johnBmi = (johnMass/johnHeight **2)
console.log(johnBmi)
const higherBmi = markBmi > johnBmi
console.log(higherBmi)

//challenge 2
const two = 'challengeTwo'
console.log(two)

console.log(markMass, johnMass);

markBmi =(markMass / markHeight **2)
console.log(markBmi)
johnBmi = (johnMass/johnHeight **2)
console.log(johnBmi)
console.log(markBmi, johnBmi)

if("markBmi is higher than johnBmi"){
    console.log("markBmi is higher than johnBmi")
}
else{
    console.log(`${johnBmi} is higher than ${markBmi}`)
}
//challenge 3 test 1&2
const dolphinScore = (96 + 108 + 89) / 3
const koalasScore = (88 + 91 + 110) / 3
console.log(dolphinScore)
console.log(koalasScore)
if (dolphinScore > koalasScore){
    console.log('dolphinScore wins the trophy')
}else if (koalasScore > dolphinScore){
    console.log('koalasScore wins the trophy')
} else if(dolphinScore===koalasScore){
    console.log('both wins the trophy')
}
//test 3
const dolphinScoreTwo = (97 + 112 + 101) / 3
const koalasScoreTwo = (109 + 95 + 123) / 3
console.log(dolphinScoreTwo)
console.log(koalasScoreTwo)
if (dolphinScoreTwo > koalasScoreTwo && dolphinScoreTwo >=100){
    console.log('dolphinScoreTwo wins the trophy')
}else if (koalasScoreTwo > dolphinScoreTwo && koalasScoreTwo >=100){
    console.log('koalasScoreTwo wins the trophy')
} else if(dolphinScoreTwo===koalasScoreTwo && dolphinScoreTwo>=100 && koalasScoreTwo>=100){
    console.log('both wins the trophy')
}
//test 4
const dolphinScoreThree = (97 + 112 + 81) / 3
const koalasScoreThree = (109 + 95 + 86) / 3
console.log(dolphinScoreThree)
console.log(koalasScoreThree)
if (dolphinScoreThree > koalasScoreThree && dolphinScoreThree <=100){
    console.log('dolphinScoreThree wins the trophy')
}else if (koalasScoreThree > dolphinScoreThree && koalasScoreThree <=100){
    console.log('koalasScoreThree wins the trophy')
} else if(dolphinScoreThree===koalasScoreThree && dolphinScoreThree >=100 && koalasScoreThree >=100 ){
    console.log('Both wins the trophy')
}else{
    console.log('Nobody wins the trophy')
}