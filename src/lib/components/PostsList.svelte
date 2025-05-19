<script>
  import PostPreview from '$lib/components/PostPreview.svelte';
  import PostDate from '$lib/components/PostDate.svelte';

  export let posts;
</script>

<div class="flex flex-col md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
  {#each posts as post}
    <article class="pl-6 py-4 pr-2 rounded-xl grid items-start grid-cols-4 gap-6 ">
      <PostDate class="flex-col hidden md:flex text-sm" {post} />

      <div class="col-span-4 md:col-span-3">
        <PostPreview {post}>
          <slot slot="eyebrow">
            <PostDate class="md:hidden" {post} collapsed decorate />
          </slot>
        </PostPreview>
      </div>
    </article>
  {/each}
</div>
