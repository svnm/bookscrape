import React from 'react'
let { RouteHandler, Link } = require('react-router')

export default class Preview extends React.Component {
  
  render() {

    return (

      <div className="section book">
        <div className="container">

          <Link to='book' params={ { title: this.props.title } }>
            <h4 className="title">{this.props.title}</h4>
          </Link>

          <p className="author">{this.props.author}</p>      
          
  
        </div>
      </div>

    );
  }
}
