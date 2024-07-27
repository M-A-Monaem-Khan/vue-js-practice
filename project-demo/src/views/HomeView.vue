<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>THIW SBDUDCDHCNJ</h1>
  </div>
</template>

<script>

export default {
  components: {
    mounted(){
      const UserName = sessionStorage.getItem('UserName');
    if(UserName === null || UserName === ''){
      sessionStorage.setItem('errTy','Not Login');
      this.$router.push('/');
    }
    }
  }
}
</script>
