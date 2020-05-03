<template>
  <div>
    <transition name="fade" appear>
      <slot />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from '../components/SizeBar.vue';

export default Vue.extend({
  components: { SideBar },
});
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}
</style>
