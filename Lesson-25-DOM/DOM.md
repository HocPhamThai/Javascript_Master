1. Cấu trúc cơ bản của 1 trang web:

- Một trang web thường bao gồm 3 phần chính:
    - HTML: Cấu trúc nội dung của trang web.
    - CSS: Định dạng và tạo kiểu cho trang web.
    - JavaScript: Thêm tính năng tương tác động và thao tác với DOM.

2. Cơ bản về cách mà trình duyệt render một trang web:

- Đọc (parse) HTML để tạo ra DOM (Document Object Model).
- Đọc CSS để tạo ra CSSOM (CSS Object Model).
- Kết hợp DOM và CSSOM để tạo ra Render Tree.
- Sử dụng Javascript để thao tác với DOM (truy cập, thay đổi hoặc xóa các phẩn tử trên trang web).

3. DOM (Document Object Model):

- DOM là một tiêu chuẩn mô hình đối tượng tài liệu được W3C (World Wide Web Consortium) phát triển. Mục đích để thao tác với 2 dạng tài liệu:
    - HTML (ngôn ngữ đánh dấu được thiết kế để hiển thị nội dung trình duyệt web)
    - XML (ngôn ngữ đánh dấu được thiết kế để lưu trữ và truyền dữ liệu theo cấu trúc)
- Ở đây tập trung vào DOM HTML, khi trình duyệt tải một trang web, nó sẽ tạo ra một cây DOM từ mã HTML giúp CRUD (Create, Read, Update, Delete) các phần tử trên trang web thông qua JavaScript.

4. Cấu trúc của DOM Tree:

- DOM Tree là một cấu trúc dạng cây gồm các nút (nodes). Mỗi thẻ HTML Là một node:
- Các loại Nodes trong DOM:
    - Document Node: đại diện cho toàn bộ tài liệu HTML.
    - Element Node: đại diện cho thẻ HTML (ví dụ: `<div>`, `<p>`, `<a>`).
    - Attribute Node: đại diện cho các thuộc tính của thẻ HTML (ví dụ: id, class, src).
    - Text Node: đại diện cho nội dung văn bản bên trong các thẻ HTML.
    - Comment Node: đại diện cho các comment trong mã HTML.
