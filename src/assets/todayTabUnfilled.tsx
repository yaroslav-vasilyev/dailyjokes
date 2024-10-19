import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TodayTabUnfilled(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Path
        d="M4.004 15.841L14.771 3.418c.424-.49 1.229-.19 1.229.459V10.3a.7.7 0 00.7.7h6.767a.7.7 0 01.529 1.159L13.229 24.581c-.424.49-1.229.19-1.229-.459V17.7a.7.7 0 00-.7-.7H4.533a.7.7 0 01-.529-1.159z"
        stroke="#C1C3C6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TodayTabUnfilled;
