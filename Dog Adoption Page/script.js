function dogYears(age) {
  return `Your doggie is ${age} years old in dog years!`;
}

let dog = [
  {
    Name: "Sushi",
    picture: "dog1.png",
    age: 7,
    faveToys: "bone ,water , bottle",
  },
  {
    Name: "Doshan",
    picture: "dog2.jpg",
    age: 14,
    faveToys: "Ball, Shoes",
  },
  {
    Name: "Moonchin",
    picture: "dog3.jpg",
    age: 14,
    faveToys: "Ducklings ,Tabo",
  },
];

let strHTML = "";

for (let i = 0; i < dog.length; i++) {
  let dogYearsValue = dogYears(dog[i].age);
  strHTML += `<div id="dog${[i]}">
    <label>
      <h2>Name: ${dog[i].Name}</h2>
      <p>Age: ${dogYearsValue}</p>
      <img src="${dog[i].picture}" alt="dog" />
      <p>fave toys: ${dog[i].faveToys}</p>
    </label>
  </div>`;
}

document.getElementById("content").innerHTML = strHTML;
// console.log(strHTML);
