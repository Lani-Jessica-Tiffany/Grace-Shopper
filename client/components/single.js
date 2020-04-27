// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleThunk} from '../store/boba'
import SingleAgg from './single-agg'
import {addOrderThunk} from '../store/cart'

// component
class Single extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatchGetSingleThunk(id)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSumbit(e) {
    e.preventDefault()
    const bobaId = this.props.boba.id
    const quantity = parseFloat(this.state.quantity)
    this.props.dispatchAddOrderThunk(bobaId, quantity)
    this.setState({quantity: ''})
  }

  render() {
    return (
      <div>
        <SingleAgg {...this.props} />
        <form onSubmit={e => this.handleSumbit(e)}>
          <h5>You Know You Want One:</h5>
          <label htmlFor="quantity">Quantity:</label>
          <input
            onChange={e => this.handleChange(e)}
            type="number"
            id="quantity"
            min="0"
            max="10"
            value={this.state.value}
            name="quantity"
          />
          <button type="submit">Add to Cart!</button>
        </form>
      </div>
    )
  }
}
// connect
const mapStatetoProps = state => ({
  boba: state.boba.single
})

const mapDispatchtoProps = dispatch => ({
  dispatchGetSingleThunk: id => dispatch(getSingleThunk(id)),
  dispatchAddOrderThunk: (bobaId, quantity) =>
    dispatch(addOrderThunk(bobaId, quantity))
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Single)
