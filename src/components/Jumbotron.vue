<template>
  <v-layout row wrap reverse fill-height justify-center align-center>
    <v-flex md5 class="text-xs-center">
      <h1>Matt Law [.dev]</h1>
    </v-flex>
    <v-flex md5>
      <v-layout row wrap align-content-center class="text-xs-center ">
        <v-flex>
          <v-avatar size="256">
            <img
              src="https://www.gravatar.com/avatar/d1a10bb5688a532548bd960458e093a5?s=256"
            />
          </v-avatar>
        </v-flex>
        <v-flex>
          <ul class="title">
            <li>Often Programmer</li>
            <li>Occasional DIY-er</li>
            <li>Infrequent Cricketer</li>
            <li>Wistful Game Dev</li>
          </ul>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-weight: 100;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
}

li {
  margin: 10px 0;
  background: rgba(66, 66, 66, 0.7) !important;
}
</style>
