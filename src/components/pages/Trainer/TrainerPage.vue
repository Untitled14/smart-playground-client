<template>
  <div>
    <map-component/>
    <router-view/>
  </div>
</template>

<script>
import MapComponent from '@src/components/partials/MapComponent'

export default {
  components: {
    MapComponent
  }
}
</script>
