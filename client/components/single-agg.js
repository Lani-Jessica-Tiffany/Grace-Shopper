// import
import React from 'react'
import SingleInfo from './single-info'

// component
const SingleAgg = props => (
  <div>
    <SingleInfo {...props} />
    {/* can add other components here (e.g. Quantity, Add-ons) */}
  </div>
)

// export
export default SingleAgg

// const CampusComponent = props => {
//   const { campuses } = props;
//   if (campuses.length === 0) {
//     return <h1>Please assign campus to student</h1>;
//   } else if (campuses[0] !== null) {
//     return (
//       <div>
//         <ul>
//           {campuses.map(campus => (
//             <div key={`campus ${campus.id}`} className="component">
//               <CampusInfo campus={campus} />
//               <DeleteCampus campusId={campus.id} />
//             </div>
//           ))}
//         </ul>
//       </div>
//     );
//   } else {
//     return <div />;
//   }
// };
