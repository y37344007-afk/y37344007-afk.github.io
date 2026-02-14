// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    console.log("Luna's Portfolio is ready!");

    // 這裡可以寫妳未來的互動程式碼
    // 例如：點擊圖片放大檢視的功能
    
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            console.log("Mouse is hovering on a button");
        });
    });
});
