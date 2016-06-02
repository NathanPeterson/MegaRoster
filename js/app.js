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

    var deleteLink = this.buildLink({
      text: 'remove',
      handler: function(ev){
        var list = item.parentElement;
        list.removeChild(item);
        //confirm('Are you sure You want to Remove this name?')
      }
    });

    var promoteLink = this.buildLink({
      text: 'Promote',
      handler: function(ev){
        item.style.border = '2px blue dashed';
      }
    });
    item.innerText = studentName;
    item.appendChild(deleteLink);
    item.appendChild(promoteLink);
    return item;
  },

  buildLink: function(options){
      var link = document.createElement('a');
      link.href = "#";
      link.innerText = options.text;
      link.onclick = options.handler;
      return link;
  },

  addStudent: function(ev){
    ev.preventDefault();
    var form = ev.currentTarget;
    var studentName = form.studentName.value;
    var item = this.buildListItem(studentName);
    var list = document.querySelector('#studentList');
    list.insertBefore(item, list.childNodes[0]);
    form.reset();
    form.studentName.focus();
  },


}

megaRoster.init();
