const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = () => {return `${this.title} by ${this.author}, ${this.pages} pages long, read = ${this.readStatus}`};
  }

const body = document.querySelector("body");
const container = document.querySelector(".library");
const button = document.querySelector(".addBook");

button.addEventListener("click", () => {
  event.preventDefault();
  const div = document.createElement("div");
  div.textContent = "new book";
  container.appendChild(div);
});
