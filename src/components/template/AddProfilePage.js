"use client";

import { useEffect, useState } from "react";
import TextInput from "../module/TextInput";
import RadioList from "../module/RadioList";
import TextList from "../module/TextList";
import CustomDatePicker from "../module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../module/Loader";
import { useRouter } from "next/navigation";

function AddProfilePage({ data }) {
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

  useEffect(() => {
    data && setProfileData(data);
  }, []);

  const router = useRouter();

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
      router.refresh();
      router.push("/dashboard/my-profiles");
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      router.push("/dashboard/my-profiles");
    }
  };

  return (
    <div className="p-4">
      <h3 className="bg-blue-100 text-blue1 mb-12 font-bold p-2 rounded-md ">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
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
      ) : data ? (
        <button
          className="px-4 w-full py-1 mt-12 hover:scale-105 focus:ring bg-blue1 rounded-md text-white"
          onClick={editHandler}
        >
          ویرایش آگهی
        </button>
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
