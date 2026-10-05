/* =====================================================================
 * 爱⑨之家 · 可链接轮播图 (carousel.js)
 * 依赖：data.js 中的 CAROUSEL_SLIDES / CAROUSEL_INTERVAL
 * 特性：整张轮播图可点击跳转、左右箭头、圆点、自动播放进度条
 * ===================================================================== */
(function () {
    "use strict";
    const slides = window.CAROUSEL_SLIDES || [];
    if (!slides.length) return;

    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    const viewport = carousel.querySelector('.carousel-viewport');
    const dotsBox = carousel.querySelector('.caro-dots');
    const progress = carousel.querySelector('.caro-progress');
    let index = 0, timer = null, progTimer = null;

    /* ---- 渲染轮播条目（含链接与标题）---- */
    function build() {
        viewport.innerHTML = '';
        slides.forEach((s, i) => {
            const a = document.createElement('a');
            a.className = 'carousel-item' + (i === 0 ? ' active' : '');
            a.href = s.link || '#';
            a.target = (s.link || '').indexOf('http') === 0 ? '_blank' : '_self';
            const img = document.createElement('img');
            img.src = s.img; img.alt = s.title || '';
            const cap = document.createElement('div');
            cap.className = 'carousel-caption';
            cap.innerHTML = '<span>' + (s.title || '') + '</span>' +
                (s.sub ? '<small> · ' + s.sub + '</small>' : '');
            a.appendChild(img); a.appendChild(cap);
            viewport.appendChild(a);
        });
        dotsBox.innerHTML = slides.map((_, i) =>
            '<span class="dot' + (i === 0 ? ' active' : '') + '" data-i="' + i + '"></span>'
        ).join('');
    }

    /* ---- 切换 ---- */
    function show(i) {
        index = (i + slides.length) % slides.length;
        const items = viewport.querySelectorAll('.carousel-item');
        const dots = dotsBox.querySelectorAll('.dot');
        items.forEach((it, k) => it.classList.toggle('active', k === index));
        dots.forEach((d, k) => d.classList.toggle('active', k === index));
        restart();
    }
    function next() { show(index + 1); }
    function prev() { show(index - 1); }

    /* ---- 自动播放 + 进度条 ---- */
    function restart() {
        clearInterval(timer); clearInterval(progTimer);
        progress.style.width = '0%';
        const step = 100 / (CAROUSEL_INTERVAL / 100);
        progTimer = setInterval(() => {
            const w = parseFloat(progress.style.width || 0) + step;
            progress.style.width = Math.min(w, 100) + '%';
        }, 100);
        timer = setInterval(next, CAROUSEL_INTERVAL);
    }

    /* ---- 事件绑定 ---- */
    carousel.querySelector('.caro-arrow.prev').addEventListener('click', (e) => { e.preventDefault(); prev(); });
    carousel.querySelector('.caro-arrow.next').addEventListener('click', (e) => { e.preventDefault(); next(); });
    dotsBox.addEventListener('click', (e) => {
        const d = e.target.closest('.dot'); if (!d) return;
        show(parseInt(d.dataset.i, 10));
    });

    build();
    restart();
})();
//（注：内容由AI生成）
