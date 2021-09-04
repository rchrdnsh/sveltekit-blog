import abbr from 'remark-abbr';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';
import headings from './src/lib/utilities/headings.js';

const config = {
  extensions: ['.svx', '.md', '.svelte.md'],
  layout: './src/lib/MDLayout.svelte',
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [
    abbr,
    headings()
  ],
  rehypePlugins: [
    slug,
    [ autolink, { behavior: 'wrap' } ]
  ]
};

export default config;