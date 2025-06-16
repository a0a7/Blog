<script>
  import { assets } from '$app/paths';
  import { onMount } from 'svelte';
  
  const imageFiles = [
    "pump.jpg",
    "floor.jpg",
    "stcloud.JPEG",
    "snow.jpg",
    "jeff.jpg",
    "helmet.png",
    "wob.JPEG",
    "bild.png",
    "interstate.JPEG",
  ];
    let container;
  let images = [];
  let isDragging = false;
  let dragIndex = -1;
  let dragOffset = { x: 0, y: 0 };
    const friction = 0.975;
  const repulsion = 300;
  const verticalSpacing = 100;    onMount(() => {
    const containerRect = container.getBoundingClientRect();
    const containerWidth = Math.min(containerRect.width, 9999);    images = imageFiles.map((file, index) => ({
      id: index,
      x: containerWidth * 0.25 + Math.random() * (containerWidth * 0.4),
      y: 20 + (index * verticalSpacing) + Math.random() * 50,
      vx: 0,
      vy: 0,
      rotation: (Math.random() - 0.5) * 20,
      scale: 0.9 + Math.random() * 0.2,
      element: null
    }));
    
    const animate = () => {
      updatePhysics();
      requestAnimationFrame(animate);
    };
    animate();
  });
    function updatePhysics() {
    if (isDragging || !container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerWidth = Math.min(containerRect.width, 9999);
    
    for (let i = 0; i < images.length; i++) {
      for (let j = i + 1; j < images.length; j++) {
        const dx = images[j].x - images[i].x;
        const dy = images[j].y - images[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 0 && distance < 220) {
          const force = repulsion / Math.max(distance, 50);
          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force * 0.5;
          
          images[i].vx -= fx * 0.05;
          images[i].vy -= fy * 0.05;
          images[j].vx += fx * 0.05;
          images[j].vy += fy * 0.05;
        }
      }
      
      images[i].vx *= friction;
      images[i].vy *= friction;
      
      images[i].x += images[i].vx;
      images[i].y += images[i].vy;      const margin = 50;
      const imageWidth = 400;
      if (images[i].x < -margin) {
        images[i].x = -margin;
        images[i].vx = Math.abs(images[i].vx) * 0.3;
      }
      if (images[i].x > containerWidth + margin) {
        images[i].x = containerWidth + margin;
        images[i].vx = -Math.abs(images[i].vx) * 0.3;
      }      if (images[i].y < 20) {
        images[i].y = 20;
        images[i].vy = Math.abs(images[i].vy) * 0.3;
      }
    }
    
    images = images;
  }  function handleMouseDown(event, index) {
    isDragging = true;
    dragIndex = index;
    
    dragOffset.x = event.clientX - images[index].x;
    dragOffset.y = event.clientY - images[index].y;
    
    images[index].vx = 0;
    images[index].vy = 0;
    
    event.preventDefault();
  }  function handleMouseMove(event) {
    if (!isDragging || dragIndex === -1) return;
    
    images[dragIndex].x = event.clientX - dragOffset.x;
    images[dragIndex].y = event.clientY - dragOffset.y;
    images = images;
    
    event.preventDefault();
  }
  
  function handleMouseUp() {
    isDragging = false;
    dragIndex = -1;
  }
</script>

<svelte:head>
  <title>Scrapbook</title>
</svelte:head>

<svelte:window on:mousemove={handleMouseMove} on:mouseup={handleMouseUp} />

<div 
  class="w-screen mx-auto relative pb-32" 
  bind:this={container}
  style="cursor: {isDragging ? 'grabbing' : 'default'}; min-height: {Math.max(1000, images.length * verticalSpacing + 600)}px;"
>{#each images as image, i}
    <div 
      class="absolute select-none"
      style="
        left: {image.x}px;
        top: {image.y}px;
        transform: rotate({image.rotation}deg) scale({image.scale});
        transform-origin: 50% 50%;
        cursor: {isDragging && dragIndex === i ? 'grabbing' : 'grab'};
        z-index: {isDragging && dragIndex === i ? 1000 : 1};
        will-change: transform;
      "
      on:mousedown={(e) => handleMouseDown(e, i)}
    >
      <div class="bg-white p-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">        <img 
          src="{assets}/img/{imageFiles[i]}" 
          alt="Scrapbook memory {i + 1}"
          class="w-64 h-auto object-contain pointer-events-none block"
          loading="lazy"
          on:error={(e) => e.target.style.display = 'none'}
          draggable="false"
        />
      </div>
    </div>
  {/each}
</div>
<style>
  :global(body) {
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
</style>