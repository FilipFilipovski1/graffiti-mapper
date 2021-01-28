import React from 'react';
import './Vote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
const seed = [
  { id: 5544, value: 0 },
 
]

class ProductItem extends React.Component {
  handleUpvote = (e) => {
    const type = e.target.innerText // is upvote or downvote
    const { upDownVote, id } = this.props;
    upDownVote(id, type);
  }
  render() {
    const {  value } = this.props;
    return (
      <div>
      <div className="entry__rank">
      
        {'  '}<span className="button_upvote" onClick={this.handleUpvote}>Upvote</span><FontAwesomeIcon icon={faThumbsUp} />
        {'  '}<span className="button_downvote" onClick={this.handleUpvote}>Downvote</span><FontAwesomeIcon icon={faThumbsDown} />
        <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <span className="pull-left">{value}</span>
        </div>
      </div>
    )
  }
}

const ProductList = ({ products, upDownVote }) => {
  return (
    products.map(({ id, value }, key) => {
      return (
        <ProductItem
          key={`product-${id}`}
          id={id}
          value={value}
          upDownVote={upDownVote}
        />
      )
    })
  )
}

class Vote extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({ products: seed })
  }

  handleVote = (id, type) => {
    const updateVote = this.state.products.map((prod, key) => {
      if (prod.id === id) {
        type === 'Upvote' ? prod.value++ : prod.value--
      }
      return prod;
    });

    this.setState({products: updateVote});
  }
  render() {
    return (
      <div>
        <ProductList
          products={this.state.products}
          upDownVote={this.handleVote}
        />
      </div>
    );
  }
}


export default Vote;