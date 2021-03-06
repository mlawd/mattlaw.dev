<script>
</script>

<svelte:head>
  <title>Matt Law: Software engineer, technical leader, agile enthusiast</title>
</svelte:head>

<div class="h-screen hero sm:bg-cover">
  <div class="hero__text">
    <h1>mattlaw.dev</h1>
    <h2>software.engineer</h2>
    <ul class="pl-0 text-secondary font-bold">
      <li>projects</li>
      <li>blog</li>
      <li>me</li>
    </ul>
  </div>
</div>

<style>
  .hero {
    background-image: linear-gradient(
        90deg,
        rgba(61, 64, 91, 0.7) 0%,
        rgba(61, 64, 91, 0.3) 100%
      ),
      url('/img/me.jpeg');

    background-position: 60% 40%;
  }

  .hero__text {
    width: 298px;
    margin: auto;
    padding-top: 88px;
  }

  @screen md {
    .hero__text {
      width: 950px;
    }
  }
</style>
