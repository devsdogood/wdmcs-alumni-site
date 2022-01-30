interface DonateLinkProps {
    link: string
  }
//  Donation button component in navbar
  export const DonateButton: React.FC<DonateLinkProps> = (props) => {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="
        mb-2 
        py-2 
        px-2 
        font-medium 
        text-white 
        bg-orange-500 
        rounded 
        hover:bg-orange-400 
        transition duration-300"
      >
        {props.children}
      </a>
    );
  };
  
  export default DonateButton;
  