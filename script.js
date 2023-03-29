
  function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    var ageInMs = Date.now() - new Date(birthdate).getTime();
    var ageDate = new Date(ageInMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById('result').innerHTML = "Your age is " + age + " years old.";
  }