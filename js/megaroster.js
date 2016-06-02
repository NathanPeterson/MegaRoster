$(document).foundation();

document.querySelector('form').onsubmit = function(ev){

  ev.preventDefault();
  var details = document.querySelector('.details');
  var name = this.name.value;
  details.innerHTML += name + '</p>';

}
