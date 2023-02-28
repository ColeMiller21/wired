import React from "react";
import Image from "next/image";
import MainHeader from "../MainHeader";
import { teamMembers } from "../../data/teamInfo";

const Team = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat px-[1.6rem] md:px-[3.2rem]">
      <MainHeader>TEAM</MainHeader>
      <div className="flex flex-col gap-[2.5rem] w-full mt-[40px] items-center mb-[100px]">
        {teamMembers.map((member, i) => {
          return (
            <MemberSection
              key={`${member.title}+${i}`}
              member={member}
              idx={i}
            />
          );
        })}
      </div>
    </div>
  );
};

const MemberSection = ({ member, idx }) => {
  console.log(member.name);
  return (
    <div
      className={`flex flex-col ${
        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-[2rem] md:w-[90%] lg:w-[70%]`}
    >
      <div className="h-[250px] aspect-square relative">
        <img
          className="w-full h-full"
          src="/placeholder.webp"
          alt={`Image for ${member.title}`}
        />
      </div>
      <div className="text-gray-300 font-ubuntu flex flex-col gap-[1rem] justify-center">
        <h4>
          <span className="text-[1.25rem] font-600">Name: </span> {member.name}
        </h4>
        <h4>
          <span className="text-[1.25rem] font-600">Title: </span>{" "}
          {member.title}
        </h4>
        <h4>
          <span className="text-[1.25rem] font-600">Bio: </span> {member.bio}
        </h4>
      </div>
    </div>
  );
};

export default Team;
