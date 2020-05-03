<template>
  <span>
    <g-link
      class="icon"
      v-if="to"
      :to="to"
      :target="target"
      :aria-label="ariaLabel"
      :role="role"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :height="size"
        :width="size"
        viewBox="0 0 24 24"
        role="img"
        :fill="color"
      >
        <path :d="path" />
      </svg>
      <span>
        <slot />
      </span>
    </g-link>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      :height="size"
      :width="size"
      viewBox="0 0 24 24"
      role="img"
      :fill="color"
    >
      <path :d="path" />
    </svg>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    size: { type: String, default: '36px' },
    path: { type: String, required: true },
    color: { type: String, default: 'black' },
    to: { type: String },
    target: { type: String },
    ariaLabel: { type: String },
    role: { type: String },
  },
});
</script>

<style lang="scss" scoped>
$transition: 0.2s;

a {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: $transition;

  svg {
    margin: 5px;
    transition: $transition;
  }

  &:hover {
    color: var(--accent);
    svg {
      fill: var(--accent);
    }
  }
}
</style>
