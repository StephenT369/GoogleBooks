import axios from "axios";
export default {
  getBooks: function(q) {
    return axios.get("/appapi/google", { params: { q: "title:" + q } });
  },
  getSavedBooks: function() {
    return axios.get("/appapi/books");
  },
  deleteBook: function(id) {
    return axios.delete("/appapi/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/appapi/books", bookData);
  }
};
