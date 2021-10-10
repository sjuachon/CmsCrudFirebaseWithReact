import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import "./App.css";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import "./components/Header.css"
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Search from "./pages/Search";
import HeaderPublic from "./components/HeaderPublic";
import HomePublic from "./pages/HomePublic";

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
  return (
    <div className="App">
      <header className="App-header">
         Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      
      <BrowserRouter>
        
        <Auth0Provider> 
          <Link to = {{
            pathname: "/add",
            state: user.name
          }}
          />
          <Header />
          <ToastContainer position="top-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddEdit} />
            <Route path="/update/:id" component={AddEdit} />
            <Route path="/view/:id" component={View} />
            <Route path="/about" component={About} />
            <Route path="/Search" component={Search} />
          </Switch>
        </Auth0Provider>
        
      
      </BrowserRouter>
      </header>
    </div>
  ); // end of return
   } else {
    //return <button onClick={loginWithRedirect}>Log in</button>;

    return (
      <header className="App-header">
         Hello there.  You must login to be able to add, update, and delete contacts.{' '}
        <button onClick={loginWithRedirect}>Log in</button>;
      
      <BrowserRouter>
          <HeaderPublic />
          <ToastContainer position="top-center" />
          <Switch>
            <Route exact path="/" component={HomePublic} />
            <Route path="/view/:id" component={View} />
            <Route path="/about" component={About} />
            <Route path="/Search" component={Search} />
          </Switch>
                
      
      </BrowserRouter>
      </header>
    )
  }
}

export default App;