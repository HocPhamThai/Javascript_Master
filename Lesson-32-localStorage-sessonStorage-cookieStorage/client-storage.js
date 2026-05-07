/**
 * localStorage, sessionStorage, cookieStorage
 * 1. Hiểu câu chuyện luu trữ dữ liệu trên client trong trình duyệt
 * 2. Phân biệt 3 hình thức lưu trữ: localStorage, sessionStorage, cookieStorage
 * 3. Demo CRUD với localStorage, sessionStorage, cookieStorage
 * 4. Ưu nhược điểm của từng loại / khi nào thì sử dụng chúng
 */

/**
 * 1. Hiểu câu chuyện luu trữ dữ liệu trên client trong trình duyệt
 * Lưu trữ DL trong trình duyệt là lưu trữ dữ liệu của người dùng trên thiết bị của người dùng đó.
 * Mục đích > vài ví dụ dễ hiểu:
 * - Giữ trạng thái đăng nhập của người dùng (ví dụ: token, thông tin người dùng)
 * - Giữ các cài đặt của người dùng (ví dụ: theme, dark-light mode, i18n ngôn ngữ, giỏ hàng, ...vv)
 * - Nhiều trang web còn lưu thông tin nhạy cảm hơn để để theo dõi bạn và tối ưu quảng cáo
 * - Hoặc câu chuyện affiliate, trình duyệt lưu mã affiliate của bạn để xử lý tính năng commission
 * - Phần nào giảm sự phụ thuộc vào server, => tối ưu trải nghiệm cho người dùng
 * */

/**
 * 2. Phân biệt 3 hình thức lưu trữ: localStorage, sessionStorage, cookieStorage
 * LocalStorage:
 * - Dung lượng: ~5-10MB (tùy trình duyệt)
 * - Hết hạn: Không bao giờ, chỉ mất khi bị xóa từ tay user hoặc từ code.
 * - Tự động gữi lên Backend-Server: Không
 * SessionStorage:
 * - Dung lượng: ~5MB
 * - Hết hạn: khi đóng tab của trình duyệt. Kiểu lưu trữ dạng phiên.
 * - Tự động gữi lên Backend-Server: Không
 * CookieStorage:
 * - Dung lượng: ~4KB
 * - Hết hạn: Có thể được thiết lập bởi người dùng hoặc server, có thể là phiên hoặc lâu dài.
 * - Tự động gữi lên Backend-Server: Có (gữi kèm trong mỗi request HTTP đến cùng domain)
 */

/** 3. Demo CRUD với localStorage, sessionStorage, cookieStorage \
 *
 */

/**LocalStorage: dữ liệu dang chuỗi (string) key-value*/
// Create/Update
localStorage.setItem("username", "John Doe");
localStorage.setItem("username", "Jenny Doe");
localStorage.setItem("role", "user");
// Get
console.log(localStorage.getItem("username"));
// Delete one item
// localStorage.removeItem("username");
// Delete all item
localStorage.clear();

// QUAN TRỌNG: Trường hợp bạn muốn lưu trữ dữ liệu dạng JSON, rất phổ biến trong các trang web hiện đại
const userJson = { username: "Jonny Doe", age: 30 };
// Khi lưu dữ liệu phải convert sang string sử dụng JSON.stringify();
localStorage.setItem("user", JSON.stringify(userJson));
// Khi lấy dữ liệu phải convert về Json Object
const userJsonFromLocalStorage = JSON.parse(localStorage.getItem("user"));
console.log(userJsonFromLocalStorage);

/**SessionStorage: Tương tự như LocalStorage, dữ liệu được lưu trữ trong 1 tab trình duyệt */
const sessionUsername = document.getElementById("session-username");
const saveUsernameToSessionStorage = () => {
    // Nếu chưa nhập giá trị thì thông báo "Vui lòng nhập..."
    let username = sessionUsername.value;
    if (!username) {
        alert("Vui lòng nhập username");
        return;
    }

    // lưu vào sessionStorage
    sessionStorage.setItem("session-username", username);
    console.log("log ~ :68 ~ saveUsernameToSessionStorage:", sessionStorage.getItem("session-username"));
    // Khi đóng/mở tab mới, nếu chưa set dữ liệu thì sẽ không có data trong sessionStorage

    // Còn đối với localStorage, dù đóng hay mở tab thì đều có
    localStorage.setItem("username", username);

    // sessionStorage.clear();
};

/**
 * Coookie: Một đoạn dữ liệu string nhỏ (tối đa 4KB), tự động gữi lên server mỗi lần request
 */
// cú pháp cơ bản
document.cookie = "username1=JohnDoe";
document.cookie = "username2=JohnCena";
// 2 cách set thời gian cho cookie
/**Cách 1: dùng expires: Ngày hết hạn cụ thể */
const date = new Date();
date.setDate(date.getDate() + 1); // hết hạn sau 1 ngày

/**
 * Cần chuyển object Date thành chuỗi ngày giờ theo một chuẩn UTC/GMT (giờ quốc tế). Ví dụ (Fri, 24 Oct 2026 14:00:00 GMT)
 * Do cookie gữi kèm Http Request Header (Set-Cookie), và HTTP là giao thức quốc tế, Nếu bạn để giờ local tùy quốc gia, thì cookie 
 có thể hết hạn sớm hoặc muộn hơn tùy múi giờ
 * Vì vậy cần điểm chuẩn UTC/GMT để mọi trình duyệt ở bất kỳ quốc gia nào để hiểu chính xác thời điểm cookie hết hạn
 */
const expires = date.toUTCString();
document.cookie = `theme=dark; expires=${expires}`;

/**Cách 2: dùng max-age thời gian sống tính bằng giây */
document.cookie = "isAuthenticated=true; max-age=120"; // Hết hạn sau 120s // đã chuyển sang giờ quốc tế

/**
 * Thuộc tính path (đường dẫn áp dụng) của cookie. Ví dụ dễ hiểu:
 * Nếu path=/, cookie có thể có hiệu lực trên toàn trang web.
 * Nếu paht=/admin, cookie chỉ có hiệu lực và được gữi kèm trong các request có url bắt đầu bằng /admin
 */
document.cookie = "isAuthenticatedAdmin=true; max-age=120; path=/Lesson-32-localStorage-sessonStorage-cookieStorage/admin";

/**
 * Lấy tất cả các Cookie hiện có
 */
console.log(document.cookie);

/** Xóa cookie: bằng cách đưa ngày hết hạn của nó thành 1 ngày trong quá khứ */
document.cookie = "isAuthenticated=true; expires=Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie = "theme=true; expires=Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie = "username01=true; expires=Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie = "ussename02=true; expires=Thu, 01 Jan 1970 00:00:00 GMT";
