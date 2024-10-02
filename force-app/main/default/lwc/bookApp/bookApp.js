import { LightningElement } from "lwc";

const BOOK_URL = "https://www.googleapis.com/books/v1/volumes?q=";
export default class BookApp extends LightningElement {
  searchKey;
  books;

  changeHandler(event) {
    this.searchKey = event.target.value;
    console.log(this.searchKey);
    
    if (this.searchKey === "") {
      this.searchKey=null;
      console.log('Value ', this.searchKey);
      
    } else {
      this.fetchBooks();
    }

  }

  connectedCallback() {
    this.fetchBooks();
  }

  fetchBooks() {
    let customUrl = `${BOOK_URL} + ${this.searchKey}`;
    fetch(customUrl)
      .then((response) => response.json())
      .then((data) => {
        this.books = data;
      })
      .catch((error) => console.log(error));
  }
}
