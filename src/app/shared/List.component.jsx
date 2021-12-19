import { emphasize } from "../../helper.js";

export const List = ({ data = "", header = "", detail = "" }) => {
  let headerValue = data === "" ? header : data.header;
  let detailValue = data === "" ? detail : data.detail;

  const details = detailValue.map((detail) => {
    return (
      <div className="mt:5 mt-9 text-md sm:text-lg text-gray-1000">
        <p>{emphasize(detail, "text-white")}</p>
      </div>
    );
  });

  return (
    <div className="mt-12 mb-2">
      <div className="text-xl sm:text-2xl ">
        <div>
          <p>{emphasize(headerValue, "text-gray-600")}</p>
        </div>
      </div>
      {details}
    </div>
  );
};
