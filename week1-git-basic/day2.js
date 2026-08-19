// ==========================================
// 1. KHAI BÁO THÔNG TIN TEST CASE (BIẾN & KIỂU DỮ LIỆU)
// ==========================================

const testCaseID = "TC001";
let testCaseName = "Kiểm tra tính năng đăng nhập";
let stepCount = 4;
let isPassed = true;
let errorMessage = null;
let browserName = undefined;

const testSteps = [
      "1. Truy cập trang đăng nhập",
     "2. Nhập email hợp lệ",
     "3. Nhập mật khẩu chính xác",
    "4. Click nút Đăng nhập"];

// ==========================================
// 2. IN RA TERMINAL & KIỂM TRA KIỂU DỮ LIỆU (TYPEOF)
// ==========================================

console.log("Test Case ID:", testCaseID, "Type:", typeof testCaseID);
console.log("Test Case Name:", testCaseName, "Type:", typeof testCaseName);
console.log("Step Count:", stepCount, "Type:", typeof stepCount);
console.log("Is Passed:", isPassed, "Type:", typeof isPassed);
console.log("Error Message:", errorMessage, "Type:", typeof errorMessage);
console.log("Browser Name:", browserName, "Type:", typeof browserName);
console.log("Test Steps:", testSteps, "Type:", typeof testSteps);