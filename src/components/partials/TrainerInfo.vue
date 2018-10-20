<template>
<div>
  <div>
      {{trainer.name}}
  </div>
  <div>
      {{trainer.description}}
  </div>
</div>
</template>

<script>
export default {
  props: ['trainer']
}
</script>

