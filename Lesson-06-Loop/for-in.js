/**
 * Trong Javascript, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần
 * Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiệu được thỏa mãn
 */

// for-in: lập qua các thuộc tính của object

let developer = {
    username: "Pham Thai Hoc",
    age: 22,
    gender: "Male",
    hobbies: ["Eat", "Sleep", "Code"],
};

for (let key in developer) {
    if (key === "hobbies") {
        console.log(developer[key]);
    } else {
        console.log(`${key} - ${developer[key]}`);
    }
}
