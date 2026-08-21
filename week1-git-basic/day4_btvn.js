// Bài 1: Phân tích kết quả Test Case
// Khai bao kết quả đầu vào
const testCaseResults = [
    { testCaseId: 1, status: "PASS" },
    { testCaseId: 2, status: "FAIL" },
    { testCaseId: 3, status: "SKIP" },
    { testCaseId: 4, status: "PASS" },
    { testCaseId: 5, status: "FAIL" }
];

// Khai báo biến đếm số lượng kết quả
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Duyệt qua danh sách kết quả Test Case
for (const result of testCaseResults) {
    switch (result.status) {
        case "PASS":
            passCount++;
            break;
        case "FAIL":
            failCount++;
            break;
        case "SKIP":
            skipCount++;
            break;
    }
}

console.log(`Số lượng test case PASS: ${passCount}`);
console.log(`Số lượng test case FAIL: ${failCount}`);
console.log(`Số lượng test case SKIP: ${skipCount}`);


// BÀI TẬP 2: Giả lập cơ chế Polling kiểm tra Database (Sử dụng while)

let orderStatus = "PENDING"; // Trạng thái đơn hàng ban đầu
let checckCount = 0; // Biến đếm số lần kiểm tra
const maxChecks = 5; // Số lần kiểm tra tối đa

while (orderStatus === "PENDING" && checckCount < maxChecks) {
    checckCount++;
    console.log(`Kiểm tra trạng thái đơn hàng lần thứ ${checckCount}...`);

    // if (checckCount === 4) {
    //     orderStatus = "COMPLETED"; // Giả lập đơn hàng đã được xử lý thành công
    //     console.log("Đơn hàng đã được xử lý thành công!");
    // }

    // Kiểm tra kết quả sau khi thoát khỏi vòng lặp
    if (orderStatus === "COMPLETED") {
        console.log("Đơn hàng đã hoàn tất, tiếp tục thực hiện các bước kiểm thử tiếp theo. PASS");
    } else {
        console.log("Đơn hàng vẫn đang chờ xử lý, FAILED.");
    }
}

//Lọc dữ liệu tài khoản để chạy Smoke Test (Thử thách nâng cao)

const accounts = [
    { id: 1, username: "user1", role: "Admin", status: "Active" },
    { id: 2, username: "user2", role: "User", status: "Inactive" },
    { id: 3, username: "user3", role: "User", status: "Active" },
    { id: 4, username: "user4", role: "Admin", status: "Inactive" },
    { id: 5, username: "user5", role: "Admin", status: "Active" }
];

const selectedAdmins = [];

for(const account of accounts){
    if(account.role === "Admin" && account.status === "Active"){
        selectedAdmins.push(account.username);
    }
}
console.log("Các tài khoản Admin đang hoạt động:", selectedAdmins);