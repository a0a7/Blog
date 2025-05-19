<script>
  import Card from './Card.svelte';
  export let post;
</script>

<Card>
  <span slot="title">{post.title}</span>
  <span slot="date">{@html post.preview.html}</span>
</Card>