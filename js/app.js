$(document).foundation()

var megaRoster = {

  init: function(){
    this.setupEventListeners();
  },

  setupEventListeners: function(){
    document.querySelector('form').onsubmit = this.addStudent;

  },

  addStudent: function(ev){
    ev.preventDefault();
    consol.log("gdsafdsfa");

  },


}

megaRoster.init();
