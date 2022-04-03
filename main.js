//////////////////// submit bottun click

let submit = document.querySelector(".submit");
let ratingContent = document.querySelector(".rating-content");
let thankyouContent = document.querySelector(".thankyou-content");

submit.addEventListener("click", function () {
  ratingContent.classList.add("hidden");
  thankyouContent.classList.remove("hidden");
});

//////////////////// Active Rate & Write Selected Rate

let rateNum = document.querySelectorAll(".rate"); // <p> that holdes rate number
rateNum.forEach(function (item, index) {
  item.innerHTML = `${index + 1}`;
});

let rates = document.querySelectorAll(".rate-number"); //divs that hold <p> rating
let selectedRateParagraph = document.querySelector(".selected-rate-text"); //Thankyou Content

rates.forEach(function (item, index) {
  // click to select a rate
  item.onclick = function () {
    rates.forEach(function (_item, _index) {
      if (index !== _index) _item.classList.remove("active");
    });
    item.classList.add("active");
    // adding the selected rate to thankyou card
    selectedRateParagraph.innerHTML = `You selected ${index + 1} out of ${
      rateNum.length
    }`;
  };
});
