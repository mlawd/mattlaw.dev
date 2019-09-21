<template>
  <v-toolbar dense>
    <v-toolbar-items>
      <v-btn class="title-btn" to="/" flat>Matt Law [.dev]</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn to="/web-development" flat>Web Development</v-btn>
      <v-btn to="/software" flat>Software</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
nav {
  background: none !important;
  box-shadow: none !important;
}

.v-btn {
  text-transform: none;
}

.title-btn {
  font-weight: 100;
  font-size: 2em;
}
</style>
