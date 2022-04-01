import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card">
          <img className="card-img-top" src={!imageUrl?"https://i.hurimg.com/i/hdn/75/200x200/62441a674e3fe02e4427a540.jpg":imageUrl} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem