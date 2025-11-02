/**
 * Có khá nhiều methods - Phương thức khi xử lý dữ liệu mảng trong Javascript.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế
 * Phần 2: concat(), slice(), splice(), every(), findIndex(), toString(), join()
 */

// concat() dùng để nối hai hoặc nhiều mảng lại với nhau.
// Không làm thay đổi các mảng gốc và trả về một mảng mới chứa tất cả các phần tử của các mảng được nối
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatResult = arr1.concat(arr2);
console.log("Concat array: " + concatResult); // [1,2,3,4,5,6]

// slice() trả về một mảng con của mảng ban đầu, từ vị trí startIndex đến endIndex (không bao gồm endIndex).
// Không làm thay đổi mảng gốc ban đầu
const arr3 = [1, 2, 3, 4, 5, 6];
const sliceResult = arr3.slice(1, 4);
console.log("Slice Result: " + sliceResult); // [2,3,4]

// splice() thay đổi nội dung của mảng bắng cách xóa, thay thế hoặc thêm phần tử mới.
// Sẽ làm thay đổi mảng gốc ban đầu
const arr4 = [1, 2, 3, 4, 5, 6];
const spliceResult = arr4.splice(3, 2, "a", "b", "c"); // bắt đầu từ vị trí index 3, xóa 2 phần tử, thêm vào 'a', 'b', 'c'
console.log("After splice(): " + spliceResult); // ko trả về gì nếu chỉ call arr4.splice()
console.log("After splice() arr4: " + arr4); // [1,2,3,'a','b','c',6]

// every() kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn đk callback ko
// true => nếu tất cả thỏa mãn đk, ngược lại false
const arr5 = [1, 2, 3, 4, 5, 6];
const allEven = arr5.every((number) => number % 2 === 0);
console.log("After every() allEven: " + allEven); // false

// findIndex() trả về chỉ số index của phần tử đầu tiên thỏa mảng điều kiện trong hàm callback.
// Nếu không phần tử nào thỏa mãn trả về -1
const arr6 = [1, 2, 3, 4, 5, 6];
const findIndexResult = arr6.findIndex((num) => num > 3);
console.log("After findIndex() > 3: " + findIndexResult); //3

// toString() Nối tất cả phần tử trong mảng thành một chuỗi String
const arr7 = [1, 2, 3, 4, 5, 6];
const toStringResult = arr7.toString();
console.log("After toString(): " + toStringResult); // 1,2,3,4,5,6
console.log("After toString() typeof: " + typeof toStringResult); // string

// join() Nối tất cả các phân tử trong mảng thành một chuỗi String (khác với toString() ở điểm có thể chỉ định dấu phân cách)
const arr8 = [1, 2, 3, 4, 5, 6];
const joinResult = arr8.join(", ");
console.log("After toString(): " + joinResult); // 1, 2, 3, 4, 5, 6
