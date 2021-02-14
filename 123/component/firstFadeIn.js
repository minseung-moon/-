function fadeInOut() {
  const windowHeight = window.innerHeight;
  if (windowHeight > firstFadeIn.getBoundingClientRect().top) {
    firstFadeIn.style.opacity = "1";
    leftFadeSection.style.transform = "translateX(0)";
    rightFadeSection.style.transform = "translateX(0)";
  } else {
    firstFadeIn.style.opacity = "0";
    leftFadeSection.style.transform = "translateX(-100px)";
    rightFadeSection.style.transform = "translateX(100px)";
  }
}
window.addEventListener("scroll", fadeInOut);

const firstFadeIn = document.createElement("section");
firstFadeIn.style.width = "100%";
firstFadeIn.style.height = "60vh";
firstFadeIn.style.display = "flex";
firstFadeIn.style.transition = "opacity 1s";
firstFadeIn.style.opacity = "0";
body.appendChild(firstFadeIn);

const leftFadeSection = document.createElement("article");
const rightFadeSection = document.createElement("article");
firstFadeIn.appendChild(leftFadeSection);
firstFadeIn.appendChild(rightFadeSection);
leftFadeSection.classList = "fadeSections";
rightFadeSection.classList = "fadeSections";

const fadeSections = document.querySelectorAll(".fadeSections");
fadeSections.forEach((item, index) => {
  item.style.width = "100%";
  item.style.height = "100%";
  item.style.display = "flex";
  item.style.transition = "transform 1.5s";
  if (index == 0) {
    item.style.justifyContent = "flex-end";
    item.style.backgroundColor = "red";
    item.style.transform = "translateX(-100px)";
  } else {
    item.style.justifyContent = "flex-start";
    item.style.transform = "translateX(100px)";
  }
});

const leftFadeBox = document.createElement("div");
const rightFadeBox = document.createElement("div");
leftFadeSection.appendChild(leftFadeBox);
rightFadeSection.appendChild(rightFadeBox);
leftFadeBox.classList = "fadeBoxs";
rightFadeBox.classList = "fadeBoxs";

const fadeBoxs = document.querySelectorAll(".fadeBoxs");
fadeBoxs.forEach((item, index) => {
  item.style.width = "70%";
  item.style.minWidth = "500px";
  item.style.height = "100%";
  if (index == 0) {
  } else {
    item.style.color = "red";
  }
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.justifyContent = "space-around";
  item.style.alignItems = "center";
  item.style.padding = "50px";
});

const leftFadeBoxTitle = document.createElement("div");
const leftFadeBoxSubTitle = document.createElement("h4");
const leftFadeBoxMainTitle = document.createElement("h1");
const leftFadeBoxImage = document.createElement("img");
const leftFadeBoxScript = document.createElement("div");
const leftFadeBoxScriptP1 = document.createElement("p");
const leftFadeBoxScriptP2 = document.createElement("p");
leftFadeBox.appendChild(leftFadeBoxTitle);
leftFadeBoxTitle.appendChild(leftFadeBoxSubTitle);
leftFadeBoxTitle.appendChild(leftFadeBoxMainTitle);
leftFadeBox.appendChild(leftFadeBoxImage);
leftFadeBox.appendChild(leftFadeBoxScript);
leftFadeBoxScript.appendChild(leftFadeBoxScriptP1);
leftFadeBoxScript.appendChild(leftFadeBoxScriptP2);
leftFadeBoxSubTitle.innerText = "창업은 역시 비스트로피자집!";
leftFadeBoxMainTitle.innerText = "비스트로 피자의 고수익 창업비법";
leftFadeBoxImage.src =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
leftFadeBoxScriptP1.innerText = "소자본으로 매출올리고";
leftFadeBoxScriptP1.style.textAlign = "center";
leftFadeBoxScriptP2.innerText =
  "단기간에 투자 수익을 뽑을 수 있는 비법 확인하기";

const rightFadeBoxTitle = document.createElement("div");
const rightFadeBoxSubTitle = document.createElement("h4");
const rightFadeBoxMainTitle = document.createElement("h1");
const rightFadeBoxForm = document.createElement("form");
const FadeBoxFromSelectLabel = document.createElement("div");
const FadeBoxFromSelect1 = document.createElement("select");
const FadeBoxFromSelect2 = document.createElement("select");
const FadeBoxFromSelectOption1 = document.createElement("option");
const FadeBoxFromSelectOption2 = document.createElement("option");
const FadeBoxFromInput = document.createElement("input");
const FadeBoxFromBtn = document.createElement("button");
FadeBoxFromSelect1.classList = "boxFormElement";
FadeBoxFromSelect2.classList = "boxFormElement";
FadeBoxFromInput.classList = "boxFormElement";
FadeBoxFromBtn.classList = "boxFormElement";
FadeBoxFromSelect1.classList = "boxFormSelects boxFormElement";
FadeBoxFromSelect2.classList = "boxFormSelects boxFormElement";

rightFadeBox.appendChild(rightFadeBoxTitle);
rightFadeBoxTitle.appendChild(rightFadeBoxSubTitle);
rightFadeBoxTitle.appendChild(rightFadeBoxMainTitle);
rightFadeBox.appendChild(rightFadeBoxForm);
rightFadeBoxForm.appendChild(FadeBoxFromSelectLabel);
FadeBoxFromSelectLabel.appendChild(FadeBoxFromSelect1);
FadeBoxFromSelect1.appendChild(FadeBoxFromSelectOption1);
FadeBoxFromSelectLabel.appendChild(FadeBoxFromSelect2);
FadeBoxFromSelect2.appendChild(FadeBoxFromSelectOption2);
rightFadeBoxForm.appendChild(FadeBoxFromInput);
rightFadeBoxForm.appendChild(FadeBoxFromBtn);
rightFadeBoxSubTitle.innerText = "비스트로피자 매장은 어디있을까?";
rightFadeBoxMainTitle.innerText = "가까운 매장 찾아보자!";
rightFadeBoxForm.style.border = "3px solid red";
rightFadeBoxForm.style.padding = "35px";
rightFadeBoxForm.style.display = "flex";
rightFadeBoxForm.style.flexDirection = "column";
FadeBoxFromSelectOption1.innerText = "시/도 선택";
FadeBoxFromSelectOption2.innerText = "시/도 선택";
FadeBoxFromBtn.innerText = "매장검색하기";

const boxFormSelects = document.querySelectorAll(".boxFormSelects");
boxFormSelects.forEach((item) => {
  item.style.width = " 200px";
});
const boxFormElement = document.querySelectorAll(".boxFormElement");
boxFormElement.forEach((item) => {
  item.style.margin = "5px";
  item.style.fontSize = "1.5rem";
});
