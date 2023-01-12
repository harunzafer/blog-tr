<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<article class="mb-4">
  <div class="post-header"><h1>{data.title}</h1>
    
  </div>
	
	
	<svelte:component this={data.content} />

  <p>{data.dateStr} tarihinde yayınlandı.</p>
</article>
