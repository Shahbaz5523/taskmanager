// code to display the form which gets data
let showFormBtn = document.getElementById('new');
let showForm = ()=>{
    let inputForm = document.getElementsByClassName('input-form')[0];
    inputForm.style.display = "flex";
}
showFormBtn.onclick=()=>{
    showForm();
}

// code to hide the form
let hideFormBtn = document.getElementById('close');
let hideForm = ()=>{
    let inputForm = document.getElementsByClassName('input-form')[0];
    inputForm.style.display = "none";
}
hideFormBtn.onclick=()=>{
    hideForm();
}

// Generate a row functionality
let saveBtn = document.getElementById("save");
let generateRow = ()=>{
    let titleText = 
}


