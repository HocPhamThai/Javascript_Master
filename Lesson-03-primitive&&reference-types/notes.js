/**
 * Javascripts là kiểu động (dynamic typing), điều này rất tiện lợi nhưng cũng có thể dẫn đến các lỗi khó phát hiện về kiểu dữ liệu.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#dynamic_and_weak_typing
 * Vậy nên mới có một số công cụ như TypeScript được phát triển để bổ sung kiểu tĩnh (static typing) cho JavaScript.
 */

let x;
x = 10; // x là kiểu number
x = "Hello"; // bây giờ x là kiểu string
x = true; // bây giờ x là kiểu boolean
x = null; // bây giờ x là kiểu null
x = undefined; // bây giờ x là kiểu undefined
console.log(x);
console.log("-------------------");


/**
 * Ví dụ nhanh về kiểu dữ liệu tham chiếu (Reference Types) và kiểu dữ liệu nguyên thủy (Primitive Types) trong JavaScript.
 */

let username = "HocPhamSWE"; // Primitive Type: string
let usernameCopy = username; // Tạo bản sao của giá trị
usernameCopy = "NewUsername"; // Thay đổi bản sao
console.log("Primitive Types:");
console.log("Original Username:", username); // Vẫn giữ nguyên giá trị ban đầu
console.log("Copied Username:", usernameCopy);
console.log("-------------------");


let user = { name: "HocPhamSWE", age: 22 }; // Reference Type: object
let userCopy = user; // Tạo tham chiếu đến cùng một đối tượng
userCopy.age = 23; // Thay đổi thuộc tính của đối tượng thông qua tham chiếu
console.log("Reference Types:");
console.log("Original User Age:", user.age); // Bị thay đổi do userCopy tham chiếu đến cùng một đối tượng
console.log("Copied User Age:", userCopy.age);
console.log("-------------------");