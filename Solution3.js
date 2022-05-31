// Recursive but brute forced
function countChangeRecursive(money, coins){
    /**
     * Look at all possible repetitive combinations of coins.
     * If the combination leads to 0 it is a valid combination.
     */

    if (money < 0) return 0; // then this path is not a combination
    else if (money === 0) return 1; // Then this path is a combination.
    // money > 0 then recursive call with money - x => we count all valid combinations
    // imagine like checking all possibilities in a tree
    else return coins.map( (x, i) => countChangeRecursive(money - x, coins.slice(i))).reduce((x, y) => x + y);
}

function countChangeDynamic(money, coins){
    /**
     * Dynamic programming solution. we solve bottom up. We know there is one way to take 0 coins.
     * then we count how many times we can make a number when adding a coin. amount of times we can make a number with a
     * coin is equal the amount of times we can make the number - coin.
     */

    // we will use the index of the array as denotation for the money and the value how many combinations we found
    let solution_array = Array(money + 1).fill(0)
    solution_array[0] = 1 // 1 way to make 0 => with 0 coins.

    for (let coin of coins){
        for(let i = coin; i <= money; i++){
            solution_array[i] += solution_array[i - coin];
        }
    }

    return solution_array[money]

}

console.log(countChangeDynamic(4, [1, 2]))
console.log(countChangeDynamic(10, [5, 2, 3]))
console.log(countChangeDynamic(11, [5, 7]))

