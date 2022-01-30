interface AnimatedProgressBarProps {
    width: number,
    from: number,
    to: number
}

import React, {useEffect, useState} from "react";

export const AnimatedProgressBar : React.FC<AnimatedProgressBarProps> = (props) => {
    const [value, setValue] = React.useState(props.from);

    React.useEffect(() => {
        setValue(props.to * props.width);
    });

    return (
        <div style={{width: props.width}}>
            <div className="delay-1000 duration-1000" style={{width: `${value}px`}}></div>
        </div>
    )
}

export default AnimatedProgressBar;