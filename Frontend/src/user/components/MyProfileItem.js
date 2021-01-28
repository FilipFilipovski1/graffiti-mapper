// import React, { useState, useContext } from 'react';

// import Card from '../../shared/components/UIElements/Card';
// import Button from '../../shared/components/FormElements/Button';

// import ErrorModal from '../../shared/components/UIElements/ErrorModal';
// import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
// import { AuthContext } from '../../shared/context/auth-context';
// import { useHttpClient } from '../../shared/hooks/http-hook';
// import './MyProfileItem.css';




// function MyProfileItem(props) {
//   const { isLoading, error, clearError } = useHttpClient();
//   const auth = useContext(AuthContext);
  
//   return (
//     <React.Fragment>
//       <ErrorModal error={error} onClear={clearError} />
//       <li className="graffiti-item">
//         <Card className="graffiti-item__content">
//           {isLoading && <LoadingSpinner asOverlay />}

//           <div className="graffiti-item__image">
//             <img
//               src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
//               alt={props.title} />
//           </div>

//           <div className="graffiti-item__info">
//             <h2>{props.name}</h2>
//             <h3>{props.image}</h3>
//             <p>{props.password}</p>
//           </div>


//           <div className="graffiti-item__actions">
//             {auth.userId === props.creatorId && (
//               <Button to={`/${props.id}`}>EDIT</Button>
//             )}
//           </div>

//         </Card>
//       </li>
//     </React.Fragment>
//   );
// }

// export default MyProfileItem;
