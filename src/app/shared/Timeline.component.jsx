export const Timeline = ({ data }) => {
  const eventHeight = "h-52";
  const eventSpacing = "mx-10";
  const timelineColor = "";
  const date = new Date();
  const month = [
    "Jan",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const events = data.events.map((event, index) => {
    let borderRadius = "rounded-tl-xl";
    let reverse = ""; // Ternary operators can be diffcult to read, moved conditionals up here.

    if (index % 2 !== 0) {
      borderRadius = "rounded-tr-xl";
      reverse = "flex-row-reverse";
    }
    return (
      <div className={`flex ${eventHeight} ${reverse}`} key={index}>
        <div>
          <div className="mx-5">
            {month[event.date.month - 1]}, {event.date.year}
          </div>
          <div
            className={`bg-gray-900 bg-opacity-40 h-36 w-80 rounded-b-xl ${borderRadius} p-5 mt-2`}
          >
            <div className="text-white">{event.name}</div>
            <div className="text-white">{event.description}</div>
          </div>
        </div>
        <div
          className={`bg-gray-400 bg-opacity-40 ${eventHeight} w-0.5 ${eventSpacing} flex justify-center`}
        >
          {/* Flex centers the dot, absolute removes it from flex layout */}
          <div className="absolute bg-gray-400 h-4 w-4 rounded-full"></div>
        </div>
        <div className="bg-transparent w-80 h-36 "></div>
      </div>
    );
  });

  return (
    <div className="mt-5 sm:mt-20 mb-22">
      <div className="text-xl sm:text-2xl sm:w-3/5">
        <div>
          <p>{data.header}</p>
        </div>
      </div>
      {/* Add Border? */}

      <div className="flex flex-col items-center mt-10">
        {events}
        <div>
          {month[date.getMonth()]} {date.getDate()}, {date.getFullYear()} 🎉
        </div>
      </div>
    </div>
  );
};
