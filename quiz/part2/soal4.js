function pasanganTerbesar(num) {
    // you can only write your code here!
    const strNum = num.toString();
    let maxCouple = 0;
    for (let i = 0; i < strNum.length; i++) {
        let pasangan = parseInt(strNum[i] + strNum[i + 1])
        if (pasangan > maxCouple) {
            maxCouple = pasangan;
        }
    }

    return maxCouple;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99