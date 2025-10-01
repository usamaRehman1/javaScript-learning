
// ----- Closures 
// A closure is created when an inner function remembers and accesses variables from its outer function’s scope,
// even after the outer function has finished executing. 

// In other words:
// Function + Lexical Scope = Closure

// Example # 01 

function outer() {
    let count = 0;

    function inner() {
        count++;

        console.log("Count =>", count)
    }
    return inner
}

const fn = outer(); // return inner
// inner function remembers count even though outer has finished.
// That memory is the closure.
fn() // Count => 1
fn() // Count => 2
fn() // count => 3


// Data Privacy
// balance is hidden — only accessible through closure methods.

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposite(amount) { balance += amount },
        withDraw(amount) { balance -= amount },
        getBalance() { return balance }
    }
}

const account = createBankAccount(100);
account.deposite(50)
console.log(account.getBalance()) // 150
account.withDraw(20)
console.log(account.getBalance()) // 130


// Loop + closures

// Because var is function-scoped, all callbacks share the same i.
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000)
}
// output: 5, 5, 5, 5, 5

// Fix with let (block scope) or closure:
for (let j = 0; j < 5; j++) {
    (function (k) {
        setTimeout(() => {
            console.log(k)
        }, 1000);

    })(j)
}
// output: 0, 1, 2, 3, 4