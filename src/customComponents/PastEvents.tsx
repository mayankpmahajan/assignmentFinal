import { useState } from "react";

const PastEvents = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const events = [
    { title: "Saudi Food Expo", date: "12 July - 18 July 2024", url: "./logos/logo1.jpg" },
    { title: "South Asia Food Expo", date: "1 Aug - 5 Aug 2024", url:"./logos/logo3.jpg" },
    { title: "Australia Food Expo", date: "10 Sep - 15 Sep 2024", url:"./logos/logo4.png" },
    { title: "Antartica Food Expo", date: "22 Oct - 28 Oct 2024", url:"./logos/logo5.png" },
    { title: "Australia Food Expo", date: "5 Nov - 10 Nov 2024", url:"./logos/logo6.png" },
    { title: "Art Festival", date: "10 Sep - 15 Sep 2024", url:"./logos/logo7.png" },
    { title: "Health Summit", date: "22 Oct - 28 Oct 2024", url:"./logos/logo8.png" },
    { title: "Music Concert", date: "5 Nov - 10 Nov 2024", url:"./logos/logo9.png" },
    { title: "Art Festival", date: "10 Sep - 15 Sep 2024", url:"./logos/logo10.png" },
    { title: "Health Summit", date: "22 Oct - 28 Oct 2024", url:"./logos/logo1.jpg" },
    { title: "Music Concert", date: "5 Nov - 10 Nov 2024", url:"./logos/logo3.jpg" },
    { title: "Art Festival", date: "10 Sep - 15 Sep 2024",url:"./logos/logo4.png" },
    { title: "Health Summit", date: "22 Oct - 28 Oct 2024",url:"./logos/logo5.png" },
    { title: "Music Concert", date: "5 Nov - 10 Nov 2024",url:"./logos/logo6.png" },    // Add more events if needed
  ];

  // Show first 3 items initially; rest will be shown when expanded
  const visibleEvents = isExpanded ? events : events.slice(0, 3);

  // Determine if more items are left to show
  const hasMoreToShow = visibleEvents.length < events.length;

  return (
    <main className="bg-white w-full rounded-xl mt-4 p-4">
      <h1 className="text-xl font-semibold">Zaloni Past Exhibitions</h1>

      <div className="flex flex-col space-y-4">
        {visibleEvents.map((event, index) => (
          <section key = {index} className='flex flex-row space-x-2'>
            <div className="h-16 w-16 rounded-full">
                <img src={event.url} alt="logo 1" className='h-full w-full object-cover rounded-full'/>
            </div>
          

          <div className='flex flex-col justify-center space-y-1'>
              <h1 className='text-sm font-medium'>{event.title}</h1>
              <h5 className='text-xs'>{event.date}</h5>
          </div>
      </section>
        ))}

        {/* Show the button only if there are more items to display */}
        {hasMoreToShow && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-500 text-sm font-medium mt-2"
          >
            View More
          </button>
        )}

        {/* Show 'View Less' button when expanded */}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-blue-500 text-sm font-medium mt-2"
          >
            View Less
          </button>
        )}
      </div>
    </main>
  );
};

export default PastEvents;
