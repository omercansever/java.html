let username = prompt("Lütfen isminizi yazınız :");
let myName = document.querySelector("#myName");
let clock = document.querySelector("#myClock");

myName.innerHTML = ` ${username}`;

let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

SAAT = ` 
${new Date().getHours()}:${new Date().getMinutes()} 
${days[new Date().getDay()]}  `;

clock.innerHTML = `${SAAT}`;
