/* =====================================================================
 * 爱⑨之家 · 天气预报 (weather.js)
 * 说明：
 *   1. 今日天气：保留原 open-meteo 接口，带天气配图
 *   2. 未来预报：新增 daily 预报接口，在今日天气下方用纯文字表格展示
 *   3. 城市库：沿用原主页内置经纬度（177 城），可继续扩充
 * ===================================================================== */

/* ---------- 天气代码 → 中文 + 配图（沿用原主页） ---------- */
const weatherCodeMap = {
    0:  { name: "晴",   img: "天气/晴.png" },
    1:  { name: "少云", img: "天气/少云.png" },
    2:  { name: "多云", img: "天气/多云.png" },
    3:  { name: "阴天", img: "天气/阴.png" },
    45: { name: "雾",   img: "天气/雾.png" },
    48: { name: "霜",   img: "天气/霜.png" },
    51: { name: "毛毛雨", img: "天气/阵雨.png" },
    53: { name: "小雨", img: "天气/小雨.png" },
    55: { name: "中雨", img: "天气/中雨.png" },
    61: { name: "小雨", img: "天气/小雨.png" },
    63: { name: "中雨", img: "天气/中雨.png" },
    65: { name: "大雨", img: "天气/大雨.png" },
    71: { name: "小雪", img: "天气/小雪.png" },
    73: { name: "中雪", img: "天气/中雪.png" },
    75: { name: "大雪", img: "天气/大雪.png" },
    95: { name: "雷阵雨", img: "天气/雷阵雨.png" },
    96: { name: "冰雹", img: "天气/冰雹.png" }
};
/* 预报仅文字，复用同一中文名 */
function wname(code) { return (weatherCodeMap[code] || { name: "未知" }).name; }

