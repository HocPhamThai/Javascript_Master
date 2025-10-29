/** NHÓM CÁC DỮ LIỆU NGUYÊN THỦY - PRIMITIVE TYPES*/
/**
 *  Primitive types lưu trữ trực tiếp trong stack memory
 *  khi một giá trị primitive được gán cho một biến, giá trị này không thay đổi
 *  Khi thay đổi giá trị của biến, một vùng nhớ mới sẽ được tạo ra trong stack memory
 *  Primitive types bao gồm:
 *  */

// 1. Number: Đại diện cho cả số nguyên và số thực
let age = 23;
let productPrice = 10.99;
console.log("Age:", age);
console.log("typeof age:", typeof age);
console.log("Product Price:", productPrice);
console.log("typeof productPrice:", typeof productPrice);
console.log("------------------------");

// 2. String: Đại diện cho chuỗi ký tự
let username = "HOCPHAMSWE - Một lập trình viên";
console.log("Username: " + username);
console.log("typeof username: " + typeof username);
console.log("------------------------");

// 3. Boolean: Đại diện cho giá trị đúng (true) hoặc sai (false)
let isAvailable = true;
console.log("Is Available:", isAvailable);
console.log("typeof isAvailable:", typeof isAvailable);
let isFree = false;
console.log("Is Free:", isFree);
console.log("typeof isFree:", typeof isFree);
console.log("------------------------");

// 4. Null: Đại diện cho giá trị rỗng hoặc không tồn tại
let nullValue = null;
console.log("Null Value:", nullValue);
console.log("typeof nullValue:", typeof nullValue); // Lưu ý: typeof null trả về "object" do lỗi trong JavaScript ban đầu
console.log("Is nullValue equal to null?", nullValue === null);
console.log("------------------------");

// 5. Undefined: Đại diện cho biến chưa được gán giá trị
let undefinedValue;
console.log("Undefined Value:", undefinedValue);
console.log("typeof undefinedValue:", typeof undefinedValue);
console.log("------------------------");

// 6. Symbol: Đại diện cho một giá trị duy nhất và không thể thay đổi (ES6 trở lên)
let uniqueId = Symbol("id-17062024-abc-xyz");
console.log("Unique ID:", uniqueId);
console.log("typeof uniqueId:", typeof uniqueId);
console.log("------------------------");

// 7. BigInt: Đại diện cho các số nguyên lớn hơn giới hạn của kiểu Number (ES2020 trở lên)
let bigNumber01 = BigInt(9007199254741991); // Cách 1: Sử dụng hàm BigInt()
let bigNumber02 = 9007199254741991n; // Cách 2: Sử dụng hậu tố 'n'
console.log("Big Number 01:", bigNumber01);
console.log("typeof bigNumber01:", typeof bigNumber01);
console.log("Big Number 02:", bigNumber02);
console.log("typeof bigNumber02:", typeof bigNumber02);
console.log("------------------------");

// bài tập: Kiểm tra kiểu dữ liệu của các biến sau
let a = 42; // number
let b = "Hello, World!"; // string
let c = false; // bool
let d = null; // null
let e; // undefined
let f = Symbol("unique"); // symbol
let g = 12345678901234567890n; // bigint
