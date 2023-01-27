function adapter() {
    const dpi = document.documentElement.clientWidth
    const rootFontSize = dpi / 10
    document.documentElement.style.fontSize = rootFontSize + 'px'
}
adapter()
window.onresize = adapter

/*
根字体 = 视口宽 / 10
使用rem
值 ： 设计值 / 设计稿宽 / 10
*/