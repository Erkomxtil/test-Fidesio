function accordeon() {
  const btns = document.querySelectorAll('[data-btn]')

  btns.forEach(btn => {
    btn.addEventListener('click', (e)  => {      
      const parentBtn = e.target.parentNode.parentNode
      const blockNumber  = parseInt(e.target.dataset.btn) + 1
      parentBtn.classList.remove('open')

      if(blockNumber <= 4){
        const  cible =  '[data-block="'+ blockNumber +'"]'
        const  nextBlock = document.querySelector(cible)
        nextBlock.classList.add('open')
      } else {
        const block1 = document.querySelector('[data-block="1"]')
        block1.classList.add('open')
      }      
  })
})
}

accordeon()