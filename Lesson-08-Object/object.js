/**
 * Trong Javascript, đối tượng (object):
 * - Là một cấu trúc dữ liệu mạnh mẽ và linh học
 * - Cho phép lưu trữ và quản lý các dữ liệu phức tạp gồm các cặp key - value.
 *   + key là một chuỗi (string)
 *   + value có thể là bất kỳ loại dữ liệu nào, bao gồm cả đối tượng khác (nested object)
 */

// 1. 2 cách tạo object với object literal và sử dụng từ khóa new

// object literal

let developer = {
    username: "HocPhamSWE",
    age: 22,
    greet: function () {
        console.log("Hello, I'm " + this.username + " from earth!");
    },
    skills: ["HTML", "CSS", "C#", ".NET", "Javascript"],
    position: {
        frontEnd: ["Boostrap", "Razor", "TailWindCSS"],
        backEnd: [".NET", "Express"],
        fullStack: true,
    },
};
console.log(developer);

// từ khóa new
// let developerNew = new Object();
// developerNew.username = "HocPhamSWE";
// developerNew.age = 22;
// developerNew.greet = function () {
//     console.log("Hello, I'm " + this.username + " from earth!");
// };
// developerNew.skills = ["HTML", "CSS", "C#", ".NET", "Javascript"];
// developerNew.position = {
//     frontEnd: ["Boostrap", "Razor", "TailWindCSS"],
//     backEnd: [".NET", "Express"],
//     fullStack: true,
// };
// console.log(developerNew);

// 2. Thêm / Xóa / Sửa các thuộc tính của Object

developer.gender = "male";
developer.age = 23;
delete developer.greet;
console.log(developer);

// Lặp qua các thuộc tính của đối tượng: Leson-06-Loop/for-in.js
// Đối tượng chứa các thuộc tính là method function: lesson-07-function/method-fuction.js
