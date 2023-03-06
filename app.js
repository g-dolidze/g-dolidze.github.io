const day = document.querySelectorAll(".day");
const avarage = document.querySelectorAll(".avage");
const input = document.querySelectorAll("input");
const addDay = document.querySelector("#add_btn");
const removeDay = document.querySelector("#remove_btn");

addDay.addEventListener("click", () => {
  const table = document.querySelector(".th");
  const tableRow = document.querySelectorAll(".tr");
  const head = document.createElement("th");

  tableRow.forEach((row) => {
    const date = document.createElement("td");

    date.textContent = "0";
    date.classList.add("day");
    row.appendChild(date);
  });
  head.textContent = "Monday";
  table.appendChild(head);
});
// remove days

removeDay.addEventListener("click", () => {
  removeLastColumn();
});
function removeLastColumn() {
  var table = document.querySelector("table");
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }
}
function makePrompt() {
  let td = document.querySelectorAll(".day");
  td.forEach((text) => {
    text.addEventListener("click", () => {
      text.innerHTML = prompt("text");
    });
  });
}

makePrompt();
const table = document.querySelector("table");

function addingTd() {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const input = document.querySelector("#fullname");
  td.innerHTML = input.value;
  tr.append(td);
  table.append(tr);
  return tr;
}
function addingAverageTd() {
  const newStudenttr = addingTd();
  const td = document.createElement("td");
  td.classList.add("average");
  td.innerHTML = 0;
  newStudenttr.append(td);
  return newStudenttr;
}
function addingDayTd() {
  const newDay = addingAverageTd();
  const td = document.createElement("td");
  td.classList.add("day");
  td.innerHTML = 0;

  newDay.append(td);
  console.log(newDay);
}

const addStudent = document.querySelector("#new_student");
const addStudentBtn = document.querySelector("#addnew_student");
const newstudent = document.querySelector("#fullname");

addStudent.addEventListener("submit", (e) => {
  e.preventDefault();
  if (newstudent.value !== "") {
    addingDayTd();
  }
});

day.addEventListener("click", () => {
  day.forEach((Element) => {
    const prompt = prompt("sheiyvanet ricxvi");
    while (isNaN(prompt)) {
      prompt = prompt("try again");
    }
    day.innerHTML = prompt;
  });
});
