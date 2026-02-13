const mainText = document.getElementById("mainText");
const mainImg = document.getElementById("mainImg");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const sushiFinalImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzd6NDBzc2E0emt2MGR2b3Z6NG95MzNmZzkyc29sNjAzc2VybTRwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/icIr8rk03xQI6NS67S/giphy.gif";

const messages = [
  "ปิปี๊อยากกินจริงๆหรอ",
  "มันไกลน้า TT",
  "เรากินบุฟเฟ่ต์กันไม่คุ้มหรอกกกก",
  "คิดอีกรอบได้มั้ยยยยยยยย"
];

const images = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWIwajR4MTVnZ3VpeGJrYnBveXlrdmoxZWpwbDk1YjYyeGt1NmUyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1J9sByLuRCB3ZwfS/giphy.gif", 
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG5iYnp6b200enozc2FubHVyazNvODl2MG13d3gweTFlZ3lzb3V2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ywj2iCO1TOkyQ/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTR3aG03bnpobHV0aHd3b2VmcXBpdTN2dDVwYTJvemthNjhpcmI1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MBfnmipP1NfTSKr2IE/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODdlbXdjaXQ3ODM1azV5YWc5MzI2azkxbXkzOXllanVwb2pldGQ2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYEYjCCkcJSgjo6Svv/giphy.gif"
];

let index = 0;
let runAway = false;
let scaleSize = 1;

yesBtn.addEventListener("click", () => {

  if (index < messages.length) {
    mainText.innerHTML = messages[index];
    mainImg.src = images[index];

    index++;

    scaleSize += 0.2;
    noBtn.style.transform = `scale(${scaleSize})`;
  }

  if (index === messages.length) {
    runAway = true;

    const rect = yesBtn.getBoundingClientRect();

    yesBtn.style.position = "fixed";
    yesBtn.style.left = rect.left + "px";
    yesBtn.style.top = rect.top + "px";
  }
});

yesBtn.style.zIndex = "10";
yesBtn.addEventListener("mouseenter", () => {

  if (!runAway) return;

  const maxX = window.innerWidth - yesBtn.offsetWidth;
  const maxY = window.innerHeight - yesBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {

  mainText.innerHTML = "นุว่าแร้วว่าปี๊ต้องอยากกิน 🍣💖"; 

  mainImg.src = sushiFinalImg;

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
