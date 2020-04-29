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
      quantity: '1',
      message: ''
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
    this.setState({
      quantity: '',
      message: 'Added to Cart'
    })
    setTimeout(() => {
      this.setState({
        message: ''
      })
    }, 2000)
  }

  render() {
    return (
      <div className="text-center">
        <SingleAgg {...this.props} />
        <form onSubmit={e => this.handleSumbit(e)}>
          <h5 className="rainbow-text">You Know You Want One</h5>
          <label htmlFor="quantity">Quantity:</label>
          <input
            className="w-25 form-control mx-auto"
            onChange={e => this.handleChange(e)}
            type="number"
            id="quantity"
            min="1"
            max="10"
            value={this.state.quantity}
            name="quantity"
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Add to Cart!
          </button>
          <br />
          <p className="text-success">{this.state.message}</p>
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
