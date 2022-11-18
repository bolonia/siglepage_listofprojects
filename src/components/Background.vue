<template>
    <div class="background">
        <img class="floating_block" src="../assets/block1.png" alt="">
        <img class="floating_block" src="../assets/block2.png" alt="">
        <img class="floating_block" src="../assets/block3.png" alt="">
        <img class="floating_block" src="../assets/block4.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Background',
    mounted() {
    window.addEventListener('mousemove', (e) => {
      const blocks = document.getElementsByClassName('floating_block');
      const speed = 0.01;
      blocks[0].style.cssText = `bottom: ${100 + e.screenY * speed}px; left: ${100 + e.screenX * speed}px;`;
      blocks[1].style.cssText = `top: ${120 + e.screenY * speed * 2}px; left: ${100 + e.screenX * -speed * 2}px;`;
      blocks[2].style.cssText = `top: ${400 + e.screenY * speed}px; left: ${300 + e.screenX * -speed}px;`;
      blocks[3].style.cssText = `top: ${200 + e.screenY * -speed / 1.2}px; left: ${document.documentElement.clientWidth -200 -e.screenX * -speed}px;`;
    });
  }
}
</script>

<style scoped>
.background img{
  position: absolute;
  z-index: -2;
  width: 100px;
  height: 100px;

  bottom: 5vh;
  left: 5vw;
}
.background img:nth-child(1), img:nth-child(2){
  filter: blur(2px);
}
.background img:nth-child(1), img:nth-child(4){
  animation: 40s rotate infinite linear;
}
.background img:nth-child(2), img:nth-child(3){
  animation: 40s antirotate infinite linear;
}
@keyframes rotate{
  from{
    transform:rotate(0)
  }
  to{
    transform:rotate(360deg)
  }
}
@keyframes antirotate{
  from{
    transform:rotate(0)
  }
  to{
    transform:rotate(-360deg)
  }
}
</style>