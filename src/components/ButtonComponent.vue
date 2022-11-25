<script>
export default {
  props: ['type', 'btn'],
};
</script>

<template>
  <button :class="'btn btn--' + type + 'btn--' + btn"><slot /></button>
</template>
