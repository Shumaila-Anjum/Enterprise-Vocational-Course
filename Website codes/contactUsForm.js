/* --------------------------Enquiry Form  -----------------------------------------*/
function validateForm()
{
  console.log('function called');
  let fullname = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  
// Validate name  
  if(fullname == "")
    { 
      alert("please enter Your Name");
       return false;
    }
// Validate email address  
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
    if(email == "" || (!emailPattern.test(email)) )
     { alert("please enter your valid Email address");
       return false;
     }

 // Validate enter details of the course    
     if(msg == "")
      { alert("please your message in details");
          return false;
      }
else
alert ("Your Form is Submitted SUCCESSFULLY");
return true;


}