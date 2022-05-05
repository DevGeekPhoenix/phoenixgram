import SearchIcon2 from "../../Assets/SVGs/SearchIcon2";
export default () => {
  return (
    <div className="xs:hidden block h-[100vh] w-screen bg-[#E6EEFA]">
      <div className="bg-[#E6EEFA] pt-[92px] h-[88vh] overflow-y-auto">
        <input
          placeholder="Search user here..."
          className="drop-shadow-lg w-screen text-[18px] p-5 pr-16 outline-none"
        />

        <div className="absolute right-7 mt-[-45px]">
          <SearchIcon2 />
        </div>
      </div>
    </div>
  );
};
