import { useNavigate, useParams } from "react-router-dom";
import { restaurants } from "../../api/restaurants";

const DetailCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id.toString() === id
  );

  return (
    <div className="w-screen min-h-screen max-w-[720px] mx-auto px-3 py-8 flex-col justify-center items-center gap-8 flex">
      <div
        className="self-stretch px-3 py-2 bg-neutral-700 rounded justify-between items-center flex"
        onClick={() => navigate("/")}
      >
        <div className="w-6 h-6 relative" />
        <div className="text-center text-white text-2xl font-bold">Назад</div>
      </div>
      <div className="self-stretch h-[639px] flex-col  gap-2.5 flex">
        <div className="flex-col  gap-1 flex">
          <div className="text-center text-xl font-light">
            бул. Цанова, 1А, Тверь
          </div>
          <div className="text-center text-5xl font-light">
            {restaurant.name}
          </div>
        </div>
        <div className=" items-center gap-2 flex">
          <div className="text-center text-xl font-light">Оценка:</div>
          <div className="text-center text-xl font-light">4,5</div>
          <div className="text-center text-zinc-500 text-[13px] font-light">
            478 отзывов
          </div>
        </div>
        <div className="self-stretch h-[300px] bg-zinc-500 rounded flex-col justify-center items-center gap-2.5 flex">
          <div className="text-center text-white text-2xl font-bold">Фото</div>
        </div>
        <div className="self-stretch text-2xl">{restaurant.description}</div>
        <div className="self-stretch justify-between items-center flex">
          <div className="flex-col  flex">
            <div className="text-xl font-semibold">Телефон</div>
            <div className="text-xl">+7 (4822) 60-11-12</div>
          </div>
          <div className="flex-col  flex">
            <div className="text-xl font-semibold">Средний чек</div>
            <div className="text-xl">750–1500 ₽</div>
          </div>
          <div className="flex-col  flex">
            <div className="text-xl font-semibold">Время работы</div>
            <div className="text-xl">08:00 - 01:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
