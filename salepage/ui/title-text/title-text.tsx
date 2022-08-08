import React, { ReactNode } from 'react';

export type TitleTextProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  tagColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: any;
  textTransform?: any;
};

export function TitleText({ children,
  tagColor = '#1DCAB4',
  color = '#2A2C2D',
  fontSize = '16px',
  fontWeight = 'normal',
  textTransform = 'none',
}: TitleTextProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: 'auto', }}>
      <div style={{
        height: 'auto',
        width: '6px',
        marginRight: '8px',
        backgroundColor: tagColor,
      }}
      />
      <h1
        style={{
          margin: '0px',
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textTransform: textTransform,
        }}
      >
        {children}
      </h1>
    </div>
  );
}
