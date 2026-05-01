/**
 * Những bài học liên tiếp về bất đồng bộ trong Javascript:
 * - Asynchronous
 * - Callback (Callback hell)
 * - Promise (Promise hell)
 * - Async/Await
 * - Event Loop
 * ---
 * 1. Promise là một đối tượng trong js đại diện cho 1 tác vụ bđb chờ thời gian hoàn thành
 * - Promise có 3 trạng thái: Pending (chờ), Fullfilled (thành công), Rejected (thất bại)
 * - Xử lý kết quả trong Promise bằng cách sử dụng .then(), .catch() và .finally()
 * 2. Sử dung Promise để xử lý các tác vụ bất đồng bộ trong Javascript, giúp tránh được Callback Hell
 * 3. Ví dụ thực tế trong việc gọi các API, đọc file, thao tác với database, ...
 * 4. Promise Hell nghĩa là khi các hàm Promise lồng nhau quá nhiều, dẫn đến việc bảo trì
 *   mã nguồn về sau trở nên khó khăn.
 */

//1. Promise là một đối tượng trong js đại diện cho 1 tác vụ bđb chờ thời gian hoàn thành
let testPromise = new Promise((resolve, reject) => {
    let callApiSuccess = true; // Giả lập kết quả gọi API thành công hay thất bại

    setTimeout(() => {
        if (callApiSuccess) {
            resolve("After 2s, API call successful!"); // Gọi resolve khi tác vụ hoàn thành thành công
        } else {
            reject("After 2s, API call failed!"); // Gọi reject khi tác vụ hoàn thành thất bại
        }
    }, 2000);
});

//console.log(testPromise); // Promise { <pending> }

// Promise có 3 trạng thái: Pending (chờ), Fullfilled (thành công), Rejected (thất bại)
// Xử lý kết quả trong Promise bằng cách sử dụng .then(), .catch() và .finally()
testPromise
    .then((result) => {
        console.log(result); // "API call successful!"
    })
    .catch((error) => {
        console.error(error); // "API call failed!"
    })
    .finally(() => {
        // turn off loading, close connection string
        console.log("API call completed!"); // Luôn được gọi sau khi Promise hoàn thành, bất kể thành công hay thất bại
    });

// B1: Bắt đầu đọc file dữ liệu
console.log("B1: Bắt đầu đọc file dữ liệu");

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

readFileData()
    .then((fileData) => {
        // B4: Hiển thị dữ liệu của file ra ngoài sau khi đọc xong
        console.log("B4: Dữ liệu của file là: " + fileData);
    })
    .catch((error) => {
        console.error(error); // Xử lý lỗi nếu có vấn đề khi đọc file
    })
    .finally(() => {
        console.log("Đã hoàn thành việc đọc file dữ liệu!"); // Luôn được gọi sau khi Promise hoàn thành, bất kể thành công hay thất bại
    });

// 3. Ví dụ thực tế trong việc gọi các API, đọc file, thao tác với database, ...
const getListPokemon = (limit = 10) => {
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

//  * 4. Promise Hell nghĩa là khi các hàm Promise lồng nhau quá nhiều, dẫn đến việc bảo trì
//  *   mã nguồn về sau trở nên khó khăn.
getListPokemon(10)
    .then(() => {
        return getListPokemon(20); // Lấy thêm 20 pokemon nữa
    })
    .then(() => {
        return getListPokemon(30); // Lấy thêm 30 pokemon nữa
    })
    .then(() => {
        return getListPokemon(40); // Lấy thêm 40 pokemon nữa
    })
    .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
    })
    .finally(() => {
        console.log("Đã hoàn thành việc lấy danh sách pokemon!");
    });
