const inputIceCream = prompt("What type of Ice Cream Would You Like?");

const newArray = inputIceCream.split(",");
console.log(newArray);

const icecream = {
  vanilla: 0,
  strawberry: 0,
  chocolate: 0,
  coffee: 0,
};

function getSum(array) {
 

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "vanilla" || array[i] === "Vanilla") {
      icecream.vanilla += 1;
    } else if (array[i] === "strawberry" || array[i] === "Strawberry") {
      icecream.strawberry += 1;
    } else if (array[i] === "chocolate" || array[i] === "Chocolate") {
      icecream.chocolate += 1;
    } else if (array[i] === "coffee" || array[i] === "Coffee") {
      icecream.coffee += 1;
    }

    
  }
}

getSum(newArray);

console.log(icecream);
