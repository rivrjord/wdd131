const courses = [
  "CSE 110",
  "CSE 111",
  "WDD 130",
  "WDD 131",
  "WDD 231",
  "CSE 210"
];

// 1️⃣ map() courses to subject list
let subjects = courses.map((course) => course.split(" ")[0]);
let subjectsHTML = subjects.map(subject => `<li>${subject}</li>`).join('');
document.querySelector("#subjects").innerHTML = subjectsHTML;

// *************************************************************************************
const countries = [
  "Uganda",
  "United States",
  "Uruguay",
  "Brazil",
  "Canada",
  "Germany",
  "Japan",
  "Mexico",
  "Spain",
  "Turkey"
];

// 2️⃣ filter() countries to those starting with "U"

let countriesWithU = countries.filter(country => country.charAt(0) === 'U');
let countriesHTML =countriesWithU.map(country => `<li>${country}</li>`).join('');
document.querySelector("#u").innerHTML = countriesHTML

// *************************************************************************************
const fruits = [
  { name: "apple", price: 1 },
  { name: "banana", price: 0.5 },
  { name: "orange", price: 1.2 },
  { name: "grape", price: 0.1 }
];

// 3️⃣ reduce() array of objects to total cost.
const total = fruits.reduce((sum, fruit) => sum + fruit.price, 0);
document.querySelector("#total").innerHTML = `Total: $${total.toFixed(2)}`;

// *************************************************************************************
const students = [
  { fullName: "Alice Johnson", state: "California, USA", class: "Mathematics" },
  {
    fullName: "Benjamin Lee",
    state: "Ontario, Canada",
    class: "Computer Science"
  },
  { fullName: "Chloe Smith", state: "London, UK", class: "Physics" },
  { fullName: "David Kim", state: "Seoul, South Korea", class: "Engineering" },
  { fullName: "Elena Rodriguez", state: "Madrid, Spain", class: "Biology" },
  { fullName: "Felix Müller", state: "Berlin, Germany", class: "History" }
];
// 4️⃣ loop through the array
let allStudent = "";
students.forEach(student => {
  allStudent += `<li>${student.fullName}</li>`;});
document.querySelector("#studentList").innerHTML = `${allStudent}`;

// *************************************************************************************
const products = [
  {
    name: "Widget A",
    partNumber: "WA-123",
    quantity: 50,
    price: 12.5
  },
  {
    name: "Gear B",
    partNumber: "GB-456",
    quantity: 100,
    price: 3.75
  },
  {
    name: "Lever C",
    partNumber: "LC-789",
    quantity: 25,
    price: 25.0
  },
  {
    name: "Bolt D",
    partNumber: "BD-012",
    quantity: 200,
    price: 0.5
  },
  {
    name: "Panel E",
    partNumber: "PE-345",
    quantity: 10,
    price: 50.0
  },
  {
    name: "Wire F",
    partNumber: "WF-678",
    quantity: 150,
    price: 1.25
  },
  {
    name: "Tube G",
    partNumber: "TG-901",
    quantity: 30,
    price: 18.0
  }
];
// 5️⃣ find first 'expensive' product
const expensiveProduct = products.find(product => product.price > 20);
document.querySelector("#product").innerHTML = `Expensive Product: ${expensiveProduct.name} - $${expensiveProduct.price.toFixed(2)}`;

// *************************************************************************************
// 6️⃣ determine if Canada is contained within the array countries (see line 18)
let canadaIndex = countries.indexOf("anada");
let outputMessage = canadaIndex !== -1
  ? `The index of Canada is ${canadaIndex}.`
  : "Canada was not found in the array.";
document.querySelector("#output").innerHTML = outputMessage;