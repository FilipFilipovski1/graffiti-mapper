import React,{Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import MainNavigation from './shared/components/Navigation/MainNavigation';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';


const Users=React.lazy(()=>import('./user/pages/Users'));
const NewGraffiti=React.lazy(()=>import('./graffiti/pages/NewGraffiti'));
const UserGraffiti=React.lazy(()=>import('./graffiti/pages/UserGraffiti'));
const UpdateGraffiti=React.lazy(()=>import('./graffiti/pages/UpdateGraffiti'));
const Auth=React.lazy(()=>import('./user/pages/Auth'));

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserGraffiti />
        </Route>
        <Route path="/places/new" exact>
          <NewGraffiti />
        </Route>
        <Route path="/places/:placeId">
          <UpdateGraffiti />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserGraffiti />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense 
          fallback={
          <div className="center">
           <LoadingSpinner/>
            </div>
          }
          >
              {routes}</Suspense></main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
