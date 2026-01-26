/**
 * Nội dụng bài học:
 * - Vấn đề trước khi có ES6 Module
 * - ES6 Module là gì?
 * - Ưu điểm của ES6 Module
 * - Cách sử dụng ES6 Module: Export và Import
 */

/**
 * 1. Vấn đề trước khi có ES6 Module
 * 1.1 Nhớ lại câu chuyện cần nhúng script ở bài 29 (PENDING)
 * 1.2 Và giả sử nếu có những file script trùng tên hàm và biến -> gây ra xung đột trong dự án lớn
 */
showMessage("Hello from main.js");

/** 2. ES6 Module là gì?
 * - Mỗi file code là một module riêng biệt (scope riêng)
 * - Có thể import/export các biến, hàm, class, object, ... giữa các module với nhau
 * - được hỗ trợ trong các trình duyệt hiện đại và NodeJS (cần khai báo thêm "type": "module" trong file package.json)
 */

/** 3. Ưu điểm của ES6 Module
 * - không lệ thuộc thứ tự file js khi load web
 * - Không bị conflit như ở phần 1
 * - Dễ dàng tái sử dụng, bảo trì/tách biệt code giữa các dự án
 */

/** 4. Cách sử dụng ES6 Module: Export và Import
 * - Chỉ hoạt động ở top-level (bên ngoài function, class, ...) không hoạt động bên trong block code {}
 * - Import: nếu import cùng 1 module nhiều lần thì chỉ load 1 lần duy nhất
 */

import * as Helper01 from "./helper01.js";
import * as Helper02 from "./helper02.js";
Helper01.showHelperMessage("Hello from main.js using Helper01");
Helper02.showHelperMessage("Hello from main.js using Helper01");

import { showHelperMessage as showHelperMessage01 } from "./helper01.js";
import { showHelperMessage as showHelperMessage02 } from "./helper02.js";
showHelperMessage01("Hello from main.js using Helper01 - alias");
showHelperMessage02("Hello from main.js using Helper02 - alias");
