// main.js — Project 6: Ternary, Operators, Constructors

// 1. Function using HTML + JS with a ternary operation (browser input)
function Check_Age() {
    var age = document.getElementById("Age").value; // read input
    var result = age < 18 ? "You are too young" : "You are old enough"; // ternary operator
    document.getElementById("Vote_Result").innerHTML = result + " to vote.";
}

// 2. Constructor function utilizing "new" and "this"
function Book(Title, Author, Year, Genre) {
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;
    this.Genre = Genre;
}

// Create a few objects with the constructor
var book1 = new Book("Atomic Habits", "James Clear", 2018, "Self-help");
var book2 = new Book("Sapiens", "Yuval Noah Harari", 2011, "History");
var book3 = new Book("Dune", "Frank Herbert", 1965, "Science Fiction");

// 3. Function to display constructor results inside an HTML element
function showBook() {
    document.getElementById("Book_Info").innerHTML =
        book2.Title + " by " + book2.Author +
        " (" + book2.Year + ") — " + book2.Genre + ".";
}

// 4. Nested function example
function concatWords() {
    var start_string = "Learning";

    // Inner function adds a word to the sentence
    function addWord(str) {
        start_string = start_string + " " + str;
    }

    addWord("JavaScript");
    addWord("is");
    addWord("fun!");
    document.getElementById("Nested_Result").innerHTML = start_string;
}