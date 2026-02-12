
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

/*桌況選擇監控 點選產生顏色*/
const confirmed = document.getElementById("labelConfirmed");
const notable = document.getElementById("labelNoTable");

confirmed.addEventListener("click", () => {
  confirmed.classList.add("active-confirmed");
  notable.classList.remove("active-notable");
});

notable.addEventListener("click", () => {
  notable.classList.add("active-notable");
  confirmed.classList.remove("active-confirmed");
});

/*傳輸接單選擇監控 點選產生顏色*/
const Separate = document.getElementById('Separate');
const Together = document.getElementById('Together');

Separate.addEventListener("click", () => {
  Separate.classList.add("active-Separate");
  Together.classList.remove("active-Together");
});

Together.addEventListener("click", () => {
  Together.classList.add("active-Together");
  Separate.classList.remove("active-Separate");
});
