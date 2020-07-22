
// react to an event
// when the event happens


const updateTheDOM = (fullName, email, bio, location) => {
  // find the elements we will update in the dom
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const userBio = document.getElementById('userBio');
  const userLocation = document.getElementById('userLocation');

  // update the inner text of the elements
  userName.innerText = fullName;
  userEmail.innerText = email;
  userBio.innerText = bio;
  userLocation.innerText = location;

}

const fetchAPI = (event) => {
  event.preventDefault();
  
  // const input = document.getElementById('clearbitEmail');
  // const input = form.querySelector('clearbitEmail');
  const input = event.currentTarget.querySelector('#clearbitEmail');
  const email = input.value;

  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`

  const options = {
    headers: {
      Authorization: "Bearer sk_f3f04bef2d500f1b9e7f42152a47edc3"
    }
  }
  
  // fetch the data from the API
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      // DESTRUCTURING
      // const { name, email, bio, location } = data.person
      // this here is the same as the above

      const name = data.person.name
      const email = data.person.email
      const bio = data.person.bio
      const location = data.person.location
      const fullName = name.fullName
  
      // with this data, we will update the DOM
      updateTheDOM(fullName, email, bio, location)
  
      });
};


// select the element
const form = document.getElementById('clearbitForm');
// add submit event listener
form.addEventListener('submit', fetchAPI);
// ONLY ONE ELEMENT CAN SUBMIT -> form
