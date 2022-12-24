window.addEventListener("load", () => {
  const footerContent = document.querySelector(".copyright-area");
  const date = new Date();
  footerContent.innerHTML = `
    <i class="far fa-copyright"></i>
    Copyright ${date.getFullYear()}
    <a href="/">AmoniGames</a>

    `;
});
