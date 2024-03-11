function onSave() {
         
    let textInput = document.getElementById("text-input").value;
    
    let titleInput = document.getElementById("title-input").value;

    let newNote = document.createElement("div");

 
    let newNoteText = document.createElement("p");

    let title = document.createElement("h1")
    
    console.log(title);
    
    title.innerHTML = titleInput;
    
    newNote.appendChild(title);
   
    newNoteText.innerHTML = textInput;

  
    newNote.appendChild(newNoteText);

    let deleteButton = document.createElement("button")

    deleteButton.innerHTML = "Delete"

    console.log(deleteButton);
    
    newNote.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", function(){
        newNote.remove();
    })

   console.log(newNote);
   
   
    document.body.appendChild(newNote);

}