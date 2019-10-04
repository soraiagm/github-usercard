/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// GET REQUEST FOR INSTRUCTORS
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
       .then(response => {
         console.log(response.data);
         cards.appendChild(githubComponent(response.data))
       })
       
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


// 1. GET REQUEST FOR MY GITHUB
axios.get("https://api.github.com/users/soraiagm")
  .then(response => {
      console.log(response.data)
      cards.appendChild(githubComponent(response.data))
  })
  .catch(error => {
    console.log(error);
  });

  const cards = document.querySelector(".cards");

  function githubComponent (data) {
      
      const card = document.createElement("div")
      card.classList.add("card")
      cards.appendChild(card);

      const img = document.createElement("img")
      card.appendChild(img)
      img.src = data.avatar_url

      const cardInfo = document.createElement("div")
      cardInfo.classList.add("card-info")
      card.appendChild(cardInfo)

      const name = document.createElement("h3")
      name.classList.add("name")
      cardInfo.appendChild(name)
      name.textContent = data.name

      const userName = document.createElement("p")
      userName.classList.add("username")
      cardInfo.appendChild(userName)
      userName.textContent = data.login

      const userLocation = document.createElement("p")
      cardInfo.appendChild(userLocation)
      userLocation.textContent = `Location: ${data.location}`

      const profilePara = document.createElement("p")
      const aHref = document.createElement("a")
      
      profilePara.textContent = `Profile: ${aHref}`
      aHref.textContent = data.html_url
      aHref.setAttribute('href', `${data.html_url}`)
      aHref.href = data.html_url
     
      cardInfo.appendChild(profilePara)
      profilePara.appendChild(aHref)

      const userFollowers = document.createElement("p")
      cardInfo.appendChild(userFollowers)
      userFollowers.textContent = `Followers: ${data.followers}`

      const userFollowing = document.createElement("p");
      userFollowing.textContent = `Following: ${data.following}`
      cardInfo.appendChild(userFollowing)
      
      const bio = document.createElement("p")
      cardInfo.appendChild(bio)
      bio.textContent = `Bio: ${data.bio}`
      
      return card
  }

  
      





// axios.get("https://api.github.com/users")
//       .then(response => {
//         console.log(response.data);
//         response.data.forEach(item => {
//           cards.appendChild(githubComponent(item))
//         })
//       })     