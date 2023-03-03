function CallApi(){
    this.fetchListData = function () {
        return axios({
            url:"https://63df6f47a76cfd41058267d7.mockapi.io/api/CapStoneJS",
            method: "GET",
        });
    };
    this.addProduct = function(product){
        return axios({
            url:"https://63df6f47a76cfd41058267d7.mockapi.io/api/CapStoneJS",
            method:"POST",
            data:product,
        });
    };
    this.deleteProduct = function(id){
        return axios({
            url:`https://63df6f47a76cfd41058267d7.mockapi.io/api/CapStoneJS/${id}`,
            method: "DELETE",
        });
    }
    this.editProduct = function(id){
        return axios({
            url:`https://63df6f47a76cfd41058267d7.mockapi.io/api/CapStoneJS/${id}`,
            method: "GET",
        });
    };
    this.updateProduct = function(product){
        return axios({
            url: `https://63df6f47a76cfd41058267d7.mockapi.io/api/CapStoneJS/${product.id}`,
            method: "PUT",
            data: product,
        });
    };
    
}