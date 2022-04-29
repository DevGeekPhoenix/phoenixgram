import { useState } from "react";
import Post from "../../Assets/Images/PicsArt_05-10-04.14.32.jpg";
import Profile from "../../Assets/Images/PicsArt_04-18-09.01.55.jpg";
import CommentIcon from "../../Assets/SVGs/CommentIcon";
import PostLikeIcon from "../../Assets/SVGs/PostLikeIcon";

export default () => {
  const [posts, setPosts] = useState([
    {
      Name: "Hossein Zarrabi",
      userName: "FrontPhoenix",
      profileImg: Profile,
      postImg: Post,
      likes: 125,
      comments: 57,
    },
    {
      Name: "Hossein Zarrabi",
      userName: "FrontPhoenix",
      profileImg: Profile,
      postImg: Post,
      likes: 125,
      comments: 57,
    },
    {
      Name: "Hossein Zarrabi",
      userName: "FrontPhoenix",
      profileImg: Profile,
      postImg: Post,
      likes: 125,
      comments: 57,
    },
    {
      Name: "Hossein Zarrabi",
      userName: "FrontPhoenix",
      profileImg: Profile,
      postImg: Post,
      likes: 125,
      comments: 57,
    },
  ]);

  return (
    <div className="xs:hidden mt-28 w-screen bg-red400 max-h-[80%] pt-2 pb-20 overflow-y-auto flex flex-col items-center ">
      {posts.map((post, i) => {
        return (
          <div
            key={i}
            className="w-[95vw] h-fit pb-5 mb-8 rounded-[40px] bg-[#e6eefa]"
          >
            <div>
              <div className="flex items-center p-3">
                <div>
                  <img
                    className="h-14 w-14 object-cover  rounded-full border-2 border-white"
                    src={post.profileImg}
                  />
                </div>
                <div className="my-auto ml-2 text-[20px]">
                  <p className="bold">{post.Name}</p>
                  <p className="xs">@{post.userName}</p>
                </div>
              </div>
              <div>
                <img
                  className="h-[45vh] w-[90vw] m-auto object-cover rounded-[30px]"
                  src={post.postImg}
                />
                <div className="w-[90vw] m-auto h-16 relative flex items-center -top-16 backdrop-blur-md bg-[#00000072] rounded-b-[40px]">
                  <div className="flex ml-5 items-center">
                    <PostLikeIcon />
                    <p className="text-[#d4d8db] bold text-[22px] ml-3 mr-5">
                      {post.likes}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <CommentIcon />
                    <p className="text-[#d4d8db] bold text-[22px] ml-3">
                      {post.comments}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[20px]  px-6 bg-slate300 mt-[-60px]">
                    <span className="bold">{post.userName} : </span>
                    قول میدم ترک میکنم تو همون پاییزای زرد، زرد می شدم آخرین روز
                    ترک با آرامش تو ایستادی دم در آسایشگاه پنجره قاب خالیه تکون
                    رو تاب خالیه زردی نیمی از حیاط رو گرفته این پاییز عجب
                    آشغالیه🍂🍁
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
