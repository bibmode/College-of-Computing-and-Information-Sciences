import {
  Agendas,
  Background,
  Containment,
  Left,
  Lists,
  Right,
  Wrapper,
} from "./ResearchExtension.styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ResearchExtension = () => {
  return (
    <Background>
      <Containment>
        <Wrapper>
          <Left>
            <img src="images/researchconst.jpg" alt="map" />
          </Left>
          <Right>
            <h3 id="top-title">Research and Extension Constituents</h3>
            <p>
              The College formulates research agendas that are in consonance
              with the national, regional, and CSU R&D agenda and to the others
              aligned government agencies such as the DOST, NHERA, and NEDA.
            </p>
            <Agendas>
              <li>Smart Learning Technologies</li>
              <li>Data Analytics and Business Intelligence</li>
              <li>ICT Support for Sustainable Development</li>
              <li>Cyber Intelligent Systems</li>
            </Agendas>
            <a href="#">Learn more</a>

            <h3 id="sub-title">ICT Support for Sustainable Development</h3>
            <Lists>
              <ul id="left-list">
                <li>
                  &bull; Enhanced Production and Risk Management in Agriculture
                  (EPRiMA)
                </li>
                <li>&bull; DSWD Digitization Project</li>
                <li>
                  &bull; AquaR - An integrated GIS mapping and database registry
                  and management system
                </li>
              </ul>
              <ul id="right-list">
                <li>
                  <LocationOnIcon className="list-icon" />
                  <h4>Department of Agriculture Central Office</h4>
                </li>
                <li>
                  <LocationOnIcon className="list-icon" />
                  <h4>Food and Agriculture Organization</h4>
                </li>
                <li>
                  <LocationOnIcon className="list-icon" />
                  <h4>Bureau of Fisheries and Aquatic Resources</h4>
                </li>
                <li>
                  <LocationOnIcon className="list-icon" />
                  <h4>Department of Social Welfare and Development</h4>
                </li>
              </ul>
            </Lists>
            <a href="#">Learn more</a>
          </Right>
        </Wrapper>
      </Containment>
    </Background>
  );
};

export default ResearchExtension;
