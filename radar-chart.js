document.addEventListener('DOMContentLoaded', function() {
    // 画布元素获取
    const mainCanvas = document.getElementById('radar-canvas');
    const mainCtx = mainCanvas.getContext('2d');
    const pipCanvas = document.getElementById('pip-radar-canvas');
    const pipCtx = pipCanvas.getContext('2d');
    const pipContainer = document.getElementById('pip-container');
    const createPipBtn = document.getElementById('create-pip');
    const pipCloseBtn = document.getElementById('pip-close');
    const pipZoomInBtn = document.getElementById('pip-zoom-in');
    const pipZoomOutBtn = document.getElementById('pip-zoom-out');
    // 初始化数据 - 移除本地存储，使用默认值
    let levels = ['1', '2', '3', '4', '5'];
    let params = [
        { name: 'A', level: 0 },
        { name: 'B', level: 0 },
        { name: 'C', level: 0 }
    ];
    // 画中画配置
    const pipConfig = {
        isDragging: false,
        startX: 0,
        startY: 0,
        currentSize: 200,
        minSize: 150,
        maxSize: 400,
        sizeStep: 30
    };
    // ========== 画中画功能 ==========
    createPipBtn.addEventListener('click', function() {
        pipContainer.classList.remove('hidden');
        resizeCanvas();
    });
    pipCloseBtn.addEventListener('click', function() {
        pipContainer.classList.add('hidden');
    });
    pipContainer.addEventListener('mousedown', function(e) {
        if (e.target === pipContainer || e.target === pipCanvas) {
            pipConfig.isDragging = true;
            pipConfig.startX = e.clientX - pipContainer.offsetLeft;
            pipConfig.startY = e.clientY - pipContainer.offsetTop;
            pipContainer.style.zIndex = 1000;
        }
    });
    document.addEventListener('mousemove', function(e) {
        if (!pipConfig.isDragging) return;
        const newLeft = e.clientX - pipConfig.startX;
        const newTop = e.clientY - pipConfig.startY;
        const maxLeft = window.innerWidth - pipContainer.offsetWidth;
        const maxTop = window.innerHeight - pipContainer.offsetHeight;
        const finalLeft = Math.max(0, Math.min(newLeft, maxLeft));
        const finalTop = Math.max(0, Math.min(newTop, maxTop));
        pipContainer.style.left = `${finalLeft}px`;
        pipContainer.style.top = `${finalTop}px`;
        pipContainer.style.right = 'auto';
        pipContainer.style.bottom = 'auto';
    });
    document.addEventListener('mouseup', function() {
        if (pipConfig.isDragging) {
            pipConfig.isDragging = false;
            pipContainer.style.zIndex = 999;
        }
    });
    pipZoomInBtn.addEventListener('click', function() {
        if (pipConfig.currentSize < pipConfig.maxSize) {
            pipConfig.currentSize += pipConfig.sizeStep;
            updatePipSize();
        }
    });
    pipZoomOutBtn.addEventListener('click', function() {
        if (pipConfig.currentSize > pipConfig.minSize) {
            pipConfig.currentSize -= pipConfig.sizeStep;
            updatePipSize();
        }
    });
    function updatePipSize() {
        pipContainer.style.width = `${pipConfig.currentSize}px`;
        pipContainer.style.height = `${pipConfig.currentSize}px`;
        const canvasContainer = pipContainer.querySelector('.pip-canvas-container');
        canvasContainer.style.height = `calc(100% - 30px)`;
        resizeCanvas();
    }
    // ========== 画布尺寸适配 ==========
    function resizeCanvas() {
        const mainContainer = document.getElementById('radar-container');
        const mainSize = Math.min(mainContainer.clientWidth, mainContainer.clientHeight);
        mainCanvas.width = mainSize;
        mainCanvas.height = mainSize;
        if (!pipContainer.classList.contains('hidden')) {
            pipCanvas.width = pipCanvas.offsetWidth;
            pipCanvas.height = pipCanvas.offsetHeight;
        }
        drawRadar(mainCtx, mainCanvas.width, mainCanvas.height);
        if (!pipContainer.classList.contains('hidden')) {
            drawRadar(pipCtx, pipCanvas.width, pipCanvas.height);
        }
    }
    // ========== 核心优化：雷达图绘制（等级标号+参数名位置） ==========
    function drawRadar(ctx, canvasW, canvasH) {
        if (!ctx) return;
        const centerX = canvasW / 2;
        const centerY = canvasH / 2;
        const maxRadius = Math.min(centerX, centerY) * 0.65;
        const numSides = params.length;
        const numLevels = levels.length;
        const baseTitleSize = parseInt(document.getElementById('title-size').value);
        // 字体缩放比例：基于画布尺寸
        const fontScale = Math.min(canvasW, canvasH) / 500;
        ctx.clearRect(0, 0, canvasW, canvasH);
        // 1. 绘制背景网格
        ctx.strokeStyle = document.getElementById('line-color-text').value;
        ctx.lineWidth = parseInt(document.getElementById('line-width').value);
        ctx.setLineDash(document.getElementById('line-style').value === 'dashed' ? [5, 5] : []);
        for (let i = 1; i <= numLevels; i++) {
            const radius = (maxRadius / numLevels) * i;
            ctx.beginPath();
            for (let j = 0; j < numSides; j++) {
                const angle = (Math.PI * 2 / numSides) * j - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }
        ctx.setLineDash([5, 5]);
        for (let i = 0; i < numSides; i++) {
            const angle = (Math.PI * 2 / numSides) * i - Math.PI / 2;
            const x = centerX + maxRadius * Math.cos(angle);
            const y = centerY + maxRadius * Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        ctx.setLineDash([]);
        // 2. 等级标号优化：仅不绘制1级（核心需求）
        // 规则：1级（圆心）不显示，2-5级均显示（2级对应圆心外第1圈）
        ctx.fillStyle = document.getElementById('title-color').value;
        ctx.font = `bold ${baseTitleSize * 0.6 * fontScale}px ${document.getElementById('title-font').value}`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        for (let i = 1; i <= numLevels; i++) {
            // 仅跳过1级（i=1，对应等级值1）
            if (i === 1) continue;
            // 等级标号位置：i级对应第i圈（2级→第2圈=圆心外第1圈）
            const radius = (maxRadius / numLevels) * (i - 1);
            const x = centerX + radius * Math.cos(-Math.PI / 2) + 10; // 正上方右侧偏移
            const y = centerY + radius * Math.sin(-Math.PI / 2);
            ctx.fillText(levels[i-1], x, y);
        }
        // 3. 参数名位置优化：
        // - 正上方参数（角度-90°）：居中对齐，向上偏移
        // - 正下方参数（角度90°）：居中对齐，向下偏移
        // - 左侧参数：右对齐，向左偏移（防遮挡）
        // - 右侧参数：左对齐，向右偏移
        ctx.font = `bold ${baseTitleSize * 0.8 * fontScale}px ${document.getElementById('title-font').value}`;
        ctx.textBaseline = 'middle';
        for (let i = 0; i < numSides; i++) {
            const angle = (Math.PI * 2 / numSides) * i - Math.PI / 2;
            const angleDeg = angle * 180 / Math.PI;
            const radius = maxRadius * 1.05;
            let x = centerX + radius * Math.cos(angle);
            let y = centerY + radius * Math.sin(angle);
            if (angleDeg === -90 || angleDeg === 270) {
                // 正上方参数：居中对齐，向上偏移
                ctx.textAlign = 'center';
                ctx.fillText(params[i].name, centerX, y - 10);
            } else if (angleDeg === 90) {
                // 正下方参数：居中对齐，向下偏移
                ctx.textAlign = 'center';
                ctx.fillText(params[i].name, centerX, y + 10);
            } else if (angleDeg > 90 && angleDeg < 270) {
                // 左侧参数：右对齐，向左偏移
                ctx.textAlign = 'right';
                ctx.fillText(params[i].name, x - 8, y);
            } else {
                // 右侧参数：左对齐，向右偏移
                ctx.textAlign = 'left';
                ctx.fillText(params[i].name, x + 8, y);
            }
        }
        // 4. 数据多边形+点（修复：统一半径计算，移除-1）
        const fillColor = document.getElementById('fill-color-text').value;
        const opacity = parseInt(document.getElementById('fill-opacity').value) / 100;
        const r = parseInt(fillColor.slice(1, 3), 16) || 0;
        const g = parseInt(fillColor.slice(3, 5), 16) || 0;
        const b = parseInt(fillColor.slice(5, 7), 16) || 0;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.strokeStyle = fillColor;
        ctx.lineWidth = parseInt(document.getElementById('line-width').value);
        const hasNonZeroLevel = params.some(p => p.level > 0);
        if (hasNonZeroLevel) {
            ctx.beginPath();
            for (let i = 0; i < numSides; i++) {
                const angle = (Math.PI * 2 / numSides) * i - Math.PI / 2;
                // 核心修复：和标记点半径计算保持一致，删除-1
                const radius = params[i].level === 0 ? 0 : (maxRadius / numLevels) * params[i].level;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        // 5. 蓝色标记点（新增：开关控制显示/隐藏）
        const showMarker = document.getElementById('show-marker').checked;
        if (showMarker) {
            ctx.fillStyle = '#3b82f6';
            for (let i = 0; i < numSides; i++) {
                const angle = (Math.PI * 2 / numSides) * i - Math.PI / 2;
                const radius = params[i].level === 0 ? 0 : (maxRadius / numLevels) * params[i].level;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                ctx.beginPath();
                ctx.arc(x, y, 5 * fontScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        // 6. 标题（缩放适配）
        ctx.fillStyle = document.getElementById('title-color').value;
        ctx.font = `bold ${baseTitleSize * fontScale}px ${document.getElementById('title-font').value}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(document.getElementById('chart-title').value, centerX, canvasH * 0.02);
        ctx.font = `bold ${baseTitleSize * 0.7 * fontScale}px ${document.getElementById('title-font').value}`;
        ctx.fillText(document.getElementById('chart-subtitle').value, centerX, canvasH * 0.02 + baseTitleSize * fontScale + 15);
    }
    // ========== JOJO模板填充 ==========
    function fillJojoTemplate() {
        const jojoParams = ['破壊力', 'スピード', '射程距离', '持続力', '精密動作性', '成長性'];
        const paramContainer = document.getElementById('params-container');
        paramContainer.innerHTML = '';
        params = [];
        jojoParams.forEach(name => {
            params.push({ name: name, level: 0 });
            let optionsHtml = '';
            levels.forEach((level, index) => {
                optionsHtml += `<option value="${index}">${level}</option>`;
            });
            const paramItem = document.createElement('div');
            paramItem.className = 'param-item flex items-center';
            paramItem.innerHTML = `
                <input type="text" value="${name}" class="param-name flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                <select class="param-level ml-2 w-20 border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                    ${optionsHtml}
                </select>
                <button class="delete-param ml-2 text-red-500 hover:text-red-700 p-2">
                    <i class="fa fa-trash"></i>
                </button>
            `;
            paramContainer.appendChild(paramItem);
            paramItem.querySelector('.param-name').addEventListener('input', function() {
                const idx = Array.from(document.querySelectorAll('.param-item')).indexOf(paramItem);
                params[idx].name = this.value;
                resizeCanvas();
            });
            paramItem.querySelector('.param-level').addEventListener('change', function() {
                const idx = Array.from(document.querySelectorAll('.param-item')).indexOf(paramItem);
                params[idx].level = parseInt(this.value);
                resizeCanvas();
            });
            paramItem.querySelector('.delete-param').addEventListener('click', function() {
                if (params.length > 3) {
                    const idx = Array.from(document.querySelectorAll('.param-item')).indexOf(paramItem);
                    params.splice(idx, 1);
                    paramItem.remove();
                    updateDeleteButtons();
                    resizeCanvas();
                }
            });
        });
        updateDeleteButtons();
        resizeCanvas();
    }
    // ========== 等级删除联动参数等级 ==========
    function updateParamSelects(removedIndex = null) {
        const paramSelects = document.querySelectorAll('.param-level');
        paramSelects.forEach(select => {
            const currentValue = parseInt(select.value);
            select.innerHTML = '';
            levels.forEach((level, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = level;
                select.appendChild(option);
            });
            if (removedIndex !== null) {
                if (currentValue === removedIndex) {
                    select.value = 0;
                    const paramIndex = Array.from(paramSelects).indexOf(select);
                    params[paramIndex].level = 0;
                } else if (currentValue > removedIndex) {
                    select.value = currentValue - 1;
                    const paramIndex = Array.from(paramSelects).indexOf(select);
                    params[paramIndex].level = currentValue - 1;
                } else {
                    select.value = currentValue;
                }
            } else {
                select.value = currentValue < levels.length ? currentValue : levels.length - 1;
            }
        });
    }
    function updateDeleteButtons() {
        document.querySelectorAll('.delete-level').forEach(btn => {
            btn.disabled = levels.length <= 3;
        });
        document.querySelectorAll('.delete-param').forEach(btn => {
            btn.disabled = params.length <= 3;
        });
    }
    // ========== 颜色同步 ==========
    function updateLineColor() {
        const r = parseInt(document.getElementById('line-color-r').value);
        const g = parseInt(document.getElementById('line-color-g').value);
        const b = parseInt(document.getElementById('line-color-b').value);
        const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        document.getElementById('line-color-text').value = hex;
        document.getElementById('fill-color-r').value = r;
        document.getElementById('fill-color-g').value = g;
        document.getElementById('fill-color-b').value = b;
        document.getElementById('fill-color-text').value = hex;
        resizeCanvas();
    }
    function updateFillColor() {
        const r = parseInt(document.getElementById('fill-color-r').value);
        const g = parseInt(document.getElementById('fill-color-g').value);
        const b = parseInt(document.getElementById('fill-color-b').value);
        const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        document.getElementById('fill-color-text').value = hex;
        resizeCanvas();
    }
    // ========== 事件监听 ==========
    window.addEventListener('resize', resizeCanvas);
    // 线条颜色
    document.getElementById('line-color-r').addEventListener('input', updateLineColor);
    document.getElementById('line-color-g').addEventListener('input', updateLineColor);
    document.getElementById('line-color-b').addEventListener('input', updateLineColor);
    document.getElementById('line-color-text').addEventListener('input', function() {
        const r = parseInt(this.value.slice(1, 3), 16) || 0;
        const g = parseInt(this.value.slice(3, 5), 16) || 0;
        const b = parseInt(this.value.slice(5, 7), 16) || 0;
        document.getElementById('line-color-r').value = r;
        document.getElementById('line-color-g').value = g;
        document.getElementById('line-color-b').value = b;
        document.getElementById('fill-color-r').value = r;
        document.getElementById('fill-color-g').value = g;
        document.getElementById('fill-color-b').value = b;
        document.getElementById('fill-color-text').value = this.value;
        resizeCanvas();
    });
    // 填充颜色
    document.getElementById('fill-color-r').addEventListener('input', updateFillColor);
    document.getElementById('fill-color-g').addEventListener('input', updateFillColor);
    document.getElementById('fill-color-b').addEventListener('input', updateFillColor);
    document.getElementById('fill-color-text').addEventListener('input', function() {
        const r = parseInt(this.value.slice(1, 3), 16) || 0;
        const g = parseInt(this.value.slice(3, 5), 16) || 0;
        const b = parseInt(this.value.slice(5, 7), 16) || 0;
        document.getElementById('fill-color-r').value = r;
        document.getElementById('fill-color-g').value = g;
        document.getElementById('fill-color-b').value = b;
        resizeCanvas();
    });
    // 新增：标记点显示开关监听
    document.getElementById('show-marker').addEventListener('change', resizeCanvas);
    // 等级增删改
    document.getElementById('add-level').addEventListener('click', function() {
        const newLevel = (levels.length + 1).toString();
        levels.push(newLevel);
        const levelItem = document.createElement('div');
        levelItem.className = 'level-item flex items-center';
        levelItem.innerHTML = `
            <input type="text" value="${newLevel}" class="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
            <button class="delete-level ml-2 text-red-500 hover:text-red-700 p-2">
                <i class="fa fa-trash"></i>
            </button>
        `;
        document.getElementById('levels-container').appendChild(levelItem);
        levelItem.querySelector('input').addEventListener('input', function() {
            const idx = Array.from(document.querySelectorAll('.level-item')).indexOf(levelItem);
            levels[idx] = this.value;
            updateParamSelects();
            resizeCanvas();
        });
        levelItem.querySelector('.delete-level').addEventListener('click', function() {
            if (levels.length > 3) {
                const removedIndex = Array.from(document.querySelectorAll('.level-item')).indexOf(levelItem);
                levels.splice(removedIndex, 1);
                levelItem.remove();
                updateParamSelects(removedIndex);
                updateDeleteButtons();
                resizeCanvas();
            }
        });
        updateDeleteButtons();
        updateParamSelects();
        resizeCanvas();
    });
    document.querySelectorAll('.level-item input').forEach((input, index) => {
        input.addEventListener('input', function() {
            levels[index] = this.value;
            updateParamSelects();
            resizeCanvas();
        });
    });
    document.querySelectorAll('.delete-level').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            if (levels.length > 3) {
                const removedIndex = index;
                levels.splice(removedIndex, 1);
                this.parentElement.remove();
                updateParamSelects(removedIndex);
                updateDeleteButtons();
                resizeCanvas();
            }
        });
    });
    // 参数增删改
    document.getElementById('add-param').addEventListener('click', function() {
        if (params.length >= 12) return;
        const paramLetters = 'ABCDEFGHIJKL';
        const newParamName = paramLetters[params.length];
        params.push({ name: newParamName, level: 0 });
        let optionsHtml = '';
        levels.forEach((level, index) => {
            optionsHtml += `<option value="${index}">${level}</option>`;
        });
        const paramItem = document.createElement('div');
        paramItem.className = 'param-item flex items-center';
        paramItem.innerHTML = `
            <input type="text" value="${newParamName}" class="param-name flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
            <select class="param-level ml-2 w-20 border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
                ${optionsHtml}
            </select>
            <button class="delete-param ml-2 text-red-500 hover:text-red-700 p-2">
                <i class="fa fa-trash"></i>
            </button>
        `;
        document.getElementById('params-container').appendChild(paramItem);
        paramItem.querySelector('.param-name').addEventListener('input', function() {
            const idx = Array.from(document.querySelectorAll('.param-item')).indexOf(paramItem);
            params[idx].name = this.value;
            resizeCanvas();
        });
        paramItem.querySelector('.param-level').addEventListener('change', function() {
            const idx = Array.from(document.querySelectorAll('.param-item')).indexOf(paramItem);
            params[idx].level = parseInt(this.value);
            resizeCanvas();
        });
        paramItem.querySelector('.delete-param').addEventListener('click', function() {
            if (params.length > 3) {
                const idx = Array.from(document.querySelectorAll('.param-item')).indexOf(paramItem);
                params.splice(idx, 1);
                paramItem.remove();
                updateDeleteButtons();
                resizeCanvas();
            }
        });
        updateDeleteButtons();
        resizeCanvas();
    });
    document.querySelectorAll('.param-name').forEach((input, index) => {
        input.addEventListener('input', function() {
            params[index].name = this.value;
            resizeCanvas();
        });
    });
    document.querySelectorAll('.param-level').forEach((select, index) => {
        select.addEventListener('change', function() {
            params[index].level = parseInt(this.value);
            resizeCanvas();
        });
    });
    document.querySelectorAll('.delete-param').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            if (params.length > 3) {
                params.splice(index, 1);
                this.parentElement.remove();
                updateDeleteButtons();
                resizeCanvas();
            }
        });
    });
    // JOJO模板填充
    document.getElementById('fill-jojo-template').addEventListener('click', fillJojoTemplate);
    // 保存图片
    document.getElementById('save-image').addEventListener('click', function() {
        document.getElementById('save-modal').classList.remove('hidden');
    });
    document.getElementById('cancel-save').addEventListener('click', function() {
        document.getElementById('save-modal').classList.add('hidden');
    });
    document.getElementById('save-png').addEventListener('click', function() {
        document.getElementById('save-modal').classList.add('hidden');
        html2canvas(mainCanvas, { backgroundColor: null }).then(canvas => {
            const link = document.createElement('a');
            link.download = '雷达图.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
    document.getElementById('save-jpg').addEventListener('click', function() {
        document.getElementById('save-modal').classList.add('hidden');
        html2canvas(mainCanvas, { backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = '雷达图.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.9);
            link.click();
        });
    });
    // 初始化
    updateDeleteButtons();
    updatePipSize();
    resizeCanvas();
});