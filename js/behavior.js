//Add interactivity so the user could manage their bookshelf

var bookInputForm = document.getElementById("add_book");
var addButton = document.getElementById("add_button");
var bookList = document.getElementById("booklist");
var searchForm = document.getElementById("search_form");
var searchButton = searchForm.getElementsByTagName("button")[0];
var count = 2;
var all_categories = document.createElement("datalist");


var createBook = function(name, category) {
  console.log("Creating book");
  var newbook = document.createElement("li");
  newbook.setAttribute("class", "book_item");
  newbook.setAttribute("category", category);
  newbook.setAttribute("id", ++count);
  var book_label = document.createElement("label");
  book_label.setAttribute("class", "book_name");
  book_label.innerHTML = name;
  var d_button = document.createElement("button");
  d_button.setAttribute("class", "delete");
  d_button.innerHTML = "Delete";
  var e_button = document.createElement("button");
  e_button.setAttribute("class", "edit");
  e_button.innerHTML = "Edit";
  var bar = document.createElement("div");
  var inner_bar = document.createElement("div");
  bar.setAttribute("class", "progressbar")
  bar.appendChild(inner_bar);
  newbook.appendChild(book_label);
  newbook.appendChild(d_button);
  newbook.appendChild(e_button);
  newbook.appendChild(bar);
  return newbook;
}

//Add a new book
var addBook = function() {
  console.log("Adding book");
  // When the button is pressed
  // Create a new list item with the text from bookInputForm
  var bookname = bookInputForm.querySelector('input[name="book_name"]').value;
  var category = bookInputForm.querySelector('input[name="book_category"]').value;
  var newbook = createBook(bookname, category);
  bookList.appendChild(newbook);
  bindBooks(newbook);
}

//Edit an existing book
var editBook = function(book_item) {
  console.log("Editing book");
  // When the button is pressed
  book_item.querySelector("label").setAttribute("class","book_name edit_mode");
  var name_input = document.createElement("input");
  var cate_input = document.createElement("input");
  name_input.setAttribute("type", "text");
  name_input.setAttribute("name","book_name");
  name_input.setAttribute("class","edit_mode");
  name_input.setAttribute("placeholder", book_item.querySelector("label").innerHTML);
  cate_input.setAttribute("type", "text");
  cate_input.setAttribute("name", "book_category");
  cate_input.setAttribute("list", "categories");
  cate_input.setAttribute("class", "edit_mode");
  cate_input.setAttribute("placeholder", book_item.getAttribute("category"));
  book_item.insertBefore(name_input, book_item.querySelector('button[class="delete"]'));
  book_item.insertBefore(cate_input, book_item.querySelector('button[class="delete"]'));
  book_item.querySelector('button[class="delete"]').setAttribute("class","delete edit_mode");
  book_item.querySelector('button[class="edit"]').setAttribute("class","edit edit_mode");
  var exit_button = document.createElement("button");
  exit_button.innerHTML = "Exit";
  exit_button.setAttribute("class", "exit");
  book_item.insertBefore(exit_button, book_item.querySelector('button[class="edit edit_mode"]'));
  book_item.insertBefore(all_categories, book_item.querySelector('button[class="delet edit_mode"]'));
  bindExit(book_item);
}

//Delete an existing book
var deleteBook = function(book_item) {
  console.log("Deleting book");
  book_item.parentNode.removeChild(book_item);
  count--;
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
var exitEdit = function(book_item) {
  console.log("Exiting edit mode");
  var inputs = book_item.querySelectorAll("input");
  inputs[0].parentNode.removeChild(inputs[0]);
  inputs[1].parentNode.removeChild(inputs[1]);
  var datalist = book_item.querySelector("datalist");
  datalist.parentNode.removeChild(datalist);
  var exit_button = book_item.querySelector(".exit")
  exit_button.parentNode.removeChild(exit_button);
  book_item.querySelector("label").setAttribute("class", "book_name");
  book_item.querySelector('button[class="delete edit_mode"]').setAttribute("class", "delete");
  book_item.querySelector('button[class="edit edit_mode"]').setAttribute("class", "edit");
}

//Bind books to event handler
var bindBooks = function(book_item) {
  console.log("Binding book item");
  bindEdit(book_item);
  bindExit(book_item);
  bindDelete(book_item);
}

var bindEdit = function(book_item) {
  console.log("Binding edit button");
  var editButton = book_item.querySelector(".edit");
  editButton.addEventListener("click", (function (x){
    return function() {
      editBook(book_item);
    };
  })(book_item));
}

var bindExit = function(book_item) {
  console.log("Binding exit button");
  var editButton = book_item.querySelector(".edit");
  if (editButton.getAttribute("class").indexOf("edit_mode") > 0) {
      var exitButton = book_item.querySelector(".exit");
      exitButton.addEventListener("click", (function (x) {
        return function() {
          exitEdit(book_item);
        };
      })(book_item));
  }
}

var bindDelete = function(book_item) {
  console.log("Binding delte button");
  var deleteButton = book_item.querySelector(".delete");
  deleteButton.addEventListener("click", (function (x) {
    return function() {
      deleteBook(book_item);
    };
  })(book_item));
}

addButton.onclick = addBook;
searchForm.onclick = search;

if (bookList.hasChildNodes()) {
  var all_books = bookList.children;
  for (var i = 0; i < all_books.length; i++) {
    bindBooks(all_books[i]);
  }
}
