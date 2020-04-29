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
      <div className="text-center mt-5">
        <SingleAgg {...this.props} />
        <h5 className="rainbow-text">You Know You Want One</h5>
        <form className="form-group" onSubmit={e => this.handleSumbit(e)}>
          <div className="justify-content-center form-inline">
            <label
              className="control-label font-weight-bold"
              htmlFor="quantity"
            >
              Quantity:{' '}
            </label>
            <input
              className="form-control qty-width"
              onChange={e => this.handleChange(e)}
              type="number"
              id="quantity"
              min="1"
              max="10"
              value={this.state.quantity}
              name="quantity"
            />
          </div>
          <button className="clearfix btn btn-primary" type="submit">
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
