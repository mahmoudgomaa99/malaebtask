import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';
import useSvgSize from 'hooks/useSvgSize';
import COLORS from 'values/colors';

const WIDTH = 400;
const HEIGHT = 400;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 24 24" fill="none" {...props}>
      <G id="Interface / Check_Big">
        <Path
          id="Vector"
          d="M4 12L8.94975 16.9497L19.5572 6.34326"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
export default SvgComponent;
