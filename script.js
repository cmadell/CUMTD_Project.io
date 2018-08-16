// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDwtfWSvtXKQ6wld9kmrlbbe89v25qm-Ig",
   authDomain: "cumtd-project.firebaseapp.com",
   databaseURL: "https://cumtd-project.firebaseio.com",
   projectId: "cumtd-project",
   storageBucket: "cumtd-project.appspot.com",
   messagingSenderId: "1015645493610"
 };
 firebase.initializeApp(config);
 var bus1 = "";
 var bus2 = "";
 var stopID = "";
 // Listen for form submit
document.getElementById('selectionForm').addEventListener('submit', submitForm);
 // Submit form
 function submitForm(e){
   bus1 = "";
   bus2 = "";
   stopID = "";

   e.preventDefault();

   // Get values
   var BUS1Checked = document.getElementById("BUS1").checked;
   var BUS2Checked = document.getElementById("BUS2").checked;
   var BUS3Checked = document.getElementById("BUS3").checked;
   var BUS4Checked = document.getElementById("BUS4").checked;
   var BUS5Checked = document.getElementById("BUS5").checked;

   var STOP1Checked = document.getElementById("STOP1").checked;
   var STOP2Checked = document.getElementById("STOP2").checked;
   var STOP3Checked = document.getElementById("STOP3").checked;

   var rainbowAnimationChecked = document.getElementById("Rainbow Animation").checked;
   var snakeAnimationChecked = document.getElementById("Snake Animation").checked;

   // Save message
   saveMessage(BUS1Checked, BUS2Checked, BUS3Checked,
      BUS4Checked, BUS5Checked, STOP1Checked,
       STOP2Checked, STOP3Checked, rainbowAnimationChecked, snakeAnimationChecked);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

  // Clear form
  document.getElementById('selectionForm').reset();
}

function saveMessage(BUS1Checked, BUS2Checked, BUS3Checked,
   BUS4Checked, BUS5Checked, STOP1Checked,
    STOP2Checked, STOP3Checked, rainbowAnimationChecked, snakeAnimationChecked){

      var BUS1 = firebase.database().ref().child("BUS1Firebase");
      var BUS2 = firebase.database().ref().child("BUS2Firebase");
      var BUS3 = firebase.database().ref().child("BUS3Firebase");
      var BUS4 = firebase.database().ref().child("BUS4Firebase");
      var BUS5 = firebase.database().ref().child("BUS5Firebase");
      var STOP1 = firebase.database().ref().child("STOP1Firebase");
      var STOP2 = firebase.database().ref().child("STOP2Firebase");
      var STOP3 = firebase.database().ref().child("STOP3Firebase");
      var rainbowAnimation = firebase.database().ref().child("rainbow");
      var snakeAnimation = firebase.database().ref().child("snake")

      if (BUS1Checked == true) {
        BUS1.set(1);
      } else {
        BUS1.set(0);
      }

      if (BUS2Checked == true) {
        BUS2.set(1);
      } else {
        BUS2.set(0);
      }

      if (BUS3Checked == true) {
        BUS3.set(1);
      } else {
        BUS3.set(0);
      }

      if (BUS4Checked == true) {
        BUS4.set(1);
      } else {
        BUS4.set(0);
      }

      if (BUS5Checked == true) {
        BUS5.set(1);
      } else {
        BUS5.set(0);
      }

      if (STOP1Checked == true) {
        STOP1.set(1);
      } else {
        STOP1.set(0);
      }

      if (STOP2Checked == true) {
        STOP2.set(1);
      } else {
        STOP2.set(0);
      }

      if (STOP3Checked == true) {
        STOP3.set(1);
      } else {
        STOP3.set(0);
      }

      if (rainbowAnimationChecked == true) {
        rainbowAnimation.set(1);
      } else {
        rainbowAnimation.set(0);
      }

      if (snakeAnimationChecked == true) {
        snakeAnimation.set(1);
      } else {
        snakeAnimation.set(0);
      }
}
