/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let phnField =  document.regForm.phn;
let nameField = document.regForm.u_name;
let emailField = document.regForm.u_email;                 



document.regForm.addEventListener( 'submit' , (e) =>{
    
    
    
    
    const nameptr = /^[ a-zA-Z\s]+$/; /* only enter alphabets not number or special character */
    const errornum = document.getElementById("errname");
    const phoneno = /^\d{10}$/; /* only enter 10 digit number */
    const errorphn = document.getElementById("errphn");
    
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const errormail = document.getElementById("erremail");
    
    /* Validating input name */
    if (nameptr.test(nameField.value)) {
        errornum.textContent = " ";

    } else {
        errornum.textContent = "**Please Enter valid name...";
        errornum.style.color = 'red';
        nameField.value = " ";
        e.preventDefault();
    }
    
    
    /* validating input number */
    
    
    if (phnField.value.match(phoneno))
    {
        errorphn.textContent = " ";
        //return true; 
                 
    } else {
        errorphn.textContent = "**Please enter valid Phone Number...";
        errorphn.style.color = 'red';
        phnField.value = " ";
        e.preventDefault();
        //return false;
    }
 
    /* validating email address */
    
    
    if(emailField.value.match(mailformat)){
        errormail.textContent = " ";
    } else {
        errormail.textContent = "**Please enter valid Phone Number...";
        errormail.style.color = 'red';
        emailField.value = " ";
        e.preventDefault();
    }
 
    
    
} )