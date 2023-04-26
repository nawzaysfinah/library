let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book(
  "The One Straw Revolution",
  "Masanobu Fukuoka",
  "200",
  true
);

const book2 = new Book("A Whole New Mind", "Daniel H. Pink", "304", true);

function addBookToLibrary() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
