var quantity1 = 0;
document.getElementById("itemQuantity1").innerText=quantity1;
function increment1 () {
    quantity1 = increment(quantity1)
    document.getElementById("itemQuantity1").innerText=quantity1;
}
function decrement1 () {
    quantity1 = decrement(quantity1)
    document.getElementById("itemQuantity1").innerText=quantity1;
}

var quantity2 = 0;
document.getElementById("itemQuantity2").innerText=quantity2;
function increment2 () {
    quantity2 = increment(quantity2)
    document.getElementById("itemQuantity2").innerText=quantity2;
}
function decrement2 () {
    quantity2 = decrement(quantity2)
    document.getElementById("itemQuantity2").innerText=quantity2;
}

var quantity3 = 0;
document.getElementById("itemQuantity3").innerText=quantity3;
function increment3 () {
    quantity3 = increment(quantity3)
    document.getElementById("itemQuantity3").innerText=quantity3;
}
function decrement3 () {
    quantity3 = decrement(quantity3)
    document.getElementById("itemQuantity3").innerText=quantity3;
}

var quantity4 = 0;
document.getElementById("itemQuantity4").innerText=quantity4;
function increment4 () {
    quantity4 = increment(quantity4)
    document.getElementById("itemQuantity4").innerText=quantity4;
}
function decrement4 () {
    quantity4 = decrement(quantity4)
    document.getElementById("itemQuantity4").innerText=quantity4;
}

var quantity5 = 0;
document.getElementById("itemQuantity5").innerText=quantity5;
function increment5 () {
    quantity5 = increment(quantity5)
    document.getElementById("itemQuantity5").innerText=quantity5;
}
function decrement5 () {
    quantity5 = decrement(quantity5)
    document.getElementById("itemQuantity5").innerText=quantity5;
}

var quantity6 = 0;
document.getElementById("itemQuantity6").innerText=quantity6;
function increment6 () {
    quantity6 = increment(quantity6)
    document.getElementById("itemQuantity6").innerText=quantity6;
}
function decrement6 () {
    quantity6 = decrement(quantity6)
    document.getElementById("itemQuantity6").innerText=quantity6;
}

var quantity7 = 0;
document.getElementById("itemQuantity7").innerText=quantity7;
function increment7 () {
    quantity7 = increment(quantity7)
    document.getElementById("itemQuantity7").innerText=quantity7;
}
function decrement7 () {
    quantity7 = decrement(quantity7)
    document.getElementById("itemQuantity7").innerText=quantity7;
}

var quantity8 = 0;
document.getElementById("itemQuantity8").innerText=quantity8;
function increment8 () {
    quantity8 = increment(quantity8)
    document.getElementById("itemQuantity8").innerText=quantity8;
}
function decrement8 () {
    quantity8 = decrement(quantity8)
    document.getElementById("itemQuantity8").innerText=quantity8;
}

var quantity9 = 0;
document.getElementById("itemQuantity9").innerText=quantity9;
function increment9 () {
    quantity9 = increment(quantity9)
    document.getElementById("itemQuantity9").innerText=quantity9;
}
function decrement9 () {
    quantity9 = decrement(quantity9)
    document.getElementById("itemQuantity9").innerText=quantity9;
}

var quantity10 = 0;
document.getElementById("itemQuantity10").innerText=quantity10;
function increment10 () {
    quantity10 = increment(quantity10)
    document.getElementById("itemQuantity10").innerText=quantity10;
}
function decrement10 () {
    quantity10 = decrement(quantity10)
    document.getElementById("itemQuantity10").innerText=quantity10;
}

function increment (total) {
    total = total + 1;
    return total;
}

function decrement (total) {
    if(total == 0) {
        total -= 0;
    }else {
        total -= 1;
    }
    return total;
}