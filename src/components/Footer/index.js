import {
  BottomDiv,
  Containment,
  SocialMedia,
  TopDiv,
  Wrapper,
} from "./Footer.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Wrapper>
      <Containment maxWidth="lg">
        <TopDiv>
          <img src="images/csulogo.png" alt="csu logo" />
          <div id="address">
            <h5>Caraga State University</h5>
            <p>
              Caraga State University, Mechatronics Building, 2nd Floor Ampayon
              Butuan City, Philippines, 8600
            </p>
            <h6> 341-2296 local 123 | (+63)85-815-2352 | ccis@carsu.edu.ph </h6>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.178765822246!2d125.5978205!3d8.955669499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301eac54631c2af%3A0xfa9166537d3cfd63!2sMechatronics%20Building!5e0!3m2!1sen!2sph!4v1635334178643!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </TopDiv>
        <BottomDiv>
          <li>
            <a href="#">Website</a>
          </li>
          <li>
            <a href="#">Admission</a>
          </li>
          <li>
            <a href="#">Registrar</a>
          </li>
          <li>
            <a href="#">Guidance</a>
          </li>
          <li>
            <a href="#">FOI Certificate of Compliance</a>
          </li>
        </BottomDiv>
        <BottomDiv>
          <li>
            <a href="#">Research & Innovation</a>
          </li>
          <li>
            <a href="#">OVPRIE</a>
          </li>
          <li>
            <a href="#">Policy Statement</a>
          </li>
          <li>
            <a href="#">Disclaimer</a>
          </li>
          <li>
            <a href="#">MyWork</a>
          </li>
        </BottomDiv>
      </Containment>
    </Wrapper>
  );
};

export default Footer;
