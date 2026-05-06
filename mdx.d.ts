declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  const ReactComponent: (props: MDXProps) => React.JSX.Element;
  export default ReactComponent;
}
