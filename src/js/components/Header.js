import React from 'react'
let { RouteHandler, Link } = require('react-router')

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

    return(

      <div className="section header">

        <Link to='home'>
          <div className="container">
            <div className="row">
              <div className="column">
                <h3 className="title">book scrape</h3>
                <h4 className="description">scraping book websites since October 21, 2015.</h4>
              </div>
            </div>
          </div>
        </Link>

      </div>

    )
  }

}