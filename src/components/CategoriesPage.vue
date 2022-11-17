<template>
  <div class="background">
    <img class="floating_block" src="../assets/block1.png" alt="">
    <img class="floating_block" src="../assets/block2.png" alt="">
    <img class="floating_block" src="../assets/block3.png" alt="">
    <img class="floating_block" src="../assets/block4.png" alt="">
  </div>
  <div class="nav">
    <div class="h" @click="$router.push('/')">
      <div class="blue">Sui</div>
      ecosystem</div>
    <div class="right">
      <button class="btn_fun" @click="$router.push('/fun')">Fun</button>
      <div class="social_media">
        <a target="_blank" href="https://suiecosystem.top"><img src="../assets/safari.png" alt=""/></a>
        <a target="_blank" href="https://twitter.com/SuiEcosystem"><img src="../assets/twitter.png" alt=""/></a>
        <a target="_blank" href="#"><img src="../assets/discord.png" alt=""/></a>
    </div>
    <button class="btn_submit" onclick="location.href = `https://suiecosystem.top/submit-sui-project/`">Submit</button>
    </div>
  </div>

  <div class="cardOfCategories">
    <BigCard v-for="item in this.categories" :key="item" :dataEl="item"/>

  </div>
</template>

<script>
import BigCard from './BigCard.vue';

export default {
    name: 'CategoriesPage',
    components: {
      BigCard
    },
    data() {
    return {
      categories: [
        "NFT",
        // "Bridge",
        "DeFi",
        "Dex",
        "GameFi",
        // "Infrastructure",
        // "Launchpad",
        // "Name Service",
        // "NFT Market",
        // "Official Partners",
        "SocialFi",
        // "Tools",
        "Wallet",
      ],
    };
  },
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
.cardOfCategories{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20vw;
}
</style>