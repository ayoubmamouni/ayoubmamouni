// window.addEventListener("load", () => {
// });
const footerContent = document.querySelector(".copyright-area");
const searchInput = document.querySelector(".search-input");

const date = new Date();

// change input placeholder
searchInput.placeholder = "Seach for Games...";

//change footer copyright content
footerContent.innerHTML = `
  <i class="far fa-copyright"></i>
  Copyright ${date.getFullYear()}
  <a href="/">AmoniGames</a>
  `;
