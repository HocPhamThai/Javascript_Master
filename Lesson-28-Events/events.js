/**
 * Nội dung bài học:
 * 1. Events (sự kiện) là gì?
 * 2. Vòng đời của một event?
 * 3. Ba cách găn event?
 * 4. Các Events phổ biến trong Javascript
 * 5. Log phân tích đối tượng sự kiện (Event Object)
 * 6. Tổng kết
 */

/**
 * 1. Events (sự kiện) là gì?
 * Events (Sự kiện) là một hành động hoặc tương mà người dùng sử dụng trên trang web (ví dụ: click, gõ phím, cuộn trang, tải trang, ...vv)
 * Javascript lắng nghe và phản hồi các sự kiện này thông qua EventHandler (hàm xử lý sự kiện)
 * */

/**
 * 2. Vòng đời của một event?
 * Step 1: người dùng thực hiện hành động (ví dụ: click chuột)
 * Step 2: trình duyệt phát hiện sự kiện và gữi tới tín hiệu phần tử tương ứng
 * Step 3: Hàm xử lí sự kiện (event handler) được gọi để xử lý sự kiện
 */

/**
 * 3. Ba cách găn event?
 * - Cách 1: Viết sự kiện trực tiếp trong thẻ HTML
 * - Cách 2: Gắn sự kiện qua Javascript
 * - Cách 3: Dùng AddEventListener
 */
const myButton = document.querySelector(".myBtn");
if (myButton) {
    // myButton.onclick = () => {
    //     alert("Bạn đã clicked vào Button 02");
    // };

    myButton.addEventListener("click", () => {
        alert("Bạn đã clicked vào Button 02");
    });
}

// 4. Các Events phổ biến trong Javascript
/**
 * --- Chuột ---
 * click: Nhấn chuộc trái vào phần tử
 * dbclick: Nhấn đúp chuột
 * mouseover: Rê chuột vào phần tử
 * mouseout: Rê chuộ ra khỏi phần từ
 * mousedown: ấn chuột xuống
 * mouseup: thả chuột ra
 */
const box = document.querySelector(".box");
if (box) {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "lightblue";
    });
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "lightcoral";
    });
}
/**
 * --- Bàn phím ---
 * keyup: nhả phím ra
 * keydown: ân phím xuống
 */
document.addEventListener("keydown", (e) => {
    console.log("Bạn vừa nhấn vào phím: " + e.key);
});
/**
 * --- Form ---
 * submit: khi form được gữi
 * change: khi giá trị input thay đổi
 * focus: khi phân tử được chọn (focus)
 * blur: khi phần tử mất focus
 */
const myForm = document.querySelector("#myForm");
if (myForm) {
    myForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Ngăn behavior mặc định reload trang khi submit
        alert("Bạn vừa submit form!!!");
    });
}
/**
 * --- Page && Document ---
 * load: khi trang hoặc tài nguyên tải xong
 * scroll: khi cuộn trang
 * resize: khi thay đổi kích thước cửa sổ trình duyệt
 */
window.addEventListener("scroll", () => {
    console.log("Bạn đang cuộn trang!!!");
});

/**
 * 5. Log phân tích đối tượng sự kiện (Event Object)
 * Khi sự kiện xảy ra, Javascript tự động tạo ra một đối tượng event chứa thông tin chi tiết về sự kiện đó (vị trí chuột, bàn phím, ...)
 */
document.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.type); // click
    console.log(e.target); // phần tử mà click
});

/**
 * 6. Tổng kết
 * Event có thể coi là một "công cụ" cực kỳ mạnh mẽ trong lập trình web, và tính ứng dụng của nó rất cao,
 * như các bạn thấy đây, hầu hết mọi hành động của user trên trang web đều được xử lý bởi event handler. Từ đó có thể phát triển rất
 * nhiều tính năng trên web
 * - Ví dụ: Khi lướt mạng xã hội nói chung, mọi hành động của bạn đều được ghi dấu lại, từ đó nền tảng kiếm ra tiền
 * tối ưu quảng cáo đến cho bạn...vv Thực tế một trong những câu chuyện kiếm tiền từ lập trình.
 */
