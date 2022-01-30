export enum ChevronDirection {
  Up,
  Down,
}

export interface ChevronTransitionProps {
  height: number;
  chevronBias: number;
  className: string;
  chevronDirection: ChevronDirection;
}

const ChevronTransition: React.FC<ChevronTransitionProps> = (props) => {
  // calculate the bottom of the chevron.
  // when the chevron is supposed to be up, this is the actual bottom, when its supposed
  // to point down, this is actually the top
  // see css clip path for more: https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
  const chevronBottom = props.chevronDirection == ChevronDirection.Up ? 0 : 100;

  // opposite of chevron bottom, see above.
  const chevronTop = props.chevronDirection == ChevronDirection.Up ? 100 : 0;

  return (
    <div
      style={{
        height: props.height,
        WebkitClipPath: "polygon(100% " + chevronBottom + "%, 0 " + chevronBottom + "%, " + props.chevronBias + "% " + chevronTop + "%)",
        clipPath: "polygon(100% " + chevronBottom + "%, 0 " + chevronBottom + "%, " + props.chevronBias + "% " + chevronTop + "%)",
      }}
      className={props.className + " w-full absolute bottom-0"}
    ></div>
  );
};

export default ChevronTransition;
