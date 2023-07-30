const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ["a", "b", "c", "d", "e", "f"];

//push дбовляет елементы в конец массива
console.log(a.length);
console.log(a.push(10, 11, 44, 55, 66));
console.log(a);

b.push("j", "e");
console.log(b);

//pop удаляет элемнеты в конце массива
b.pop();
console.log(b);

//удаоим элемент внутри массива
delete a[3];
console.log(a);

//splice Method в скобочках начинаю с какого элемента и сколько элементов это затронет
a.splice(3, 3, "hi");

console.log(a);

//shift and unshift -добавляет и удаляет элементы в начале массива,но меняются индексы
