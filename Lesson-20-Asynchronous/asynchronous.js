/**
 * Những bài học liên tiếp về bất đồng bộ trong Javascript:
 * - Asynchronous
 * - Callback (Callback hell)
 * - Promise (Promise hell)
 * - Async/Await
 * - Event Loop
 */

// ===Bài toán đồng bộ là gì?===
console.log("Dòng 1 chạy đầu");
console.log("Dòng này chạy sau dòng 1");
console.log("Dòng này chạy sau dòng 1 và 2!");

// ===Bài toán bất đồng bộ: đọc file dữ liệu và hiển thị dữ liệu của file ra ngoài===
let fileData = null;

// B1: Bắt đầu đọc file dữ liệu
console.log("B1: Bắt đầu đọc file dữ liệu");

// B2: Khởi tạo hàm và bắt đầu đọc file dữ liệu (giả lập bằng setTimeout)
console.log("B2: Đang đọc file dữ liệu...");
const readFileData = () => {
    setTimeout(() => {
        // B3: Giả lập đọc file dữ liệu xong
        console.log("B3: Đọc file dữ liệu xong, gán vào biến fileData");
        fileData = "HocPhamSWE - Một lập trình viên";
    }, 3000);
};

readFileData();

// B4: Hiển thị dữ liệu của file ra ngoài
console.log("B4: Dữ liệu của file là: " + fileData); // null
