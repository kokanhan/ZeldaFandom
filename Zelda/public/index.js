console.log("== document.body:", document.body);

console.log(
  "== document.body.childNodes:",
  document.body.childNodes
);

var fourthChild = document.body.childNodes[3];
console.log("== fourthChild.childNodes:", fourthChild.childNodes);
console.log("== fourthChild.parentNode:", fourthChild.parentNode);

var photoCardContainer = document.getElementById("photo-card-container");
console.log("== photoCardContainer:", photoCardContainer);

var photoCards = document.getElementsByClassName("photo-card");
console.log("== photoCards:", photoCards);

for (var i = photoCards.length - 1; i >= 0 ; i--) {
  console.log(" - photoCards[" + i + "]:", photoCards[i]);
}

var firstPhotoCard = photoCards[0];
// firstPhotoCard.remove();
// console.log("== firstPhotoCard:", firstPhotoCard);

var images = document.getElementsByTagName("img");
console.log("== images:", images);

/* .navlist li {} */
var navlistItems = document.querySelectorAll(".navlist li");
console.log("== navlistItems:", navlistItems);

var rightNavItem = document.querySelector(".navitem.right");
console.log("== rightNavItem:", rightNavItem);

console.log("\n===========================");
console.log("== DOM Node Properties");
console.log("===========================");

console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent);
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML);
console.log("== images[0].src:", images[0].src);
