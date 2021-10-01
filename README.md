<h1 align='center'> Network Notebook</h1>

Network notebook is a simple web-app designed to act as a storage wallet for professional contacts.

<a href='https://network-notebook-frontend.herokuapp.com'>
The live site can be visited here
</a>


<hr />
<h2 align='center'>Project Details</h2>
<p>
The main goal of this project was to create a full-stack application with independent frontend and backend components featuring user authentication. This repository contains the frontend component to the project and was built with React. The backend component to this project was developed using Rails as an API, <a href='https://github.com/tracedelange/network-notebook-backend'>which can be found here.</a>
</p>



<h3>Stack Details:</h3>
<ul>

<li>
<b>Hosting</b> <br />
Both frontend and backend components are hosted through Heroku
<br />

</li>
<b>User Authentication</b> <br />
Initally the app was developed with cookie based authentication persistance in mind, but after running into issues with updated Chrome policies in the well documented <a href='https://duo.com/decipher/google-rolls-out-samesite-cookie-changes-to-chrome'>Chrome SameSite issue,</a> I decided to opt for an authentication system more tangible. For this reason the app utilizes JSON Web Tokens through the <a href='https://rubygems.org/gems/jwt/versions/1.5.4'>JWT Gem</a> and persists sessions based on user local storage. 
<br />

</li>

<li>
<b>Architecture</b> <br />
This project was specifically developed with strict separation of concerns between backend and frontend components. The frontend communicates with the backend through a series of API calls through whitelisted CORS priviliages.
</li>

</ul>

<h2>Contact</h2>
Want to learn more about this project? <a href='mailto:tracedelange@me.com'>Send me an email</a> or <a href='https://www.delangedev.com/#/'>visit my personal website.</a>