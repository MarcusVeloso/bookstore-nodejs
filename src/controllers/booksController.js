import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static addBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - fail to add new book` });
        return;
      }

      res.status(201).send(book.toJSON());
    });
  };

  static updateBook = (req, res) => {
    const { id } = req.params;
    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book successfully updated!" });
        return;
      }

      res.status(500).send({ message: err.message });
    });
  };
}

export default BookController;
