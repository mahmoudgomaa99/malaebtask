import * as React from 'react';
import Svg, {Defs, Ellipse, G, Path} from 'react-native-svg';
import {TSvgProps} from '..';
import useSvgSize from 'hooks/useSvgSize';
import COLORS from 'values/colors';

const WIDTH = 400;
const HEIGHT = 400;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      {...computedSize}
      viewBox="0 0 24 24"
      {...props}>
      <Defs></Defs>
      <G id="Icons">
        <Path
   
          d="M23,12A11,11,0,0,1,1,12a10.827,10.827,0,0,1,.29-2.5,11,11,0,0,1,21.42,0A10.827,10.827,0,0,1,23,12Z"
        />
        <Ellipse  cx={12} cy={9.5} rx={10.71} ry={8.5} />
      </G>
      <G data-name="Layer 4" id="Layer_4">
        <Path
          d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
        />
        <Path
          d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z"
        />
      </G>
    </Svg>
  );
}
export default SvgComponent;
