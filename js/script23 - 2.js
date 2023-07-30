let count = 0;
document.querySelector(".js").addEventListener("click", () => {
  count++;
  localStorage.setItem("b1", count);
});
