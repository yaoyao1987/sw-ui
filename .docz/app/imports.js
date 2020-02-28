export const imports = {
  'src/components/Alert/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-alert-index" */ 'src/components/Alert/index.mdx'
    ),
  'src/components/Button/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'
    ),
  'src/components/Empty/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-empty-index" */ 'src/components/Empty/index.mdx'
    ),
  'src/components/Tag/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-tag-index" */ 'src/components/Tag/index.mdx'
    ),
}
