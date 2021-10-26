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
            <h5>hello</h5>
          </Showcase>
        </Wrapper>
      </Containment>
    </Background>
  );
};

export default Promotions;
