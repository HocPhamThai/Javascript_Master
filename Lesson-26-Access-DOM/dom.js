console.log("DOM - Content Loaded!!!");

// Truy phần tử theo ID: document.getElementById("id-name");
const username = document.getElementById("username");
console.log(username);

// Truy cập phần từ đầu tiên khớp với class name
const skillByQuerySelector = document.querySelector(".skill");
console.log(skillByQuerySelector);

// Truy cập tới nhiều phần tử có cúng class name bằng 2 cách: sử dụng query selectorAll hoặc getElementsByClassName
const skillsByQuerySelectorAll = document.querySelectorAll(".skill");
console.log(skillsByQuerySelectorAll);
// Node List (giống Array, có chứa method Array như forEach, map, filter,...)

const skillsByGetEmentByClassName = document.getElementsByClassName("skill");
console.log(skillsByGetEmentByClassName);
// HTML Collection (not Array), ko chứa method Array như forEach, map, filter,... cần chuyền về Array nếu muốn sử dụng

// Get Element by Tag Name
const getAllDivByTagName = document.getElementsByTagName("div");
console.log(getAllDivByTagName);

/**
 * Node List (giống Array, có chứa method Array như forEach, map, filter,...)
 * HTML Collection (not Array), ko chứa method Array như forEach, map, filter,... cần chuyền về Array nếu muốn sử dụng
 * */

skillsByQuerySelectorAll.forEach((skill) => {
    console.log(skill);
});

// skillsByGetEmentByClassName.forEach((skill) => {
//     console.log(skill);
// }); => error: skillsByGetEmentByClassName.forEach is not a function

// Chuyển HTML Collection thành Array để sử dụng forEach
Array.from(skillsByGetEmentByClassName).forEach((skill) => {
    console.log(skill);
});
