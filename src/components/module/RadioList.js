function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changehandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="mb-8">
      <p className="mb-2">دسته بندی</p>
      <div className="flex gap-5">
        <div className="bg-blue-100 px-4 py-1 flex items-center rounded-md cursor-pointer">
          <label htmlFor="villa" className="ml-1 cursor-pointer">
            ویلا
          </label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changehandler}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-blue-100 px-4 py-1 flex items-center rounded-md cursor-pointer">
          <label htmlFor="apartment" className="ml-1 cursor-pointer">
            آپارتمان
          </label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changehandler}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-blue-100 px-4 py-1 flex items-center rounded-md cursor-pointer">
          <label htmlFor="office" className="ml-1 cursor-pointer">
            اداره
          </label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changehandler}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-blue-100 px-4 py-1 flex items-center rounded-md cursor-pointer">
          <label htmlFor="store" className="ml-1 cursor-pointer">
            مغازه
          </label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changehandler}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
