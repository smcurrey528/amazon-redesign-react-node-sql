import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Hello from './Hello';
import MenuBar from './MenuBar';
import './ProductSingle.css';
import AddReview from './AddReview';
import CartSummary from './CartSummary';

class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      apiDataLoaded: false,
      items : this.props.items,
      cartQty : 0

    }
  }


  componentDidMount() {
    axios.get(`/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          products: res.data.data,
        })
      }).catch(err => console.log(err));
}

 handleAdd() {
    this.setState({
      cartQty:this.state.cartQty+1
    });
  };



  renderListingsOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <React.Fragment>
        <div className="single-listing">
          <Nav/>
          <div className="singleProduct">
                <img className="singleImg" src={this.state.products.url} alt={this.state.products.title} />
               <div className="productBackground">
               <p className="companyName"> {this.state.products.company} </p>
               <h1 className="prodName">  {this.state.products.title} </h1>
               <div>
                    <svg className="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
               </div>
               <img className="size"
                 src={this.state.products.amazon_choice} />
               <img className="delivery"
                src={this.state.products.prime} />
               <div className="prodPrice">
                 {this.state.products.price}
               </div>
              <button className="listButton">  Add to List </button>
              <button className="basketButton"
                type="button"
                onClick={this.handleAdd.bind(this)}
              > Add to Basket </button>
              <CartSummary cartQty={this.state.cartQty} />
             </div>
          </div>
            <div className="reviewSection">
              <div className="leftReview">
                        <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
             <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                  l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
             </svg>
                   <p> {this.state.products.review_number} reviews </p>
                   <p> 5 out of 5 stars </p>

               </div>
                <div className="rightReview">

                </div>
                <hr/>
                <div className="categories">
                  <ul className="textUL">
                   <li className="textblack"> Latest </li>
                   <li className="textcat"> 5 Stars </li>
                   <li className="textcat"> 4 Stars  </li>
                   <li className="textcat"> 3 Stars </li>
                   <li className="textcat"> 2 Stars </li>
                   <li className="textcat"> 1 Star </li>
                  </ul>
               </div>
                <div className="reviewone">
                       <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                         l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                      </svg>
                    <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                <p className="titleProducts"> {this.state.products.review_titleone}  </p>
                <p className="reviewPerson">  {this.state.products.review_personone} </p>
                <p>  {this.state.products.review_one} </p>
                </div>
                <div className="reviewone">
                        <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                         l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                      </svg>
                    <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                <p className="titleProducts"> {this.state.products.review_titletwo}  </p>
                <p className="reviewPerson">  {this.state.products.review_persontwo} </p>
                <p>  {this.state.products.review_two} </p>
                </div>
                <div className="reviewone">
                       <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                         l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                      </svg>
                    <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                     <svg className="star-gold" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/2000/xlink" width="21px" height="20px">
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
                          l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
                     </svg>
                <p className="titleProducts"> {this.state.products.review_titlethree}  </p>
                <p className="reviewPerson">  {this.state.products.review_personthree} </p>
                <p>  {this.state.products.review_three} </p>
                </div>
            </div>

        </div>
         <Footer/>
         </React.Fragment>
      )
    } else return <p className="loading">Loading...</p>
  }


  render() {
    return (
      <div className="listings-single">
        {this.renderListingsOrLoading()}
      </div>
    )
  }
}


export default ProductSingle;
