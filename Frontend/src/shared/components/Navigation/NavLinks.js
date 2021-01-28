import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

// import SearchBox from '../FormElements/SearchBox';
// import MyProfile from '../../../user/pages/MyProfile';
// import Gallery from 'react-grid-gallery';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  // const IMAGES =
  // [{
  //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  //         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  //         thumbnailWidth: 320,
  //         thumbnailHeight: 174,
  //         isSelected: true,
  //         caption: "After Rain (Jeshu John - designerspics.com)"
  // },
  // {
  //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  //         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  //         thumbnailWidth: 320,
  //         thumbnailHeight: 212,
  //         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
  //         caption: "Boats (Jeshu John - designerspics.com)"
  // },
   
  // {
  //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  //         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  //         thumbnailWidth: 320,
  //         thumbnailHeight: 212
  // }]


  return (
    <ul className="nav-links">

      {/* {auth.isLoggedIn && (
        <li>
          <SearchBox/>
        </li>
      )} */}

      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
        
     

      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY GRAFFITI</NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD GRAFFITi</NavLink>
        </li>
      )}

       {/* {auth.isLoggedIn && (
        <li>
         <Gallery images={IMAGES} backdropClosesModal={true}/>
        </li>
      )} */}



       {/* {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}`}>MY PROFILE</NavLink>
        </li>
      )}  */}

      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
