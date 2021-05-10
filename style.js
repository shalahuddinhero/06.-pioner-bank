// login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    console.log("Login clicked");
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transcitonArea = document.getElementById("transciton-area");
    transcitonArea.style.display = "block";
})

// Deposit button event handler

const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function(){
    const depositAmountNumber = getInputNumber ("depositAmount");

    updateSpanText("currentDeposit",depositAmountNumber);
    updateSpanText("currentBalance",depositAmountNumber);

    document.getElementById("depositAmount").value = "";
    
})

// Withdraw button event handler

const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function(){
    const withdrawAmountNumber = getInputNumber ("withdrawAmount");
    updateSpanText("currentWithdraw",withdrawAmountNumber);
    updateSpanText("currentBalance",-1*withdrawAmountNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id,depositAmountNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositAmountNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}