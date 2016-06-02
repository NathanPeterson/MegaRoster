$(document).foundation()

var megaRoster = {

  init: function(){
    this.setupEventListeners();
  },

  setupEventListeners: function(){
    document.querySelector('#studentForm').onsubmit = this.addStudent;

  },

  buildListItem: function(studentName){
    var item = document.createElement('li');
    item.innerText = studentName;
    return li;
  },

  addStudent: function(ev){
    ev.preventDefault();
    //var

  },


}

megaRoster.init();
