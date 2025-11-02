/**
 *  Trong Javascript, "mảng" (array) là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
 *  Các giá trị trong mảng có thể là bất kỳ kiểu dữ liệu nào, number, object, thậm chi là các mảng khác.
 *  Mảng trong JS có các chỉ số - Index bắt đầu từ 0, nghĩa là phần tử đầu tiên trong mảng có index là 0, phần tử thứ 2 có index là 1 và tiếp tục tăng dần.
 * */

// Ví dụ cơ bản về cách tạo và sử dụng mảng trong Javscript

// Tạo mảng chứa các số từ 1 - 5
let arr = [1, 2, 3, 4, 5];

// Truy cập phần tử đầu tiên của mảng (index = 0)
console.log("Phần tử đầu tiên của mảng arr[0]: " + arr[0]);

// Truy cập phần tử cuối của mảng (index = arr.length - 1)
console.log("Phần tử cuối cùng của mảng arr[length - 1]: " + arr[arr.length - 1]);

// Mảng có thể chứa bất kỳ kiểu dữ liệu nào
let mixedArr = ["numberone", 101, Symbol("ahahah"), true, null, undefined, 12312312321312n];
console.log(mixedArr);
