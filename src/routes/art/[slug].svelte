<script context='module'>

  export const prerender = true;

  export async function load({ page }) {
    const Piece = await import(`../../content/art/${page.params.slug}.md`);
    return {
      props: {
        title: Piece.metadata.title,
        description: Piece.metadata.description,
        image: Piece.metadata.image,
        Piece: Piece.default,
      }
    }
  }
</script>

<script>
  import Container from '$lib/Container.svelte';
  import Article from '$lib/Article.svelte';

  export let title;
  export let description;
  export let image;
  export let Piece;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Container>
  <Article
    title={title}
    description={description}
    image={image}
    content={Piece}
  />
</Container>