/* ---------- 城市经纬度（沿用原主页，共177城） ---------- */
const cityLatLng = {
            北京: { lat: 39.9, lng: 116.4 },
            上海: { lat: 31.2, lng: 121.5 },
            广州: { lat: 23.1, lng: 113.3 },
            深圳: { lat: 22.6, lng: 114.1 },
            杭州: { lat: 30.3, lng: 120.2 },
            重庆: { lat: 29.9, lng: 106.6 },
            成都: { lat: 30.6, lng: 104.1 },
            武汉: { lat: 30.5, lng: 114.0 },
            西安: { lat: 34.3, lng: 108.9 },
            天津: { lat: 39.1, lng: 117.2 },
            南京: { lat: 32.0, lng: 118.8 },
            郑州: { lat: 34.7, lng: 113.6 },
            长沙: { lat: 28.2, lng: 112.9 },
            沈阳: { lat: 41.8, lng: 123.4 },
            青岛: { lat: 36.1, lng: 120.3 },
            济南: { lat: 36.7, lng: 117.0 },
            哈尔滨: { lat: 45.8, lng: 126.5 },
            长春: { lat: 43.9, lng: 125.3 },
            大连: { lat: 38.9, lng: 121.6 },
            厦门: { lat: 24.5, lng: 118.1 },
            福州: { lat: 26.1, lng: 119.3 },
            昆明: { lat: 25.0, lng: 102.7 },
            太原: { lat: 37.9, lng: 112.5 },
            合肥: { lat: 31.9, lng: 117.2 },
            南昌: { lat: 28.7, lng: 115.9 },
            南宁: { lat: 22.8, lng: 108.3 },
            贵阳: { lat: 26.6, lng: 106.7 },
            兰州: { lat: 36.1, lng: 103.8 },
            乌鲁木齐: { lat: 43.8, lng: 87.6 },
            呼和浩特: { lat: 40.8, lng: 111.7 },
            银川: { lat: 38.5, lng: 106.3 },
            西宁: { lat: 36.6, lng: 101.8 },
            海口: { lat: 20.0, lng: 110.3 },
            三亚: { lat: 18.3, lng: 109.5 },
            苏州: { lat: 31.3, lng: 120.6 },
            无锡: { lat: 31.5, lng: 120.3 },
            宁波: { lat: 29.9, lng: 121.5 },
            佛山: { lat: 23.0, lng: 113.1 },
            东莞: { lat: 23.0, lng: 113.7 },
            珠海: { lat: 22.3, lng: 113.5 },
            南通: { lat: 32.0, lng: 120.9 },
            常州: { lat: 31.8, lng: 119.9 },
            烟台: { lat: 37.5, lng: 121.4 },
            泉州: { lat: 24.9, lng: 118.6 },
            石家庄: { lat: 38.0, lng: 114.5 },
            温州: { lat: 28.0, lng: 120.6 },
            金华: { lat: 29.1, lng: 119.6 },
            嘉兴: { lat: 30.7, lng: 120.8 },
            台州: { lat: 28.7, lng: 121.4 },
            绍兴: { lat: 30.0, lng: 120.6 },
            中山: { lat: 22.5, lng: 113.4 },
            惠州: { lat: 23.1, lng: 114.4 },
            江门: { lat: 22.6, lng: 113.1 },
            汕头: { lat: 23.4, lng: 116.7 },
            洛阳: { lat: 34.6, lng: 112.4 },
            徐州: { lat: 34.2, lng: 117.2 },
            潍坊: { lat: 36.8, lng: 119.1 },
            临沂: { lat: 35.1, lng: 118.3 },
            唐山: { lat: 39.6, lng: 118.2 },
            邯郸: { lat: 36.6, lng: 114.5 },
            保定: { lat: 38.9, lng: 115.5 },
            廊坊: { lat: 39.5, lng: 116.7 },
            赣州: { lat: 25.8, lng: 114.9 },
            九江: { lat: 29.7, lng: 116.0 },
            芜湖: { lat: 31.3, lng: 118.4 },
            襄阳: { lat: 32.0, lng: 112.1 },
            宜昌: { lat: 30.7, lng: 111.3 },
            岳阳: { lat: 29.4, lng: 113.1 },
            衡阳: { lat: 26.9, lng: 112.6 },
            株洲: { lat: 27.8, lng: 113.1 },
            柳州: { lat: 24.4, lng: 109.4 },
            桂林: { lat: 25.3, lng: 110.3 },
            遵义: { lat: 27.7, lng: 106.9 },
            绵阳: { lat: 31.5, lng: 104.7 },
            德阳: { lat: 31.0, lng: 104.2 },
            宜宾: { lat: 28.8, lng: 104.6 },
            泸州: { lat: 28.9, lng: 105.4 },
            宝鸡: { lat: 34.4, lng: 107.2 },
            榆林: { lat: 38.3, lng: 109.7 },
            天水: { lat: 34.6, lng: 105.7 },
            拉萨: { lat: 29.6, lng: 91.1 },
            克拉玛依: { lat: 45.6, lng: 84.9 },
            石河子: { lat: 44.3, lng: 86.0 },
            镇江: { lat: 32.2, lng: 119.4 },
            泰州: { lat: 32.4, lng: 119.9 },
            扬州: { lat: 32.3, lng: 119.4 },
            盐城: { lat: 33.3, lng: 120.1 },
            淮安: { lat: 33.5, lng: 119.0 },
            连云港: { lat: 34.5, lng: 119.1 },
            宿迁: { lat: 33.9, lng: 118.3 },
            蚌埠: { lat: 32.9, lng: 117.3 },
            淮南: { lat: 32.6, lng: 117.0 },
            马鞍山: { lat: 31.6, lng: 118.5 },
            淮北: { lat: 33.9, lng: 116.7 },
            铜陵: { lat: 30.9, lng: 117.8 },
            安庆: { lat: 30.5, lng: 117.0 },
            黄山: { lat: 29.7, lng: 118.3 },
            滁州: { lat: 32.3, lng: 118.3 },
            阜阳: { lat: 32.8, lng: 115.8 },
            宿州: { lat: 33.6, lng: 116.9 },
            六安: { lat: 31.7, lng: 116.5 },
            亳州: { lat: 33.8, lng: 115.7 },
            池州: { lat: 30.6, lng: 117.4 },
            宣城: { lat: 30.9, lng: 118.7 },
            湖州: { lat: 30.8, lng: 120.1 },
            衢州: { lat: 28.9, lng: 118.8 },
            舟山: { lat: 30.0, lng: 122.1 },
            丽水: { lat: 28.4, lng: 119.9 },
            淄博: { lat: 36.8, lng: 118.0 },
            枣庄: { lat: 34.8, lng: 117.5 },
            东营: { lat: 37.4, lng: 118.5 },
            济宁: { lat: 35.4, lng: 116.5 },
            泰安: { lat: 36.2, lng: 117.1 },
            威海: { lat: 37.5, lng: 122.1 },
            日照: { lat: 35.4, lng: 119.5 },
            德州: { lat: 37.4, lng: 116.3 },
            聊城: { lat: 36.4, lng: 115.9 },
            滨州: { lat: 37.3, lng: 118.0 },
            菏泽: { lat: 35.2, lng: 115.4 },
            开封: { lat: 34.8, lng: 114.3 },
            平顶山: { lat: 33.7, lng: 113.2 },
            安阳: { lat: 36.1, lng: 114.3 },
            鹤壁: { lat: 35.9, lng: 114.2 },
            新乡: { lat: 35.3, lng: 113.8 },
            焦作: { lat: 35.2, lng: 113.2 },
            濮阳: { lat: 35.7, lng: 115.0 },
            许昌: { lat: 34.0, lng: 113.8 },
            漯河: { lat: 33.5, lng: 114.0 },
            三门峡: { lat: 34.7, lng: 111.1 },
            南阳: { lat: 33.0, lng: 112.5 },
            商丘: { lat: 34.4, lng: 115.6 },
            信阳: { lat: 32.1, lng: 114.0 },
            周口: { lat: 33.6, lng: 114.7 },
            驻马店: { lat: 33.0, lng: 114.0 },
            黄石: { lat: 30.2, lng: 115.0 },
            十堰: { lat: 32.6, lng: 110.7 },
            鄂州: { lat: 30.3, lng: 114.8 },
            荆门: { lat: 31.0, lng: 112.2 },
            孝感: { lat: 30.9, lng: 113.9 },
            荆州: { lat: 30.3, lng: 112.2 },
            黄冈: { lat: 30.4, lng: 114.8 },
            咸宁: { lat: 29.8, lng: 114.3 },
            邵阳: { lat: 27.2, lng: 111.4 },
            常德: { lat: 29.1, lng: 111.7 },
            张家界: { lat: 29.1, lng: 110.4 },
            益阳: { lat: 28.5, lng: 112.3 },
            郴州: { lat: 25.7, lng: 113.0 },
            永州: { lat: 26.2, lng: 111.6 },
            怀化: { lat: 27.5, lng: 109.9 },
            景德镇: { lat: 29.2, lng: 117.2 },
            萍乡: { lat: 27.6, lng: 113.8 },
            新余: { lat: 27.8, lng: 114.9 },
            鹰潭: { lat: 28.2, lng: 117.0 },
            吉安: { lat: 27.1, lng: 114.9 },
            宜春: { lat: 27.8, lng: 114.4 },
            抚州: { lat: 27.9, lng: 116.3 },
            上饶: { lat: 28.4, lng: 117.9 },
            韶关: { lat: 24.8, lng: 113.6 },
            湛江: { lat: 21.3, lng: 110.3 },
            茂名: { lat: 21.6, lng: 110.9 },
            肇庆: { lat: 23.0, lng: 112.4 },
            梅州: { lat: 24.2, lng: 116.1 },
            汕尾: { lat: 22.7, lng: 115.3 },
            河源: { lat: 23.7, lng: 114.7 },
            阳江: { lat: 21.8, lng: 111.9 },
            清远: { lat: 23.6, lng: 113.0 },
            潮州: { lat: 23.6, lng: 116.6 },
            揭阳: { lat: 23.5, lng: 116.3 },
            梧州: { lat: 23.4, lng: 111.3 },
            北海: { lat: 21.4, lng: 109.1 },
            防城港: { lat: 21.7, lng: 108.3 },
            钦州: { lat: 21.9, lng: 108.6 },
            贵港: { lat: 23.1, lng: 109.6 },
            玉林: { lat: 22.6, lng: 110.1 },
            南充: { lat: 30.8, lng: 106.0 },
            达州: { lat: 31.2, lng: 107.4 },
            大理: { lat: 25.6, lng: 100.2 }
};

