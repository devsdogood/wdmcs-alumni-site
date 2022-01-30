import React, {useState, useEffect} from 'react';

interface Props {
    from : number,
    to : number,
    steps: number,
    delay: number
}

export const NumberScroller: React.FC<Props> = (props) => {
    const [current, setCurrent] = useState(props.from);

    useEffect(() => {
        const numberIncrementor = (currentNumber: number) => {
            if(currentNumber !== props.to) {
                setTimeout(() => {
                    const incrementAmount = (props.to - props.from) / props.steps;
                    //console.log(incrementAmount + " at " + props.to + " to " + props.from + " steps: " + props.steps);
                    var newValue = Math.round(currentNumber + incrementAmount);
                    newValue = Math.min(newValue, props.to);

                    numberIncrementor(newValue);

                    setCurrent(newValue);
                }, 10);
            }
        }

        // if(current < props.to) {
        //     const difference = props.to - current;
        //     const incrementAmount = (1 / difference) + 3;
        //     setCurrent(Math.round(current + incrementAmount));

        //     if(current > props.to) {
        //         setCurrent(props.to);
        //     }
        // }

        setTimeout(numberIncrementor, current, props.delay);
    }, []);

    return (
        <span>{current}</span>
    )
}