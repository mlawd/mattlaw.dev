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
      <v-row>
        <v-col cols="12" class="text-center pa-0">
          <v-chip
            color="primary"
            class="ma-1"
            v-for="{ icon, text } in skills"
            :key="text"
          >
            <v-icon v-text="icon" />&nbsp;{{ text }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row class="flex-row-reverse d-print-block">
        <v-col cols="12" md="5" class="side">
          <v-card>
            <v-card-text class="pa-1 primary">
              <v-subheader class="title">Contact Information</v-subheader>
              <v-list dense subheader class="pt-2">
                <ListItem icon="mdi-email" title="me@mattlaw.dev" />
                <ListItem icon="mdi-github-circle" title="np-matt" />
                <ListItem icon="mdi-linkedin" title="matthew-law-40659062" />
                <ListItem
                  icon="mdi-web"
                  title="mattlaw.dev"
                  class="d-none d-print-flex"
                />
              </v-list>
              <v-subheader class="title">Education</v-subheader>
              <v-list dense subheader class="pt-2">
                <ListItem
                  icon="mdi-school"
                  title="University of Newcastle upon Tyne"
                >
                  1st BSc Computer Science (Games Engineering) with Industrial
                  Placement
                  <ul class="mt-2">
                    <li>Web Technologies</li>
                    <li>Programming for Games</li>
                    <li>Graphics for Games</li>
                    <li>Computer Games Development</li>
                    <li>Database Technology</li>
                  </ul>
                </ListItem>
                <ListItem
                  icon="mdi-school-outline"
                  title="Notre Dame High School"
                >
                  3 A-Levels
                  <ul class="mt-2">
                    <li>Maths (A)</li>
                    <li>Physics (B)</li>
                    <li>ICT (B)</li>
                  </ul>
                </ListItem>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-subheader class="title">
            May '18 - present: Web Developer
          </v-subheader>
          <v-subheader class="font-italic">
            Solutions for Retail Brands (S4RB)
          </v-subheader>
          <p>
            My current role is that of Web Developer for a company providing
            online portals for supplier engagement. These portals collect and
            process supplier information such as products, complaints and sales
            from various sources including SFTP, REST APIs &amp; manual CSV
            uploads.
          </p>
          <p>
            When first starting in the job, my main role was maintaining a
            legacy application as well as developing new features. This provided
            a particular challenge due to the size of the application and it
            being multi-client frontend &amp; server within a single repository.
          </p>
          <p>
            I was heavily involved in the recent migration of legacy systems
            from AWS (and Heroku) to Azure. During this period, the team and I
            were responsible for creating as like-for-like services as possible
            so as to minimise the distruption of moving a monolythic application
            from Heroku and it's associated build processes to Azure.
          </p>
          <p>
            This involved the dockerisation of applications and creation of new
            build processes within the CircleCI environment, to replace the
            Heroku build pipelines previously in place
          </p>
          <p>
            Other responsibilities include the design and development of
            micro-services for the processing of data from multiple sources and
            creation of users &amp; data in multiple systems.
          </p>
          <p>
            This involved the use of Azure Service Bus Queues, Functions &amp;
            Logic Apps to retrieve, process and post data to multiple
            applications.
          </p>
          <v-subheader class="title">
            Aug '17 - Jun '18: Senior Engineer &amp; Technical Lead <br />
            Aug '15 - Aug '17: Graduate Engineer
          </v-subheader>
          <v-subheader class="font-italic">
            Systems Simulations &amp; Experimentation
          </v-subheader>
          <p>
            Starting in August 2015 I was on the Graduate Scheme working on
            Systems Simulations, creating distributed simulations of real world
            equipment for testing and training purposes. During this time I
            worked in multiple roles including Developer, Delivery Lead and,
            most recently, Technical Lead. I have also undertaken courses on
            Agile Fundamentals, Presentation Skills, Negotiation and Project
            Management.
          </p>
          <p>
            As Technical Lead I was responsible for the architecture &amp;
            design of the distributed systems required for 2 Testbeds, as well
            as being heavily involved in the development of the software
            components themselves.
          </p>
          <p>
            This involved co-ordinating across multiple pan-European teams to
            ensure the testing simulations were available as and when necessary
            for the real system integration events, including daily in-person
            reports to Chief Engineers.
          </p>
          <v-subheader class="title">
            Sep '09 - Jul '15
          </v-subheader>
          <v-subheader class="font-italic">
            University of Newcastle upon Tyne
          </v-subheader>
          <p>
            Stuff about uni
          </p>
          <v-subheader class="title">Personal Interests</v-subheader>
          <v-subheader class="font-italic">
            Projects
          </v-subheader>
          <p>
            I am a Software Developer currently working for Solutions for
            Retailer Brands on a range of web services. I enjoy developing
            applications, particular for the Web, both at work an in my spare
            time.
          </p>
          <v-subheader class="font-italic">
            Sports
          </v-subheader>
          <p>
            I have a keen interest in various technologies, and whilst most of
            my time at work is spent working in NodeJS and AngularJS, I have
            various personal projects that allow me to keep up to date with
            VueJS, .NET, React &amp; GraphQL. For instance my website is written
            in VueJS &amp; Gridsome, whilst I have projects open for a .NET Core
            GraphQL Movie API &amp; React front-end. All of which can be viewed
            on my GitHub account.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  metaInfo: { title: 'About me' },
  components: { ListItem },
  data() {
    return {
      skills: [
        { icon: 'mdi-language-csharp', text: 'C#' },
        { icon: 'mdi-dot-net', text: '.NET' },
        { icon: 'mdi-language-cpp', text: 'C++' },
        { icon: 'mdi-language-javascript', text: 'JavaScript' },
        { icon: 'mdi-language-typescript', text: 'TypeScript' },
        { icon: 'mdi-language-css3', text: 'CSS' },
        { icon: 'mdi-language-html5', text: 'HTML' },
        { icon: 'mdi-nodejs', text: 'NodeJS' },
        { icon: 'mdi-vuejs', text: 'VueJS' },
        { icon: 'mdi-vuetify', text: 'Vuetify' },
        { icon: 'mdi-react', text: 'React' },
        { icon: 'mdi-angular', text: 'Angular' },
        { icon: 'mdi-graphql', text: 'GraphQL' },
        { icon: 'mdi-kubernetes', text: 'Kubernetes' },
        { icon: 'mdi-docker', text: 'Docker' },
        { icon: 'mdi-database', text: 'MongoDB' },
        { icon: 'mdi-database', text: 'SQL' },
        { icon: 'mdi-database', text: 'Snowflake' },
        { icon: 'mdi-azure', text: 'Azure' },
        { icon: 'mdi-aws', text: 'AWS' },
        { icon: 'mdi-cloud-outline', text: 'DigitalOcean' },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  color: black !important;
}

h2,
h3 {
  text-decoration: underline;
  text-decoration-color: #5f9ea0;
}

.v-subheader {
  height: inherit;
  min-height: 48px;
}

@media print {
  .side {
    width: 40%;
    float: right;
  }
}
</style>
