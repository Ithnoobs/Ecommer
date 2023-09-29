const product = [
    {
        id: 0,
        image: 'image/flip.jpg',
        title: 'Samsung Z Flip Foldable',
        price: 899,
    },
    {
        id: 1,
        image: 'image/earpod.jpg',
        title: 'Asus ROG Cetra True Wireless',
        price: 249,
    },
    {
        id: 2,
        image: 'image/camera.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/headphone.jpg',
        title: 'ASUS Gaming Headset ROG Theta 7.1',
        price: 2999,
    },
    {
        id: 4,
        image: 'image/koeni.jpg',
        title: 'Koenisegg Agera R',
        price: 1500000,
    },
    {
        id: 5,
        image: 'image/phone.jpg',
        title: 'Iphone 99 X Pro Max',
        price: 10999,
    },
    {
        id: 6,
        image: 'image/watch.jpg',
        title: 'Watchers MX 98',
        price: 599,
    },
    {
        id: 7,
        image: 'image/PC.jpeg',
        title: 'White Beast',
        price: 4999,
    },
    {
        id: 8,
        image: 'image/keyboard.jpg',
        title: 'Asus ROG Claymore',
        price: 999,
    },
    {
        id: 9,
        image: 'image/Mouse.jpg',
        title: 'AMIR Gaming Mouse',
        price: 899,
    },
    {
        id: 10,
        image: 'image/ReZero.jpg',
        title: 'ReZero Gaming MousePad',
        price: 548,
    },
    {
        id: 11,
        image: 'image/Monitor.jpg',
        title: 'Samsung Odyssey Neo G95NA',
        price: 2999,
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}