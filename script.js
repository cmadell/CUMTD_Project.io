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

 // Listen for form submit
document.getElementById('selectionForm').addEventListener('submit', submitForm);
 // Submit form
 function submitForm(e){
   e.preventDefault();

   // Get values
   var green5EChecked = document.getElementById("5E Green").checked;
   var greenHopper5EChecked = document.getElementById("5E GreenHopper").checked;
   var limitedIllini220NChecked = document.getElementById("220N Illini Limited").checked;
   var limitedIllini220SChecked = document.getElementById("220S Illini Limited").checked;
   var silver13NChecked = document.getElementById("13N Silver").checked;

   var firstDanielChecked = document.getElementById("First and Daniel").checked;
   var illiniUnionChecked = document.getElementById("Illini Union").checked;
   var transitPlazaChecked = document.getElementById("Transit Plaza").checked
   var rainbowAnimationChecked = document.getElementById("Rainbow Animation").checked;

   // Save message
   saveMessage(green5EChecked, greenHopper5EChecked, limitedIllini220NChecked,
      limitedIllini220SChecked, silver13NChecked, firstDanielChecked,
       illiniUnionChecked, transitPlazaChecked, rainbowAnimationChecked);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },60000);

  // Clear form
  document.getElementById('selectionForm').reset();
}

function saveMessage(green5EChecked, greenHopper5EChecked, limitedIllini220NChecked,
   limitedIllini220SChecked, silver13NChecked, firstDanielChecked,
    illiniUnionChecked, transitPlazaChecked, rainbowAnimationChecked){
      var green5E = firebase.database().ref().child("green5E");
      var greenHopper5E = firebase.database().ref().child("greenHopper5E");
      var limitedIllini220N = firebase.database().ref().child("limitedIllini220N");
      var limitedIllini220S = firebase.database().ref().child("limitedIllini220S");
      var silver13N = firebase.database().ref().child("silver13N");
      var firstDaniel = firebase.database().ref().child("firstDaniel");
      var illiniUnion = firebase.database().ref().child("illiniUnion");
      var transitPlaza = firebase.database().ref().child("transitPlaza");
      var rainbowAnimation = firebase.database().ref().child("rainbow");

      if (green5EChecked == true) {
        green5E.set(1);
      } else {
        green5E.set(0);
      }

      if (greenHopper5EChecked == true) {
        greenHopper5E.set(1);
      } else {
        greenHopper5E.set(0);
      }

      if (limitedIllini220NChecked == true) {
        limitedIllini220N.set(1);
      } else {
        limitedIllini220N.set(0);
      }

      if (limitedIllini220SChecked == true) {
        limitedIllini220S.set(1);
      } else {
        limitedIllini220S.set(0);
      }

      if (silver13NChecked == true) {
        silver13N.set(1);
      } else {
        silver13N.set(0);
      }

      if (firstDanielChecked == true) {
        firstDaniel.set(1);
      } else {
        firstDaniel.set(0);
      }

      if (illiniUnionChecked == true) {
        illiniUnion.set(1);
      } else {
        illiniUnion.set(0);
      }

      if (rainbowAnimationChecked == true) {
        rainbowAnimation.set(1);
      } else {
        rainbowAnimation.set(0);
      }

      if (transitPlazaChecked == true) {
        transitPlaza.set(1);
      } else {
        transitPlaza.set(0);
      }
}
