/**
 * Nhóm các kiểu dữ liệu tham chiếu (Reference Types) trong JavaScript bao gồm:
 * - Không lưu trữ trực tiếp trong stack memory mà lưu trữ trong heap memory.
 * - Các giá trị tham chiếu có thể thay đổi (mutable) và phức tạp hơn so với các kiểu dữ liệu nguyên thủy (primitive types).
 * - Khi gán một đối tượng A cho biến B, biến B sẽ tham chiếu đến cùng một đối tượng trong bộ nhớ, không tạo ra bản sao mới.
 * - Các kiểu dữ liệu tham chiếu bao gồm:
 */

// Object: Đại diện cho các đối tượng phức tạp bao gồm các cặp key-value
let developer = {
    username: "HocPhamSWE",
    age: 23,
    greet: function () {
        console.log("Hello, I'm " + this.username + "from another method!");
        console.log(`${this.username} - ${this.age}`);
    },
};

// Array: Đại diện cho mảng các giá trị được lưu trữ theo thứ tự
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
console.log("typeof numbers:", typeof numbers);

// Function: Đại diện cho các hàm (functions) trong JavaScript
function add(a, b) {
    return a + b;
}

console.log("Add Function Result:", add(5, 10));
console.log("typeof add:", typeof add);
