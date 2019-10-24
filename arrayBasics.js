const shoesList = ["Nike", "Vans", "Puma", "Reebock"];

shoesList.unshift("Jordan");
console.log(shoesList, shoesList.length);

shoesList.shift();
console.log(shoesList, shoesList.length);

shoesList.push('Levis');
console.log(shoesList, shoesList.length);

shoesList.pop();
console.log(shoesList, shoesList.length);

const slicedList = shoesList.slice(0, 3);
console.log(slicedList, slicedList.length);

const newShoesList = ["Babybotte","Bana & Co","Base London", "Baxton", "Be Only"];

const arraysConcatened = shoesList.concat(newShoesList);
console.log(arraysConcatened);