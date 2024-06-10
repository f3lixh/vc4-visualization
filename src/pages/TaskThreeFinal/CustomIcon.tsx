import React, {useState} from 'react';
import { ScatterProps } from 'recharts';
import jp from "../../img/a32/jp_car.svg"
import us from "../../img/a32/us_car.svg"
import eu from "../../img/a32/eu_car.svg"


const originToIcon = {
    American: us,
    European: eu,
    Japanese: jp
};

const CustomIcon: React.FC<ScatterProps & { payload: any }> = (props) => {
    const { cx, cy, payload } = props;
    // @ts-ignore
    const icon = originToIcon[payload.Herkunft];
    const [focused, setFocused] = useState<boolean>(false);
    const iconSize = 24;


    const handleClick = () => {
        setFocused(true)
    }

    if (!icon) return null;

    return (
        <image
            // @ts-ignore
            x={cx - iconSize/2}
            // @ts-ignore
            y={cy - iconSize/2}
            width={iconSize}
            height={iconSize}
            href={icon}
            style={{zIndex: focused ? 9999 : "inherit"}}
            onClick={() => handleClick()}
        />
    );
};

export default CustomIcon;
