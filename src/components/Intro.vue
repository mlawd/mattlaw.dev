<template>
  <v-layout row>
    <v-flex md8 offset-md2>
      <v-layout column wrap justify-center>
        <v-flex xs12 class="headline-text text-xs-center">
          <p>ABOUT ME</p>
        </v-flex>
        <v-flex xs12 class="text-xs-center title">
          <p>
            Welcome to MattLaw.dev! I am a software developer from Sheffield,
            educated at Newcastle University and based in Nottingham.
          </p>
          <p>
            I have experience in Software Development ranging from real-time
            software applications for simulation &amp; training applications to
            enterprise-application web development.
          </p>
          <p>
            Here you will find my thoughts on all things software development,
            NodeJS, .NET Core, VueJS, WebGL &amp; pretty much anything that can
            solve problems on the web.
          </p>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

img {
  position: absolute;
  width: 100%;
  mix-blend-mode: darken;
}

p {
  line-height: 1;
}

.headline-text {
  position: relative;
  z-index: 99;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  font-size: 7rem;
  position: relative;
  overflow-y: hidden;
  background: url('/img/nottingham.webp') center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 30px 0;
}

.intro p {
  font-size: 2.5vw;
}
</style>
