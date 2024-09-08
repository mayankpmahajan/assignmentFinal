import { useState } from "react";

const Files = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const events = [
    { title: "File Name 01", url:"./Files/Files.png" },
    { title: "File Name 02", url:"./Files/Files.png" },
    { title: "File Name 03", url:"./Files/Files.png" },
    { title: "File Name 04", url:"./Files/Files.png" },
    { title: "File Name 05", url:"./Files/Files.png" },
    { title: "File Name 06", url:"./Files/Files.png" },
    { title: "File Name 07", url:"./Files/Files.png" },
    { title: "File Name 08", url:"./Files/Files.png" },
    { title: "File Name 09", url:"./Files/Files.png" },
    { title: "File Name 10", url:"./Files/Files.png" },
    { title: "File Name 11", url:"./Files/Files.png" },
    { title: "File Name 12", url:"./Files/Files.png" },
    { title: "File Name 13", url:"./Files/Files.png" },
    { title: "File Name 14", url:"./Files/Files.png" }, // Add more events if needed
  ];

  // Show first 3 items initially; rest will be shown when expanded
  const visibleEvents = isExpanded ? events : events.slice(0, 3);

  // Determine if more items are left to show
  const hasMoreToShow = visibleEvents.length < events.length;

  return (
    <main className="bg-white w-full rounded-xl mt-4 mb-12 p-4">
      <h1 className="text-xl font-semibold mb-4">Files</h1>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleEvents.map((event, index) => (
          <div key={index} className="bg-white border border-gray-300 p-4 rounded-xl shadow-md">
            <div className="h-48 w-full mb-4 overflow-hidden rounded-xl">
              <img src={event.url} alt={event.title} className="h-full w-full object-cover"/>
            </div>
            <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
          </div>
        ))}
      </div>

      {/* Show the button only if there are more items to display */}
      <div className="flex justify-center mt-4">
        {hasMoreToShow && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-500 text-sm font-medium"
          >
            View More
          </button>
        )}
        {/* Show 'View Less' button when expanded */}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-blue-500 text-sm font-medium ml-4"
          >
            View Less
          </button>
        )}
      </div>
    </main>
  );
};

export default Files;

