import { crossfade, fade } from 'svelte/transition';

const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback: fade,
});

export { send, receive };
