// câu lệnh điều kiện
// If - else: Nếu A thì làm gì... Không phải A thì làm gì...
// If - (else if) - else: Nếu A thì...Không phải A thì lại Nếu B...Khồng phải B thì tiếp nữa...

let weather = "sunny day";
weather = "rainny day";

if (weather === "sunny day") {
    console.log("go swimming!!!");
} else {
    console.log("stay home!!!");
}

let score = 8;
if (score >= 9) {
    console.log("Rank: S");
} else if (score >= 8) {
    console.log("Rank: A");
} else if (score >= 7) {
    console.log("Rank: B");
} else if (score >= 5) {
    console.log("Rank: C");
} else {
    console.log("Rank: D");
}
