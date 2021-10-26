import {
  Activities,
  Containment,
  Showcase,
  Wrapper,
  Background,
} from "./Promotions.styles";
import activities from "../../data/activities.json";

const Promotions = () => {
  return (
    <Background>
      <Containment>
        <Wrapper container>
          <Activities item xs={12} sm={6}>
            <h3>ACTIVITIES</h3>
            {activities.map((activity, index) => (
              <p key={index}>{activity.name}</p>
            ))}
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </Activities>

          <Showcase item xs={12} sm={6}>
            <h5>Meet our BSIT Graduate MR. YOLLY G. PELEGRINO!</h5>
            <p>
              Mr. Pelegrino is an IT Business Analyst and the Business
              Architecture & Integration Team Lead of ACCENTURE PLC in Chicago,
              Illinois, USA!
            </p>
            <iframe
              src="https://www.youtube.com/embed/NVgK0ZTSVJg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </Showcase>
        </Wrapper>
      </Containment>
    </Background>
  );
};

export default Promotions;
