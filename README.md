# soli-rev.github.io

Anonymous Astro/Fuwari-based blog for `soli-rev`.

## Local setup

Use the repository-local Git identity only:

```bash
git config user.name "soli-rev"
git config user.email "297184420+soli-rev@users.noreply.github.com"
```

The intended remote is:

```bash
git@github.com-soli-rev:soli-rev/soli-rev.github.io.git
```

## Development

```bash
pnpm install
pnpm dev
pnpm build
```

The site is published at `https://soli-rev.github.io/`. Because this is a GitHub Pages user site, `astro.config.mjs` sets `site` but does not set `base`.

## Writing

Posts live in `src/content/posts/`.

Default Chinese posts use:

```yaml
lang: zh
translationKey: stable-post-key
translatedFrom: null
```

English translations use `/en/posts/...` automatically when `lang: en` is set. Reuse the same `translationKey` to link asynchronous translations:

```yaml
lang: en
translationKey: stable-post-key
translatedFrom: original-slug
```

## Comments

Comments use giscus with the public repository `soli-rev/blog-comments`.

After creating that repository, enabling GitHub Discussions, creating the `Comments` category, and installing the giscus app, fill:

```bash
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY_ID=
```

Use `.env.example` locally and GitHub Actions repository variables for deployment.
