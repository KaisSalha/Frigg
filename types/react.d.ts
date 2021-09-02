import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      heading: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    pubdate?: string;
  }
}
