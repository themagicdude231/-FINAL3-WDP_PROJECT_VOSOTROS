// for the carousel
const radios = document.querySelectorAll('input[name="slide"]');
let currentIndex = 0;
function toggleRadio() {
    radios[currentIndex].checked = true;
    currentIndex = (currentIndex + 1) % radios.length;
}
setInterval(toggleRadio, 3000);
// for nav
function openHome() {
    document.getElementById('Gallery').style.display = 'block';
    document.getElementById('Products').style.display = 'block';
    document.getElementById('ProdServ').style.display = 'none';
	document.getElementById('AbtUs').style.display = 'none';
	document.getElementById('ContUs').style.display = 'none';
	document.getElementById('Cart').style.display = 'none';
	document.getElementById('BuyProduct1').style.display = 'none';
	document.getElementById('BuyProduct2').style.display = 'none';
	document.getElementById('BuyProduct3').style.display = 'none';
	document.getElementById('BuyProduct4').style.display = 'none';
	document.getElementById('FormShape').style.display = 'none';
	document.getElementById('FCart').style.display = 'none';
}
function openProdSer() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('ProdServ').style.display = 'block';
	document.getElementById('AbtUs').style.display = 'none';
	document.getElementById('ContUs').style.display = 'none';
	document.getElementById('Cart').style.display = 'none';
	document.getElementById('BuyProduct1').style.display = 'none';
	document.getElementById('BuyProduct2').style.display = 'none';
	document.getElementById('BuyProduct3').style.display = 'none';
	document.getElementById('BuyProduct4').style.display = 'none';
	document.getElementById('FormShape').style.display = 'none';
	document.getElementById('FCart').style.display = 'none';
}
function openAbtUs() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('ProdServ').style.display = 'none';
	document.getElementById('AbtUs').style.display = 'block';
	document.getElementById('ContUs').style.display = 'none';
	document.getElementById('Cart').style.display = 'none';
	document.getElementById('BuyProduct1').style.display = 'none';
	document.getElementById('BuyProduct2').style.display = 'none';
	document.getElementById('BuyProduct3').style.display = 'none';
	document.getElementById('BuyProduct4').style.display = 'none';
	document.getElementById('FormShape').style.display = 'none';
	document.getElementById('FCart').style.display = 'none';
}
function openContUs() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('ProdServ').style.display = 'none';
	document.getElementById('AbtUs').style.display = 'none';
	document.getElementById('ContUs').style.display = 'block';
	document.getElementById('Cart').style.display = 'none';
	document.getElementById('BuyProduct1').style.display = 'none';
	document.getElementById('BuyProduct2').style.display = 'none';
	document.getElementById('BuyProduct3').style.display = 'none';
	document.getElementById('BuyProduct4').style.display = 'none';
	document.getElementById('FormShape').style.display = 'none';
	document.getElementById('FCart').style.display = 'none';
}
function openCart() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('ProdServ').style.display = 'none';
	document.getElementById('AbtUs').style.display = 'none';
	document.getElementById('ContUs').style.display = 'none';
	document.getElementById('Cart').style.display = 'block';
	document.getElementById('BuyProduct1').style.display = 'none';
	document.getElementById('BuyProduct2').style.display = 'none';
	document.getElementById('BuyProduct3').style.display = 'none';
	document.getElementById('BuyProduct4').style.display = 'none';
	document.getElementById('FormShape').style.display = 'none';
	document.getElementById('FCart').style.display = 'none';
}
// for buying product
function openBuy1() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('BuyProduct1').style.display = 'block';
}
function openBuy2() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('BuyProduct2').style.display = 'block';
}
function openBuy3() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('BuyProduct3').style.display = 'block';
}
function openBuy4() {
    document.getElementById('Gallery').style.display = 'none';
    document.getElementById('Products').style.display = 'none';
    document.getElementById('BuyProduct4').style.display = 'block';
}
// for buying product in prodduct and service
function openBuy5() {
    document.getElementById('ProdServ').style.display = 'none';
    document.getElementById('BuyProduct1').style.display = 'block';
}
function openBuy6() {
    document.getElementById('ProdServ').style.display = 'none';
    document.getElementById('BuyProduct2').style.display = 'block';
}
function openBuy7() {
    document.getElementById('ProdServ').style.display = 'none';
    document.getElementById('BuyProduct3').style.display = 'block';
}
function openBuy8() {
    document.getElementById('ProdServ').style.display = 'none';
    document.getElementById('BuyProduct4').style.display = 'block';
}
// for add to cart
let CartItems = [];
function addToCart(ProductName, Price, ImgSrc) {
    CartItems.push({ ProductName, Price, ImgSrc });

    const CartContainer = document.getElementById('CartItems');
    CartContainer.innerHTML = '';

    CartItems.forEach(Item => {
        const CartItem = document.createElement('div');
        CartItem.classList.add('CartItem');

        CartItem.innerHTML = `
            <img src="${Item.ImgSrc}" alt="${Item.ProductName}">
            <span>${Item.ProductName} - $${Item.Price}</span>
        `;

        CartContainer.appendChild(CartItem);
    });
}
// TO go to fill up information
function openFillInfo() {
	if (CartItems.length === 0) {
        alert("Your shopping cart is empty!");
    } else {
		document.getElementById('Cart').style.display = 'none';
		document.getElementById('FormShape').style.display = 'block';
	}
}
// checking off the filling up info
function openCheck() {
    const requiredInputs = document.querySelectorAll('#FormShape input[required]');
    let allFilled = true;

    requiredInputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (allFilled) {
        document.getElementById('FCart').style.display = 'block';
        document.getElementById('FormShape').style.display = 'none';
		const CartContainer = document.getElementById('CartItems2');
        CartContainer.innerHTML = document.getElementById('CartItems').innerHTML;
    } else {
        alert("Please fill up all information");
    }
}
// for buying product
function openBuy() {
    if (CartItems.length === 0) {
        alert("Your shopping cart is empty!");
    } else {
        let TotalCost = 0;
        CartItems.forEach(Item => {
            TotalCost += Item.Price;
        });

        const Confirmation = confirm("Are you sure you want to buy all items? Total cost: $" + TotalCost);
        if (Confirmation) {
            alert("Thank you for your purchase!");
            window.location.href = "index.html";
        }
    }
}
// for clear shopping list
function openClear() {
    if (CartItems.length === 0) {
        alert("Your shopping cart is empty!");
    } else {
        const Confirm = confirm("Are you sure you want to clear your shopping list");
        if (Confirm === true) {
            CartItems = []; 
            const CartContainer = document.getElementById('CartItems');
			const CartContainer2 = document.getElementById('CartItems2');
            CartContainer.innerHTML = '';
			CartContainer2.innerHTML = '';
        }
    }
}


