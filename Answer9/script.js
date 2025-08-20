const apiBase = "http://localhost:3000";

// ---------------- getProducts ----------------
function getProducts() {
  return fetch(`${apiBase}/products`)
    .then(res => res.json())
    .then(products => {
      const ul = document.getElementById("products");
      ul.innerHTML = ""; // clear existing
      products.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${p.thumbnail}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <p>Price: ₹${p.price} | Rating: ${p.rating}</p>
          <button onclick="addsaveforlater(${p.id})">Add to saveforlater</button>
        `;
        ul.appendChild(li);
      });
      return products;
    });
}

// ---------------- getsaveforlater ----------------
function getsaveforlater() {
  return fetch(`${apiBase}/saveforlater`)
    .then(res => res.json())
    .then(favs => {
      const ul = document.getElementById("saveforlater");
      ul.innerHTML = ""; // clear existing
      favs.forEach(f => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${f.thumbnail}" alt="${f.title}">
          <h3>${f.title}</h3>
          <p>${f.description}</p>
          <p>Price: ₹${f.price} | Rating: ${f.rating}</p>
        `;
        ul.appendChild(li);
      });
      return favs;
    });
}

// ---------------- addsaveforlater ----------------
function addsaveforlater(id) {
  // get product by id
  return fetch(`${apiBase}/products/${id}`)
    .then(res => res.json())
    .then(product => {
      // post to saveforlater
      return fetch(`${apiBase}/saveforlater`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
    })
    .then(() => getsaveforlater()); // refresh favourites list
}
