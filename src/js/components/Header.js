import React from 'react'
import Search from './Search'
let { RouteHandler, Link } = require('react-router')

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

    return(

      <div className="section header">

          <div className="container">

            <div className="row">

              <div className="column">
                <Link to='home'>
                  <h3 className="title">book scrape</h3>
                </Link>
                <Search />
              </div>

              <div className="column">
                <h4 className="description">scraping book websites since October 21, 2015.</h4>
              </div>

            </div>

          </div>

      </div>

    )
  }

}