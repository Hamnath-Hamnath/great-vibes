import { FC } from "react";
import FormComponent from "./FormComponent";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../actions/modalActions";
type Props = {
  width: number | string;
  height: number | String;
};

const Modal: FC<Props> = ({ width, height }) => {
  const {modal }: any = useSelector((state) => state);
  const { modalVisibility}: any = modal;
  const dispatch: any = useDispatch();

  const handleClose = (e: any) => {
    if (e.target.id === "modalContainer") dispatch(hideModal());
  };
  
  if (!modalVisibility) return null;

  return (
    <div
      onClick={handleClose}
      id="modalContainer"
      className="fixed inset-0 bg-[#000] bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div
        className={`bg-[#FFF] p-8 rounded rounded-[10px] md:w-${width} h-${height} border border-[#E6E6E6]`}
      >
        <FormComponent />
      </div>
    </div>
  );
};

export default Modal;
