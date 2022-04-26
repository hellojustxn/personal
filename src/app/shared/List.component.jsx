import { emphasize } from "../../helper.js";

export const List = ({ data = "", header = "", detail = "" }) => {
  let headerValue = data === "" ? header : data.header;
  let detailValue = data === "" ? detail : data.detail;

  const details = detailValue.map((detail) => {
    return (
      <div className="mt-4 text-sm sm:text-md text-gray-1000">
        <p>{emphasize(detail, "text-white")}</p>
      </div>
    );
  });

  return (
    <div className="mt-10 mb-2">
      <div className="text-lg sm:text-xl ">
        <div>
          <p>{emphasize(headerValue, "text-gray-600")}</p>
        </div>
      </div>
      {details}
    </div>
  );
};
