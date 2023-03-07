// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(people, event){
    const arrayOne = [];
    for (let F = 0; F < people.length; F++){
   
    arrayOne.push(`Thank you, ${people[F]}, for the wonderful ${event} gift!`)
}
return arrayOne;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }

  countDown(10);