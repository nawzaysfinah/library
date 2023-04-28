//  declare empty array
let myLibrary = [];

// object constructor
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
  this.info = Title + ", " + Author + ", " + Pages + ", " + Read;
}

// function for adding a new book to the array/library
function addBookToLibrary(Title, Author, Pages, Read) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#readStatus").checked;

  // replace with value taken from querySelector
  Title = title;
  Author = author;
  Pages = pages;
  Read = read;

  let newBook = new Book(Title, Author, Pages, Read);
  console.log(
    "Title: " +
      title +
      ", Author: " +
      author +
      ", Pages: " +
      pages +
      ", Read: " +
      read
  );
  console.log(newBook);
  myLibrary.push(newBook);
  // console.log(myLibrary);
}

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", "372", false);
// console.log(theHobbit.info);

// function to display library array to cards
function displayBooksOnPage() {
  const books = document.querySelector(".books");
}

// Loop over the library array and display to the cards
myLibrary.forEach((myLibrary) => {
  const card = document.createElement("div)");
  card.classList.add("card");
  books.appendChild(card);
  for (let key in myLibrary) {
    console.log(`${key}: ${myLibrary[key]}`);
    const para = document.createElement("p");
    para.textContent = `${key}: ${myLibrary[key]}`;
    card.appendChild(para);
  }
});

// Calling function and adding data manually for nwow until the form is created
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read Yet");
// addBookToLibrary(
//   "The Seven Habits of Highly Effective People",
//   "Steven Covey",
//   "200 Pages",
//   "Read"
// );

// console.log("End of code array contents", myLibrary);

displayBooksOnPage;

// click button & openForm() to add new book
const addBookbtn = document.querySelector(".addBook");

// what happens when addBookbtn is clicked
function clickHandler() {
  console.log("+add book clicked");
  btnState = document.getElementById("addBookForm");
  addBookBgColor = document.querySelector(".addBook");

  if (btnState.style.display === "block") {
    btnState.style.display = "none";
  } else if (btnState.style.display === "none") {
    btnState.style.display = "block";
  }
}

function submitBook() {
  event.preventDefault();
  addBookToLibrary();
}
