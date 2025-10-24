/** CÓ 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT - var - let - const */

/** ---------------LET--------------- */
// Hositing: biến được 'hoisted' (lên đầu phạm vi khối của nó) và
// kHÔNG khởi tạo giá trị mặc định là undefined.
// => KHÔNG thể sử dụng biến trước khai báo và không gặp lỗi

// console.log(nameLet);

// Khai báo
let nameLet = "HocPham";
console.log(nameLet);

// Tái khai báo: KHÔNG thể tái khai báo biến nhiều lần với từ khóa let
// let nameLet = "HocPhamSWE"

// Gán lại: có thể gán lại giá trị của biến let
nameLet = "HocPhamFullStack";
console.log(nameLet);
