<script>
  import '../app.css'
  import '../prism.css'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'
  import { browser } from '$app/environment'
  import { name } from '$lib/info'
  import { page } from '$app/stores'
  import svelteTilt from 'vanilla-tilt-svelte';

  let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
    let waveSrc = "wave.png";
  let waveInterval;

  function startWaveSwitch() {
    let toggle = false;
    waveInterval = setInterval(() => {
      waveSrc = toggle ? "wave.png" : "wave2.png";
      toggle = !toggle;
    }, 100); // Switch every 80ms
  }

  function stopWaveSwitch() {
    clearInterval(waveInterval);
    waveSrc = "wave.png";
  }
</script>
<img src="wave2.png" alt="" style="display:none" />

<div class="flex flex-col min-h-screen w-full items-center justify-center">
  <!-- Floating Glassmorphism Navbar -->
  <nav
    class="fixed top-6 mx-auto z-50 bg-glassomorphism rounded-2xl shadow-xl px-8 py-3 flex items-center gap-6 max-w-2xl md:w-2/3"
    use:svelteTilt={{
      max: 5,
      perspective: 1500,
      scale: 1.05,
      speed: 500,
      glare: true,
      "max-glare": 0.05,
      "glare-prerender": false,
      gyroscope: true,
    }}
  >
    <div class="flex w-full items-center justify-between text-[#deeedf] cursor-pointer text-shadow-xl/20">
      <a  
      on:mouseenter={startWaveSwitch}
      on:mouseleave={stopWaveSwitch} 
      href="/" class="font-mastery text-sm font-thin tracking-wide flex-shrink-0 saturate-[.45] -ml-4"><img src={waveSrc} class="h-8" alt="funny waving emoji"></a>
      <div class="flex gap-6 overflow-x-auto whitespace-nowrap pl-5  font-mastery text-sm font-thin underline">
        <a href="/bio" class="flex-shrink-0">bio</a>
        <a href="https://a0.ax/?a=x" class="flex-shrink-0 ">projects</a>
        <a href="/journal" class="flex-shrink-0 ">notes</a>
      </div>
    </div>
  </nav>
  <div class="flex flex-col flex-grow w-full px-4">
    <main
      class="flex flex-col flex-grow w-full mx-auto"
      class:max-w-2xl={!$page.data.layout?.fullWidth}
    >
      <slot />
    </main>
  </div>
</div>