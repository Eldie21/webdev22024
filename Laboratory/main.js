// 1. Write a function called isOdd that receives 1 parameter:
function isodd(number){
    return new Promise ((resolve, reject) => {
        number % 2 !== 0 ? resolve(true) : reject(false);
    });
}
const numberArray = [1, 2, 3, 4, 5];

for (const number of numbersArray) {
    isodd(number)
    .then(result => console.log('${number} is odd.'))
    .catch(result =>{});
}


// 2.  Write an asynchronous function - resolve
function getRandomCharacter() {
    return new Promise(resolve => {
        setTimeout(() => {
            const ramdomChar = 'abcdefghijklmnopqrstuvwxyz'[Math.floor(math.random() * 26)];
            resolve(random);
        }, 500);
    });
    }

async function printRandomCharacter() {
    const randomChar = await getRandomCharacter();
    console.log(randomChar);
}

printRandomCharacter();


// 3.  Write an asynchronous function  - reject
function getData() {
    return new promise ((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random() >= 0.5 ? 'Success' : 'Error';
            reject(randomValue);
        }, 500);
    })
}

async function handleData() {
    try {
        await getData();
    } catch (error) {
        console.log(error);
    }
}

handleData();


// 4.  Write an asynchronous function  - reject + resolve
function rejectResolve() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                const randomValue = Math.random() >= 0.5 ? 'Error' : 'Success';
                i === 0 ? reject(randomValue) : resolve(randomValue);
            }, 500 * i);
        }
    });
}

async function handleRejectAndResolve() {
    try {
        const result = await rejectResolve();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

handleRejectAndResolve();