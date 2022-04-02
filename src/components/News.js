import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  articles=[]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component")
    this.state={
      articles: this.articles,
      loading: false,
      page: 1,
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45d7698602ee41cbaef15989448e260f&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
  }
  handleprevclick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45d7698602ee41cbaef15989448e260f&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading:false
    })
  }
  handlenextclick= async ()=>{
      if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45d7698602ee41cbaef15989448e260f&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page+1,
          articles: parsedData.articles,
          loading: false
        })
     }
  }
  render() {
    return (
      <div className='container my-3'>
      <div className='text-center'>
          <h1 className='my-3'>NewsMonkey top headlines!</h1>
      </div>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4"  key={element.url}>
                  <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
                </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" onClick={this.handleprevclick} className="btn btn-dark">&laquo; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handlenextclick} className="btn btn-dark">Next &raquo;</button>
          </div>
      </div>
    )
  }
}

export default News