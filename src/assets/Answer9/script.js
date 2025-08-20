const productsList = document.getElementById("products");
const saveForLaterList = document.getElementById("saveforlater");

function getProducts() {
  return fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(products => {
      productsList.innerHTML = "";
      products.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${p.thumbnail}" width="50" />
          <strong>${p.title}</strong> - ${p.description} 
          | Price: $${p.price} 
          <button onclick="addsaveforlater(${p.id})">Add to saveforlater</button>
        `;
        productsList.appendChild(li);
      });
      return products;
    });
}

function getsaveforlater() {
  return fetch("http://localhost:3001/saveforlater")
    .then(res => res.json())
    .then(favs => {
      saveForLaterList.innerHTML = "";
      favs.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${p.thumbnail}" width="50" />
          <strong>${p.title}</strong> - ${p.description} 
          | Price: $${p.price}
        `;
        saveForLaterList.appendChild(li);
      });
      return favs;
    });
}

function addsaveforlater(id) {
  return fetch(`http://localhost:3001/products/${id}`)
    .then(res => res.json())
    .then(product => {
      // Remove id to avoid duplicate key conflict
      const { id, ...newProduct } = product;

      return fetch("http://localhost:300/saveforlater", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      });
    })
    .then(() => getsaveforlater())
    .catch(err => console.error("Error adding to saveforlater:", err));
}
function deleteAllProducts() {
  return fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(products => {
      // Delete each product one by one
      const deletePromises = products.map(p =>
        fetch(`http://localhost:3001/products/${p.id}`, { method: "DELETE" })
      );

      return Promise.all(deletePromises);
    })
    .then(() => {
      alert("All products deleted successfully!");
      productsList.innerHTML = "";  // clear UI
      return [];
    })
    .catch(err => console.error("Error deleting products:", err));
}