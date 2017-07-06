
function findEven(startingnumber, endingnumber, step) {
    var findEvenNums = [];
    for (var i = startingnumber; i< endingnumber, i += step;)
    if (i % 2==0) {
        return(findEvenNums);
    }
}
function validateItems() {
    clearErrors();
    var startingnumber = document.forms["numbers"]["startingnumber"].value;
    var endingnumber = document.forms["numbers"]["endingnumber"].value;
    var step = document.forms["numbers"]["step"].value;

    if (startingnumber == "" || isNaN(startingnumber)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numbers"]["startingnumber"]
           .parentElement.className = "form-group has-error";
        document.forms["numbers"]["startingnumber"].focus();
        return false;
    }
   if (endingnumber == "" || isNaN(endingnumber)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["numbers"]["endingnumber"]
          .parentElement.className = "form-group has-error"
       document.forms["numbers"]["endingnumber"].focus();
       return false;
   }
     if (step == "" || step < 0 ||  isNaN(step) ) {
       alert("Step must be filled in with a number.");
       document.forms["numbers"]["step"]
          .parentElement.className = "form-group has-error"
       document.forms["numbers"]["step"].focus();
       return false;
     }


   
   return false;

}







