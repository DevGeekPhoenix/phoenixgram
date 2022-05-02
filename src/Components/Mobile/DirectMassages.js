import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import SendMsgIcon from "../../Assets/SVGs/SendMsgIcon";

export default ({ isDMOpen, setIsDMOpen, DMUserInfo }) => {
  const MsgsContainer = document.getElementById("MsgsContainer");

  if (MsgsContainer) {
    MsgsContainer.scrollTop = MsgsContainer.scrollHeight;
  }

  const [msgs, setMsgs] = useState([
    {
      text: "Hi Hosein",
      isMe: false,
    },
    {
      text: "How are you?",
      isMe: false,
    },
    {
      text: "Hi John",
      isMe: true,
    },
    {
      text: "Fine thanks",
      isMe: true,
    },
    {
      text: "What are you doing to day?",
      isMe: false,
    },
    {
      text: "Im working on my App",
      isMe: true,
    },
    {
      text: "Wow, That's amazing!",
      isMe: false,
    },
  ]);

  const [msgText, setMsgText] = useState("");

  const SwipedRight = () => {
    setIsDMOpen(false);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => SwipedRight(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const sendNewMsg = () => {
    if (msgText === "") return;
    const cloneMsgArray = [...msgs];
    const newMsg = {
      text: msgText,
      isMe: true,
    };
    cloneMsgArray.push(newMsg);
    setMsgs(cloneMsgArray);
    setMsgText("");
  };

  return (
    <div
      {...handlers}
      className={` h-screen bg-[#d5e4f9] top-0 z-[100] transition-all duration-500 overflow-y-auto fixed right-0 ${
        isDMOpen ? "w-screen " : " w-0"
      }`}
    >
      <section className="w-screen fixed top-0 flex justify-start bg-[#d5e4f9] drop-shadow-md">
        <div className="flex items-center px-5 my-3 ">
          <div className="w-24">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={DMUserInfo?.Img}
            />
          </div>
          <div className="my-auto ml-4 text-[20px] w-full">
            <p className="bold">{DMUserInfo?.Name}</p>
            <div className="xs ">
              <p>Last Seen 11:32 PM</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[100vw] h-[1px] bg-gradient-to-r from-[#0000] via-[#878787] to-[#0000]"></div>
      <div id="MsgsContainer" className="overflow-y-auto mt-20 h-[83vh] ">
        {msgs.map((msg, i) => {
          return (
            <div
              key={i}
              className={`w-screens flex  ${
                msg.isMe ? "justify-end" : "justify-start"
              } `}
            >
              <div
                className={`w-fit h-fit p-3 my-3 rounded-t-full ${
                  msg.isMe
                    ? "bg-[#5790df] text-[#fff] rounded-l-full mr-2 "
                    : "rounded-r-full bg-[#fff] ml-2"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <section className="w-screen bg-[#d5e4f9] flex h-[65px] justify-between items-center fixed bottom-0 ">
        <textarea
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
          className="w-[82vw] max-h-[60px] resize-none outline-none text-[18px] py-1 px-5 rounded-r-full"
        />
        <div onClick={() => sendNewMsg()} className="rotate-45 mr-2">
          <SendMsgIcon />
        </div>
      </section>
    </div>
  );
};
