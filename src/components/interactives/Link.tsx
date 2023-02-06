import LinkIcon from "../../assets/icon-website.svg";

interface Props {
  link?: string;
}

export const Link = ({ link }: Props) => {
  return (
    <div className={`${!link && "opacity-50"} flex items-center gap-4`}>
      <img src={LinkIcon} alt="link" />
      <a
        className="text-custom-navi-blue-600 hover:underline dark:text-white"
        href={link}
      >
        {link ?? "Not Available"}
      </a>
    </div>
  );
};
