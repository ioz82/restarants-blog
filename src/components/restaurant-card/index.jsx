const RestaurantCard = ({ name, description, onClick }) => {
  return (
    <div
      className="text-white text-xs p-3 bg-neutral-700 rounded gap-2 flex cursor-pointer"
      onClick={() => onClick && onClick()}
    >
      <div className="w-[100px] h-[100px] bg-white rounded flex-col justify-center items-center gap-2.5 flex">
        <div className="text-center text-black">Фото</div>
      </div>
      <div className="grow shrink basis-0 self-stretch flex-col gap-3 flex">
        <div className="text-xl font-bold">{name}</div>
        <div className="self-stretch">{description}</div>

        <div className="self-stretch justify-between items-center flex">
          <div className="flex-col flex">
            <div className="font-semibold">Телефон</div>
            <div>+7 (4822) 60-11-12</div>
          </div>
          <div className="flex-col flex">
            <div className="font-semibold">Средний чек</div>
            <div>750–1500 ₽</div>
          </div>
          <div className="flex-col flex">
            <div className="font-semibold">Время работы</div>
            <div>08:00 - 01:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
