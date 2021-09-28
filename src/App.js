import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import Homepage from './components/core/Homepage';
import ProfilePage from './components/core/ProfilePage';
import { checkIfUserLoggedIn, signupUser } from './components/auth/authFunctions';
import Navbar from './components/core/Navbar';
import { logoutUser } from './components/auth/authFunctions'
import Paper from '@mui/material/Paper';
import Organizations from './components/data/Organizations';
import Contacts from './components/data/Contacts';


function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [userInformation, setUserInformation] = useState({})


  const updateUserStateLogin = (userData) => {
    setUserInformation(userData)
    setUserLoggedIn(true)
  }

  //use effect on load, fetch backend and query rails to determine if rails knows if there is a user logged in, if yes, return json object and update state.

  useEffect(() => {
    checkIfUserLoggedIn()
      .then(data => {
        if (data) {
          setUserInformation(data)
          setUserLoggedIn(true)
        }
      })
  }, [])


  const handleLogout = () => {
    logoutUser()
    setUserLoggedIn(false)
    setUserInformation({})
  }

  const handleSignUp = (e, signUp) => {
    e.preventDefault()
    signupUser(signUp)
      .then(data => {
        if (data) {
          setUserLoggedIn(true)
          setUserInformation(data)
        } else {
          console.log('user sign up failed')
        }
      })


  }

  return (
    <>
      <Navbar handleLogout={handleLogout} loggedIn={userLoggedIn} />
      <Paper
        elevation={5}
        sx={{
          position: 'absolute',
          width: "96vw",
          left: '2vw',
          top: '13vh',
          height: "84vh",
          backgroundColor: '#B2FFD6'
        }}>


          
        <Switch>
          <Route exact path='/signup'>
            {userLoggedIn ?
              <Redirect to='/home' />
              :
              <Signup handleSignUp={handleSignUp} />
            }
          </Route>
          <Route exact path='/login'>
            {userLoggedIn ?
              <Redirect to='/home' />
              :
              <Login updateUserState={updateUserStateLogin} />
            }
          </Route>
          <Route exact path='/profile'>
            {userLoggedIn ?
              <ProfilePage userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>
          <Route path='/home'>
            {userLoggedIn ?
              <Homepage userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>
          <Route path='/organizations'>
            {userLoggedIn ?
              <Organizations userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>
          <Route path='/contacts'>
            {userLoggedIn ?
              <Contacts userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>


          
          <Route path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </Paper>
    </>
  );
}

export default App;
