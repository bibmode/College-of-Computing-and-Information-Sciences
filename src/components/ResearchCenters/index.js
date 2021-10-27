import { Containment, Center } from "./ResearchCenters.styles";
import centers from "../../data/centers.json";

const ResearchCenters = () => {
  return (
    <Containment>
      <img src="images/centers.svg" alt="magnifying glass" />
      <h3>Centers for Research and Innovation</h3>
      {centers.map((center, index) => (
        <Center key={index}>
          <div>
            <h4>{center.name}</h4>
            <button id={`item-${index}`}>Visit page and read more</button>
          </div>
          <p>{center.details}</p>
        </Center>
      ))}
    </Containment>
  );
};

export default ResearchCenters;
