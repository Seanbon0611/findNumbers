const findNumbers = (nums) => {
    //create count variable that keeps track of even occurences
    //iterate through array of nums, convert elements to string and check their length. if the number % 2 === 0 then that means it is even. increment count by 1
    
    let count = 0;
    for(let num of nums) {
        if (num.toString().length%2 === 0) {
            count++
        }
    }
    return count
};

findNumbers([12,345,2,6,7896])