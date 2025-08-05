/* --------------------------Enquiry Form  -----------------------------------------*/
function validateForm()
{
  console.log('function called');
  let fullname = document.getElementById("fullName").value;
  let DOB = document.getElementById("DOB").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;
  let startYear = document.getElementById("startYear").value;
  let msg = document.getElementById("message").value;
  
// Validate name  
  if(fullname == "")
    { 
      alert("please enter Your Name");
       return false;
    }
// Validate DOB
    let currentDate = new Date();
    let enterDOB = new Date(DOB);
    if(enterDOB == "" || enterDOB == undefined)
    { 
      alert("please enter Valid Date of Birth");
      return false;
    }
    if(enterDOB.getFullYear() >= currentDate.getFullYear()-18)
    {
      alert("Your age is below 18 years and therefore you are not applicable");
    }
// Validate address  
    if(address == "")
    { alert("please enter Your Address");
     return false;
    }
// Validate email address  
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
    if(email == "" || (!emailPattern.test(email)) )
     { alert("please enter your valid Email address");
       return false;
     }

// Validate Phone number
   let phonePattern = /^[0-9\+\-]{10,15}$/; // Phone number validation pattern
     console.log('phone is : ', phone);
    if(phone == "" || (!phonePattern.test(phone)))
     { alert("please enter your valid Contact number");
       return false;
     }
// Validate course selection from dropdown  
    if(course == "")
      { alert("please select any Course");
         return false;
      }
 
 // Validate estimated Start Year of the course     
    let StartDate = new Date(startYear);
     console.log('start date is : ', StartDate);

    if(startYear == "") 
       { alert("please enter estimated date");
           return false;
       }

       if (StartDate < currentDate )
       {
        alert ("Please enter future estimated date");
       }
 // Validate enter details of the course    
     if(msg == "")
      { alert("please enter Your Enquiry details:");
          return false;
      }
else
alert ("CONGRATULATION, Your Form is Submitted SUCCESSFULLY");
return true;


}