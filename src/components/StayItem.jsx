import { StarIcon } from "./Icons";

const StayItem = (props) => {
  const {photo, title, type, rating, superHost} = props.stayDetail;

  return (
    <div className="flex flex-col w-full h-auto max-w-md sm:max-w-none">
      <img
        className="h-full max-h-[238px] w-full sm:h-[296px] object-cover mb-[15px] rounded-3xl"
        src={photo}
        alt={title}
      />
      <div className="flex gap-[11px] items-center justify-between text-sm mb-3">
        {/* {superHost && } */}
        <div className="flex gap-[11px] items-center">
          <span className="text-xs font-bold text-[#4F4F4F] py-[6px] px-2.5 border border-solid border-[#4F4F4F] rounded-xl">
            SUPER HOST
          </span>
          <span className="text-[#828282]">{type}</span>
        </div>
        <div className="flex items-center gap-[3px]">
          <span className="text-[#EB5757]">
            <StarIcon />
          </span>
          <span className="text-[#4F4F4F]">{rating}</span>
        </div>
      </div>
      <p className="text-sm font-semibold sm:text-base">{title}</p>
    </div>
  );
};

export default StayItem;
