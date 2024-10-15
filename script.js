const myLibrary = [];

const library = document.querySelector(".library");
const button = document.querySelector(".addBook");

class Book {
  constructor (title, author, pages, readStatus, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
  }

  toggleRead(){
    if (this.readStatus == "Yes") {
      this.readStatus = "No";
    } else {
      this.readStatus = "Yes";
    }
  }
  
}

/*
function Book(title, author, pages, readStatus, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
  }
*/ 
/*
  Book.prototype.toggleRead = function() {
    if (this.readStatus == "Yes") {
      this.readStatus = "No";
    } else {
      this.readStatus = "Yes";
    }
  }
  */

  function createBook(book) {
    const div = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const readDiv = document.createElement("div");
    const readStatusLabel = document.createElement("p");
    const readStatus = document.createElement("button");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `Pages: ${book.pages}`;
    readStatusLabel.textContent = "Read: "
    readStatus.textContent = book.readStatus;
    readDiv.append(readStatusLabel, readStatus);
    div.append(bookTitle, bookAuthor, bookPages, readDiv, removeButton);
    library.append(div);
    
    readStatus.addEventListener("click", () => {
      book.toggleRead();
      readStatus.textContent = book.readStatus;
    })

    removeButton.addEventListener("click", () => {
      div.remove();
      myLibrary.splice(book.id, 1);
      myLibrary.forEach(book => book.id = myLibrary.indexOf(book));
    })
  }

function addBookToLibrary() {
  const bookTitle = document.getElementById("title");
  const bookAuthor = document.getElementById("author");
  const bookPages = document.getElementById("pages");
  const bookStatus = document.querySelector("input[name='read-status']:checked");

  if(bookTitle.value && bookAuthor.value && bookPages.value && bookStatus.value) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, Number(bookPages.value), bookStatus.value, null);
    myLibrary.push(newBook);
    newBook.id = myLibrary.indexOf(newBook);
    createBook(newBook);
  } else {
    alert("Please fill in all sections before adding to library.")
  }
}

button.addEventListener("click", () => {
  event.preventDefault();
  addBookToLibrary();
});

