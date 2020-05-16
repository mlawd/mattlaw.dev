<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" xl="8">
          <h1>Hey, I'm Matt!</h1>
        </v-col>
        <v-col cols="12" md="6">
          <p>
            &hellip;and this is coming soon!
          </p>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import { setMeta } from '../set-meta';

export default {
  metaInfo() {
    return setMeta(
      'About me & my software development experience',
      'I (Matt Law) am a software developer in Nottingham (UK). I specialise in Web Technologies such as .NET Core, C#, JavaScript, VueJS, HTML & CSS. I also have experience as a system architect and have worked with a variety of cloud providers such as Azure, AWS & Google Firebase.',
      [],
      '/about'
    );
  },
};
</script>
