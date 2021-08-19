$(document).ready(function () {
  let currentFloor = 2; // etaj nomerini korsatadi
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let floorPath = $(".home-image path");

  //! rasm ustiga olib borilganda etaj nomerini ko'rsatadigan fn
  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr("data-floor"); // currentFloorni pathdagi data-floor qiymatiga tenlayapmiz
    floorPath.removeClass("current-floor"); // aktivniy klassni o'ciramiz
    $(".counter").text(currentFloor); // natijaga etaj nomerini ciqaradi textda
  });

  //!  Etaj nomerini oshiradigan button
  counterUp.on("click", function () {
    //tekwiramiz
    if (currentFloor < 18) {
      currentFloor++; //etaj nomerini 1ga owiramiz
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // usCurrentFloor bilan sonni 1 emas 01 korinishiga keltirdik
      $(".counter").text(usCurrentFloor); // natijaga etaj nomerini ciqaradi textda
      floorPath.removeClass("current-floor"); // aktivniy klassni o'ciramiz
      $(`[data-floor="${usCurrentFloor}"]`).toggleClass("current-floor"); //etaj nomeri 1ga owganda owa etajni korsatib turadi (//!class biriktirish orqali)
    }
  });

  //!  Etaj nomerini kamaytiradigan button
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor="${usCurrentFloor}"]`).toggleClass("current-floor");
    }
  });
});
