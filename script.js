const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    /*
    this.info = () => {return `${this.title} by ${this.author}, ${this.pages} pages long, read = ${this.readStatus}`};
    */
  }

function addBookToLibrary() {
  const bookTitle = document.getElementById("title");
  const bookAuthor = document.getElementById("author");
  const bookPages = document.getElementById("pages");
  const bookStatus = document.querySelector("input[name='read-status']:checked");
  if(bookTitle && bookAuthor && bookPages && bookStatus) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, Number(bookPages.value), bookStatus.value);
    myLibrary.push(newBook);
  } else {
    alert("Please fill in all sections before adding to library.")
  }
}


const body = document.querySelector("body");
const container = document.querySelector(".library");
const button = document.querySelector(".addBook");

button.addEventListener("click", () => {
  event.preventDefault();
  addBookToLibrary();
});

/*
  const div = document.createElement("div");
  div.textContent = "new book";
  container.appendChild(div);
*/

/* 
  const bookStatus = document.querySelector("input[name='read-status']:checked");
  if (bookStatus) {
    console.log("Read status:", bookStatus.value);
  } else {
    console.log("No read status selected");
  }
*/
