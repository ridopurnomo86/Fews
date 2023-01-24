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
  <div>
    <slot />
  </div>
</template>

<script setup>
import "~~/assets/css/tailwind.css";
</script>
