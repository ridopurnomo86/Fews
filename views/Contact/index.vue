<template>
  <main class="mx-auto container min-h-screen">
    <div class="flex items-center justify-center flex-col py-10">
      <h1 class="font-bold text-4xl text-black mb-2">Contact our friendly team</h1>
      <p class="font-medium text-base text-neutral-600 antialiased">Let us how we can help.</p>
    </div>
    <div class="grid grid-cols-fluid gap-4">
      <article class="border rounded-md p-8">
        <div class="border rounded inline p-2 items-center">
          <Icon :name="'heroicons:chat-bubble-bottom-center-text'" size="24px" />
        </div>
        <p class="font-semibold text-base text-black antialiased mb-4 mt-16">Chat to sales</p>
        <p class="font-medium text-sm text-neutral-600 antialiased">Speak to our friendly team.</p>
        <NuxtLink
          to="#"
          class="cursor-pointer font-semibold text-sm text-black antialiased underline"
          >sales@fews.com</NuxtLink
        >
      </article>
      <article class="border rounded-md p-8">
        <div class="border rounded inline p-2 items-center">
          <Icon :name="'humbleicons:chats'" size="24px" />
        </div>
        <p class="font-semibold text-base text-black antialiased mb-4 mt-16">Chat to support</p>
        <p class="font-medium text-sm text-neutral-600 antialiased">We're here to help.</p>
        <NuxtLink
          to="#"
          class="cursor-pointer font-semibold text-sm text-black antialiased underline"
          >support@fews.com</NuxtLink
        >
      </article>
      <article class="border rounded-md p-8">
        <div class="border rounded inline p-2 items-center">
          <Icon :name="'heroicons:map-pin'" size="24px" />
        </div>
        <p class="font-semibold text-base text-black antialiased mb-4 mt-16">Visit Us</p>
        <p class="font-medium text-sm text-neutral-600 antialiased">Visit our office HQ.</p>
        <NuxtLink
          to="#"
          class="cursor-pointer font-semibold text-sm text-black antialiased underline"
          >View on Google Maps.</NuxtLink
        >
      </article>
      <article class="border rounded-md p-8">
        <div class="border rounded inline p-2 items-center">
          <Icon :name="'humbleicons:phone'" size="24px" />
        </div>
        <p class="font-semibold text-base text-black antialiased mb-4 mt-16">Call Us</p>
        <p class="font-medium text-sm text-neutral-600 antialiased">Mon-Fri 8am to 6pm</p>
        <NuxtLink
          to="#"
          class="cursor-pointer font-semibold text-sm text-black antialiased underline"
          >+62 881 9898 7865</NuxtLink
        >
      </article>
    </div>
  </main>
</template>
