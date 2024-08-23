import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DhavalDudheliya" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/dhaval-dudheliya-28b78b1b8",
  },
  { icon: <FaTwitter />, path: "https://x.com/Dhaval_1364" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/dhaval___.here/" },
];

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
