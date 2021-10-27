import { Containment, Wrapper } from "./SocialBar.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialBar = () => {
  return (
    <Containment>
      <Wrapper maxWidth="lg">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/cciscarsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="socialIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCFhc1C_3G9-xc5GLAnWsTdw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="socialIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCFhc1C_3G9-xc5GLAnWsTdw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="socialIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCFhc1C_3G9-xc5GLAnWsTdw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="socialIcon" />
            </a>
          </li>
        </ul>
      </Wrapper>
    </Containment>
  );
};

export default SocialBar;
