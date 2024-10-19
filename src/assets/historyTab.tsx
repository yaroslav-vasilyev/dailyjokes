import * as React from "react"
import Svg, { Mask, Path, G, Circle, SvgProps } from "react-native-svg"

function HistoryTab(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={28}
      >
        <Path fill="#D9D9D9" d="M0 0H28V28H0z" />
      </Mask>
      <G mask="url(#a)" stroke={props.color ?? "#9763FF"} strokeWidth={2}>
        <Circle cx={14} cy={14} r={11} />
        <Path d="M14 9v5h4" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
}

export default HistoryTab;

