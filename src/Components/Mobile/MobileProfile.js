import ProfileHeader from "../../Assets/Images/ProfileHeader.png";
import ProfileImage from "../../Assets/Images/PicsArt_04-18-09.01.55.jpg";
import Post from "../../Assets/Images/PicsArt_05-10-04.14.32.jpg";
import Profile from "../../Assets/Images/PicsArt_04-18-09.01.55.jpg";
import CommentIcon from "../../Assets/SVGs/CommentIcon";
import PostLikeIcon from "../../Assets/SVGs/PostLikeIcon";
import { useState } from "react";

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
    <div className="overflow-y-auto xs:hidden">
      <section className=" fixed top-0">
        <img className="w-screen h-[240px] object-cover " src={ProfileHeader} />
      </section>
      <section className="w-screen h-[93vh] bg-gradient-to-b from-[#e6eefa] to-[white] sticky mt-[200px] rounded-[50px] ">
        <div className="w-full flex justify-center absolute mt-[-56px] ">
          <img
            className=" rounded-full w-28 h-28 border-[6px] border-[white]  "
            src={ProfileImage}
          />
        </div>
        <div className="bold text-[22px] text-center pt-16">
          <p>Hosein Zarrabi</p>
        </div>
        <div className="flex bold text-[18px] justify-around pt-1 text-center ">
          <div className="w-[33%]">
            <p>12.5K</p>
            <p>Followers</p>
          </div>
          <div className="w-[33%]">
            <p>12</p>
            <p>Posts</p>
          </div>
          <div className="w-[33%]">
            <p>12</p>
            <p>Following</p>
          </div>
        </div>
        <div className="text-center p-2 text-[#6C7A9C]">
          <p>
            lorem ipsum dolor sit amet lore mauris et justo. Lorem ipsum dolor
            sit amet lorem
          </p>
        </div>
        <div className="shadowtop w-screen grid grid-cols-3 place-content-start justify-between bg-[white] mt-3 h-[56vh] maxh-[88%] overflow-y-auto rounded-t-[50px]  border-[10px] border-[white] ">
          {posts.map((post, i) => {
            return (
              <img
                key={i}
                className=" w-[33vw] h-[15vh] object-cover px-0.5 pt-1"
                src={post.postImg}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
