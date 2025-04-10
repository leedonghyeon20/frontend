// tab-content 보여주기 : show 클래스명
// 메뉴 선택 : orange

const orange = document.querySelectorAll(".tab-button");
const tab = document.querySelectorAll(".tab-content");

// orange[0].addEventListener("click", () => {
//   orange[0].classList = orange[0].classList + " orange";
//   tab[0].classList = tab[0].classList + " show";
//   orange[1].classList.remove("orange");
//   orange[2].classList.remove("orange");
// });
// orange[1].addEventListener("click", () => {
//   orange[1].classList = orange[1].classList + " orange";
//   tab[1].classList = tab[1].classList + " show";
//   orange[0].classList.remove("orange");
//   orange[2].classList.remove("orange");
// });
// orange[2].addEventListener("click", () => {
//   orange[2].classList = orange[2].classList + " orange";
//   tab[2].classList = tab[2].classList + " show";
//   orange[1].classList.remove("orange");
//   orange[0].classList.remove("orange");
// });

// Products 클릭 + 첫번째 tab-content
// Information 클릭 + 두번째 tab-content
// Shippong 클릭 + 세번째 tab-content

orange.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 모든 li의 orange 제거
    orange.forEach((item) => item.classList.remove("orange"));
    // 현재 눌러진 li에는 orange 추가
    e.target.classList += " orange";
    // 모든 div의 show 제거
    tab.forEach((item) => item.classList.remove("show"));
    // 현재 눌러진 li와 같은 순서인 div의 show 추가
    tab[idx].classList += " show";
  });
});
