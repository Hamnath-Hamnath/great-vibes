import React, { FC, useEffect} from "react";
import Modal from "../components/Modal";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../actions/cardsAction";
import { showModal } from "../actions/modalActions";
import Loader from "../components/Loader";

type Props = {};

const HomeScreen: FC<Props> = (props) => {
  const dispatch: any = useDispatch();
  const state:any = useSelector((state) => state);
  const { cards, loading }: [] | any = state.cards;
  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);
  return (
    <>
      <button
        className="font-poppins bg-primary  !text-[#FFF] font-bold py-2 px-4 rounded my-5"
        onClick={() => dispatch(showModal())}
      >
        Create job
      </button>
      <Modal width={577} height={564} />
      <div className="flex flex-wrap px-3 py-2 xl:px-30 xl:py-30 gap-y-5 xl:gap-y-14 bg-mildGrey ">
        {loading ? (
          <Loader />
        ) : (
          (cards || []).map((data: {} | any) => (
            <Cards
              details={data}
              key={data?.id}
              FontWeight="normal"
              FontSize="base"
              headingFontSize="2xl"
            />
          ))
        )}
      </div>
    </>
  );
};

export default HomeScreen;
