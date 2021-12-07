export const Section = ({data}) => {
  return (
    <div className="mt-20">
      <div className="text-xl sm:text-2xl font-light font-monteserrat border-b-2 border-divider pb-5 ">
        {data["header"]}
      </div>


      {data.detail.map( entry => {
        return (
          <div className="flex mt-16 ml-2">
            {/* event */}
            <div className="md:min-w-md xl:min-w-lg">
              <div className="">
                <div className="text-md sm:text-lg font-montserrat font-semibold mb-1">
                  {entry.position !== ""
                    ? `${entry.company}: ${entry.position}`
                    : entry.company}
                </div>
                <div className="text-gray-1000 font-montserrat">
                  {entry.startDate === "" ? entry.notes : `${entry.startDate} - ${entry.endDate}`}
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="text-gray-1000 font-monteserrat text-lg hidden md:block">
              {entry.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};