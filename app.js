// Selector
let filterInput = document.getElementById("filterInput");

// Event Listener
filterInput.addEventListener("keyup", filterNames);

// Function
function filterNames() {
  // Get value of input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  // Get ul names
  let ul = document.getElementById("names");
  // Get lis from il
  let li = ul.querySelectorAll("li.collection-item");

  // Loop through collection-item lis
  for (let i = 0; 1 < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    // If match
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
