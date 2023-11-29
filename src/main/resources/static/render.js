const THEME_PREFIX="https://unpkg.com/vditor@3.9.6/dist/css/content-theme"

window.addEventListener("load", () => {
    // 暗色模式初始化
    let dark = initDarkMode()
    setTheme(dark?"dark":"light")
    // Render
    render("language-math", Vditor.mathRender)
    render("language-mindmap", Vditor.mindmapRender, dark)
    render("language-mermaid", Vditor.mermaidRender, dark)
    render("language-echarts", Vditor.chartRender, dark)
    render("language-abc", Vditor.abcRender)
    render("language-graphviz", Vditor.graphvizRender)
    render("language-flowchart", Vditor.flowchartRender)
})

/**
 * 初始化暗色模式策略
 * 创建所需监听器
 * @returns {boolean} 初始暗黑模式状态
 */
function initDarkMode() {
    let darkModeChange = document.getElementById("render-script").dataset.dark
    let dark = false
    // 检测暗黑模式策略
    switch (darkModeChange) {
            // 禁用暗黑模式
        case "disabled": break
            // 跟随系统
        case "system":
            dark = initSystemDarkMode()
    }
    return dark
}


/**
 * 系统模式暗黑模式策略
 * @returns {boolean}
 */
function initSystemDarkMode() {
    let media = window.matchMedia('(prefers-color-scheme: dark)');
    let callback = (e) => {
        let prefersDarkMode = e.matches;
        setTheme(prefersDarkMode?"dark":"light")
    };
    if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', callback);
    } else if (typeof media.addListener === 'function') {
        media.addListener(callback);
    }
    return media.matches
}

/**
 * 配置主题
 * @param theme 主题
 */
function setTheme(theme) {
    Vditor.setContentTheme(theme, THEME_PREFIX)
}

/**
 * 通用渲染
 * @param selector 选择器
 * @param callback 渲染方法
 * @param dark 暗色模式，null为不配置
 */
function render(selector, callback, dark=null) {
    let mindmap = document.getElementsByClassName(selector)
    for (let i = 0; i < mindmap.length;i++) {
        const el = coverThis(mindmap[i])
        if (dark) {
            callback(el, "https://unpkg.com/vditor@3.9.6", dark?"dark":"classic")
        } else {
            callback(el)
        }
    }
}

/**
 * 符合Vditor渲染器要求
 * 需要在外套一层div
 * @param el 元素
 * @returns {*}
 */
function coverThis(el) {
    let copy = el.cloneNode(true)
    el.innerHTML = ""
    el.className = "vditor-reset"
    el.dataset.code = ""
    el.append(copy)
    return el
}