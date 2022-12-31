import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static listAurhorById = (req, res) => {
    const { id } = req.params;
    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Author not found` });
        return;
      }

      res.status(200).send(authors);
    });
  };

  static addAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - fail to add new author` });
        return;
      }

      res.status(201).send(author.toJSON());
    });
  };

  static updateAuthor = (req, res) => {
    const { id } = req.params;
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Author successfully updated" });
        return;
      }

      res.status(500).send({ message: err.message });
    });
  };

  static deleteAuthor = (req, res) => {
    const { id } = req.params;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Author successfully removed" });
        return;
      }

      res.status(500).send({ message: err.message });
    });
  };
}

export default AuthorController;
