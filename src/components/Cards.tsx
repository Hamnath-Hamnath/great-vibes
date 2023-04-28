import { useDispatch } from "react-redux";
import Netlifx from "../images/Netlifx.svg";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import { deleteJobCard } from "../actions/cardsAction";
import { showModal } from "../actions/modalActions";

type Props = {
  details: any;
};

const Cards = ({ details }: Props) => {
  const dispatch: any = useDispatch();
  const handleEdit = (id: string | number) => {
    dispatch(showModal(id))
  };
  return (
    <>
      {details?.map((cards: any) => (
        <div className=" w-full lg:w-1/2 md:pr-4 md:pl-4">
          <div className="w-full relative lg:max-w-[800px] h-full lg:h-[320px] rounded-lg  border border-solid border-[#DADEDF] bg-[#FFF] px-6 py-4">
            <div className="max-w-sm w-full lg:max-w-full flex lg:flex-wrap">
              <div className="w-12 h-12">
                <img src={Netlifx} alt="Netflix logo" />
              </div>
              <div className="px-3">
                <section className="mb-6">
                  <p className="font-poppins text-[#000] font-normal text-2xl">
                    {cards?.title}
                  </p>
                  <p className="font-poppins text-[#000] font-normal text-base">
                    {`${cards?.company} - ${cards?.industry}`}
                  </p>
                  <p className="font-poppins text-placeholder font-normal text-base">
                    {`${cards?.location} (${cards?.remote})`}
                  </p>
                </section>
                <section className="mb-6">
                  <p className="font-poppins text-mildBlack font-normal text-base mb-2">
                    Part-Time (9.00 am - 5.00 pm IST)
                  </p>
                  <p className="font-poppins text-mildBlack font-normal text-base mb-2">
                    {`Experience (${cards?.experience?.minimum} - ${cards?.experience?.maximum} years)`}
                  </p>
                  <p className="font-poppins text-mildBlack font-normal text-base mb-2">
                    {`INR (₹) ${parseInt(cards?.salary.minimum).toLocaleString(
                      "en-IN"
                    )} - ${parseInt(cards?.salary.maximum).toLocaleString(
                      "en-IN"
                    )} / Month`}
                  </p>
                  <p className="font-poppins text-mildBlack font-normal text-base ">
                    {`${cards?.total_employees} employees`}
                  </p>
                </section>
                <section className="flex">
                  {cards?.apply_type === "quick" && (
                    <button className="font-poppins text-base font-medium text-[#FFF] bg-primary py-2 px-4 rounded">
                      Apply Now
                    </button>
                  )}
                  {cards?.apply_type === "external" && (
                    <button className="font-poppins text-base font-medium text-primary border border-primary bg-[#FFF] py-2 px-4 rounded">
                      External Apply
                    </button>
                  )}
                  {/*  */}
                </section>
              </div>
              <div className="absolute right-1.5 xl:right-3">
                <section className="flex flex-col xl:flex-row">
                  <button onClick={() => handleEdit(cards?.id)}>
                    <EditIcon />
                  </button>
                  <button onClick={() => dispatch(deleteJobCard(cards?.id))}>
                    <DeleteIcon />
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
