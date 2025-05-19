<script lang="ts">
  import svelteTilt from 'vanilla-tilt-svelte';
</script>

<div 
  class="bg-glassomorphism md:w-[30rem] flex-1 p-4 overflow-x-visible transition-transform border-2 border-dotted border-gray-300" 
  use:svelteTilt={{
    max: 15,
    perspective: 1500,
    scale: 1.05,
    speed: 500,
    glare: true,
    "max-glare": 0.1,
    "glare-prerender": false,
    gyroscope: true,
  }}
>
  <h2 class="text-l md:text-xl font-bold text-fuchsia-50 font-varela">
    <slot name="title" />
  </h2>
  <p class="text-sm text-fuchsia-50 font-varela opacity-85">
    <slot name="date" />
  </p>
</div>