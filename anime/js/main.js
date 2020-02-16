let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play

let propsAnim01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#00ffff',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnim01.play

// let propsAnim01 = anime({
//   targets: '.vals .triangle',
//   translateX: 250,
//   rotate: 180,
//   easing: 'easeInOutQuad',
//   delay: anime.stagger(100),
//   autoplay: false,
//   rotate: anime.stagger([-270, 270])
// })
// let propsBtn01 = document.getElementById('propsBtn01')
// propsBtn01.onclick = propsAnim01.play
//
//
// let propsAnim01 = anime({
//   targets: '.vals .circle',
//   translateX: 500,
//   duration: 3000
//   backgroundColor: 'rgba(234,152,62,0.5)'
//   autoplay: false
//   easing: 'spring(10, 90, 10, 5)'
// })
// let valsBtn01 = document.getElementById('propsBtn01')
// propsBtn01.onclick = propsAnim01.play
//
//
let propsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valssAnim01.play

let path = anime.path('path')
let svgMotion = anime({
  targets: '.svgAnim .triangle',
  translateX

})

let funcAnim01 = anime ({
  targets: '.funk-move .box',
  translateX: 200,
  changeComplete: function(el) {
    console.log('animation complete');
  }
})



//
