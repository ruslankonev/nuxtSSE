<template>
  <div>
    Nuxt module playground!

    <p
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item }}
    </p>
  </div>
</template>

<script setup>
const data = ref([]);
if (process.client) {
  const evt = useServerEventsClient("123")

  evt.onmessage = (msg) => {
    data.value.push(msg.data)
  }
  evt.addEventListener('someEvent', (msg) => {
    console.log(msg.data)
  })
}
</script>
