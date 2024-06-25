const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
})


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list")
    const slideButtons = document.querySelectorAll(".slider-wrapper .material-symbols-outlined")
    const sliderScrollbar = document.querySelector(".Container .slider-scrollbar")
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb")
    const maxScrollleft = imageList.scrollWidth - imageList.clientWidth;
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
const direction = button.id === "arrow-left" ? -1 : 1;
const scrollAmount = imageList.clientWidth * direction;
imageList.scrollBy({ left: scrollAmount, behavior:"smooth"});
        }); 
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollleft ? "none" : "block";
    }

    

const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollleft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
}

    imageList.addEventListener("scroll", () => {
handleSlideButtons();
updateScrollThumbPosition();

    });
}

window.addEventListener("load", initSlider);


let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
    if (e.target.innerText == "Everything") {
      input.placeholder = "Search Anything...";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "...";
    }
  };
}


