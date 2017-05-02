var b1= document.getElementById("vmButton");
var currentYear= new Date();
b1.onclick=function() {

  var byear=parseInt(document.getElementById("byinput").value);
  if (byear<1000){
    window.alert("Minimum birth year is 1900. please insert valid year of birth");
  }
  if (byear>currentYear.getFullYear()){
    window.alert("No way that you where born in the future!!! please insert valid birth date");
  }
  if(byear>=1000 & byear<=currentYear.getFullYear()){
    if (currentYear.getFullYear()-byear>=13) {
      window.location.href="index.html";
    }
    else {
    window.location.href="index2.html";
    }
  }
}
