
  function myarray() {
    var starting = +document.getElementById("starting").value,
        ending = +document.getElementById("ending").value,
        step = +document.getElementById("step").value,
        results = document.getElementById("results"),
        i,
        array = [];
      
    for (i = starting;  i <= ending; i += step) {
        i % 2 || array.push(i);
    }
    results.innerHTML = array.join(', ');
}
function valiateItems () {
    var num1 = document.forms["numbers"]["num"]
}








