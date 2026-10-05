/* =====================================================================
 * 爱⑨之家 · 月历 (calendar.js)
 * 特性：
 *   1. 按月显示，周一起始（与参考日历一致）
 *   2. 标注全部东方角色日（来自 character-days.js）
 *   3. 标注站点纪念日（来自 data.js 的 MEMORIAL_DAYS）
 *   4. 附带常见节日/节气标注（农历/节气为近似，仅供参考）
 *   5. 上个月 / 今天 / 下个月 切换
 * ===================================================================== */
(function () {
    "use strict";

    /* 常见节日 & 2026 节气近似表：{ "M-D": "名称" }（农历节日按 2026 近似标注） */
    const FESTIVALS = {
        "1-1":  "元旦",
        "2-14": "情人节",
        "3-8":  "妇女节",
        "4-1":  "愚人节",
        "5-1":  "劳动节",
        "5-4":  "青年节",
        "6-1":  "儿童节",
        "9-10": "教师节",
        "10-1": "国庆节",
        "10-8": "寒露",
        "10-23":"霜降",
        "10-31":"万圣夜",
        "11-1": "万圣节",
        "11-7": "立冬",
        "11-11":"光棍节",
        "12-24":"平安夜",
        "12-25":"圣诞节",
        "2-17": "春节(约)",
        "4-5":  "清明(约)",
        "6-19": "端午(约)",
        "9-25": "中秋(约)",
        "10-18":"重阳节(约)",
        "12-22":"冬至"
    };

    const box = document.getElementById('calendarBox');
    if (!box) return;

    let viewY, viewM; /* 正在查看的年 / 月（month 1-12） */

    const DOW = ['一', '二', '三', '四', '五', '六', '日'];
    const charDays = window.characterDays || {};

    /* 今日是否为某月某日 */
    function isToday(y, m, d) {
        const n = new Date();
        return n.getFullYear() === y && (n.getMonth() + 1) === m && n.getDate() === d;
    }

    function roleNames(m, d) { return (charDays[m + '-' + d]) || []; }
    function memNames(m, d)  { return MEMORIAL_DAYS[m + '-' + d] ? [MEMORIAL_DAYS[m + '-' + d]] : []; }
    function festName(m, d)  { return FESTIVALS[m + '-' + d] || ''; }

    function render() {
        const now = new Date();
        const y = viewY, m = viewM;
        const today = new Date();
        const first = new Date(y, m - 1, 1);
        const startOffset = (first.getDay() + 6) % 7;   /* 周一 = 0 */
        const daysInMonth = new Date(y, m, 0).getDate();

        /* 标题 */
        box.querySelector('.cal-title').textContent = y + '年' + m + '月';

        /* 星期头 */
        const dowRow = box.querySelector('.cal-dow-row');
        dowRow.innerHTML = DOW.map((d, i) =>
            '<div class="cal-dow' + (i >= 5 ? ' wkend' : '') + '">' + d + '</div>').join('');

        /* 日期格 */
        const grid = box.querySelector('.cal-grid');
        grid.innerHTML = '';
        for (let i = 0; i < startOffset; i++) grid.appendChild(emptyCell());
        for (let d = 1; d <= daysInMonth; d++) grid.appendChild(dayCell(y, m, d));

        /* 今日信息 */
        updateTodayInfo(today);
    }

    function emptyCell() {
        const c = document.createElement('div');
        c.className = 'cal-cell empty'; c.innerHTML = '&nbsp;'; return c;
    }

    function dayCell(y, m, d) {
        const c = document.createElement('div');
        const cls = ['cal-cell'];
        if (isToday(y, m, d)) cls.push('today');
        const roles = roleNames(m, d);
        const mems = memNames(m, d);
        const fest = festName(m, d);
        if (roles.length) cls.push('has-role');
        if (mems.length) cls.push('has-mem');
        c.className = cls.join(' ');
        let html = '<div class="cal-day">' + d + '</div>';
        if (fest) html += '<div class="cal-mark fest">' + fest + '</div>';
        if (mems.length) {
            html += mems.slice(0, 2).map(mm =>
                '<div class="cal-mark mem"><i class="cal-dot mem"></i>' + mm.name + '</div>').join('');
        }
        if (roles.length) {
            /* 每个角色显示前若干字，最多显示 3 条 */
            const shown = roles.slice(0, 3);
            html += shown.map(n =>
                '<div class="cal-mark role"><i class="cal-dot role"></i>' + n.slice(0, 8) +
                (n.length > 8 ? '…' : '') + '</div>').join('');
            if (roles.length > 3) html += '<div class="cal-mark role">+'+ (roles.length - 3) +'位…</div>';
        }
        c.innerHTML = html;
        return c;
    }

    function updateTodayInfo(today) {
        const el = box.querySelector('.cal-today-info');
        const y = today.getFullYear(), m = today.getMonth() + 1, d = today.getDate();
        const roles = roleNames(m, d);
        const mems = memNames(m, d);
        const fest = festName(m, d);
        let parts = ['今天是 <b>' + y + '年' + m + '月' + d + '日</b>'];
        if (fest) parts.push('· ' + fest);
        if (mems.length) parts.push('· ' + mems.map(x => x.name + '(' + x.desc + ')').join(' '));
        if (roles.length) parts.push('· 角色日：' + roles.join('、'));
        el.innerHTML = parts.join(' ');
    }

    /* 导航 */
    box.querySelector('.cal-nav .prev').addEventListener('click', () => {
        viewM--; if (viewM < 1) { viewM = 12; viewY--; } render();
    });
    box.querySelector('.cal-nav .next').addEventListener('click', () => {
        viewM++; if (viewM > 12) { viewM = 1; viewY++; } render();
    });
    box.querySelector('.cal-nav .today').addEventListener('click', () => {
        const n = new Date(); viewY = n.getFullYear(); viewM = n.getMonth() + 1; render();
    });

    /* 初始化 */
    const n = new Date();
    viewY = n.getFullYear(); viewM = n.getMonth() + 1;
    render();
})();
//（注：内容由AI生成）
