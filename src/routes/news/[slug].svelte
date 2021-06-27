<script context='module'>

  export const prerender = true;

  export async function load({ page }) {
    const Headline = await import(`../../content/news/${page.params.slug}.md`);
    return {
      props: {
        title: Headline.metadata.title,
        description: Headline.metadata.description,
        image: Headline.metadata.image,
        Headline: Headline.default,
      }
    };
  };
</script>

<script>
  import Container from '$lib/Container.svelte';
  import Article from '$lib/Article.svelte';

  export let title;
  export let description;
  export let image;
  export let Headline;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Container>
  <Article
    title={title}
    description={description}
    image={image}
    content={Headline}
  />
</Container>