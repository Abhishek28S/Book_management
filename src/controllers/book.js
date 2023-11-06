const Books = require("../models/model");

exports.createBook = async (req, res) => {
  const { title, author, summary } = req.body;
  if (!title || !author || !summary) {
    throw "Please fill all the fields";
  } else {
    const bookDetails = await Books.create(req.body);
    res.status(201).json({
      success: true,
      bookDetails
    });
  }
}

exports.getAllBooks = async (req, res) => {
  const bookDetails = await Books.find().select("-_v");
  res.status(200).json({
    success: true,
    bookDetails
  });
};

exports.getBook = async (req, res) => {
  let bookDetail = await Books.findById(req.params.id).select("-__v");
  if (!bookDetail) {
    return "Book Not Found";
  }
  res.status(200).json({
    success: true,
    bookDetail
  })
}

exports.updateBook = async (req, res) => {
  let bookDetail = await Books.findById(req.params.id);
  if (!bookDetail) {
    return "Book Not Found";
  }
  bookDetail = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  })
  res.status(200).json({
    success: true,
    bookDetail
  })
};

exports.deleteBook = async (req, res) => {
  let bookDetail = await Books.findById(req.params.id);
  if (!bookDetail) {
    return "Book Not Found";
  }
  await Books.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Book Deleted Successfully",
  })
};
