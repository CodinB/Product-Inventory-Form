// global variables

var items = [
    { //first item
        code:'1tvs',
        title:'Samsung TV',
        price:1000,
        description:'Detailed description of the item',
        category:'Electronics',
        image:'https://images.samsung.com/is/image/samsung/pe-fhdtv-j5290-un49j5290agxpe-frontblack-113108078?$PD_GALLERY_L_JPG'
    },
    { //second item
        code:'1ph10',
        title:'iPhone',
        price:1000,
        description:'Detailed description of the item',
        category:'Mobile Devices',
        image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRWM2_AV1_GOLD_GEO_MX?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1536254549811'

    },
    {//third item
        code:'2spk',
        title:'Speakers',
        price:100,
        description:'Detailed description of the item',
        category:'Sound',
        image:'https://cdn.audioaffair.co.uk/media/catalog/product/cache/1/image/1000x1000/602f0fa2c1f0d1ba5e241f914e856ff9/1/0/100_-_black.jpg'
    
    }
];

function displayCatalog(){
    //travel the array
    for(var i=0; i<items.length; i++){
        //get the element
        var product = items[i];
        //create the string
        var layout = `
        <div class="item" id="${product.code}">
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <h6 class="itemPrice">$${product.price}</h6>
            <p>${product.description}</p>
            <button class="btn btn-primary">Add to Cart</button>
        </div>
        `
    //display the element on the DOM
        $('#catalog').append(layout)
    }
     

    

}

function init(){
    console.log('catalog page');
    displayCatalog();
}

window.onload = init;