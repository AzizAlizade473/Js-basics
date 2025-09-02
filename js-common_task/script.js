let card1 = document.createElement("h1")
card1.textContent = "Aziz Alizade"

let link1 = document.createElement("a")
link1.textContent = "Home"
link1.href = "index.html"

let link2 = document.createElement("a")
link2.textContent = "About"
link2.href = "index2.html"

let main = document.getElementById("main")
let user = document.getElementById("user")
user.appendChild(card1)

function createLine() {
  const line = document.createElement("hr");
  line.style.width = "100%";
  line.style.border = "1px solid rgba(157, 157, 157, 0.3)";
  return line;
}

user.appendChild(createLine());

let sidebar = document.getElementById("sidebar")
sidebar.appendChild(link1)
sidebar.appendChild(link2)

const userDiv = document.getElementById("user");

const exp = new Map();
exp.set("Company", "AZAL");
exp.set("Salary", 2000);
exp.set("Duration", 2);

exp.forEach((value, key) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${key}</strong>: ${value}`;
  userDiv.appendChild(p);
});

user.appendChild(createLine());

const exp2 = new Map();
exp2.set("Company", "Local Company");
exp2.set("Salary", 1200);
exp2.set("Duration", 1);

exp2.forEach((value, key) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${key}</strong>: ${value}`;
  userDiv.appendChild(p);
});



let card2 = document.createElement("h1")
card2.textContent = "Aylin Guliyeva"

let user2 = document.getElementById("user2")
user2.appendChild(card2)  
user2.appendChild(createLine());

const userDiv2 = document.getElementById("user2");

const exp3 = new Map();
exp3.set("Company", "Xarici Bank");
exp3.set("Salary", 2200);
exp3.set("Duration", 3);

exp3.forEach((value, key) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${key}</strong>: ${value}`;
  userDiv2.appendChild(p);  
});

user2.appendChild(createLine());

const exp4 = new Map();
exp4.set("Company", "Local Company");
exp4.set("Salary", 1000);
exp4.set("Duration", 0.5);

exp4.forEach((value, key) => {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${key}</strong>: ${value}`;
  userDiv2.appendChild(p);  
});

