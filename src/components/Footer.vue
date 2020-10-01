<template>
  <q-footer v-if="$q.screen.lt.md" bordered class="bg-white text-primary">
    <q-toolbar>
      <q-btn flat icon="home" color="teal" class="q-mr-sm" />
      <q-space />
      <q-btn flat  color="orange" icon="description" />
      <q-space />
      <q-btn flat icon="person_pin" color="teal" class="q-mr-sm" />
    </q-toolbar>
  </q-footer>
</template>

<style>
</style>

<script>
export default {
  name: 'Footer'
}
</script>
