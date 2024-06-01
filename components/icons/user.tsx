import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const User = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.7 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M8.7 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
    />
  </Svg>
);

export default User;
