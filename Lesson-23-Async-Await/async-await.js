/**
 * Những bài học liên tiếp về bất đồng bộ trong Javascript:
 * - Asynchronous
 * - Callback (Callback hell)
 * - Promise (Promise hell)
 * - Async/Await
 * - Event Loop
 * ---
 * 1. Async/Await là cú pháp làm việc với Promise một cách dễ đọc và dễ viết hơn, giúp tránh được Promise Hell, thay vì .then(), .catch() và .finally()
 * - Async để khai báo một hàm bất đồng bộ, trả về một Promise
 * - Await chỉ có thể dùng được trong scope của các hàm async, giúp đợi đến khi promise hoàn thành.
 * 2. Sử dụng Async/Await để giải quyết vấn đề bất đồng bộ ở buổi học 20 thay vì dùng callback hoặc promise.
 * 3. Ví dụ thực tế trong việc gọi các API, đọc file, thao tác với database, ...
 * 4. Vấn đề Async/Await Hell là gì? có giống CallBack Hell và Promise Hell?
 */

// -------------------------------
// 1. Async/Await - Khái niệm - Ví dụ đơn giản
const testPromise = new Promise((resolve, reject) => {
    let callApiSuccess = false;

    setTimeout(() => {
        if (callApiSuccess) {
            resolve("Sau 2s đã gọi API thành công");
        } else {
            reject("Sau 2s đã gọi API thất bại");
        }
    }, 2000);
});
// Xử lý kết quả của Promise trên bằng try catch finally thay vì .then .catch hay .finally()
// Lưu ý try catch finally phải được bọc trong async function thì mới được dùng await
// Khởi tạo hàm handleAsyncFunc

const handleAsyncFunc = async () => {
    try {
        const result = await testPromise;
        console.log(result); // khi success
    } catch (error) {
        console.error(error); // khi fail
    } finally {
        console.log("Hoàn tất xử lý Promise với Async/Await"); // Luôn chạy dù success hay fail;
    }
};

handleAsyncFunc(); // Thực thi hàm handleAsyncFunc

// -------------------------------
// 2. Sử dụng Async/Await để giải quyết vấn đề bất đồng bộ ở buổi học 20 thay vì dùng callback hoặc promise.
// B1: Bắt đầu đọc file dữ liệu
let fileData = null;
console.log("B1: Bắt đầu đọc file dữ liệu, dự kiến tốn mất 3s");

// B2: Khởi tạo hàm và bắt đầu đọc file dữ liệu (giả lập bằng setTimeout)
console.log("B2: Đang đọc file dữ liệu...");
const readFileData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // B3: Giả lập đọc file dữ liệu xong
            console.log("B3: Đọc file dữ liệu xong, gán vào biến fileData");
            fileData = "HocPhamSWE - Một lập trình viên";

            resolve(fileData); // Trả về fileData khi đọc xong
            reject("Lỗi đọc file dữ liệu!"); // Trả về lỗi nếu có vấn đề khi đọc file
        }, 3000);
    });
};

// Thực thi hàm readFileData (vẫn ở bước 2)
// Hướng dẫn nhanh các bạn về IIFE (Intermediately Invoked Function Expression)
// Lưu ý khi dùng IIFE thì phải có dấu chấm phẩy ở đầu và kết thúc để tránh việc nó bị coi là tham số của một hàm khác
// ref: IIFE mdn

(async () => {
    try {
        const fileData = await readFileData();
        console.log("B4: Dữ liệu của file là: " + fileData);
    } catch (error) {
        console.error("B4: Kết thúc quá trình đọc file với lỗi: ", error);
    } finally {
        console.log("Đã hoàn thành việc đọc file dữ liệu!");
    }
})();

// -------------------------------
// 3. Ví dụ thực tế trong việc gọi các API, đọc file, thao tác với database, ...
const getListPokemon = async (limit = 10) => {
    try {
        const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, { method: "GET" });
        const pokenmon = await rawResponse.json();
        console.log("Danh sách Pokemon: ", data.results);
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
    } finally {
        console.log("Đã lấy xong danh sách pokemon");
    }

    return (
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, { method: "GET" })
            .then((response) => response.json())
            // ở bước này mới có res dạng raw, muốn lấy data thì phải thong qua .json()
            // Mà response.json() cũng trả về một Promise, nên phải dùng .then() để lấy được data sau khi đã chuyển đổi xong
            // - Một kiểu Promise Hell chúng ta sẽ nhắc bên dưới
            .then((data) => console.log(data.results))
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            })
            .finally(() => {
                console.log("Đã lấy xong danh sách pokemon");
            })
    );
};

// -------------------------------
// 4. Vấn đề Async/Await Hell là gì? có giống CallBack Hell và Promise Hell?
// ví dụ 3 jobs cùng chạy riêng biệt sẽ gây ra vấn đề phải chờ nhau
try {
    await Job_1(); // Job_1 chạy
    await Job_2(); // Job_2 phải chờ job_1 done
    await Job_3(); // Job_3 phải chờ job_1 và job_2 done
} catch (error) {
    console.error(error);
}

// => chỉ nên dùng await tuần tự nếu kết quả của tác vụ sau phụ thuộc tác vụ trước
// => Nếu không thì dùng Promise.all() để chạy song song các tác vụ
/**
 * - Tại sao Async function lại luôn trả về một promise? bên dưới nó hoạt động như thế nào?
 * - Nếu có nhiều await trong một function thì sẽ chạy ntn? và một cái bị lỗi sẽ ra sao?
 * - PromiseAll, allSettled, race, v.v
 */
