

function findEvens(startingnumber, endingnumber, step) {
    var result = 0;
    for (var i = startingnumber; i < endingnumber; i += step) {
        if (i % 2 == 0) {
        }
        retrurn(result);
    }
}


    function validateItems() {

        var num1 = document.forms["numbers"]["startingnumber"].value;
        var num2 = document.forms["numbers"]["endingnumber"].value;
        var num3 = document.forms["numbers"]["step"].value;

        if (num1 == "" || isNaN(num1) || num1 <= 0) {
            alert("Starting Number must be filled in with a positive number.");
            document.forms["numbers"]["num1"]
                .parentElement.className = "form-group has-error";
            document.forms["numbers"]["num1"].focus();
            return false;
        }
        if (num2 == "" || isNaN(num2) || num2 <= 0) {
            alert("Ending Number must be filled in with a positive number.");
            document.forms["numbers"]["num2"]
                .parentElement.className = "form-group has-error";
            document.forms["numbers"]["num2"].focus();
            return false;
        }
        if (num3 == "" || isNaN(num3) || num3 <= 0) {
            alert("Step Number must be filled in with a positive number.");
            document.forms["myForm"]["num3"]
                .parentElement.className = "form-group has-error";
            document.forms["numbers"]["num3"].focus();
            return false;
        }

    if (num2 >= num1) {
        alert("Ending Number cannot be less than or equal to Starting Number.");
    }
}