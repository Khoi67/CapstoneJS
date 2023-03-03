var callApi = new CallApi();

function getEl(id){
    return document.getElementById(id);
}

function getProduct(){
    getEl("loader").style.display = "block";
    var promise = callApi.fetchListData();

    promise
        .then(function (result){
            renderData(result.data);
            getEl("loader").style.display = "none";
        })
        .catch(function(error){
            console.log(error);
            getEl("loader").style.display = "none";
        })
}
getProduct();

function renderData(data) {
    var content = "";
  
    data.forEach(function (product) {
      content += `
      <div class="col-12 col-md-6 col-lg-4">
          <div class="card cardPhone">
          <img src="${product.img}" class="card-img-top" alt="..." />
          <div class="card-body">
              <div class="d-flex justify-content-between">
              <div>
                  <h3 class="cardPhone__title">${product.name}</h3>
                  <p class="cardPhone__text">${product.desc}</p>
                  <p class="cardPhone__text">Cấu hình chi tiết:</p>
                  <p class="cardPhone__desc">Màn hình: ${product.screen}</p>
                  <p class="cardPhone__desc">Camera sau:${product.backCamera}</p>
                  <p class="cardPhone__desc">Camera trước:${product.frontCamera}</p>
              </div>
              <div>
                  <h3 class="cardPhone__title">$${product.price}</h3>
              </div>
              </div>
              <div class="d-flex justify-content-between">
              
              <div>
                  <button class="btnPhone-shadow" onclick="addItem(${product.id})">
                  Buy
                  </button>
              </div>
              </div>
          </div>
          </div>
      </div>
      `;
    });
  
    getEl("product__main").innerHTML = content;
}

var cart = [];    
var cartItem = {};

function addItem(id){
        
}

