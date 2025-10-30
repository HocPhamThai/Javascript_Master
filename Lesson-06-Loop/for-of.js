/**
 * Trong Javascript, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần
 * Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiệu được thỏa mãn
 */

// for-of: lập qua các giá trị của iterable object

let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(`Color: ${color}`);
}

let username = "HocPhamSWE";
for (let char of username) {
    console.log(`Char: ${char}`);
}

// let developer = {
//     username: "Pham Thai Hoc",
//     age: 22,
//     gender: "Male",
//     hobbies: ["Eat", "Sleep", "Code"],
// };

// for (let key of developer) {
//     // error not iterable object
//     if (key === "hobbies") {
//         console.log(developer[key]);
//     } else {
//         console.log(`${key} - ${developer[key]}`);
//     }
// }
