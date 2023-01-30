<template>
  <Head>
    <Meta charset="UTF-8" />
    <Meta :x-ua-compatible="'X-UA-Compatible'" content="IE=edge" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <div>
    <Navbar />
  </div>

  <!-- Children -->
  <div class="min-h-screen">
    <slot />
  </div>

  <Footer />
</template>

<script setup>
import Footer from "~~/components/Footer/index.vue";
</script>
