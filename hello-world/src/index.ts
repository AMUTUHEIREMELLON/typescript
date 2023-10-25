// let user: [number, string] = [1, "Mellon"];
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);


// function calculateTax(income: number, taxYear: number): number {
//     if (taxYear < 2022) 
//         return income * 1.2;
//     return income * 1.3;
// }


// funtions

// type Employee = {
//     readonly id: number;
//     name: string;
//     retire: (date: Date) => void
// }



// let employee: Employee= { 
//     id: 1, 
//     name: "Mellon",
//     retire: (date: Date) => {
//         console.log(date);
//     }
//  };


// unoion types
// we can give a parameter more than one type


function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) *2.2;
    }
    kgToLbs(10);
    kgToLbs("10kgs");
 