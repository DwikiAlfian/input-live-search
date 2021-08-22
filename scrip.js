var dataLiveInput = document.querySelectorAll(".data-live input");
var dataLiveOption = document.querySelectorAll(".data-live ul");
var dataLiveText = document.querySelectorAll(".data-live ul li");
let dataLiveCount, dataLiveInputCount;

// OPTION INPUT
for (dataLiveCount = 0; dataLiveCount < dataLiveText.length; dataLiveCount++) {
  // Adding 'CLICK' function to 'data-option'
  dataLiveText[dataLiveCount].addEventListener("click", function () {
    // Determine value of 'data-option'
    var dataText = this.innerHTML;
    // Put value of 'data-option' into input tag
    this.parentElement.parentElement.children[0].value = dataText;
  });
}

// FILTER
for (
  dataLiveInputCount = 0;
  dataLiveInputCount < dataLiveInput.length;
  dataLiveInputCount++
) {
  dataLiveInput[dataLiveInputCount].addEventListener("keyup", function () {
    for (var i = 0; i < dataLiveText.length; i++) {
      if (
        this.parentElement
          .getElementsByTagName("li")
          [i].innerText.toUpperCase()
          .indexOf(this.value.toUpperCase()) > -1
      ) {
        dataLiveText[i].style.display = "";
      } else {
        dataLiveText[i].style.display = "none";
      }
    }
  });
  dataLiveInput[dataLiveInputCount].addEventListener("focusin", function () {
    this.parentElement.children[1].classList.add("show-data");
  });
  dataLiveInput[dataLiveInputCount].addEventListener("focusout", function () {
    this.parentElement.children[1].classList.remove("show-data");
  });
}
// function myFunction(input, list) {
//   var input, filter, ul, li, a, i, txtValue, list, input;
//   input = document.getElementById(input);
//   filter = input.value.toUpperCase();
//   ul = document.getElementById(list);
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
