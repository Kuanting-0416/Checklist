
// 1. 從 sessionStorage 取得資料
const rawData = sessionStorage.getItem('myData');

// 2. 檢查資料是否存在
if (rawData) {
    const data = JSON.parse(rawData);
    console.log("成功解析資料：", data);

    // 3. 自動遍歷資料並填入對應的 <td>
    Object.keys(data).forEach(key => {
        // 尋找 HTML 中 id 與 key 相同的元素
        const element = document.getElementById(key);
        
        if (element) {
            // 將內容填入 <td>
            element.textContent = data[key]; 
        }
    });
} else {
    console.error("在 sessionStorage 中找不到 'myData'");
};
