<script context='module'>

  export const prerender = true;

  export async function load({ page }) {
    const Post = await import(`../../content/blog/${page.params.slug}.md`);
    return {
      props: {
        title: Post.metadata.title,
        description: Post.metadata.description,
        icon: Post.metadata.icon,
        Post: Post.default,
      }
    }
  }
</script>

<script>
  import Container from '$lib/Container.svelte';
  import Article from '$lib/Article.svelte';

  export let title;
  export let description;
  export let icon;
  export let Post;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Container>
  <Article
    title={title}
    description={description}
    icon={icon}
    content={Post}
  />
</Container>