$(document).foundation();

var megaroster = {
  init: function(){
    var myRoster = document.querySelector('form');
    myRoster.onsubmit = this.addNameToRoster;
  },


  buildDeleteButton: function(){
   return '<a style="color: red; border: 3px solid red" href>Delete</a>'
  },

  buildPromoteButton: function(){
   return '<a style="color: blue; margin: 125px; border: 3px solid blue" href>Promote</a>'
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
    var link = this.buildDeleteButton();
    var promo = this.buildPromoteButton();
    dt.innerHTML = term;
    dd.innerHTML = definition;
    li.appendChild(dt);
    li.appendChild(dd);
    li.innerHTML += link;
    li.innerHTML += promo;

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
