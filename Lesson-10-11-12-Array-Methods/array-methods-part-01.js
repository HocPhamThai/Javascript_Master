/**
 * Có khá nhiều methods - Phương thức khi xử lý dữ liệu mảng trong Javascript.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế
 * Phần 1: push(), pop(), shift(), unshift(), forEach(), map(), filter(), find(), reduce(), some()
 */

// Tạo mảng chứa các số từ 1 - 5
let arr = [1, 2, 3, 4, 5];

// push() - Thêm phần từ vào cuối của mảng
arr.push(6);
console.log("After Push: " + arr); // [1,2,3,4,5,6]

// pop() - Xóa phần tử cuối của mảng
arr.pop();
console.log("After Pop: " + arr); // [1,2,3,4,5]

// shift() - Loại bỏ phần tử vào đầu của mảng
arr.shift();
console.log("After Shift: " + arr); // [2,3,4,5]

// unshift() - Thêm phần tử vào đầu của mảng
arr.unshift(1); // [1,2,3,4,5]
console.log("After Unshift: " + arr);

// forEach() - Chạy một hàm đơn để xử lý các phần tử của mảng
arr.forEach((number, index) => {
    console.log(`Index - ${index} : Value - ${number}`);
});

// map() - Tạo mảng mới với các phần tử được biến đổi từ mảng gố, ví dụ bình phương từng phần tử
let squaredNumbers = arr.map((number) => {
    return number * number;
});

console.log("After map() - numbers: " + arr); // [1,2,3,4,5]
console.log("After map() - squaredNumbers: " + squaredNumbers); // [1,4,9,16,25]

// filter() - Tạo mảng mới với các phần tử thỏa mãn điều kiện
let evenNumbers = arr.filter((number) => {
    return number % 2 === 0;
});

console.log("After filter - evenNumbers: " + evenNumbers);

// find() - Tìm phần tử đầu tiên thòa điều kiện
let foundNumber = arr.find((number) => {
    return number > 3;
});

console.log("Found number: " + foundNumber); //4

// reduce() - Tinh toán một giá trị duy nhất từ mảng, ví dụ tính tổng các số trong mảng
let sum = arr.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Sum number of arrays: " + sum); // 15

// some() - Kiểm tra xem có ít nhất một phần tử thỏa điều kiện không???
let hasEvenNumber = arr.some((number) => {
    return number % 2 === 0;
});

console.log("After some() hasEventNumber: " + hasEvenNumber); // true
