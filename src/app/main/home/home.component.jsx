import { Section } from "../../shared/Section.component";
import { Headline } from "../../shared/Headline.component";
import { data } from "./home.json";
import { List } from "../../shared/List.component";

const Home = () => {
  const home = data.map((entry, index) => {
    switch (entry.type) {
      case "stats":
        return <Section data={entry} key={index} />;
      case "list":
        return <List data={entry} key={index} />;
      case "headline":
        return <Headline data={entry} key={index} />;
      default:
        return <></>;
    }
  });
  return <div>{home}</div>;
};

export default Home;
