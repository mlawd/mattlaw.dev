<script>
</script>

<svelte:head>
  <title>Matt Law: Software engineer, technical leader, agile enthusiast</title>
</svelte:head>

<div class="h-screen hero sm:bg-cover">
  <div class="hero__text">
    <h1 class="mb-0 fade-right wait-2">mattlaw.dev</h1>
    <h2 class="mt-0 fade-left wait-2">software.engineer</h2>
    <h2 class="mt-0 fade-left wait-3">technical.lead</h2>
    <h2 class="mt-0 fade-left wait-4">agile.fanatic</h2>

    <ul class="pl-0 text-secondary font-bold">
      <li><a href="/" class="fade-down wait-6">.projects</a></li>
      <li><a href="/blog" class="fade-down wait-7">.blog</a></li>
      <li><a href="/" class="fade-down wait-8">.me</a></li>
    </ul>
  </div>
</div>

<style lang="scss">
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
    margin: auto;
    padding-top: 88px;
    max-width: 300px;
  }

  @screen sm {
    .hero__text {
      max-width: 400px;
    }
  }

  @screen md {
    .hero__text {
      max-width: 600px;
    }
  }

  @keyframes fadein {
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  .fade-down {
    animation: fadein 0.5s forwards;
    opacity: 0;
    transform: translateY(-20px);
  }

  .fade-left {
    animation: fadein 0.5s forwards;
    opacity: 0;
    transform: translateX(20px);
  }

  .fade-right {
    animation: fadein 0.5s forwards;
    opacity: 0;
    transform: translateX(-20px);
  }

  @for $i from 1 through 10 {
    .wait-#{$i} {
      animation-delay: $i * 0.1s;
    }
  }

  ul {
    margin: 0 -5px;
    li {
      position: relative;
      display: table;
      margin: 0 5px;

      &:after {
        content: ' ';
        background-color: #3d405b;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0px;
        z-index: 0;

        transition: height 0.2s;
      }

      &:hover {
        &:after {
          height: 10px;
        }
      }

      a {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
