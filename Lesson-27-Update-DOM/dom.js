console.log("DOM - Update DOM!!!");

/**
 * Nội dung bài học hôm nay:
 * 1. Thay đổi content của HTML
 * 2. Thao tác với các thuộc tính của thẻ HTML
 * 3. Thay đổi css của phần từ
 * 4. Thêm sửa và xóa phần tử trong DOM
 */

const updateDOM = () => {
    const username = document.getElementById("username");
    const skillByQuerySelector = document.querySelectorAll(".skill");

    // 1. Thay đổi content của HTML
    username.innerHTML = "HocPhamSWE - Một Lập trình viên Fullstack tỉ mỉ và cẩn thận";
    skillByQuerySelector.forEach((skill) => {
        if (!skill.textContent?.includes("Updated")) skill.innerHTML += " - Updated";
    });

    // 2. Thao tác với các thuộc tính của HTML - src, href, width, height...vv
    const placeHolderImg = document.querySelector("#image");
    placeHolderImg.setAttribute("src", "https://placehold.co/600x400");

    console.log(placeHolderImg.getAttribute("src"));

    // Thay đổi thuộc tính href của thẻ a
    const gotoGoogleLink = document.querySelector("#go-to-google");
    gotoGoogleLink.innerHTML = "Go to Youtube";
    gotoGoogleLink.setAttribute("href", "https://www.youtube.com");

    // Xóa thuộc tính target="_blank"
    gotoGoogleLink.removeAttribute("target");

    // 3. Thay đổi css của phần từ
    // - Thay đổi trực tiếp bên trong style
    // username.style.color = "red";
    // username.style.fontSize = "20px";
    // username.style.display = "none";

    // - Ngoài ra, có thể thay đổi trực tiệp thông qua css class
    username.classList.toggle("hightlight");

    // 4. Thêm sửa và xóa phần tử trong DOM
    // Thêm phần từ div mới vào body hoặc một phần từ cha cụ thể đã có trước đó
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "New Div By JS - HocLord";

    // document.body.appendChild(newDiv);
    // document.body.removeChild(newDiv);
    document.querySelector("#parent-div").appendChild(newDiv);
    document.querySelector("#parent-div").removeChild(newDiv);

    // Có thể xóa trực tiếp phần tử thông qua thằng cha
    // username.remove();
};
