window.onload = function () {
    previw()
    function previw() {

        let mainBox = document.querySelector('.mainBox')

        let shadeNode = null;
        let bigImgBox = null;
        let bigImg = null

        mainBox.onmouseenter = function () {
            if (!shadeNode) {
                shadeNode = document.createElement('span')
                shadeNode.className = 'shade'
                mainBox.appendChild(shadeNode)

                bigImgBox = document.createElement('div')
                bigImgBox.className = 'bigImgBox'
                bigImg = new Image()
                // bigImg.src = './img/animal0.webp'
                bigImg.src = mainBox.querySelector('img').src
                bigImgBox.appendChild(bigImg)
                mainBox.appendChild(bigImgBox)
            }

            mainBox.onmousemove = function (e) {
                let shadePosition = {
                    left: e.clientX - shadeNode.offsetWidth / 2 - mainBox.getBoundingClientRect().left,
                    top: e.clientY - shadeNode.offsetHeight / 2 - mainBox.getBoundingClientRect().top
                }
                if (shadePosition.left < 0) {
                    shadePosition.left = 0
                } else if (shadePosition.left > (mainBox.offsetWidth - shadeNode.offsetWidth)) {
                    shadePosition.left = mainBox.offsetWidth - shadeNode.offsetWidth
                }
                if (shadePosition.top < 0) {
                    shadePosition.top = 0
                } else if (shadePosition.top > (mainBox.offsetHeight - shadeNode.offsetHeight)) {
                    shadePosition.top = mainBox.offsetHeight - shadeNode.offsetHeight
                }
                shadeNode.style.left = shadePosition.left + 'px'
                shadeNode.style.top = shadePosition.top + 'px'
                let scale = (mainBox.clientWidth - shadeNode.offsetWidth) / (bigImg.offsetWidth - bigImgBox.clientWidth)
                let bigImgPosition = {
                    left: shadePosition.left / scale,
                    top: shadePosition.top / scale,
                }
                bigImg.style.left = -bigImgPosition.left + 'px'
                bigImg.style.top = -bigImgPosition.top + 'px'
            }
            mainBox.onmouseleave = function () {
                mainBox.removeChild(shadeNode)
                shadeNode = null;
                mainBox.removeChild(bigImgBox)
                bigImgBox = null;
                bigImg = null
                mainBox.onmousemove = mainBox.onmouseleave = null
            }
        }
    }


    thumbnail()
    function thumbnail() {

        let mainImgBox = document.querySelector('.mainBox img')
        let thumbUlBox = document.querySelector('.thumbUlBox')
        let thumbUl = document.querySelector('.thumbUl')
        let thumbLi = thumbUl.querySelectorAll('li')
        let thumbPrev = document.querySelector('.thumbPrev')
        let thumbNext = document.querySelector('.thumbNext')
        let thumbLiLen = thumbLi.length
        let showNum = 5
        let moveNum = 2
        // 每次移动距离
        let itemLeft = (thumbLi[0].offsetWidth + 20) * moveNum
        // 总可移动距离
        let countLeft = (thumbLiLen - showNum) * (thumbLi[0].offsetWidth + 20)
        // 当前移动距离
        let tempLeft = 0;

        thumbNext.onclick = function () {
            if (tempLeft < countLeft) {
                if ((countLeft - tempLeft) > itemLeft) {
                    tempLeft += itemLeft
                } else {
                    tempLeft = countLeft
                }
            }
            thumbUl.style.left = -tempLeft + 'px'
        }
        thumbPrev.onclick = function () {
            if (tempLeft > 0) {
                if (tempLeft > itemLeft) {
                    tempLeft -= itemLeft
                } else {
                    tempLeft = 0
                }
            }
            thumbUl.style.left = -tempLeft + 'px'
        }
        for (var i = 0; i < thumbLi.length; i++) {
            thumbLi[i].index = i
            thumbLi[i].onclick = function () {
                console.log(thumbLi[this.index].querySelector('img').src);
                mainImgBox.src = thumbLi[this.index].querySelector('img').src
            }
        }

    }


}