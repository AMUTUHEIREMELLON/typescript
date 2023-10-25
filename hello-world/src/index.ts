// let user: [number, string] = [1, "Mellon"];
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);


function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}


calculateTax(10_000, 2022)