$(document).foundation();

var megaroster = {
  init: function(){
    var myRoster = document.querySelector('form');
    myRoster.onsubmit = this.addNameToRoster;
 },

  buildList: function(rosterName){
    var dl = document.createElement('dl');
    //dl.style.border = '1px solid blue';
    dl.appendChild(this.buildListItem('Name:', rosterName));
    return dl;
  },

  buildListItem: function(term, definition) {
    var li = document.createElement('li');
    var dt = document.createElement('dt');
    var dd = document.createElement('dd');
    dt.innerHTML = term;
    dd.innerHTML = definition;
    li.appendChild(dt);
    li.appendChild(dd);
    return li;
  },


 addNameToRoster: function(ev){
   ev.preventDefault();
   var details = document.querySelector('.details');
   var name = this.name.value;
   details.insertBefore(megaroster.buildList(name), details.childNodes[0]);
}
};

megaroster.init();
