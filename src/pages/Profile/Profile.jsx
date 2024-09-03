import { useEffect, useState } from "react";
import Gender from "../../components/Gender/Gender";
import MaleButton from "../../components/Gender/Gender";
import InputCard from "../../components/InputCard/InputCard";
import MainButton from "../../components/MainButton";
import PageTitle from "../../components/Shared/PageTitle";
import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import axios from "axios";
import DatePicker from "../../components/DatePicker/DatePicker";
import DatePickerComponent from "../../components/DatePicker/DatePicker";
import { setDate } from "date-fns";

export default function Profile() {
  const [profileId, setProfileId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bdate, setBdate] = useState("");
  function getProfile() {
    let token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    axios
      .get(`https://art-ecommerce-server.glitch.me/api/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setGender(response.data.gender);
        setEmail(response.data.email);
        setPhone(response.data.phone_number);
        setBdate(response.data.birthday);
        setProfileId(response.data._id);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function editProfile(profileId, editedProfile) {
    console.log(editedProfile);
    let token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    axios
      .put(
        `https://art-ecommerce-server.glitch.me/api/profile/${profileId}`,
        editedProfile,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getProfile(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWFobW91ZG1lbHNhaWQyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTcyNTA0NTk2NywiZXhwIjoxNzI1MzA1MTY3fQ.owSE9Tka5sLyJgtbGRb4BcXHiumqh6vasztvCXoHedM"
    );
  }, []);

  return (
    <div className="w-full pb-[300px] z-40 relative bg-white">
      <PageTitle title={"Profile"} />
      <div className="w-full mt-10 m-auto">
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
            <InputCard
              type={"First Name"}
              value={firstName}
              onChange={setFirstName}
            />
            <InputCard
              type={"Last Name"}
              value={lastName}
              onChange={setLastName}
            />
            <InputCard
              type={"Email Address"}
              value={email}
              onChange={setEmail}
            />
            <InputCard
              type={"Phone Number"}
              value={phone}
              onChange={setPhone}
            />
            <DatePicker value={bdate} onChange={setBdate} />
            <div className="flex flex-col  justify-center  w-[288px] ">
              <h3>Gender</h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <Radio
                    onClick={() => {
                      setGender("male");
                    }}
                    id="male"
                    name="gender"
                    label="Male"
                    value="male"
                    className="border-[var(--main-color)] border-2"
                    checked={gender == "male"}
                  />
                  <Radio
                    onClick={() => {
                      setGender("female");
                    }}
                    id="female"
                    name="gender"
                    label="Female"
                    value="female"
                    className="border-[var(--main-color)] border-2"
                    checked={gender == "female"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 w-[87%] flex justify-between">
            <MainButton
              title={"Update Profile"}
              onClick={() => {
                console.log("asd");

                editProfile(
                  profileId,
                  {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    birthday: bdate,
                    phone_number: phone,
                    gender: gender,
                  },
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWFobW91ZG1lbHNhaWQyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTcyNTA0NTk2NywiZXhwIjoxNzI1MzA1MTY3fQ.owSE9Tka5sLyJgtbGRb4BcXHiumqh6vasztvCXoHedM"
                );
              }}
            />
            {/* <MainButton title={"Delete Account"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
