import React from 'react'
import books from '../books'
var request = require('superagent');

class Book extends React.Component {

  constructor() {
    super()
    let book = {id: '', title: '', extract: ''}
    this.state = { book: book}

  }

  componentDidMount() {
    let book = {}

    for(let i = 0; i < books.length; i++){
      if(books[i].title == this.props.params.title){        
        book = books[i];
      }
    }

    let url = 'http://127.0.0.1:5000/api/books?';
    url += 'isbn=' + book.isbn;
    url += '&title=' + book.title;
    url += '&author=' + book.author;
    url += '&seller=' + book.seller;

    request
    .get(url)
    .end(function(err, res){
        // res.body.book returned from BookScrape
        book.price = res.body.book.price;

        // now set the book
        this.setState({ book: book })
    }.bind(this));
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() { 

    return (
      <div className="book">

        <div className="container">
          <h3 className="title">{this.state.book.title}</h3>
          <h3 className="author">{this.state.book.author}</h3>
          <h3 className="price">{this.state.book.price}</h3>
          <h3 className="seller">{this.state.book.seller}</h3>
        </div>

      </div>
    );

  }
}

module.exports = Book