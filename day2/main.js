const arr1 = [
    { id: 1, name: "darius", age: "20" },
    { id: 2, name: "jinx", age: "18" },
    { id: 3, name: "jayce", age: "23" },
    { id: 4, name: "galio", age: "24" },
    { id: 5, name: "garen", age: "15" }
];
const arr2 = [
    { id: 1, name: 'lux', age: '21' },
    { id: 2, name: 'kaisa', age: '13' },
    { id: 3, name: 'teemo', age: '15' },
    { id: 4, name: 'yasuo', age: '27' },
    { id: 5, name: 'riven', age: '20' }
]  

//ex1

// const names1 = arr1.map(person => person.name);
// const names2 = arr2.map(person => person.name);

// const allNames = [...names1, ...names2];

// console.log(allNames);

//ex2 

// const names1 = arr1.map(person => person.name);
// const names2 = arr2.map(person => person.name);

// const allNames = [...names1, ...names2];

// const resultString = allNames.join(" - ");

// console.log(resultString);

//ex3 

// const filterArr1 = arr1.filter(person => parseInt(person.age) > 18);
// const filterArr2 = arr2.filter(person => parseInt(person.age) > 18);

// const result = [...filterArr1, ...filterArr2];

// console.log(result);

//ex4 

// const combinedArr = [...arr1, ...arr2];

// const totalAge = combinedArr.reduce((sum, person) => sum + parseInt(person.age), 0);

// console.log(totalAge);


//ex5 

// const combinedArr = [...arr1, ...arr2];

// console.log(combinedArr);

//ex6

const combinedArr = [...arr1, ...arr2];

const groupedById = combinedArr.reduce((acc, item) => {
    let existingGroup = acc.find(group => group.id === item.id);
    if (existingGroup) {
        existingGroup.element.push({ name: item.name, age: item.age });
    } else {
        acc.push({
            id: item.id,
            element: [{ name: item.name, age: item.age }]
        });
    }
    return acc;
}, []);

console.log(JSON.stringify(groupedById, null, 2));  