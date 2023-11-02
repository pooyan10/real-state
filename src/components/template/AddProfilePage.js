"use client";

import { useState } from "react";
import TextInput from "../module/TextInput";
import RadioList from "../module/RadioList";
import TextList from "../module/TextList";
import CustomDatePicker from "../module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import Loader from "../module/Loader";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };

  return (
    <div className="p-4">
      <h3 className="bg-blue-100 text-blue1 mb-12 font-bold p-2 rounded-md ">
        ثبت آگهی
      </h3>

      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea="true"
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea="true"
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        type="amenities"
        title="امکانات رفاهی "
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextList
        type="rules"
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <div className="flex justify-center w-full mt-12">
          <Loader />
        </div>
      ) : (
        <button
          className="px-4 w-full py-1 mt-12 hover:scale-105 focus:ring bg-blue1 rounded-md text-white"
          onClick={submitHandler}
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
