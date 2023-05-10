window.onload =function(){
// the shopgrid is going to the document and is pulling the product-grid using classname.
// we are fetching the json file
// the response is using a arrow function to push the data
    let json;
    let shopGrid = document.getElementsByClassName('product-grid')[0]
    fetch('app.json')
    .then(response => response.json())
    .then(data => {
        
        json = data

// setting the for loop to i=0 and i is less then the length of the json file
// now were setting the productCard to the json file to 0    
// created a new div to display the product-item
// 
        for(let i =0; i<json.length; i++){
            let productCard = json[i]
            let productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
              <img src="${productCard.image}" alt="Funko Pop">
              <h2>${productCard.name}</h2>
              
              <p>${productCard.desc}</p>
              <button>Add to Cart - $${productCard.price}</button>
            `;

            shopGrid.appendChild(productItem)
        }

           console.log(shopGrid)
    })


  
       

    

}
