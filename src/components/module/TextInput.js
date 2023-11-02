import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div className="mb-10">
      <p className="">{title}</p>
      {textarea ? (
        <textarea
          className="border-2 border-dotted rounded-md border-gray-300 w-[60%]"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="border-2 border-dotted rounded-md border-gray-300 w-[40%]"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
