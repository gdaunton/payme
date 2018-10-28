var maxBills = 25;

var bills = document.createElement("div");
bills.className = "bills";
document.body.appendChild(bills);

var width = document.documentElement.clientWidth;

for (var i = 0; i < maxBills; i++) {
  var randomPosition = Math.floor(width * Math.random());

  var randomTime = Math.random() * 20;
  var randomSpeed = Math.random() * 20 + 10;

  var bill = document.createElement("span");
  bill.className = "bill";

  bill.style.left = randomPosition + "px";
  bill.style.top = "-150px";
  bill.style["-webkit-animation-delay"] = randomTime + "s";
  bill.style["-webkit-animation-duration"] = randomSpeed + "s";

  var billImg = document.createElement("img");
  billImg.src = "images/bill.svg";
  bill.appendChild(billImg);

  bills.appendChild(bill);
}
