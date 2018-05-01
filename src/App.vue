<template>
  <div id="app">
    <div class="mm-heading">
      <div class="content">
        <img
          src='data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"64"%20height%3D"63"%20viewBox%3D"0%200%20154.67%20153.96"><path%20fill%3D"%2312353C"%20d%3D"M1%2021.5c-3.6%2020.3%203.3%2049%2019.4%2077%2016.2%2028%2037.6%2048.3%2057%2055.5V0C45%200%2016.6%208.4.8%2021.5z"%2F><path%20fill%3D"%23EDDD3E"%20d%3D"M134.2%2098.5c16.2-28%2023-56.7%2019.6-77C138%208.5%20109.8%200%2077.3%200v154c19.3-7.2%2040.8-27.5%2057-55.5z"%2F><path%20fill%3D"%23FFF"%20d%3D"M115.6%2025.2c-4.6-1.3-9.4-2.3-14.4-3%200%202%200%204.3-.3%206.6-.4%205-1%2010.3-1.7%2015.5%203.2%201%206.2%202.3%208.5%203.7%200%203.2-.5%207-1.5%2010.8-1.5%206.2-4.2%2012.7-8%2019C95%2084%2090.6%2089.8%2086%2094.2c-3%202.8-6%205-8.7%206.6-2.8-1.6-5.7-3.8-8.6-6.6-4.6-4.5-9-10-12.5-16.4-3.7-6.3-6.4-12.8-8-19-1-4-1.4-7.6-1.3-10.8%202.2-1.4%205-2.7%208.4-3.7-.7-5.2-1.3-10.5-1.7-15.5%200-2.4-.2-4.6-.3-6.7-5%201-9.8%202-14.3%203.2-7.2%202-13.6%204.7-18.7%207.8%200%206%20.8%2012.8%202.7%2020.2%202.8%2011.5%208%2023.8%2014.8%2035.6%206.8%2011.8%2015%2022.4%2023.4%2030.6%205.4%205.3%2011%209.5%2016%2012.4%205.3-3%2010.7-7%2016.2-12.4%208.5-8.3%2016.6-19%2023.4-30.6%206.8-11.8%2012-24%2014.8-35.6%202-7.4%202.8-14.3%202.7-20.2-5-3-11.4-5.7-18.7-7.8z"%2F><path%20fill%3D"%23EAEAEA"%20d%3D"M77.3%20100.8c-2.7-1.5-5.7-3.8-8.6-6.6-4.5-4.4-9-10-12.5-16.3-3.6-6.4-6.4-13-8-19.2-1-4-1.4-7.6-1.3-10.7%202.3-1.3%205-2.6%208.4-3.6-.7-5.2-1.3-10.5-1.6-15.6l-.4-6.7c-5%201-9.8%202-14.3%203.2-7.2%202-13.6%204.8-18.7%207.8%200%206%20.8%2012.8%202.7%2020.2%203%2011.5%208%2023.8%2014.8%2035.6%206.8%2011.8%2015%2022.4%2023.4%2030.6%205.4%205.3%2011%209.5%2016%2012.4v-31z"%2F><%2Fsvg>'
          alt="">
        <h1 class="is-1">{{ msg }}</h1>
      </div>
    </div>

    <div class="container is-fluid content blog-posts">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>

    <div class="mm-footer">
      <div class="content">
        <strong>
          De Voorhoede interview excercise | Created by: Mark Molendijk | <a href="https://github.com/mkMolendijk">Github</a>
        </strong>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        msg: "De Voorhoede blog posts"
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh
  }

  .mm-heading {
    padding-top: 70px;
    min-height: 300px;
    background-color: #EDDD3E;
  }

  .mm-footer {
    padding: 25px 0;
    min-height: 50px;
    background-color: #EDDD3E;
    text-align: center;
  }

  /* Transition animations */
  .slide-fade-enter-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  /* Some helpers */
  .is-vertical-center {
    display: flex;
    align-items: center;
  }

  .is-justified {
    justify-content: space-between;
  }
</style>
