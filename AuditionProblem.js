function findEvens(startNum, endNum, stepNum) { 
     var result = []; 
     for (var i = startNum; i < endNum; i += stepNum) { 
         if (i % 2 == 0) {
             output.push(i); 
         } 
         retrurn(output); 
     } 
 } 
 
 
     function validateItems() { 
  
         var num1 = document.forms["numbers"]["startingnumber"].value; 
         var num2 = document.forms["numbers"]["endingnumber"].value; 
         var num3 = document.forms["numbers"]["step"].value; 
 
 
         if (num1 == "" || isNaN(num1) || num1 <= 0) { 
             alert("Starting Number must be a number."); 
             document.forms["numbers"]["num1"] 
                 .parentElement.className = "form-group has-error"; 
             document.forms["numbers"]["num1"].focus(); 
             return false; 
         } 
         if (num2 == isNaN(num2) || num2 <= num1) { 
             alert("Ending Number must be filled in with a positive number."); 
             document.forms["numbers"]["num2"] 
                 .parentElement.className = "form-group has-error"; 
             document.forms["numbers"]["num2"].focus(); 
             return false; 
         } 
         if (num3 < 0) { 
             alert("Step Number must be a positive number."); 
             document.forms["numbers"]["num3"] 
                 .parentElement.className = "form-group has-error"; 
             document.forms["numbers"]["num3"].focus(); 
             return false; 
         } 
 
 
 } 
