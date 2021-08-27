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