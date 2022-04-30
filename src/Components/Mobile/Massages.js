import { useState } from "react";
import Profile from "../../Assets/Images/PicsArt_04-18-09.01.55.jpg";
import CloseIcon from "../../Assets/SVGs/CloseIcon";
import { useSelector } from "react-redux";

export default function Massages({ isOpen, setIsOpen }) {
  const prevLocation = useSelector((state) => state.data.location);
  console.log(prevLocation);

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
  return (
    <div
      className={` h-screen bg-[#e6eefa] top-0 z-[100] transition-all duration-500 overflow-y-auto fixed right-0 ${
        isOpen ? "w-screen " : " w-0"
      }`}
    >
      <div className="fixed top-0 bg-[#e6eefa] flex w-screen justify-between">
        <div className="w-[45px] h-[45px] m-3"></div>
        <p className="bold text-[24px] text-center mt-4 ">Massages</p>
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="m-3"
        >
          <CloseIcon />
        </div>
      </div>
      <div className="h-[100vh bg-red200 mt-20">
        {userInfo.map((user, i) => {
          return (
            <div key={i} className="flex w-screen items-center px-5 my-5">
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
  );
}
