<script>
	export let data;
</script>

{#each data.posts as post}
	<div class="post-preview">
		<a href={post.path}>
			<h2 class="post-title">{post.meta.title}</h2>
			<h3 class="post-subtitle">{post.meta.subtitle}</h3>
		</a>
		<p class="post-meta">
			Posted by
			<a href="#!">Start Bootstrap</a>
			on {post.meta.date}
		</p>
	</div>
	<!-- Divider-->
	<hr class="my-4" />
{/each}
