var callApi = new CallApi();

function getEl(id){
    return document.getElementById(id);
}

function getListProduct(){

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

getListProduct();

function renderData(data){
    var content = "";
    data.forEach(function (product, i) {
        content +=`
        <tr>
           <td>${i+1}</td>
           <td>${product.name}</td>
           <td>${product.price}</td>
           <td>${product.screen}</td>
           <td>${product.backCamera}</td>
           <td>${product.frontCamera}</td>
           <td><img src="${product.img}" width="50"/></td>      
           <td>${product.desc}</td> 
           <td>${product.type}</td>
           <td> 
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="handleEdit(${product.id})">
            <i class="fa-solid fa-pen-nib"></i>
            </button>
            <button class="btn btn-danger" onclick="handleDelete(${product.id})">
            <i class="fa-solid fa-trash"></i>
            </button>
            </td>
        </tr>
        `;
    });
    getEl("tblDanhSachSP").innerHTML = content;
}
/**
 * Delete Products
 */
function handleDelete(id){
    callApi
        .deleteProduct(id)
        .then(function(){
            getListProduct();
        })
        .catch(function(error){
            console.log(error);
        });
}
/**
 * Add
 * Thêm
 * Chức năng
 */
getEl("btnThemSP").addEventListener("click", function(){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add";

    var btnAdd = '<button class="btn btn-success" onclick="handleAdd()">Add</button>';
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;

});

function handleAdd(){
    var name = getEl("TenSP").value;
    var price = getEl("GiaSP").value;
    var screen = getEl("screen").value;
    var backCamera = getEl("backCamera").value;
    var frontCamera = getEl("frontCamera").value;
    var img = getEl("hinhAnh").value;
    var desc = getEl("MoTa").value;
    var type = getEl("type").value;

     
    var product = new Product("", name, price, screen, backCamera, frontCamera,img, desc, type);

    callApi
        .addProduct(product)
        .then(function(){
            document.getElementsByClassName("close")[0].click();
            getListProduct();
        })
        .catch(function(error){
            console.log(error);
        });
}

/**
 * Edit
 */

function handleEdit(id){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Chỉnh sửa sản phẩm";

    var btnUpdate = `<button class="btn btn-success" onclick="handleUpdate(${id})">Update</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

    callApi
        .editProduct(id)
        .then(function(result){
            var product = result.data;
            getEl("TenSP").value = product.name;
            getEl("GiaSP").value = product.price;
            getEl("screen").value = product.screen;
            getEl("backCamera").value = product.backCamera;
            getEl("frontCamera").value = product.frontCamera;
            getEl("hinhAnh").value = product.img;
            getEl("MoTa").value = product.desc;
            getEl("type").value = product.type;
        })
        .catch(function(error){
            console.log(error);
        });
}
function handleUpdate(id){
    var name = getEl("TenSP").value;
    var price = getEl("GiaSP").value;
    var screen = getEl("screen").value;
    var backCamera = getEl("backCamera").value;
    var frontCamera = getEl("frontCamera").value;
    var img = getEl("hinhAnh").value;
    var desc = getEl("MoTa").value;
    var type = getEl("type").value;

    var product = new Product(id, name, price, screen, backCamera, frontCamera,img, desc, type);

    callApi
        .updateProduct(product)
        .then(function(){
            document.getElementsByClassName("close")[0].click();
            getListProduct();
        })
        .catch(function(error){
            console.log(error);
        });
}