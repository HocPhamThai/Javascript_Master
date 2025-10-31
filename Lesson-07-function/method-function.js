// Method function (hàm phương thức): là hàm được định nghĩa / khai báo bên trong đối tượng,
// được coi là một phương thức của đối tương

let developer = {
    username: "HocPhamSWE",
    age: 23,
    greet: function () {
        console.log("Hello, I'm " + this.username + " from earth!");
    },
    greetArrow: () => {
        console.log("Hello, I'm " + this.username + " from earth!");
    },
};

developer.greet();
developer.greetArrow(); // không có this
