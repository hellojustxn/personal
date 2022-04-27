import { Section } from "../../shared/Section.component";
import { Headline } from "../../shared/Headline.component";
import { about_data } from "./about.json";
import { List } from "../../shared/List.component";

const About = () => {
  const About = about_data.map((entry,) => {
    switch (entry.type) {
      case "stats":
        return <Section data={entry} />;
      case "list":
        return <List data={entry} />;
      case "headline":
        return <Headline data={entry} />;
      default:
        return <></>;
    }
  });

  return <div>{About}</div>;
};

export default About;
