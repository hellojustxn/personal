import { Section } from "../../shared/Section.component";
import { Headline } from "../../shared/Headline.component";
import { data } from "./home.json";
import { List } from "../../shared/List.component";

const Home = () => {
  const home = data.map((entry) => {
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

  return <div>{home}</div>;
};

export default Home;
