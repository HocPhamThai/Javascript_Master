// Bitwise: Toán tử dùng để thực hiện các phép toán bit trong hệ nhị phân.

let x = 5; // 0101
let y = 3; // 0011

console.log(x & y); // AND: 0001 (nhị phân và 1 thập phân)
console.log(x | y); // OR:  0111 (7)
console.log(x ^ y); // XOR: 0110 (6)
console.log(~x); // NOT: 1010 (-6)
console.log(x << 1); // LEFT SHIFT: 1010 (10) (dịch trái 1 vị trí)
console.log(x >> 1); // RIGHT SHIFT: 1010 (10) (dịch phải 1 vị trí)

// Vì làm việc trực tiếp trên các bit của dữ liệu nên toán tử bitwise có thể thực hiện các phép toán nhanh hơn so với phép toán số học thông thường.
// Ứng dụng nhiều trong các ứng dụng đòi hỏi hiệu suất như trò chơi, xử lý đồ họa, lập trình hệ thống,...vv
