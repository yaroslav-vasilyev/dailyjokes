import * as React from "react"
import Svg, { Mask, Path, G, SvgProps } from "react-native-svg"

function LikeUnfilled(props: SvgProps) {
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
      <G mask="url(#a)">
        <Path
          d="M13.067 23.62l-.017-.015-2.07-1.868s0 0 0 0a80.409 80.409 0 01-5.673-5.64h0C3.74 14.37 3 12.521 3 10.525c0-1.606.533-2.897 1.593-3.945C5.653 5.53 6.965 5 8.6 5c.915 0 1.769.19 2.572.57.816.387 1.502.91 2.068 1.572a1 1 0 001.52 0 6.145 6.145 0 012.068-1.571A5.93 5.93 0 0119.4 5c1.635 0 2.946.531 4.007 1.58C24.467 7.628 25 8.92 25 10.525c0 1.998-.738 3.853-2.295 5.592-1.671 1.866-3.574 3.748-5.709 5.644h0l-.006.005-2.04 1.839-.017.016c-.279.264-.575.379-.933.379-.358 0-.654-.116-.933-.38z"
          stroke="#9763FF"
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default LikeUnfilled;
