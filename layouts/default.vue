<template>
  <div>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<style lang="scss">
@import '../node_modules/swiper/swiper-bundle.css';
@import "../assets/scss/style";

@font-face {
  font-family: 'Bebas Neue';
  src: url('../assets/fonts/BebasNeue-Regular.eot');
  src: local('☺'),
  url('../assets/fonts/BebasNeue-Regular.woff') format('woff'),
  url('../assets/fonts/BebasNeue-Regular.ttf') format('truetype'),
  url('../assets/fonts/BebasNeue-Regular.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Oswald';
  src: url('../assets/fonts/Oswald-Regular.eot');
  src: local('☺'),
  url('../assets/fonts/Oswald-Regular.woff') format('woff'),
  url('../assets/fonts/Oswald-Regular.ttf') format('truetype'),
  url('../assets/fonts/Oswald-Regular.svg') format('svg');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Oswald';
  src: url('../assets/fonts/Oswald-Bold.eot');
  src: local('☺'),
  url('../assets/fonts/Oswald-Bold.woff') format('woff'),
  url('../assets/fonts/Oswald-Bold.ttf') format('truetype'),
  url('../assets/fonts/Oswald-Bold.svg') format('svg');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro';
  src: url('../assets/fonts/SFProDisplay-Medium.eot');
  src: local('SF Pro Display Medium'), local('SFProDisplay-Medium'),
  url('../assets/fonts/SFProDisplay-Medium.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/SFProDisplay-Medium.woff2') format('woff2'),
  url('../assets/fonts/SFProDisplay-Medium.woff') format('woff'),
  url('../assets/fonts/SFProDisplay-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro';
  src: url('../assets/fonts/SFProDisplay-Regular.eot');
  src: local('SF Pro Display Regular'), local('SFProDisplay-Regular'),
  url('../assets/fonts/SFProDisplay-Regular.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/SFProDisplay-Regular.woff2') format('woff2'),
  url('../assets/fonts/SFProDisplay-Regular.woff') format('woff'),
  url('../assets/fonts/SFProDisplay-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Gotham';
  src: url('../assets/fonts/Gotham Pro Regular.eot');
  src: local('☺'),
  url('../assets/fonts/Gotham Pro Regular.woff') format('woff'),
  url('../assets/fonts/Gotham Pro Regular.ttf') format('truetype'),
  url('../assets/fonts/Gotham Pro Regular.svg') format('svg');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Gotham';
  src: url('../assets/fonts/Gotham Pro Bold.eot');
  src: local('☺'),
  url('../assets/fonts/Gotham Pro Bold.woff') format('woff'),
  url('../assets/fonts/Gotham Pro Bold.ttf') format('truetype'),
  url('../assets/fonts/Gotham Pro Bold.svg') format('svg');
  font-weight: 700;
  font-style: normal;
}
</style>
