import  { useState } from "react";

const Members = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const members = [
    {
      name: "Aditi Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Mehak Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Akshay Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Aditi Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Mehak Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Akshay Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Aditi Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Mehak Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Akshay Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Aditi Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Mehak Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },
    {
      name: "Akshay Sharma",
      designation: "Marketing Head",
      url: "./icons/user.png",
      contact: "+91 9418208685",
      email: "Aditi2121@jawar.com",
    },

    // Add more events if needed
  ];

  // Show first 3 items initially; rest will be shown when expanded
  const visibleMembers = isExpanded ? members : members.slice(0, 3);

  // Determine if more items are left to show
  const hasMoreToShow = visibleMembers.length < members.length;

  return (
    <main className="bg-white w-full rounded-xl my-4 p-4">
      <h1 className="text-xl font-semibold">Members</h1>

      <div className="flex flex-col space-y-4">
        {visibleMembers.map((member, index) => (
          <section key={index} className="border border-shadow-300 shadow-md p-4">
            <div className="flex flex-row">
              <img
                src={member.url}
                alt="profile picture"
                className="h-10 rounded-full"
              />
              <div className="ml-2 flex flex-col justify-center">
                <h1 className="text-sm font-semibold">{member.name}</h1>
                <p className="text-[0.5rem] text-gray-500">{member.designation}</p>
              </div>
            </div>

            <section className="flex flex-row text-[0.7rem] space-x-4 mt-2">
              <div className="flex flex-row space-x-1 items-center">
                <img src="./icons/call.png" alt="call logo" className="h-3" />
                <p>{member.contact}</p>
              </div>

              <div className="flex flex-row space-x-1 items-center">
                <img src="./icons/mail.png" alt="mail logo" className="h-3" />
                <p>{member.email}</p>
              </div>
            </section>
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

export default Members;