/* ---------- 天气查询（今日 + 预报） ---------- */
const WEATHER_FORECAST_DAYS = 7;   /* 预报天数：连今日共 7 天 */

function renderForecast(data) {
    const box = document.getElementById('forecastBox');
    if (!box) return;
    if (!data.daily) { box.innerHTML = ''; return; }
    const d = data.daily;
    const names = ['周日','周一','周二','周三','周四','周五','周六'];
    let html = '<div class="forecast-title">📅 未来 ' + (d.time.length - 1) + ' 天预报</div>';
    html += '<table class="forecast-table"><thead><tr><th>日期</th><th>星期</th><th>天气</th><th>最高/最低</th><th>降水%</th></tr></thead><tbody>';
    d.time.forEach((dateStr, i) => {
        const dt = new Date(dateStr + 'T00:00:00');
        const today = new Date();
        const isToday = dateStr === today.toISOString().slice(0, 10);
        const label = dateStr.slice(5).replace('-', '/');
        const wk = names[dt.getDay()];
        const code = d.weathercode ? d.weathercode[i] : 0;
        const hi = d.temperature_2m_max ? Math.round(d.temperature_2m_max[i]) : '--';
        const lo = d.temperature_2m_min ? Math.round(d.temperature_2m_min[i]) : '--';
        const rain = d.precipitation_probability_max ? (d.precipitation_probability_max[i] ?? '--') : '--';
        const todayCls = isToday ? ' class="f-today"' : '';
        html += '<tr' + todayCls + '><td>' + label + (isToday ? '（今）' : '') + '</td><td>' + wk + '</td><td>' +
            wname(code) + '</td><td>' + hi + '° / ' + lo + '°</td><td>' + rain + '%</td></tr>';
    });
    html += '</tbody></table>';
    box.innerHTML = html;
}

