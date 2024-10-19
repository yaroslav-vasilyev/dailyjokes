import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ShareIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <Path
        fill="#222"
        d="M6.54 55.08a1.91 1.91 0 01-.62-.1 2 2 0 01-1.38-2c0-.3 2.06-29.34 31.18-31.62V10.92a2 2 0 013.43-1.4l19.74 20.16a2 2 0 010 2.8L39.15 52.64a2 2 0 01-3.43-1.4V41c-19.44.74-27.41 13-27.49 13.15a2 2 0 01-1.69.93zm33.18-39.26v7.41a2 2 0 01-1.93 2c-18.84.69-25.58 13.24-28 21.31 5-4.32 13.91-9.6 27.81-9.6h.09a2 2 0 012 2v7.41l15-15.26z"
      />
    </Svg>
  );
}

export default ShareIcon;
