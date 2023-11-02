import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="">
      <p className="">تاریخ ساخت</p>
      <DatePicker
        className="p-3"
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        calendarPosition="bottom-right"
        onChange={changeHandler}
      />
    </div>
  );
}

export default CustomDatePicker;
