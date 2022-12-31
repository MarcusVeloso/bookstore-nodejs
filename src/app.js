import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connected with success!");
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Bookstore");
});

app.get("/books", (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books);
  });
});

app.get("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);
  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Success adding new book");
});

app.put("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);
  books[index].title = req.body.title;
  res.json(books);
});

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  res.json(`Book ${id} removed!`);
});

function searchBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;
