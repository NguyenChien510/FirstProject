
const firebaseConfig = {
  apiKey: "AIzaSyDab2F3oy_v4LJ9PtQzJVrF8j3Ei1AcFtM",
  authDomain: "collect-318ec.firebaseapp.com",
  databaseURL: "https://collect-318ec-default-rtdb.firebaseio.com",
  projectId: "collect-318ec",
  storageBucket: "collect-318ec.appspot.com",
  messagingSenderId: "228602922554",
  appId: "1:228602922554:web:152c0139284e8fb9c91703"
};

firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("date");

document.getElementById("det").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var date = getElementVal("date");
 

  saveMessages(date);


  //   reset the form
  
}

const saveMessages = (date) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
   date:date,
   timestamp: firebase.database.ServerValue.TIMESTAMP
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};



document.getElementById("det").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn sự kiện mặc định của form submit
  document.querySelector('button').removeAttribute('hidden'); // Hiển thị nút "NEXT"
});

