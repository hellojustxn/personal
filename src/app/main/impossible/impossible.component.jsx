import { Section } from "../../shared/Section.component";
import { Headline } from "../../shared/Headline.component";
import { data } from "./impossible.json";
import { List } from "../../shared/List.component";

const Impossible = () => {
  const Impossible = data.map((entry) => {
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

  return <div>{Impossible}</div>;
};

export default Impossible;
