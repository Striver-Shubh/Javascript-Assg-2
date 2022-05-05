const name = document.getElementById("name");
const email = document.getElementById("email");
const mob = document.getElementById("mob");
const form = document.querySelector("form");
const tbody = document.getElementsByTagName("tbody")[0];

function sub(e) {
  e.preventDefault();
  let arr = {
    name: this.name.value,
    email: this.email.value,
    mob: this.mob.value,
  };
  localStorage.setItem("res", JSON.stringify(arr));
  addData();
}
form.addEventListener("submit", sub);

function addData() {
  const dis = JSON.parse(localStorage.getItem("res"));
  let row = document.createElement("tr");
  let name = document.createElement("td");
  name.innerText = dis.name;

  let email = document.createElement("td");
  email.innerText = dis.email;

  let mob = document.createElement("td");
  mob.innerText = dis.mob;

  row.appendChild(name);
  row.appendChild(email);
  row.appendChild(mob);

  tbody.appendChild(row);
  styles();
}
