// import React from 'react';

// import Card from '../../shared/components/UIElements/Card';
// import MyProfileItem from './MyProfileItem';
// import Button from '../../shared/components/FormElements/Button';
// import './MyProfileList.css';

// const MyProfileList = props => {
//   if (props.items.length === 0) {
//     return (
//       <div className="graffiti-list center">
//         <Card>
//           <h2>No Users found. Maybe create one?</h2>
//           <Button to="/auth">Create User</Button>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <ul className="graffiti-list">
//       {props.items.map(user => (
//         <MyProfileItem
//           key={user.id}
//           id={user.id}
//           name={user.name}
//           password={user.password}
//           image={user.image}
          
        
//         />
//       ))}
//     </ul>
//   );
// };

// export default MyProfileList;
