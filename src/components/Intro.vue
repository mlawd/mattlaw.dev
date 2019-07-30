<template>
  <div>
    <v-layout row wrap>
      <v-flex md8 offset-md2>
        <div class="text-xs-center title">
          <p>
            I am Matt Law, a programmer of NodeJS, Vue, dotnet and c++ based in
            the glorious county of
          </p>
        </div>
      </v-flex>
      <v-flex xs12 class="headline-text text-xs-center">
        <p>NOTTINGHAMSHIRE</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
img {
  position: absolute;
  width: 100%;
  mix-blend-mode: darken;
}

p {
  margin: 0;
  line-height: 1;
}

.headline-text {
  position: relative;
  z-index: 99;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  font-size: 12vw;
  position: relative;
  overflow-y: hidden;
  background: url('/img/nottingham.webp') center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 30px 0;
}

.intro h2 {
  font-size: 5vw;
  margin: 5vw 0;
}

.intro p {
  font-size: 2.5vw;
}
</style>
