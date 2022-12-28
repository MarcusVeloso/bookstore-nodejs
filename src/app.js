import express from "express";

const app = express();

app.use(express.json());

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

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Success adding new book");
});

export default app;
