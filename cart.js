let label = document.getElementById("label");
let ShoppingCart = document.getElementById("cart-container");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <table>
        <tbody>
          <tr>
              <td><i onclick="removeItem(${id})" class='bx bxs-trash cart-remove'></i></td>
              <td><img src=${search.img} alt="" ></td>
              <td><h2>${search.name}</td>
              <td><h2>RM ${search.price}</h2>
              <td class="cart-buttons">
                <i onclick="decrement(${id})" class='bx bxs-minus-circle'></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class='bx bxs-plus-circle' ></i>
              </td>
          </tr>
        </tbody>
      <table>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h3>Cart is Empty!</h3>
    <a href="product.html">
      <button class="insert">Back to Shop</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  alert("Your cart is empty now!")
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2 class="total-price">Total Bill : RM ${amount}</h2>
    <a href="payment.html"><button class="checkout">Purchase Now</button></a>
    <button onclick="clearCart()" class="removeAll">Empty Cart</button>
    `;
  } else return;
};

TotalAmount();

function myFuntion1(){
  alert("Your items is placed! Thank you and come again!")
}
