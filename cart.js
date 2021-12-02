let btns = document.querySelectorAll(".btn-order");
let cartCount = document.getElementById("count");
// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // console.log(btn)
//     cartNumbers(products);
//   });
// });
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    cartNumbers(products);
  });
}

let products = [
  {
    dealer: "Nakuru Farmer Ltd",
    type: "cereals",
    location: "Nakuru",
    incart: 0,
    price: 2500,
  },
  {
    dealer: "Nakuru Farmer Ltd",
    type: "cereals",
    location: "Nakuru",
    incart: 0,
    price: 2500,
  },
  {
    dealer: "Nakuru Farmer Ltd",
    type: "cereals",
    location: "Nakuru",
    incart: 0,
    price: 2500,
  },
  {
    dealer: "Vasha Farmers",
    type: "carrots",
    location: "Naivasha",
    incart: 0,
    price: 90,
  },
  {
    dealer: "Vasha Farmers",
    type: "onions",
    location: "Naivasha",
    incart: 0,
    price: 90,
  },
  {
    dealer: "Vasha Farmers",
    type: "Fruits",
    location: "Naivasha",
    incart: 0,
    price: 90,
  },
];
function loadCartItems() {
  let cartNum = localStorage.getItem("cartNumber");
  cartCount.innerText = cartNum;
}

function cartNumbers(product) {
  //   console.log(product);
  let cartItemNumber = localStorage.getItem("cartNumber");
  // console.log(cartItemNumber)
  cartItemNumber = parseInt(cartItemNumber);
  if (cartItemNumber) {
    localStorage.setItem("cartNumber", cartItemNumber + 1);
    cartCount.innerText = cartItemNumber + 1;
  } else {
    localStorage.setItem("cartNumber", 1);
    cartCount.innerText = 1;
  }
  setproducts(product);
}

function setproducts(prod) {
  // console.log(prod)
  let agriProduct = localStorage.getItem("agriProducts");
  // console.log(agriProduct)
  agriProduct = JSON.parse(agriProduct);
  console.log(agriProduct);
  prod.incart = 1;

  let agriProducts = {
    [prod.dealer]: prod,
  };
  // let agriproducts = prod
  //   console.log(agriProducts);
  localStorage.setItem("agriProducts", JSON.stringify(agriProducts));
}

loadCartItems();
