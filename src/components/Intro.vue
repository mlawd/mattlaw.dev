<template>
  <v-layout row>
    <v-flex md8 offset-md2>
      <v-layout column wrap align-content-center>
        <div class="headline-text text-xs-center">
          <p>ABOUT ME</p>
        </div>
        <div class="text-xs-center title">
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
          <p>
            For more information on my development experience visit the below
            links:
          </p>
        </div>
        <v-layout row wrap>
          <v-flex class="text-xs-center">
            <v-btn flat to="/web-development">Web Development</v-btn>
            <v-btn flat to="/software">Software</v-btn>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
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

.v-btn {
  font-size: 2em;
}
</style>
