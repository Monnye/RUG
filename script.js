async function getUserData() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUserData(user)
}

function displayUserData(user) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const image = document.getElementById('image');
    const dob = document.getElementById('dob');
    const login = document.getElementById('login');

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    email.innerText = `${user.email}`;
    phone.innerText = `${user.phone}`;
    location.innerText = `${user.location.country}`;
    login.innerText = `${user.login.password}`;
    dob.innerText = `${user.dob.date}`;
    image.setAttribute('src', `${user.picture.medium}`);

}

getUserData();