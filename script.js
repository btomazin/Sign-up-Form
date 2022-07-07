
function checkIfEqual(word1, word2){
    return (word1 === word2);
}


const password = document.getElementById("pass");
const confirm = document.getElementById("con-pass");
var flag = false;

const confirmCheck = confirm.addEventListener("blur",e=> pwCheck()); 
const passCheck = password.addEventListener("blur", e=>{
    if (flag){
        pwCheck();
    }
});

const inputs = Array.from(document.getElementsByTagName('input'));

inputs.forEach(input => {
    input.addEventListener("blur", e => {
        if (input.value == ""){
            input.classList.add("req");
            input.placeholder="Required";
        } else {
            input.classList.remove("req");
        }
    })
});

function pwCheck(){
    if (checkIfEqual(confirm.value, password.value)){
        document.getElementById("pw-msg").style.display = "none";

        password.classList.remove("bad-input");
        confirm.classList.remove("bad-input");
    }
    else{
        document.getElementById("pw-msg").style.display = "block";
        password.classList.add("bad-input");
        confirm.classList.add("bad-input");  
        
    }

    flag= true;
}

