console.log("hi")
showNotes();
//if user can add a note so, data is stored in local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(){

    let addTxt =document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value="";
    console.log(notesobj);
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element, index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note${index+1}</h5>
          <p class="card-text">${element}</p>
          <a href="#" class="btn btn-primary">Delete Note</a>
        </div>
    </div>
        
        `;

    });
    let notesElm=document.getElementById('notes');
    if(notesobj.length!=0)
    {
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show! use above "Node section" to add a note`;
    }



}











