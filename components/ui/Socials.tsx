import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <Link key={index} href={social.path} target="_blank">
            <motion.p
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                // delay: (index + 1) / 10 - 1 + 0.3,
                delay: 1.5 - (index + 1) / 20,
                duration: 0.5,
              }}
              className={iconStyles}
            >
              {social.icon}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
