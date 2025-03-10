async function fetchData() {
  try {
    console.log("API call start");
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    console.log(response, "data from API");

    displayCards(response);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("API call completed");
  }
}

fetchData();

const rowEl = document.getElementById("row");

//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   }
function displayCards(array) {
  rowEl.innerHTML = "";
  for (let items of array) {
    rowEl.innerHTML += `
        <div
          class="col-3 bg-info ecom-card p-3 border border-light border-1 m-3"
        >
          <img
            src=${items.image}
            class="w-100 rounded-3"
          />
          <h1 class="ecom-heading my-2">
            ${items.title}
          </h1>
          <span class="ecom-category bg-secondary my-2 p-2 rounded-4"
            >${items.category}</span
          >
          <p class="ecom-rating my-2"><b>Rating:</b> ${items.rating.rate} (${
      items.rating.count
    })</p>
          <p class="ecom-price my-2"><b>Price:</b> ₹ ${items.price}</p>
          <p class="ecom-description">
            ${items.description.slice(0, 1000)}...
          </p>
          <button class="btn btn-warning text-center w-100">Buy Now</button>
        </div>
    `;
  }
}
