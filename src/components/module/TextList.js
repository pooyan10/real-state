import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-6">
      <p className="mb-2">{title}</p>
      {profileData[type].map((i, index) => (
        <div key={index} className="flex mb-3">
          <input
            type="text"
            value={i}
            className=" w-[40%] border-2 border-dotted border-gray-300 rounded-md"
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            className="flex border-2 mr-2 border-red-700 items-center rounded-md text-red-700 px-2"
            onClick={() => deleteHandler(index)}
          >
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button
        className="flex gap-1 items-center px-2 py-1 bg-blue1 rounded-md text-white"
        onClick={addHandler}
      >
        افزودن <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
