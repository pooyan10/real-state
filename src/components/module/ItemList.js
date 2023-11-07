function ItemList({ data }) {
  return (
    <div className="">
      {data.length ? (
        <ul className="list-disc list-inside">
          {data.map((amenity, index) => (
            <li className="text-black" key={index}>
              {amenity}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
