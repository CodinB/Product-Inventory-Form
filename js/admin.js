// global variables

var items = [];

function init(){
    console.log('Admin page')
    $("#btn-register").on('click',function(){
        register();
    })
}

window.onload = init;

//object constructor
class Item{
    constructor(code,title,price,description,category,image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}

//register function

function register(){
    //get the values from the form
    var  code=$('#code').val();
    var  title=$('#title').val();
    var  price=$('#price').val();
    var  description=$('#description').val();
    var  category=$('#category').val();
    var  image=$('#image').val();
    //create the object
    var newItem = new Item(code,title,price,description,category,image);
    //push the item to the items array
    items.push(newItem);
    //display the item on the console
    console.log(newItem);
    console.log(items);
    clear();
}

function clear(){
    $('#code').val('');
    $('#title').val('');
    $('#price').val('');
    $('#description').val('');
    $('#category').val('');
    $('#image').val('');
}