fetch("http://localhost:3000/Best-Seller")
    .then((res) => res.json())
    .then((data) => {
        let store = data.map(e => `
           
        <div class="card ">
           <a href="discription.html?id=${e.id}&image=${encodeURIComponent(e.image)}&name=${encodeURIComponent(e.name)}&price=${encodeURIComponent(e.price)}">
               <div class="card-img">
                   <img src="${e.image}" alt="${e.name}">
               </div>
           </a>
           <div class="card-body">
               <h4 class="card-title">${e.name}</h4>
               <p class="card-price">Price: ${e.price}</p>
               <p class="card-id">ID: ${e.id}</p>
           </div>
       </div>
       `).join(""); 

      
       document.getElementById("main-section").innerHTML = store;
    })
    .catch((err) => console.error("Error fetching data:", err));




