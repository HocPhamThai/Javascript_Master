=== Event Loop ===

- Khái niệm: Event Loop là một cơ chế trong JavaScript giúp quản lý và xử lý các tác vụ bất đồng bộ (asynchronous) một cách hiệu quả. Nó cho phép JavaScript thực thi các tác vụ mà không bị chặn, giúp cải thiện hiệu suất và trải nghiệm người dùng.
- Nếu không có EL, sẽ xảy ra câu chuyện "blocking" (chặn) khi thực thi các tác vụ bất đồng bộ, dẫn đến việc giao diện người dùng bị đóng băng hoặc không phản hồi.
- Hình dung thực tế:
    - Bất đồng bộ - Async: giống như việc bạn gọi món ăn tại nhà hàng, rồi tiếp tục làm việc khác trong lúc chờ.
    - Event Loop: giống như người phục vụ, kiểm tra khi món ăn đã sẵn sàng và mang đến cho bạn.

- Ví dụ phổ biến thường sử dụng trên trang web:
    - Gửi request đến server: fetch, XMLHttpRequest
    - Đợi một khoảng thời gian mới thực thi code: setTimeout, setInterval

1. Các thành phần của Event Loop:

- Call Stack: Nơi chứa hàm đang thực thi. khi hàm được gọi, được đẩy vào Call Stack và khi hàm kết thúc, được loại bỏ khỏi Call Stack.
- Web APIs: các API trình duyệt cấp để xử lý bất đồng bộ (ví dụ: setTimeout, fetch, DOM events).
- Callback Queue: Nơi chứa các callback function đã sẵn sàng để thực thi sau khi các tác vụ bất đồng bộ hoàn thành.
- Microtask Queue: Nơi chứa các microtasks (ví dụ: Promise callbacks) có độ ưu tiên cao hơn so với Callback Queue.

2. Cách hoạt động của Event Loop:

- Javascript thực thi mã trong Call Stack theo thứ tự đồng bộ và tuần tự.
- Khi gặp một tác vụ bất đồng bộ, nó không thực thi ngay mà được gửi đến Web APIs để xử lý.
- Sau khi tác vụ bất đồng bộ hoàn thành, callback của nó sẽ được đưa vào Callback Queue hoặc Microtask Queue để chờ thực thi.
- Event loop như một vòng lặp liên tục quan sát Call Stack và các Queues
    - Khi Call Stack rỗng, EL kiểm tra Microtask Queue trước rồi đến Callback Queue. xem có tác vụ nào cần thực thi không?
    - Nếu có, nó sẽ đẩy callback vào Call Stack để thực thi.
    - Nếu không, EL tiếp tục quan sát.

3. Ví dụ minh họa:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("End");
```