function getWeather(city) {
    const resEl = document.getElementById('weatherResult');
    const imgBox = document.getElementById('weatherImgContainer');
    const cityData = cityLatLng[city];
    if (!cityData) {
        resEl.innerHTML = '暂未支持「' + city + '」的天气查询，可在 <b>weather.js</b> 中补充城市。';
        imgBox.style.display = 'none';
        document.getElementById('forecastBox').innerHTML = '';
        return;
    }
    const { lat, lng } = cityData;
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lng +
        '&current_weather=true' +
        '&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
        '&timezone=auto&forecast_days=' + WEATHER_FORECAST_DAYS;
    fetch(url)
        .then(r => r.json())
        .then(data => {
            const wc = data.current_weather.weathercode;
            const temp = data.current_weather.temperature;
            const wind = data.current_weather.windspeed;
            const info = weatherCodeMap[wc] || { name: '未知', img: '天气/未知天气.png' };
            const img = document.getElementById('weatherImg');
            img.src = info.img; img.alt = info.name;
            imgBox.style.display = 'block';
            resEl.innerHTML = '<span class="wx-tag">' + info.name + '</span>' +
                ' 温度 <b>' + Math.round(temp) + '°C</b> · 风速 <b>' + Math.round(wind) + '</b> km/h';
            renderForecast(data);
        })
        .catch(err => {
            resEl.innerHTML = '天气查询失败，请稍后重试…';
            imgBox.style.display = 'none';
            document.getElementById('forecastBox').innerHTML = '';
            console.error(err);
        });
}

/* ---------- 事件绑定 ---------- */
let currentCity = '';
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('weatherBtn');
    const input = document.getElementById('cityInput');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const city = input.value.trim();
        if (!city) { document.getElementById('weatherResult').textContent = '请输入有效的城市名称！'; return; }
        currentCity = city;
        getWeather(city);
    });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') btn.click(); });
    /* 每 30 分钟自动刷新当前城市 */
    setInterval(() => { if (currentCity) getWeather(currentCity); }, 1800000);
});
//（注：内容由AI生成）
