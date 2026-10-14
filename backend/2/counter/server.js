const counter = {
    count: 0,

    increment() {
        this.count++;
    },

    decrement() {
        this.count--;
    },

    reset() {
        this.count = 0;
    },

    getCount() {
        return this.count;
    },
};

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 3

counter.decrement();
console.log(counter.getCount()); // Output: 2

counter.reset();
console.log(counter.getCount()); // Output: 0
