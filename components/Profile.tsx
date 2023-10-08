import React from "react";
import MotionDiv from "./Motion/MotionDiv";

function Profile() {
  return (
    <MotionDiv classname="col-span-3 bg-gray-100 pb-4 text-gray-600 dark:bg-gray-900 dark:text-gray-300 lg:col-span-2 md:pb-2">
      <div className="relative overflow-hidden">
        <div className="m-3 ml-5 text-3xl font-bold md:m-4 md:ml-6 md:text-4xl 2xl:mt-14 2xl:text-4xl">
          Hello, I'm XiaoLe
        </div>
        <div className="mx-3 flex flex-col justify-center sm:mx-4 sm:-mt-6 md:mx-6 2xl:mt-10">
          <div className="dark:text-gray-300 lg:text-xl xl:text-2xl 2xl:mr-20">
            <div>I'm a front-end development engineer</div>
            <div>Embrace open source 👨‍💻</div>
          </div>
          <div className="mt-3 lg:text-xl xl:text-2xl 2xl:mt-5">
            Trying To Do Better!
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default Profile;
