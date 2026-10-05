/* =====================================================================
 * 爱⑨之家 · 主页主逻辑 (main.js)
 * 依赖：data.js（数据）、character-days.js、characters.js（角色库）
 * 功能：预加载 / 建站天数 / 数字时钟 / 菜单 / 跑马灯 / 板块渲染 /
 *       随机音乐 / 随机琪露诺图 / 每日东方角色抽取（含作品抽取+复位）/
 *       飘雪背景 / 光标雪花 / 彩带 / 回到顶部 / 统计
 * ===================================================================== */
(function () {
    "use strict";

    /* ========== 工具 ========== */
    function $(id) { return document.getElementById(id); }

    /* 简易 toast 提示 */
    function toast(msg, type) {
        let t = document.querySelector('.toast-msg');
        if (!t) {
            t = document.createElement('div');
            t.className = 'toast-msg';
            t.style.cssText = 'position:fixed;left:50%;bottom:34px;transform:translateX(-50%) translateY(30px);' +
                'z-index:1600;background:linear-gradient(90deg,#0b5fd0,#00a8e0);color:#fff;font-weight:800;' +
                'padding:12px 22px;border-radius:30px;box-shadow:inset 0 2px 0 rgba(255,255,255,.4),0 10px 24px rgba(0,60,140,.4);' +
                'opacity:0;transition:.3s;font-size:15px;max-width:88%;text-align:center;';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        if (type === 'pink') t.style.background = 'linear-gradient(90deg,#ff5fd0,#d43daa)';
        else if (type === 'purple') t.style.background = 'linear-gradient(90deg,#9b5cff,#7a3ce0)';
        t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)';
        clearTimeout(t._timer);
        t._timer = setTimeout(() => {
            t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(30px)';
        }, 2600);
    }

    /* 彩带迸发 */
    const CONF_EMOJI = ['❄','⭐','❄','✨','🎀','❄','💙','❄','🔷'];
    function burstConfetti(x, y) {
        const n = 12;
        for (let i = 0; i < n; i++) {
            const s = document.createElement('span');
            s.className = 'confetti';
            s.textContent = CONF_EMOJI[Math.floor(Math.random() * CONF_EMOJI.length)];
            s.style.left = x + 'px'; s.style.top = y + 'px';
            const ang = (Math.PI * 2 * i) / n;
            const dist = 60 + Math.random() * 70;
            s.style.setProperty('--cx', Math.cos(ang) * dist + 'px');
            s.style.setProperty('--cy', Math.sin(ang) * dist + 'px');
            s.style.setProperty('--rot', (Math.random() * 360 - 180) + 'deg');
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 1200);
        }
    }
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn3d') || e.target.closest('.menu-btn')) {
            burstConfetti(e.clientX, e.clientY);
        }
    });

    /* ========== 预加载 ========== */
    window.addEventListener('load', () => {
        const pl = $('preloader');
        if (pl) setTimeout(() => pl.classList.add('hide'), 350);
    });

    /* ========== 建站天数 ========== */
    const BUILD_DATE = new Date('2025/7/14');
    function updateBuildDay() {
        const now = new Date();
        const diff = Math.max(1, Math.ceil((now - BUILD_DATE) / (1000 * 60 * 60 * 24)));
        const el = $('buildDay');
        if (el) el.textContent = '建站 ' + diff + ' 天';
    }
    updateBuildDay();
    setInterval(updateBuildDay, 24 * 60 * 60 * 1000);

    /* ========== 数字时钟 ========== */
    function tickClock() {
        const el = $('digClock'), de = $('digDate');
        if (!el) return;
        const n = new Date();
        const p = (x) => String(x).padStart(2, '0');
        el.textContent = p(n.getHours()) + ':' + p(n.getMinutes()) + ':' + p(n.getSeconds());
        if (de) {
            const wk = ['日','一','二','三','四','五','六'][n.getDay()];
            de.textContent = n.getFullYear() + '.' + p(n.getMonth() + 1) + '.' + p(n.getDate()) + ' 星期' + wk;
        }
    }
    tickClock(); setInterval(tickClock, 1000);

    /* ========== 菜单 ========== */
    const menuModal = $('menuModal'), menuBtn = $('menuBtn'), closeBtn = $('closeBtn');
    if (menuModal && menuBtn) {
        menuBtn.addEventListener('click', () => menuModal.classList.add('active'));
        closeBtn.addEventListener('click', () => menuModal.classList.remove('active'));
        menuModal.addEventListener('click', (e) => { if (e.target === menuModal) menuModal.classList.remove('active'); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') menuModal.classList.remove('active'); });
    }

    /* ========== 渲染：导航 / 板块 / 日志 / 跑马灯 ========== */
    function renderNav() {
        const ul = document.querySelector('.menu-list'); if (!ul) return;
        ul.innerHTML = NAV_LINKS.map(l =>
            '<li class="menu-item"><a class="menu-link" href="' + l.url + '"' +
            (/^https?:/i.test(l.url) ? ' target="_blank"' : '') + '>' + l.label + '</a></li>').join('');
    }
    function renderBoxes() {
        const box = document.querySelector('.box-container'); if (!box) return;
        box.innerHTML = BOXES.map(b =>
            '<a class="box" href="' + b.url + '"' + (/^https?:/i.test(b.url) ? ' target="_blank"' : '') + '>' +
            '<span class="shine"></span><img class="box-img" src="' + b.img + '" alt="' + b.title + '">' +
            '<div class="box-title">' + b.title + '<small>' + (b.sub || '') + '</small></div></a>').join('');
    }
    function renderLog() {
        const box = document.querySelector('.update-log'); if (!box) return;
        box.innerHTML = UPDATE_LOG.map(l =>
            '<div class="log-item"><span class="log-date">' + l.date + '</span> ' + l.text + '</div>').join('');
    }
    function renderTicker() {
        const track = document.querySelector('.ticker-track'); if (!track) return;
        const inner = TICKER.map(t => '<span>' + t + '</span>').join('');
        track.innerHTML = inner + inner;  /* 复制一份实现无缝滚动 */
    }

    /* ========== 统计 ========== */
    function renderStats() {
        const box = document.querySelector('.stats'); if (!box) return;
        const chars = Object.keys(window.touhouRoleLib || {}).length;
        const data = [
            { n: updateBuildDayNum(), l: '建站天数' },
            { n: chars, l: '收录角色' },
            { n: (window.touhouWorkLib || []).length, l: '作品组合' },
            { n: musicLib.length, l: '原曲曲目' },
            { n: Object.keys(characterDays || {}).length, l: '角色日' }
        ];
        box.innerHTML = data.map(s => '<div class="stat-chip"><div class="n">' + s.n + '</div><div class="l">' + s.l + '</div></div>').join('');
    }
    function updateBuildDayNum() {
        return Math.max(1, Math.ceil((new Date() - BUILD_DATE) / (1000 * 60 * 60 * 24)));
    }

    /* ========== 随机东方原曲 ========== */
    function bindMusic() {
        const btn = $('randomMusicBtn'); if (!btn) return;
        btn.addEventListener('click', () => {
            const m = musicLib[Math.floor(Math.random() * musicLib.length)];
            $('musicName').textContent = m.name;
            const audio = $('musicPlayer');
            audio.src = m.url; audio.load();
            toast('♪ 随机到了：' + m.name, 'pink');
        });
    }

    /* ========== 随机琪露诺图 ========== */
    function bindKirino() {
        const btn = document.querySelector('[data-kirino]'); if (!btn) return;
        const img = $('kirinoImg');
        img.src = kirinoImgLib[Math.floor(Math.random() * kirinoImgLib.length)];
        btn.addEventListener('click', () => {
            img.style.opacity = '.2';
            setTimeout(() => {
                img.src = kirinoImgLib[Math.floor(Math.random() * kirinoImgLib.length)];
                img.style.opacity = '1';
            }, 180);
        });
    }

    /* ========== 每日东方角色（抽取+作品+复位） ========== */
    const STORAGE_KEY = {
        isDrawn: 'touhou_is_drawn', drawDate: 'touhou_draw_date', currentRole: 'touhou_current_role',
        isWorkDrawn: 'touhou_is_work_drawn', currentWork: 'touhou_current_work'
    };
    function todayStr() {
        const n = new Date();
        return n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0');
    }
    function initRoleDraw() {
        const today = todayStr();
        if (localStorage.getItem(STORAGE_KEY.drawDate) !== today) {
            localStorage.removeItem(STORAGE_KEY.isDrawn);
            localStorage.removeItem(STORAGE_KEY.currentRole);
            localStorage.removeItem(STORAGE_KEY.isWorkDrawn);
            localStorage.removeItem(STORAGE_KEY.currentWork);
            localStorage.setItem(STORAGE_KEY.drawDate, today);
            return;
        }
        const role = localStorage.getItem(STORAGE_KEY.currentRole);
        if (localStorage.getItem(STORAGE_KEY.isDrawn) === 'true' && role && touhouRoleLib[role]) {
            $('drawRoleBtn').style.display = 'none';
            $('resetPwdBox').style.display = 'block';
            $('roleResult').style.display = 'block';
            renderRoleInfo(role);
            if (localStorage.getItem(STORAGE_KEY.isWorkDrawn) === 'true' && localStorage.getItem(STORAGE_KEY.currentWork)) {
                $('drawWorkBtn').style.display = 'none';
                $('workResult').style.display = 'block';
                $('workResult').textContent = '今日抽中的东方作品是：' + localStorage.getItem(STORAGE_KEY.currentWork);
            } else {
                $('drawWorkBtn').style.display = 'block';
            }
        }
    }
    function renderRoleInfo(name) {
        const r = touhouRoleLib[name]; if (!r) return;
        $('roleName').textContent = name;
        $('roleFirstAppear').textContent = r.firstAppear;
        $('roleMusic').textContent = r.music;
        $('roleWiki').href = r.wiki;
        $('roleSign').href = (r.sign && r.sign !== '#') ? r.sign : '#';
        $('roleQImg').src = r.qImg;
        const card = r.cards[Math.floor(Math.random() * r.cards.length)];
        $('roleCard').textContent = card.name;
        $('cardPos').textContent = card.pos;
        localStorage.setItem(STORAGE_KEY.currentRole, name);
    }
    function bindDraw() {
        const drawRoleBtn = $('drawRoleBtn');
        const drawWorkBtn = $('drawWorkBtn');
        const resetBtn = $('confirmResetBtn');
        if (drawRoleBtn) drawRoleBtn.addEventListener('click', () => {
            const names = Object.keys(touhouRoleLib);
            const name = names[Math.floor(Math.random() * names.length)];
            renderRoleInfo(name);
            localStorage.setItem(STORAGE_KEY.isDrawn, 'true');
            drawRoleBtn.style.display = 'none';
            $('resetPwdBox').style.display = 'block';
            $('roleResult').style.display = 'block';
            drawWorkBtn.style.display = 'block';
            toast('❄ 今日东方角色抽取成功！可继续抽取作品～');
            burstConfetti(window.innerWidth / 2, 300);
        });
        if (drawWorkBtn) drawWorkBtn.addEventListener('click', () => {
            const work = touhouWorkLib[Math.floor(Math.random() * touhouWorkLib.length)];
            localStorage.setItem(STORAGE_KEY.isWorkDrawn, 'true');
            localStorage.setItem(STORAGE_KEY.currentWork, work);
            drawWorkBtn.style.display = 'none';
            $('workResult').style.display = 'block';
            $('workResult').textContent = '今日抽中的东方作品是：' + work;
            toast('⛩ 今日东方作品抽取成功！快去挑战吧～', 'purple');
        });
        if (resetBtn) resetBtn.addEventListener('click', resetDrawState);
        const pwd = $('resetPwd');
        if (pwd) pwd.addEventListener('keydown', (e) => { if (e.key === 'Enter') resetDrawState(); });
    }
    function resetDrawState() {
        const pwd = $('resetPwd');
        if (pwd.value.trim() !== 'cirno9') { $('pwdTip').style.display = 'block'; return; }
        $('pwdTip').style.display = 'none';
        pwd.value = '';
        localStorage.removeItem(STORAGE_KEY.isDrawn);
        localStorage.removeItem(STORAGE_KEY.currentRole);
        localStorage.removeItem(STORAGE_KEY.isWorkDrawn);
        localStorage.removeItem(STORAGE_KEY.currentWork);
        $('drawRoleBtn').style.display = 'block';
        $('resetPwdBox').style.display = 'none';
        $('roleResult').style.display = 'none';
        $('workResult').style.display = 'none';
        toast('复位成功！可重新抽取今日东方角色～');
    }

    /* ========== 飘雪背景 ========== */
    function initSnow() {
        const field = $('snowfield'); if (!field) return;
        const COUNT = 40;
        for (let i = 0; i < COUNT; i++) {
            const s = document.createElement('span');
            s.className = 'snow-flake';
            s.textContent = ['❄', '❅', '❆', '✦'][i % 4];
            const size = 10 + Math.random() * 16;
            s.style.left = Math.random() * 100 + 'vw';
            s.style.fontSize = size + 'px';
            s.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
            s.style.animationDuration = (7 + Math.random() * 9) + 's';
            s.style.animationDelay = (-Math.random() * 16) + 's';
            field.appendChild(s);
        }
    }

    /* ========== 光标雪花拖尾 ========== */
    function initCursorSnow() {
        const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;
        let last = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - last < 70) return; last = now;
            const s = document.createElement('span');
            s.className = 'cursor-snow';
            s.textContent = '❄';
            s.style.left = e.clientX + 'px';
            s.style.top = e.clientY + 'px';
            s.style.fontSize = (8 + Math.random() * 10) + 'px';
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 700);
        });
    }

    /* ========== 回到顶部 ========== */
    function initToTop() {
        const btn = $('toTop'); if (!btn) return;
        window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 600), { passive: true });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ========== 启动 ========== */
    function init() {
        renderNav(); renderBoxes(); renderLog(); renderTicker(); renderStats();
        bindMusic(); bindKirino(); bindDraw(); initRoleDraw();
        initSnow(); initCursorSnow(); initToTop();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else init();
})();
//（注：内容由AI生成）
