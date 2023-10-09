const LocationListItem = ({location}) => {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="material-symbols-outlined ">location_on</span>
      {location}
    </div>
  );
};

export default LocationListItem;
