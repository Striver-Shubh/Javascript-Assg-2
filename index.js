const name = document.getElementById("name");
const email = document.getElementById("email");
const mob = document.getElementById("mob");
const form = document.querySelector("form");
const tbody = document.getElementsByTagName("tbody")[0];
let res = [];
if (localStorage.getItem("res") === null) {
  localStorage.setItem("res", JSON.stringify([]));
}

function validateName(name) {
  let nameValue = name.value.trim();
  let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let regexResult = regex.test(nameValue);
  if (nameValue.length === 0) {
    // alert("Name is a required field.");
    name.focus();
    name.style.border = "1.5px solid red";
    return false;
  } else if (!regexResult) {
    // alert("Enter a valid Name");
    name.focus();
    name.style.border = "1.5px solid red";
    return false;
  }
  console.log(nameValue);
  return true;
}

function validateEmail(email) {
  let emailValue = email.value.trim();
  let regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4})*$/;
  let regexResult = regex.test(emailValue);
  if (emailValue.length === 0) {
    // alert("Email is a required field.");
    email.focus();
    email.style.border = "1.5px solid red";
    return false;
  } else if (!regexResult) {
    // alert("Enter the valid the Email!");
    email.focus();
    email.style.border = "1.5px solid red";
    return false;
  }
  return true;
}

function validateMobile(mob) {
  let mobValue = mob.value.trim();
  let regex = /^[0-9]{1,10}$/;
  let regexResult = regex.test(mobValue);
  if (mobValue.length === 0) {
    return true;
  } else if (!regexResult || mobValue.length < 10 || mobValue.length > 10) {
    mob.focus();
    mob.style.border = "1.5px solid red";
    return false;
  }
  return true;
}

(function self() {
  let res1 = JSON.parse(localStorage.getItem("res"));
  console.log(res1);
  res1.map((data) => {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = data.name;

    let email = document.createElement("td");
    email.innerText = data.email;

    let mob = document.createElement("td");
    mob.innerText = data.mob;

    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(mob);

    tbody.appendChild(row);
  });
})();

function submit(e) {
  e.preventDefault();
  res = JSON.parse(localStorage.getItem("res"));
  let nameBool = validateName(name);
  let emailBool = validateEmail(email);
  let mobileBool = validateMobile(mob);
  if (nameBool && emailBool && mobileBool) {
    let arr = {
      name: this.name.value,
      email: this.email.value,
      mob: this.mob.value,
    };
    res.push(arr);
    console.log(res);
    localStorage.setItem("res", JSON.stringify(res));
    showData();
  } else {
    alert("Check the details, INVALID");
  }
}
form.addEventListener("submit", submit);

function showData() {
  let data = res[res.length - 1];
  console.log(data);
  // res.map((item) => {
  //   data = JSON.parse(item);
  // });
  let row = document.createElement("tr");
  let name = document.createElement("td");
  name.innerText = data.name;

  let email = document.createElement("td");
  email.innerText = data.email;

  let mob = document.createElement("td");
  mob.innerText = data.mob;

  row.appendChild(name);
  row.appendChild(email);
  row.appendChild(mob);

  tbody.appendChild(row);
}
