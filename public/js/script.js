const API = 'http://localhost:3000';
const PRODUCTS = `${API}/products`;
const SAVEFORLATER = `${API}/saveforLater`; // matches the key in db.json (capital L)

function renderList(targetUlId, items, isProducts) {
  const ul = document.getElementById(targetUlId);
  ul.innerHTML = '';
  items.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="row">
        <img src="${p.thumbnail}" alt="" width="60" height="60"/>
        <div>
          <div><strong>${p.title}</strong></div>
          <div>₹${p.price} • Rating: ${p.rating} • Stock: ${p.stock}</div>
          <div>${p.category}</div>
        </div>
        ${isProducts ? `<button data-id="${p.id}" class="add">Add to saveforlater</button>` : ''}
      </div>
    `;
    ul.appendChild(li);
  });

  if (isProducts) {
    ul.querySelectorAll('button.add').forEach(btn => {
      btn.addEventListener('click', e => addsaveforlater(Number(e.target.dataset.id)));
    });
  }
}


function getProducts() {
  return fetch(PRODUCTS)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    })
    .then(json => {
      renderList('products', json, true);
      return json;
    })
    .catch(err => {
      console.error(err);
      renderList('products', [], true);
      return [];
    });
}


function getsaveforlater() {
  return fetch(SAVEFORLATER)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch saveforLater');
      return res.json();
    })
    .then(json => {
      renderList('saveforlater', json, false);
      return json;
    })
    .catch(err => {
      console.error(err);
      renderList('saveforlater', [], false);
      return [];
    });
}

function addsaveforlater(id) {
  
  return fetch(`${PRODUCTS}/${id}`)
    .then(res => {
      if (!res.ok) throw new Error('Product not found');
      return res.json();
    })
    .then(prod => {

      const copy = { ...prod, id: undefined };
      return fetch(SAVEFORLATER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(copy),
      });
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to add to saveforLater');
      
      return getsaveforlater();
    })
    .catch(err => {
      console.error(err);
      return getsaveforlater();
    });
}


function deleteAllProducts() {
  return fetch(PRODUCTS)
    .then(res => res.json())
    .then(items => {
      const deletions = items.map(item =>
        fetch(`${PRODUCTS}/${item.id}`, { method: 'DELETE' })
      );
      return Promise.all(deletions);
    })
    .then(() => getProducts()) 
    .catch(err => console.error('Delete all failed', err));
}


window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('refresh').addEventListener('click', () => {
    Promise.all([getProducts(), getsaveforlater()]);
  });
  document.getElementById('deleteAll').addEventListener('click', () => {
    deleteAllProducts();
  });

 
  Promise.all([getProducts(), getsaveforlater()]);
});


window.getProducts = getProducts;
window.getsaveforlater = getsaveforlater;
window.addsaveforlater = addsaveforlater;
window.deleteAllProducts = deleteAllProducts;
