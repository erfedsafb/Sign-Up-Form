function seterror(id,error){
   element=document.getElementById(id);
   element.getElementsByClassName('formerror')[0].innerHTML=error;

}
function validateform() {
    var return_val=true;
    const name = document.getElementsByClassName("name")[0].value // Accessing the first element with class "Name"
    const mail=document.getElementsByClassName("email")[0].value
    const phon=document.getElementsByClassName("pho")[0].value
   // const name = nameElement.innerText; // or nameElement.innerHTML, depending on your use case
    if(name.length<4){
        seterror("name","*Length of name is too short")
        return_val=false
    }

    if(name.length==0){
        seterror("name","*Please enter the name")
        return_val=false
    }

    if(mail.length==0)
    {
        seterror("email","*Please enter the email")
        return_val=false
    }
    if(phon.length<11){
        seterror("phone#","Phone no# should be atleast 11 digits")
        return_val=false;
    }

    const passward=document.getElementsByClassName("passward")[0].value;
    //  console.log(passward)

    const pass=document.getElementsByClassName("pass2")[0].value
    console.log(pass)

    if(passward!=pass)
    {
       seterror("pass2","Passward should be match ")
    }

    return return_val;
  // alert(name);
  }

  