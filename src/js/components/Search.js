import React from 'react'
let { RouteHandler, Link } = require('react-router')

export default class Preview extends React.Component {
  
  changeInput (e) {
  }

  render() {

    return (

      <div className="search">

          <input type="text"
              className="input-text" 
              onKeyUp={this.changeInput} />

          <i className="search-button icon"></i>

      </div>

    );
  }
}
