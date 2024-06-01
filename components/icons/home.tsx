import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Home = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 19v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6M3 10H1l9-9 9 9h-2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z"
    />
  </Svg>
);

export default Home;
