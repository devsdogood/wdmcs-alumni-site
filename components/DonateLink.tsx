interface DonateLinkProps {
  link: string
}

export const DonateLink: React.FC<DonateLinkProps> = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="bg-orange-500
       hover:bg-orange-700/75 
       hover:text-white 
       cursor-pointer 
       rounded-full 
       px-3 py-2 
       text-2xl 
       no-underline"
    >
      {props.children}
    </a>
  );
};

export default DonateLink;
