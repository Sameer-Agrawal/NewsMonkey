import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className='my-3'>
        <div className="card">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
              {source}
            </span>
          <img className="card-img-top" src={!imageUrl ? "https://i.hurimg.com/i/hdn/75/200x200/62441a674e3fe02e4427a540.jpg" : imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem