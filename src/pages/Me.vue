<template>
  <Layout>
    <v-container class="pt-0">
      <v-row>
        <v-col class="pt-0">
          <h1 class="d-none d-print-block">
            Matthew Law
          </h1>
          <h1 class="d-print-none">About Me</h1>
        </v-col>
      </v-row>
      <v-row class="flex-row-reverse">
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text class="pa-1">
              <v-list dense subheader>
                <v-subheader class="title">Contact Information</v-subheader>
                <ListItem title="Email" subtitle="me@mattlaw.dev" />
                <ListItem icon="mdi-github-circle" subtitle="np-matt" />
                <ListItem icon="mdi-linkedin" subtitle="matthew-law-40659062" />
                <ListItem
                  icon="mdi-web"
                  subtitle="mattlaw.dev"
                  class="d-none d-print-block"
                />
                <v-subheader class="title">Skills</v-subheader>
                <Skill title="Languages" :skills="languages" />
                <Skill title="Technologies" :skills="technologies" />
                <Skill title="Databases" :skills="databases" />
                <Skill title="Cloud" :skills="cloud" />
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <p>
            I am a Software Developer currently working for Solutions for
            Retailer Brands on a range of web services. I enjoy developing
            applications, particular for the Web, both at work an in my spare
            time.
          </p>
          <p>
            I have a keen interest in various technologies, and whilst most of
            my time at work is spent working in NodeJS and AngularJS, I have
            various personal projects that allow me to keep up to date with
            VueJS, .NET, React &amp; GraphQL. For instance my website is written
            in VueJS &amp; Gridsome, whilst I have projects open for a .NET Core
            GraphQL Movie API &amp; React front-end. All of which can be viewed
            on my GitHub account.
          </p>
          <h2>Experience</h2>
          <h3>Solutions for Retail Brands</h3>
          <v-subheader class="font-italic">May 2018 - present</v-subheader>
          <h3>Real-Time Simulations</h3>
          <v-subheader class="font-italic">August 2015 - June 2018</v-subheader>
          <h3>University of Newcastle upon Tyne</h3>
          <v-subheader class="font-italic">
            September 2009 - July 2015
          </v-subheader>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import Skill from '../components/Skill.vue';

export default {
  metaInfo: {},
  components: { ListItem, Skill },
  data() {
    return {
      languages: [
        { icon: 'mdi-language-csharp', text: 'C#' },
        { icon: 'mdi-dot-net', text: '.NET' },
        { icon: 'mdi-language-cpp', text: 'C++' },
        { icon: 'mdi-language-javascript', text: 'JavaScript' },
        { icon: 'mdi-language-typescript', text: 'TypeScript' },
        { icon: 'mdi-language-css3', text: 'CSS' },
        { icon: 'mdi-language-html5', text: 'HTML' },
      ],
      technologies: [
        { icon: 'mdi-nodejs', text: 'NodeJS' },
        { icon: 'mdi-vuejs', text: 'VueJS' },
        { icon: 'mdi-vuetify', text: 'Vuetify' },
        { icon: 'mdi-react', text: 'React' },
        { icon: 'mdi-angular', text: 'Angular' },
        { icon: 'mdi-graphql', text: 'GraphQL' },
        { icon: 'mdi-kubernetes', text: 'Kubernetes' },
        { icon: 'mdi-docker', text: 'Docker' },
      ],
      databases: [
        { icon: 'mdi-database', text: 'MongoDB' },
        { icon: 'mdi-database', text: 'SQL' },
        { icon: 'mdi-database', text: 'Snowflake' },
      ],
      cloud: [
        { icon: 'mdi-azure', text: 'Azure' },
        { icon: 'mdi-aws', text: 'AWS' },
        { icon: 'mdi-cloud-outline', text: 'DigitalOcean' },
      ],
    };
  },
};
</script>

<style>
@media print {
  .v-list-item--dense,
  .v-list--dense .v-list-item {
    min-height: 20px;
  }

  .container--fluid {
    max-width: 1100px;
  }
}
</style>
