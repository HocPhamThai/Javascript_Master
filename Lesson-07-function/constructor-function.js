// Constructor Function (hàm khởi tạo - hàm tạo): sử dụng để tạo đối tượng mới.
// Thường kết hợp với từ khóa new

function Developer(username, age) {
    (this.username = username),
        (this.age = age),
        (this.greet = () => {
            console.log(`Hello World!!! My name is ${this.username} and ${this.age} years old.`);
        });
}

let hocPhamLord = new Developer("HocPhamLord", 23);
hocPhamLord.greet();

let hocPhamReal = new Developer("HocPhamReal", 22);
hocPhamReal.greet();
