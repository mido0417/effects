<template lang="pug">
label
  input(type="checkbox")
  .scene
    .sun
    .moon
    .lefttopText
      .blueblock
      h5 A DAY<br>ON THE ISLAND
      h1 Aegean Sea<br>
        span.nightText Night Sky
        span.dayText Day Sky
    .allstars
      .star1
      .star2
      .star3
      .star4
      .star5
      .star6
      .star7
      .star8
      .star9
      .star10
      .star11
      .star12
      .star13
      .star14
      .star15
      .star16
      .star17
      .star18
      .star19
      .star20
      .star21
      .star22
      .star23
      .star24
      .star25
      .star26
      .star27
      .star28
      .star29
      .star30
    .building
      .house1
        .window
          .circle
          .circle
          .circle
      .house2
        .door
      .house3
        .wall
          .window
        .wall
          .window
        .wall
          .window
        .roof  
          .rooftop
            .cross
</template>

<style lang="sass" scoped>
//設定字體
@import url('https://fonts.googleapis.com/css?family=Playfair+Display')

*,*:before,*:after
  font-family: "Playfair Display","微軟正黑體"
  position: relative
  // border: solid 2px black
  // background-color: #fff

//指定顏色變數
$colorBlueRoofLight: #6fc5ff
$colorBlueRoofDark: #0058ff

$colorGreyLight: #fafaf5
$colorGreyNormal: #e3e2cf
$colorGreyDark: #bebdaf
$colorBackground: #2C2F36

$colorShadowBlue: #7cb1ff
$colorShadowBlueLight: #8dc9fc

$colorWindowGrey: #534d4d


