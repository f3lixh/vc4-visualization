import React from 'react';
import { ScatterProps } from 'recharts';
import jp from "../../img/a32/jp_car.svg"
import us from "../../img/a32/us_car.svg"
import eu from "../../img/a32/eu_car.svg"
import CustomSVGIcon from "../../components/CustomSVGIcon/CustomSVGIcon";


const originToIcon = {
    American: us,
    European: eu,
    Japanese: jp
};

interface CustomIconProps extends ScatterProps {
    payload: any;
    iconMode: 'origin' | 'colored';
    x: number;
    y: number;
}

const getColor = (value: number, min: number, max: number) => {
    const ratio = (value - min) / (max - min);
    const red = Math.min(255, Math.floor(255 * ratio));
    const green = Math.min(255, Math.floor(255 * (1 - ratio)));
    return `rgb(${red},${green},0)`;
};

const CustomIcon: React.FC<CustomIconProps> = (props) => {
    const { cx, cy, payload, iconMode, y } = props;
    // @ts-ignore
    const icon = originToIcon[payload.Herkunft];
    const iconSize = 24;


    if (iconMode === 'origin' && icon) {
        return (
            <image
                // @ts-ignore
                x={cx - iconSize/2}
                // @ts-ignore
                y={cy - iconSize/2}
                width={iconSize}
                height={iconSize}
                href={icon}

            />
        );
    }

    // @ts-ignore
    const color = getColor(payload[y], props.yAxis.originalDomain[0], props.yAxis.originalDomain[1]);

    return (
        // @ts-ignore
        <foreignObject x={cx - iconSize / 2} y={cy - iconSize / 2} width={iconSize} height={iconSize}>
            <CustomSVGIcon color={color} />
        </foreignObject>
    );
};

export default CustomIcon;
