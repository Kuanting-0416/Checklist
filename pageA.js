let Allbuttons = document.querySelectorAll("button"); //宣告所有button
Allbuttons.forEach((button) => {
  //這個變數內每個都會跑一遍
  button.addEventListener("click", (e) => {
    e.preventDefault(); //'防止預設行為(按下後回傳表單)
  });
});

const Senddata = document.querySelector('.button-Senddata');
const Claerdata = document.querySelector('.button-Claerdata');

/*設定按鍵，重整網頁、清空資料*/
Claerdata.addEventListener('click' , () =>{
  location.reload();
})


Senddata.addEventListener('click', () => {
    // 1. 抓取所有欄位的數值並組合成物件
    const formData = {
        BrandName: document.getElementById('BrandName').value,
        CompanyName: document.getElementById('CompanyName').value,
        date: document.getElementById('date').value,
        personnel: document.getElementById('personnel').value,
        StoreName: document.getElementById('StoreName').value,
        StoreNumber: document.getElementById('StoreNumber').value,
        POSVersion: document.getElementById('POSVersion').value,
        TransferSweborderVersion: document.getElementById('TransferS&weborderVersion').value,
        KIOSKVersion: document.getElementById('KIOSKVersion').value,
        ApptableVersion: document.getElementById('ApptableVersion').value,
        orderingApkVersion: document.getElementById('orderingApkVersion').value,
        customerDisplayPath: document.getElementById('customerDisplayPath').value
    };

    // 2. 將物件轉為 JSON 字串
    const jsonResult = JSON.stringify(formData, null, 2); // null, 2 是為了讓排版變漂亮

    // 3. 輸出結果 (看控制台或顯示在畫面上)
    console.log("生成的 JSON 資料：", jsonResult);
    /*alert("資料已轉換成 JSON，請看控制台！");*/


    // 存入
    sessionStorage.setItem('myData', JSON.stringify(formData));
    
    //跳轉畫面
    window.location.href = "index.html";
});