//定義漸層
//屋頂的漸層
$roofGradient: linear-gradient(150deg, $colorBlueRoofLight, $colorBlueRoofDark)
//一整條從白天到晚上的背景顏色
$sceneGradient: linear-gradient(#1D2B49,#1A45A0,#91cdff,#fff)

//設定Mixins
=size($w,$h:$w,$bdrs:0)
  width: $w
  height: $h
  border-radius: $bdrs
  
=flex($j:center,$a:center)
  display: flex
  justify-content: $j
  align-items: $a

=abpos($l:initial,$t:initial)
  position: absolute
  left: $l
  top: $t
  
  
//網頁設定撐滿內容放中央
html,body
  +size(100%)
  margin: 0
  +flex
  background-color: $colorBackground
  color: white
  

//中間的主要場景
.scene
  +size(700px,500px,15px)
  
  overflow: hidden
  background: $sceneGradient
  background-size: 100% 300%
  
  box-shadow: 0px 0px 30px rgba(black,0.3)
  //設定背景長度為300%，才能早晚移動位置切換
  cursor: pointer
  
//左側上放的文字
.lefttopText
  margin:
    left: 30px
    top: 30px
  h1
    font-size: 36px
    letter-spacing: 3px
    margin-top: 0
    font-weight: 300
  h5
    font-size: 14px
    letter-spacing: 1px
    opacity: 0.6
    margin-bottom: 0
    font-weight: 300
  p
    font-size: 14px
    line-height: 24px
    letter-spacing: 2px
    opacity: 0.6

  .blueblock
    background-color: $colorShadowBlue
    +size(20px,25px)
  
//建築物們
.building
  position: absolute
  right: 0
  bottom: 0
  
  transform: scale(0.95)
  
//房子都靠右下角對齊
[class^="house"]
  position: absolute
  bottom: 0
  right: 0

//右側的第一棟
.house1
  +size(180px,200px)
  z-index: 1
  background-color: $colorGreyLight
  box-shadow: -50px 0px $colorGreyNormal inset
  .window
    +size(40px,100px,20px)
    background-color: $colorGreyNormal
    box-shadow: inset 8px 5px $colorGreyDark
    +flex
    flex-direction: column
    margin:
      top: 40px
      left: 70px
    .circle
      +size(20px,20px,50%)
      background-color: $colorWindowGrey
      margin: 4px
      margin-left: 10px
    
//右下的第二棟
.house2
  +size(240px,170px)
  right: 130px
  z-index: 2
  background-color: $colorGreyLight
  box-shadow: 0px 15px $colorShadowBlueLight  inset,-72px 0px $colorGreyNormal inset
  
  .door
    +size(40px,80px,20px 20px 0 0)
    position: absolute
    bottom: 0
    left: 45px
    background-color: $colorBackground
    box-shadow: inset 10px 2px $colorShadowBlue
    
//後面的第三棟
.house3
  +size(320px,300px)
  +flex
  z-index: 0
  background-color: $colorGreyLight
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1)
  
  .wall
    flex: 1
    height: 100%
    +flex(center,flex-start)
      
    .window
      +size(24px,50px,12px 12px 0px 0px)
      margin-top: 30px
      background-color: $colorBackground
    
    //上面建築物的冠
    &:before
      content: ""
      display: block
      +size(105%,20px)
      position: absolute
      top: -20px
      background-color: inherit
      box-shadow: 0px 0px 10px rgba(#000,0.1)

    =wall($color,$flex,$windowPan:0px,$z:1)
      background-color: $color
      flex: $flex
      .window
        box-shadow: inset $windowPan 0px $colorShadowBlue
      &:before
        z-index: $z

    &:nth-child(1)
      +wall($colorGreyLight,10,8px)
    &:nth-child(2)
      +wall($colorGreyNormal,14,0px,2)    
    &:nth-child(3)
      +wall($colorGreyDark,10,-8px)    
  
    
    
//屋頂跟小十字架

//半圓形的mixin
=halfCir($r)
  +size($r*2,$r,$r $r 0 0)
  
.roof
  +halfCir(150px)
  position: absolute
  top: -170px
  right: 5px
  
  background: $roofGradient

  .rooftop
    +halfCir(14px)
    +abpos(50%,-14px)
    transform: translateX(-50%)
    
    background-color: #fff
    
   
  //十字架
  .cross
    +size(4px,30px)
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: 10px
    
    background-color: #fff
    
    &:before
      content: ""
      display: block
      +size(20px,4px)
      position: absolute
      bottom: 15px
      left: 50%
      transform: translateX(-50%)
      background-color: #fff
    
//所有星星～
.allstars
  //外層容器撐滿整個框框
  +size(100%)
  +abpos(0,0)
  
  //星星從原本位置偏移落下的動畫，從右上到左下
  @keyframes falling
    0%,100%
      opacity: 0
    70%
      opacity: 1
    0%
      transform: translate(100px,0px)
    100%
      transform: translate(0px,200px)

  //以star開頭的為星星
  [class^='star']
    +size(3px,3px,50%)
    background-color: #fff
    animation: falling 2s infinite
    
  //產生30顆星星不同的偏移位置跟動畫delay
  @for $i from 1 through 30
    .star#{$i}
      $posX: random(100)*1%
      $posY: random(80)*-1% + 50%
      +abpos($posX,$posY)
      animation-delay: $i*-0.1s
   
  

//day / night switch

//提醒可切換的文字
.remind
  opacity: 0.2
  margin-bottom: 10px
  letter-spacing: 1px

  
//晚上
.dayText
  display: none

//設定太陽跟月亮的共用尺寸/位置
.sun,.moon
  +size(50px,50px,50%)
  +abpos(250px,100px)
  
//設定太陽的顏色跟光暈，初始透明度為0(夜晚看不到)
.sun
  background-color: #ffdd38
  box-shadow: 0px 0px 20px rgba(#ffdd38,0.5)
  top: 400px
  opacity: 0
.moon
  //box-shadow: inset 10px -10px rgba(#fff,0.9)
  animation: moonAppear 5s both
  
//月亮出現的動畫
@keyframes moonAppear
  0%
    box-shadow: inset 0px 0px rgba(#fff,0.9)
  100%
    box-shadow: inset 10px -10px rgba(#fff,0.9)
  
  
// -----------------
//白天狀態調整css
h1,h5,p,.moon,.sun,.scene,.allstars,.blueblock,.building
  transition: 2s

//指定所有元素漸變時間
input:checked+.scene
  //更新背景顏色
  background-position: 0 100%
  
  .nightText
    display: none
  .dayText
    display: block
    
  .allstars
    opacity: 0
  h1,h5,p
    color: #222
  .building
    filter: brightness(105%)
  .moon
    top: -100px
    opacity: 0
  .sun
    top: 100px
    opacity: 1
  .blueblock
    background-color: white

input
  display: none
</style>


<script>
export default {};
</script>
