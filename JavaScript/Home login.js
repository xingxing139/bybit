const slides = document.querySelectorAll('.banner-slide');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);


// 添加鼠标悬停效果
const marketContainer = document.querySelector('.market-container');

marketContainer.addEventListener('mouseenter', function() {
    this.classList.add('hovered');
});

marketContainer.addEventListener('mouseleave', function() {
    this.classList.remove('hovered');
});

// JavaScript 文件（home.js）

// 模拟币种行情数据
function generateMarketData() {
    const currencyPairs = ['BTC/USD', 'ETH/USD', 'ADA/USD', 'XRP/USD','XRP/USD','XRP/USD']; // 假设这是您感兴趣的一些交易对
    const data = [];

    // 生成随机行情数据
    currencyPairs.forEach(pair => {
        const price = (Math.random() * 10000).toFixed(2); // 生成 0 到 10000 之间的随机价格
        const change = ((Math.random() - 0.5) * 10).toFixed(2); // 生成 -5 到 +5 之间的随机涨跌幅
        data.push({ pair, price, change });
    });

    return data;
}

// 更新币种行情列表
function updateMarketList() {
    const marketList = document.querySelector('.market-list');
    const marketData = generateMarketData();

    // 清空列表
    marketList.innerHTML = '';

    // 添加币种行情到列表
    marketData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('market-item');
        listItem.innerHTML = `
            <div class="currency-pair">${item.pair}</div>
            <div class="latest-price">${item.price}</div>
            <div class="price-change">${item.change}%</div>
            <div class="chart"><img src="./image/chart_placeholder.png" alt="走势图"></div>
            <button class="trade-button">交易</button>
        `;
        marketList.appendChild(listItem);
    });
}

// 在页面加载完毕时更新币种行情列表
window.addEventListener('load', updateMarketList);

// JavaScript部分
// 假设您从登录接口获取到了用户的邮箱信息，并存储在名为 userEmail 的变量中
var userEmail = "user@example.com"; // 假设邮箱信息为 user@example.com

// 将用户邮箱信息显示在页面上
document.getElementById("userEmail").textContent = userEmail;

// JavaScript部分
function toggleAvatarDropdown() {
    var dropdownContent = document.getElementById("avatarDropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectAvatar(selectedAvatar) {
    var userAvatar = document.querySelector(".user-avatar img");
    userAvatar.src = selectedAvatar.src;
    toggleAvatarDropdown();
}


