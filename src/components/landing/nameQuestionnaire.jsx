import React from "react";
import Send from "@mui/icons-material/Send";
import { useAtom } from "jotai";
import { userNameAtom } from "../../atom";

export default function NameQuestionnaire(props) {
  // eslint-disable-next-line
  const [_userName, setUserName] = useAtom(userNameAtom);

  const callSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    setUserName(name[0].toUpperCase() + name.slice(1));

    props.nextSlide();
  };

  return (
    <React.Fragment>
      <h1 className="text-[#FB8500] text-8xl">What's your name?</h1>
      <form className="text-7xl flex space-x-16 ml-1/2" onSubmit={callSubmit}>
        <input
          placeholder="John Hack The North"
          className="text-center font-[poppins] w-[52rem] bg-[#E3E3E3] outline-none rounded-3xl px-5"
          required
          autoFocus
        ></input>
        <button
          type="submit"
          className="flex bg-[#023047] rounded-3xl text-white items-center p-7"
        >
          <Send fontSize="inherit" />
        </button>
      </form>
    </React.Fragment>
  );
}
