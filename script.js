//your JS code here. If required.

function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").innerText = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((arr) => {
        const doubledNumbers = arr.map(num => num * 2);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").innerText = doubledNumbers;
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}

manipulateArray();
