const form=document.getElementById("form");
const usernameEl=document.getElementById("username");

const emailEL=document.getElementById("email");
const passwordEl=document.getElementById("password");
const password2El=document.getElementById("password2");

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error"
    const smallEL=formControl.querySelector("small");
    smallEL.innerText=message;
}
function showSuccess(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control sucess"
    const smallEL=formControl.querySelector("small");
    smallEL.innerText=message;
}

function checkRequired(inputArr){
      inputArr.forEach(function(input)  {
      /*   console.log(input) */
      if(input.value.trim()===""){
        showError(input,`${input.id} is required`);
      }else{
        showSuccess(input);
      }
        
      });
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${input.id} must be atleast ${min} charcter`)
    }else if(input.value.length > max){
        showError(input,`${input.id} must be less than ${max} character`)

    }
}
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"password does not match")

    }
}


form.addEventListener("submit",function(e){
    e.preventDefault();

    /* if(usernameEl.value===""){
        showError(usernameEl,"username is required");
    }else{
        showSuccess(usernameEl);
    }
    if(emailEL.value===""){
        showError(emailEL,"Email is required");
    }else{
        showSuccess(emailEL);
    }
    if(password2El.value===""){
        showError(passwordEl,"Password is required");
    }else{
        showSuccess(passwordEl);
    }
    if(password2El.value===""){
        showError(password2El,"password 2 is required");
    }else{
        showSuccess(password2El);
    } */
    checkRequired([usernameEl,emailEL,passwordEl,password2El]);
    checkLength(usernameEl,3,8);
    checkLength(passwordEl,6,9);
    checkPasswordMatch(passwordEl,password2El)

});