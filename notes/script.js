const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();


function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// it is for creating new note
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "https://cdn-icons-png.flaticon.com/512/1345/1345874.png";

    inputBox.appendChild(img);          
    notesContainer.appendChild(inputBox); 

    updateStorage(); 
});

// for deleting the node
notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// this is for auto save 
notesContainer.addEventListener("keyup", function () {
    updateStorage();
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});