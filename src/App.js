import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import Homepage from './components/core/Homepage';
import ProfilePage from './components/core/ProfilePage';
import { checkIfUserLoggedIn, signupUser } from './components/auth/authFunctions';
import Navbar from './components/core/Navbar';
import Paper from '@mui/material/Paper';
import Organizations from './components/data/Organizations';
import Contacts from './components/data/Contacts';


function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [userInformation, setUserInformation] = useState({})
  const [userToken, setUserToken] = useState('')


  const updateUserStateLogin = (userData) => {

    // console.log(userData.user)

    localStorage.setItem("jwt", userData.jwt);
    setUserToken(userData.jwt)
    setUserInformation(userData.user)
    setUserLoggedIn(true)
  }

  //use effect on load, fetch backend and query rails to determine if rails knows if there is a user logged in, if yes, return json object and update state.

  useEffect(() => {

    const jwtToken = localStorage.getItem('jwt')

    if (jwtToken) {
      checkIfUserLoggedIn(jwtToken)
      .then(data => {
        setUserInformation(data.user)
        setUserToken(jwtToken)
        setUserLoggedIn(true)
      })

    } 
  }, [])

  // True logout is being handled @ sidebar
  // const handleLogout = () => {
  //   // logoutUser()
  //   localStorage.removeItem("jwt");
  //   setUserLoggedIn(false)
  //   setUserInformation({})
  //   setUserToken(null)

  // }

  const handleSignUp = (e, signUp) => {
    e.preventDefault()
    signupUser(signUp)
      .then(response => {

        if (response.errors) {

          console.log('Signup failed.')
        } else {
          localStorage.setItem("jwt", response.jwt);
          setUserInformation(response.user)
          setUserLoggedIn(true)
          setUserToken(response.jwt)
        }
      })


  }

  return (
    <>
      <Navbar loggedIn={userLoggedIn} />
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
              <ProfilePage userToken={userToken} userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>
          <Route path='/home'>
            {userLoggedIn ?
              <Homepage userToken={userToken} userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>
          <Route path='/organizations'>
            {userLoggedIn ?
              <Organizations userToken={userToken} userInfo={userInformation} />
              :
              <Redirect to='/login' />
            }
          </Route>
          <Route path='/contacts'>
            {userLoggedIn ?
              <Contacts userToken={userToken} userInfo={userInformation} />
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
