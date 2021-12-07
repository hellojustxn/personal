import { Section } from "../../shared/Section.component";
import { Headline } from "../../shared/Headline.component";
import { Timeline } from "../../shared/Timeline.component";
import { data } from "./resume.json";

const Resume = () => {
  
  const resume = data.map((entry) => {
    switch (entry.type) {
      case "stats":
        return <Section data={entry} />;
      // case "timeline":
      //   return <Timeline data={entry} />;
      case "headline":
        return <Headline data={entry} />;
      default:
        return <></>;
    }
  });

  return <div>{resume}</div>;
};

export default Resume