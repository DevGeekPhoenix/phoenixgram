import { useState } from "react";

export default () => {
  const [activities, setActivities] = useState([
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
    {
      text: "Ali Hasani Liked Your Post",
      time: "11:34 PM",
    },
  ]);
  return (
    <div className="xs:hidden block h-[100vh] w-screen bg-[#E6EEFA]">
      <div className="bg-[#E6EEFA] pt-[92px] h-[88vh] divide-y divide-[#a1b8ed] overflow-y-auto">
        {activities.map((item, i) => {
          return (
            <div className="flex w-full justify-between py-5 ">
              <p className="text-[18px] ml-3">{item.text}</p>
              <p className="xs mr-3">{item.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
