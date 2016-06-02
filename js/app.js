$(document).foundation()

var megaRoster = {

  init: function(){
    this.setupEventListeners();
  },

  setupEventListeners: function(){
    document.querySelector('#studentForm').onsubmit = this.addStudent.bind(this);
  },

  buildListItem: function(studentName){
    var item = document.createElement('li');
    item.innerText = studentName;
    return item;
  },

  addStudent: function(ev){
    ev.preventDefault();
    var form = ev.currentTarget;
    var studentName = form.studentName.value;
    var item = this.buildListItem(studentName);
    var list = document.querySelector('#studentList');
    list.appendChild(item);


  },


}

megaRoster.init();
