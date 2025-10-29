/** CÓ 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT - var - let - const */

/** ---------------CONST--------------- */
// Hositing: biến được 'hoisted' (lên đầu phạm vi khối của nó) và
// kHÔNG khởi tạo giá trị mặc định là undefined..
// => KHÔNG thể sử dụng biến trước khai báo và không gặp lỗi

// console.log(nameConst);

// Khai báo
const nameVar = "HocPham";
console.log(nameVar);

// Tái khai báo: KHÔNG thể tái khai báo biến nhiều lần với từ khóa const
// const nameVar = "HocPhamSWE";

// Gán lại: KHÔNG thể gán lại giá trị cho biến var
nameVar = "HocPhamFullStack";
console.log(nameVar);
