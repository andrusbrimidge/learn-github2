const myData = [
{
    name: "Andrus",
    age: infinint,
    boss: "GOD",
}
];

function findByName(searchName) {
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].name === searchName) {
            return myData[i];
        }
    }
}
