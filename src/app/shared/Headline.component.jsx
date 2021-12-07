import { emphasize } from "../../helper.js";

export const Headline = ({ data="", header="", detail="" }) => {
  let headerValue = data === "" ? header : data.header;
  let detailValue = data === "" ? detail : data.detail;

  const details = detailValue.map((detail) => {
    return (
      <div className="mt:5 mt-10 text-md sm:text-lg text-gray-1000 xl:w-2/5">
        <p>{emphasize(detail, "text-white")}</p>
      </div>
    );
  })

  return (
    <div className="mt-20 mb-22">
      <div className="text-xl sm:text-2xl ">
        <div className="xl:w-3/5">
          <p>{emphasize(headerValue, "text-white")}</p>
        </div>
      </div>
      {details}
    </div>
  );
};
