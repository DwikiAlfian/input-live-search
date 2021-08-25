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
  dataLiveInputCount = 0;dataLiveInputCount < dataLiveInput.length;dataLiveInputCount++
) {
  dataLiveInput[dataLiveInputCount].addEventListener("keyup", function () {
    var sum = this.parentElement.children[1].children;
    var result = this.value.toUpperCase();
    for (var i = 0; i < this.parentElement.getElementsByTagName('li').length; i++) {
      console.log(sum[i].innerText.toUpperCase().indexOf(result))
      if (sum[i].innerText.toUpperCase().indexOf(result) > -1
      ) {
        sum[i].style.display = "";
      } else {
        sum[i].style.display = "none";
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
