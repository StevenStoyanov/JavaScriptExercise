function liliBirthdays(age, washerPrice, pricePerToy) {
    let moneySpent = 0;
    let moneyGiven = 10;

    for (let birthday = 1; birthday <= age; birthday++) {

        if (birthday % 2 === 0){
            moneySpent += moneyGiven -1;
            moneyGiven +=10 
        } else {
            moneySpent += pricePerToy;
        }

    }
    if (moneySpent >= washerPrice) {
        let moneyLeft = moneySpent - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);

    } else {
        let moneyNeeded = washerPrice - moneySpent;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}

