<template>
  <div id="DefaultLayout">
    <div id="DeLayNavbar">
      <div id="DeLayNavbarLink">
        <router-link to="/bu" class="DeLayRouterLink">Home</router-link>
        <router-link to="/bu/About" class="DeLayRouterLink">ABOUT</router-link>
        <router-link :to="{name:'MeetingData'}" class="DeLayRouterLink">Meeting Record</router-link>
        <router-link to="/BU" class="DeLayRouterLink">XXX</router-link>
      </div>
      <div id="DeLayNavbarInfo">
        <button @click="LogoutBtn" class="logOutbtn">Log Out</button>
        <router-link to="/BU" style="text-decoration: none;
  cursor: pointer;">Hi @{{ UserName }}</router-link>
      </div>
    </div>
    <div id="DeLayBody">
      <div id="DeLayBodyDiv">
        <router-view></router-view>
      </div>
    </div>

    <div id="DeLayFooter">
      <p>:) Copywite Reserved by M.A. Monaem Khan (:</p>
      <p>:) Junior Software Engineer at Fintech Hub Ltd. (:</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      UserName: '',
    }
  },
  methods: {
    LogoutBtn() {
      localStorage.removeItem('UserName');
      sessionStorage.removeItem('UserName');
      sessionStorage.removeItem('errTy');
      this.$router.push('/')
    }
  },
  mounted() {
    this.UserName = sessionStorage.getItem('UserName');
    if (this.UserName === null || this.UserName === '') {
      sessionStorage.setItem('errTy', 'Not Login');
      this.$router.push('/');
    }
  }
}
</script>

<style>
#DefaultLayout {
  margin: 0px;
  padding: 0px;
  letter-spacing: 1px;
}

#DeLayNavbar {
  margin: 0px;
  width: 100%;
  height: 10%;
  background: white;
}

#DeLayNavbarLink,
#DeLayNavbarInfo {
  display: inline-block;
  height: 30px;
  margin-top: 20px;
  border-bottom: 1px solid blue;
}

#DeLayNavbarLink {
  width: 68%;
  text-align: left;
}

#DeLayNavbarInfo {
  width: 25%;
  text-align: right;
  padding-bottom: 4.5px;
}

.DeLayRouterLink {
  border: none;
  margin-right: 10px;
  padding: 10px;
  color: black;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
}

.DeLayRouterLink:hover {
  color: red;
  background: aqua;
}

.logOutbtn {
  margin-right: 10px;
  width: 80px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.logOutbtn:hover {
  background: whitesmoke;
}

#DeLayBody{
  top:10%;
  width: 100%;
  height: 79%;
  overflow: hidden;
}
#DeLayBodyDiv{
  scroll-behavior: smooth;
  width: 97%;
  height: 95%;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow: hidden;
  margin: 10px;
}

#DeLayFooter{
  position: fixed;
  width:100%;
  top:89%;
  height:10%;
  font-size: small;
}
</style>