import React, { ReactNode } from 'react';

export type ImageWidgetProps = {
  /**
   * a node to be rendered in the special component.
   */
  link?: string;
  src?: string;
  alt?: string;
  objectFit?: any;
};

export function ImageWidget({
  link = '#',
  src = 'https://picsum.photos/0/0',
  alt = 'ImageWidget',
  objectFit = 'contain',
}: ImageWidgetProps) {
  return (
    <a
      href={link}
      onClick={(e) => {
        if (link === "#") {
          e.preventDefault();
          return false;
        }
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        cursor: link === "#" ? 'default' : 'pointer',
      }}>
      <div
        style={{
          height: 'auto',
          width: 'auto',
        }}
      >
        <img
          src={src}
          alt={`img-widget-${alt}`}
          style={{
            height: '100%',
            width: '100%',
            objectFit: objectFit,
          }}
        />
      </div>
    </a>
  );
}
