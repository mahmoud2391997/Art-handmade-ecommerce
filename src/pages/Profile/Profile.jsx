import Gender from "../../components/Gender/Gender";
import MaleButton from "../../components/Gender/Gender";
import InputCard from "../../components/InputCard/InputCard";
import MainButton from "../../components/MainButton";
import PageTitle from "../../components/Shared/PageTitle";

export default function Profile() {
  return (
    <div className="w-full pb-[500px] z-40 relative bg-white">
      <PageTitle title={"Profile"} />
      <div className="w-full m-auto">
        <div className="flex w-[70%] min-w-[288px] lg:min-w-[973px] md:min-w-[590px]  min-h-[90%] md:h-[400px] m-auto flex-col justify-between ">
          <h2
            className="text-3xl"
            style={{
              fontSize: "32px",
              fontFamily: "var(--page-title-font)",
              letterSpacing: ".16em",
              lineHeight: "2.33em",
            }}
          >
            User Info
          </h2>
          <div className="w-full h-[80vh]  min-h-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <InputCard type={"First Name"} />
            <InputCard type={"Last Name"} />
            <InputCard type={"Email Address"} />
            <InputCard type={"Phone Number"} />
            <InputCard type={"Birthday"} />
            <div className="flex flex-col  justify-center mb-6  w-[288px] ">
              <h3>Gender</h3>
              <div className="w-full flex justify-start mt-3">
                <Gender gender={"male"} />
                <Gender gender={"female"} />
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <MainButton title={"Update Profile"} />
          </div>
        </div>
      </div>
    </div>
  );
}
