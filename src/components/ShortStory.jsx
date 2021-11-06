import { emphasize } from "../helper.js";

export const ShortStory = ({ data }) => {

  // May want to make this a helper
  // Only change the color and weight. Not the font size.
  // const header = data.header.split("**").map((word) => {
  //     if (word[0] === "/") {
  //       console.log("hi")
  //       return <p className="font-semibold inline">{word.replace("/","")}</p>
  //     } else {
  //       return <p className="text-md inline">{word}</p>;
  //     }
  // })

  // const detail = data.header.split("**").map((word) => {
  //     if (word[0] === "/") {
  //       console.log("hi")
  //       return (
  //         <p className="inline text-white">
  //           {word.replace("/", "")}
  //         </p>
  //       );
  //     } else {
  //       return <p className="inline">{word}</p>;
  //     }
  // })

  return (
    <div className="mt-5 sm:mt-20 mb-22">
      <div className="text-xl sm:text-2xl sm:w-3/5">
        <div>
          <p>{emphasize(data.header, "text-white")}</p>
        </div>
      </div>
      <div className="mt:5 sm:mt-10 text-md sm:text-lg text-gray-1000">
        <p>{emphasize(data.detail, "text-white")}</p>
      </div>
    </div>
  );
};
