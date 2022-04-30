const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (accumulator, value) => {
    let total = (value + value) / 2
    return accumulator += total
}

let totalBatteries = batteryBatches.reduce(reducer,0)
