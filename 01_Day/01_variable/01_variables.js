// Variable Declarations

const accountId = 14453; // Constant: can't be reassigned
let accountEmail = "milanraja@gmail.com"; // Can be reassigned, block scoped
var accountPassword = 12345; // Can be reassigned, function scoped
accountCity = "Blr"; // This is not the correct way to declare a variable
let accountType //it will return as undefined

// accountId = 12; // ❌ Not allowed, will throw an error because it's a const

/*
    Prefer not to use `var`
    because of issues with block scope and functional scope.
    Use `let` or `const` instead.
*/

// Updating variable values
accountEmail = "milanraja881@gmail.com";
accountPassword = 789;
accountCity = "jsr";

// Output to console
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountType]);
