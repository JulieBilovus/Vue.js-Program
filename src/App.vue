<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
    font-family: @mainFontFamily;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @whiteText;
    font-size: 14px;
    font-weight: 400;
    background: @bodyBackground;
  }
  #app {
    .wrapper {
      width: 100%;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      padding: 10px;
      box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 400;
      text-transform: uppercase;
    }

    h1 {
      font-size: 38px;
      font-weight: 300;
    }

    .logo {
      color: @red;
      font-size: 24px;
      &_first-part {
        font-weight: 900;
      }
    }

    button {
      color: @whiteText;
      border: none;
    }
  }
</style>
