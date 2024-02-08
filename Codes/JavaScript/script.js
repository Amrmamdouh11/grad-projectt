//---------------------------------------show & hide body-------------------------------------------->
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
 // document.getElementById("myDiv").style.display = "block";
  document.getElementById("header").style.display = "flex";
document.getElementById("continer").style.display="block";
}
//----------------------------------------sectors background------------------------------------------------>
const sectorsContainer = document.getElementById('sectors');
const h3 = document.getElementById('h3');
const sectorButtons = document.querySelectorAll('.buttes .butt .sec');

const images = [
  'llll.jpeg',
  'SEAI_default_social_img.jpg',
  'food.jpeg',
  'immg.webp',
  'food.jpeg',
  'Reading.png',
  'th.jpeg',
  'SEAI_default_social_img.jpg',
  'th.jpeg',
  'SEAI_default_social_img.jpg',
];



sectorButtons.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    sectorsContainer.style.transition = 'background-image 0.5s ease-in-out';
    sectorsContainer.style.backgroundImage = `url(${images[index]}) `;
    sectorsContainer.style.backgroundRepeat = 'no-repeat';
    sectorsContainer.style.opacity = '0.9';
    sectorsContainer.style.backgroundSize = '100%  auto';
    sectorsContainer.style.height = 'fit-content';


    //button.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out';
    button.style.backgroundColor = '#f3f3f3';
    button.style.color = '#333333be';
    button.style.letterSpacing = '1.5px'; 
    backgroundImage.style.opacity='0.5';
    h3.style.color = '#333333be';
    h3.style.opacity = '1'; // Set h3 opacity to 1
    h3.style.transition = 'color 0.3s ease-in-out';

    button.style.opacity = '1'; // Set button opacity to 1
  });

  button.addEventListener('mouseout', () => {
    sectorsContainer.style.transition = 'background-image 0.5s ease-in-out';
    sectorsContainer.style.backgroundImage = 'none';
    sectorsContainer.style.opacity = '1';
    sectorsContainer.style.backgroundColor = 'transparent';

    button.style.transition = 'background-color 0.5s ease-in-out, color 0.5s ease-in-out';
    button.style.color = '#f3f3f3';
    button.style.backgroundColor = '#333333be';
 button.style.letterSpacing = 'normal'; 

    h3.style.color = '#f3f3f3';
    h3.style.opacity = '1'; // Set h3 opacity to 1
    h3.style.transition = 'color 0.3s ease-in-out';
    button.style.opacity = '1'; // Set button opacity to 1
  });
});
//<-----------------------------------login form-------------------------------->
function showLoginModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
}

function hideLoginModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.style.backgroundColor = ''; // Reset background color
}

function submitLoginForm() {
  var passwordInput = document.getElementById('password');
  var password = passwordInput.value;

  // Validate password
  if (!isValidPassword(password)) {
    showNotification("Password must be at least 8 characters and contain letters, numbers, and symbols.");
    return;
  }

  // Perform login logic here

  // Hide the modal after successful login
  hideLoginModal();
}

function isValidPassword(password) {
  // Password must be at least 8 characters and contain letters, numbers, and symbols
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function showNotification(message) {
  var notificationElement = document.getElementById('notification');
  notificationElement.innerHTML = message;
  notificationElement.style.display = 'block';

  // Hide the notification after a short delay (e.g., 3 seconds)
  setTimeout(function() {
    notificationElement.style.display = 'none';
  }, 3000);
}


