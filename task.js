let from = 1;
let to = 30;

for (let num = from; num <= to; num++) {
    let simple = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            simple = false;
        }
    }
    if (simple) {
        console.log(num);
    }
}
