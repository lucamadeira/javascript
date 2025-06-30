
let a = 10;
let b = 20;

const quizasCambiaValores = function (tienePermeso) {
    if (tienePermeso) { a +=5; b += 10; }
    if (a > 10) {
        console.log("a es mayor que 10");
    }
    if (b > 20) {
        console.log("b es mayor que 20");
    }
    if (a > 10 && b > 20) {
        console.log("a es mayor que 10 y b es mayor que 20");
    }
    if (a > 20 || b > 20) {
        console.log("a es mayor que 10 o b es mayor que 20");
    }
    if (a > 15 && b > 40 || a < 5) {
        console.log("a es mayor que 10 y b es mayor que 20 o a es menor que 5");
    }
    if (a > 10 && b > 20 && a < 5) {
        console.log("a es mayor que 10 y b es mayor que 20 y a es menor que 5");
    }
};
quizasCambiaValores(true);
quizasCambiaValores(false);