export default {
  tip (msg = '', time = 2000) {
    let tipWrap = document.createElement('div')
    tipWrap.className = 'tip-wrap tip-show'
    tipWrap.innerHTML = msg
    document.body.appendChild(tipWrap)
    tipWrap.style.margin = `-${tipWrap.offsetHeight / 2}px 0 0 -${tipWrap.offsetWidth / 2}px`
    let timer = setTimeout(() => {
      tipWrap.className = 'tip-wrap tip-hide'
      clearTimeout(timer)
      let delTipTime = setTimeout(() => {
        document.body.removeChild(tipWrap)
        clearTimeout(delTipTime)
      }, 180)
    }, time)
  }
}
