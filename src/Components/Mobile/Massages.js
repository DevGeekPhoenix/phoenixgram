import { useState } from "react";
import Profile from "../../Assets/Images/PicsArt_04-18-09.01.55.jpg";
import DirectMassages from "./DirectMassages";
import { useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";

export default function Massages({
  isAllMsgModalOpen,
  setIsAllMsgModalOpenOpen,
}) {
  const prevLocation = useSelector((state) => state.data.location);

  const [userInfo, setUserInfo] = useState([
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
    {
      Name: "Hosein Zarrabi",
      SentTime: "11:45 AM",
      massage: "Hello my friend :)",
      Img: Profile,
    },
  ]);

  const [isDMOpen, setIsDMOpen] = useState(false);
  const [DMUserInfo, setDMUserInfo] = useState(null);

  const SwipedRight = () => {
    setIsAllMsgModalOpenOpen(false);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => SwipedRight(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <DirectMassages
        DMUserInfo={DMUserInfo}
        isDMOpen={isDMOpen}
        setIsDMOpen={setIsDMOpen}
      />
      <div
        {...handlers}
        className={` h-screen bg-[#e6eefa] top-0 z-[60] transition-all duration-500 overflow-y-auto fixed right-0 ${
          isAllMsgModalOpen ? "w-screen " : " w-0"
        }`}
      >
        <div className="fixed top-0 bg-[#e6eefa] w-screen pb-5">
          <p className="bold text-[24px] text-center mt-4 ">Massages</p>
        </div>
        <div className="h-[100vh bg-red200 mt-20">
          {userInfo.map((user, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setIsDMOpen(true);
                  setDMUserInfo(user);
                }}
                className="flex w-screen items-center px-5 my-5"
              >
                <div className="w-24">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={user.Img}
                  />
                </div>
                <div className="my-auto ml-1 text-[20px] w-full">
                  <p className="bold">{user.Name}</p>
                  <div className="flex xs justify-between">
                    <p>{user.massage}</p>
                    <p>{user.SentTime}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
