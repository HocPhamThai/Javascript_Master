/**
 * Những bài học liên tiếp về bất đồng bộ trong Javascript:
 * - Asynchronous
 * - Callback (Callback hell)
 * - Promise (Promise hell)
 * - Async/Await
 * - Event Loop
 * ---
 * Callback là gì?
 * 1. Callback là một hàm được truyền vào một hàm khác như một đối số,
 *   và hàm đó được gọi sau khi hàm kia thực hiện xong.
 * 2. Dùng Callback để xử lý các tác vụ bất đồng bộ trong Javascript.
 * 3. Ví dụ thực tế trong việc gọi các API, đọc file, thao tác với database, ...
 * 4. Callback Hell nghĩa là khi các hàm callback lồng nhau quá nhiều, dẫn đến việc bảo trì
 *   mã nguồn về sau trở nên khó khăn.
 */

// ===1. Callback là một hàm được truyền vào một hàm khác như một đối số,
//   và hàm đó được gọi sau khi hàm kia thực hiện xong. ===
let greet = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
};

greet("HocPhamSWE", () => {
    console.log("This is a callback function!");
});

// === 2. Dùng Callback để xử lý các tác vụ bất đồng bộ trong Javascript. ===
// B1: Bắt đầu đọc file dữ liệu
console.log("B1: Bắt đầu đọc file dữ liệu");

// B2: Khởi tạo hàm và bắt đầu đọc file dữ liệu (giả lập bằng setTimeout)
console.log("B2: Đang đọc file dữ liệu...");
const readFileData = (callback) => {
    setTimeout(() => {
        // B3: Giả lập đọc file dữ liệu xong
        console.log("B3: Đọc file dữ liệu xong, gán vào biến fileData");
        fileData = "HocPhamSWE - Một lập trình viên";

        // truyền fileData vào callback để sử dụng sau khi đọc xong
        callback(fileData);
    }, 3000);
};

readFileData((fileData) => {
    // B4: Hiển thị dữ liệu của file ra ngoài sau khi đọc xong
    console.log("B4: Dữ liệu của file là: " + fileData);
});

// === 3. Ví dụ thực tế trong việc gọi các API, đọc file, thao tác với database, ... ===
// Sử dụng XMLHttpRequest để gọi API (cách cũ), chỉ cần nắm qua
// Lưu ý: Hiện nay người ta thường dùng fetch hoặc axios để gọi API thay vì XMLHttpRequest,
// XmlHttpRequest chỉ chạy trên trình duyệt, không chạy trên NodeJS
const getListPokemon = (apiUrl, callback) => {
    const req = new XMLHttpRequest();
    req.open("GET", apiUrl);
    req.onload = () => {
        if (req.status === 200 && req.status < 300) {
            const responseData = JSON.parse(req.responseText);
            callback(responseData);
        }
    };

    req.send();
};

const getPokemonDetails = (apiUrl, callback) => {
    const req = new XMLHttpRequest();
    req.open("GET", apiUrl);
    req.onload = () => {
        if (req.status === 200 && req.status < 300) {
            const responseData = JSON.parse(req.responseText);
            callback(responseData);
        }
    };

    req.send();
};

// getListPokemon("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0", (responseData) => {
//     console.log("Lấy danh sách Pokemon thành công!", responseData);
//     document.getElementById("list-pokemon").innerHTML = responseData.results.map((pokemon) => `<li>${pokemon.name}</li>`).join("");
// });

// === 4. Callback Hell nghĩa là khi các hàm callback lồng nhau quá nhiều, dẫn đến việc bảo trì
//   mã nguồn về sau trở nên khó khăn. ===
// Ví dụ Callback Hell khi gọi nhiều API liên tiếp

getListPokemon("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0", (responseData) => {
    console.log("Lấy danh sách Pokemon thành công!", responseData);
    document.getElementById("list-pokemon").innerHTML = responseData.results.map((pokemon) => `<li>${pokemon.name}</li>`).join("");

    let charmander = responseData.results.find((x) => x.name === "charmander"); // Lấy con Charmander
    if (charmander) {
        // Gọi API lấy chi tiết con Charmander
        getPokemonDetails(charmander.url, (charmanderDetails) => {
            document.getElementById("pokemon-details").innerHTML = JSON.stringify(charmanderDetails);
            // Giả sử ta muốn lấy thêm thông tin về loài (species) của Charmander
            // ... thì lại tiếp tục gọi API khác
        });
    }
});
