<template>
  <map-component/>
</template>

<script>
import MapComponent from '@src/components/partials/MapComponent'

export default {
  components: {
    MapComponent
  },
  created() {
    console.log("test")
  }
}
</script>