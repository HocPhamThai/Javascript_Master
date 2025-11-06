/**
 * Có khá nhiều methods, phương thức xử lý dữ liệu String trong Javascript
 * charAt(), concat(), includes(), indexOf(), slice(), split(), substring
 *  */

// charAt() - Trả về ký tự tại một vị trí cụ thể trong chuỗi. Ví dụ bắt đầu từ 0. Trả về string rỗng nếu vị trí không tồn tại
const str1 = "Hello World";

console.log(`Char at index 1 in ${str1} is ${str1.charAt(1)} and typeof is ${typeof str1.charAt(1)}`); // e
console.log(`Char at index length in ${str1} is ${str1.charAt(str1.length)} and typeof is ${typeof str1.charAt(str1.length)}`); // ''

// concat() - Được sử dụng để nối 2 hay nhiều chuỗi lại với nhau và trả về một chuỗi mới.
const str2 = "HocPham";
const seperator = " - ";
const str3 = "Một lord SWE";
const concatResult = str2.concat(seperator).concat(str3);
console.log("log ~ :17 ~ concatResult:", concatResult);

// includes() - kiểm tra xem chuỗi có chứa một chuỗi con cụ thể hay không.
const str4 = "HocPham - Một lord SWE";
const includesResult = str4.includes("lord");
console.log("log ~ :22 ~ includesResult:", includesResult);

// indexOf() - trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi. Nếu chuỗi con không được tìm thấy nó trả về -1
const str5 = "Hello from another worlds";
const indexOfFrom = str5.indexOf("from");
const indexOfsdf = str5.indexOf("sdf");
console.log("log ~ :27 ~ indexOfFrom:", indexOfFrom);
console.log("log ~ :28 ~ indexOfsdf:", indexOfsdf);

// split() - chia chuỗi con thành một mảng các chuỗi con dựa trên một ký tự nhận diện.
const str6 = "JS,TS,React,Node,C#,.NET";
console.log(`string after split(): ${str6.split(",")}`);

// slice() - trả về một chuỗi con từ một chuối gốc ban đầu, từ vị trí startIndex đến endIndex (ko bao gồm)
// substring()
