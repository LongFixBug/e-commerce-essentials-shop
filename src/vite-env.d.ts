// src/vite-env.d.ts

/// <reference types="vite/client" />

// Thêm đoạn khai báo này
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      url: string;
    }, HTMLElement>;
  }
}