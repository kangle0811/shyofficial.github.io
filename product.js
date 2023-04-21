let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
          <div id=product-id-${id} class="product-box">
            <img class="product-img" src=${img} alt="">
            <div class="details">${name}</div>
            <div class="price">RM ${price}</div>
              <div class="buttons">
                  <i onclick="decrement(${id})" class='bx bxs-minus-circle'></i>
                  <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                  </div>
                  <i onclick="increment(${id})" class='bx bxs-plus-circle' ></i>
              </div>
          </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  alert("Your cart is added!")
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

  // console.log(basket);
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
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
