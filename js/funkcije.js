function onama(){
	$("#on").slideUp("slow");
}

/*$(document).ready(function(){
	$("body").show("slide", { direction: "left" }, 1000);
});*/

function myMap() {
        var uluru = {lat: 45.2447001, lng: 19.8210473};
        var map = new google.maps.Map(document.getElementById('mapa'), {
          zoom: 7,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}