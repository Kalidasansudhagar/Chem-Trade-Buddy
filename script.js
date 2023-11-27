
const btn = document.querySelector(".icons");
const navbarContainer = document.querySelector(".navbar_container");
const customDropDown = document.querySelector(".custom-dropdown");

btn.addEventListener("click", () => {
  if (navbarContainer.style.opacity == 1) {
    navbarContainer.style.width = "0%";
    return (navbarContainer.style.opacity = "0");
  }
  navbarContainer.style.width = "max(250px, 50%)";
  return (navbarContainer.style.opacity = "1");
});

customDropDown.addEventListener('click', listener)

function listener(e) {
  let target = e.target;
  if (target.tagName == "A") {
    return choose_category.textContent = target.textContent
  }
}
