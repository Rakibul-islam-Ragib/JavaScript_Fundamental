// Syncronas behaviour........
    // const processOrder = (customer) => {
    //     console.log(`Processing order for customer 1`);

    //     var currentTime = new Date().getTime();
    //     while(currentTime + 3000 >= new Date().getTime());
    //     console.log(`Order process for customer 1`)

    // };

    // console.log(`Take order for customer 1`);
    // processOrder()
    // console.log(`Order Complite for customer 2`);

// Asyncronas Behaviour.....
const processOrder = (customer) => {
    console.log(`Processing order for customer 1`);

    setTimeout(() => {
        console.log(`cooking Completed`);

    }, 3000);
    
};

console.log(`Take order for customer 1`);
processOrder()
console.log(`Order Complite for customer 1`);
