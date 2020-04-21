// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { getAllCampusesFromServer } from '../redux/campuses';
import SingleAgg from './single-agg'

// component
class All extends Component {
  // componentDidMount() {
  //   this.props.getAllCampusesFromStore();
  // }
  render() {
    return <SingleAgg {...this.props} />
  }
}

// connect
const mapStatetoProps = state => ({
  boba: {
    name: 'oolong',
    price: 5,
    description: 'best boba ever',
    image: 'https://media.giphy.com/media/kBHfPMfonjJmM9fpfx/giphy.gif'
  }
})

// export
export default connect(mapStatetoProps)(All)
// export default All

// const mapStatetoProps = state => ({
//   campuses: state.campuses.all,
// });

// const mapDispatchtoProps = dispatch => ({
//   getAllCampusesFromStore: () => dispatch(getAllCampusesFromServer()),
// });

// export default connect(mapStatetoProps, mapDispatchtoProps)(AllCampuses);
