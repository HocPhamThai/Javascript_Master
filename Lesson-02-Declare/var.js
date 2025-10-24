/** CÓ 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT - var - let - const */

/** ---------------VAR--------------- */
// Hositing: biến được 'hoisted' (lên đầu phạm vi khối của nó) và
// Được khởi tạo giá trị mặc định là undefined.
// => CÓ thể sử dụng biến trước khai báo và không gặp lỗi

console.log(nameVar);

// Khai báo
var nameVar = "HocPham";
console.log(nameVar);

// Tái Khai báo: Biến được khai báo bằng từ khóa var có thể được tái khai báo trong cùng một phạm vi
var nameVar = "HocPhamSWE";
console.log(nameVar);

// Gán lại: có thể gán lại giá trị cho biến var
nameVar = "HocPhamFullStack";
console.log(nameVar);
