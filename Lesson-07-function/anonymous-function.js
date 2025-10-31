/**
 * Anonymous functions:
 * - Là hàm không có tên
 * - Sử dụng làm đối số cho các hàm khác. Ví dụ như các hàm sự kiện hoặc các hàm gọi lại (callback).
 *  */

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("New log!!!");
//     }, i * 1000);
// }

let i = 0;
(function tick() {
    console.log("New log!!!", i + 1);
    i++;
    if (i < 10) setTimeout(tick, 1000);
})();
