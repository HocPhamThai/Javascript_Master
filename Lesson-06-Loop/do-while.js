/**
 * Trong Javascript, vòng lặp (loop) là một cấu trúc điều khiển dùng để lặp lại một đoạn code nhiều lần
 * Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi một điều kiệu được thỏa mãn
 */

// do while: Dùng khi biết trước số lần lặp (body code thực hiện một lần dù đk đúng hay sai)

let i = 0;
// i = 11; // Dùng để so sánh với while loop

do {
    console.log(`Count: ${i}`);
    i++;
} while (i < 11);
