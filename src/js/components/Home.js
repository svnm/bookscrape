import React from 'react'
import Preview from './Preview'
import books from '../books'

var request = require('superagent');

class Home extends React.Component {

  constructor() {
    super()
    this.state = { books: books  }
  }

  render() {

    let previewList = this.state.books.map( (b, i) => {

      return (
            <Preview title={b.title} isbn={b.isbn} author={b.author} />
      );

    });

    return (

      <div id="home">        
        { previewList }
      </div>

    )

  }

}

module.exports = Home