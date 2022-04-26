import { emphasize } from "../../helper.js";

export const Headline = ({ data = "", header = "", detail = "" }) => {
  let headerValue = data === "" ? header : data.header;
  let detailValue = data === "" ? detail : data.detail;

  const title = () => {
    return (
      <div className="text-lg sm:text-xl ">
        <div className="xl:w-3/5">
          <p>{emphasize(headerValue, "text-white")}</p>
        </div>
      </div>
    )
  }

  const details = detailValue.map((detail) => {
    return (
      <div className="mt-4 text-sm sm:text-md text-gray-1000 xl:w-2/5">
        <p>{emphasize(detail, "text-white")}</p>
      </div>
    );
  })

  return (
    <div className="mt-12">
      {title()}
      {details}
    </div>
  );
};
