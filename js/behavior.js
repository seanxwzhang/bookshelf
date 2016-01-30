//Add interactivity so the user could manage their bookshelf

var bookInputForm = document.getElementById("add_book");
var addButton = document.getElementById("add_button");
var bookList = document.getElementById("booklist");
var searchForm = document.getElementById("search_form");
var searchButton = searchForm.getElementsByTagName("button")[0];

//Add a new book
var addBook = function() {
  console.log("Adding book");
  // When the button is pressed
  // Create a new list item with the text from bookInputForm

}

//Edit an existing book
var editBook = function(bookid) {
  console.log("Editing book");
  // When the button is pressed

}

//Delete an existing book
var deleteBook = function(bookid) {
  console.log("Deleting book");
}

//General search
var search = function() {
  console.log("Searching");
}

//Search books based on name
var searchName = function(bookname) {
  console.log("Searching bookname");
}

//Search books based on category
var searchCategory = function(category) {
  console.log("Searching category");
}

//Clear search result
var clearSearch = function() {
  console.log("Clearing search result");
}

//Exit edit mode
var exitEdit = function(bookid) {
  console.log("Exiting edit mode");
}

//Bind books to event handler
var bindBooks = function(book_item) {
  console.log("Binding book item");
  var editButton = book_item.querySelector(".edit");
  var deleteButton = book_item.querySelector(".delete");
  // if this book is in edit mode
  if (editButton.getAttribute("class").indexOf("edit_mode") > 0) {
      var exitButton = book_item.querySelector(".exit");
      exitButton.addEventListener("click", exitEdit);
  }
  else {
    editButton.addEventListener("click", editBook);
  }
  deleteButton.addEventListener("click", deleteBook);
}

addButton.onclick = addBook;
searchForm.onclick = search;

if (bookList.hasChildNodes()) {
  var all_books = bookList.children;
  for (var i = 0; i < all_books.length; i++) {
    bindBooks(all_books[i]);
  }
}
