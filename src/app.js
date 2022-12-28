import express from "express";

const app = express();

const books = [
  { id: 1, title: "Matrix" },
  { id: 2, title: "Matrix Reload" },
  { id: 3, title: "Matrix Revolution" },
];

app.get("/", (req, res) => {
  res.status(200).send("Bookstore");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

export default app;
