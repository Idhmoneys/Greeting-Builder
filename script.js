// function
function formatName(firstName, lastName){
    return firstName + ' ' + lastName;
}

function getGreeting(timeOfDay){
    return `Good ${timeOfDay}`;
}

function createGreeting(firstName, lastName, timeOfDay){
    const fullName = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return `${greeting}, ${fullName}`;
}

// testing
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));