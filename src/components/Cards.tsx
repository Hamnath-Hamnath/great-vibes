import { useDispatch } from "react-redux";
import Netlifx from "../images/Netlifx.svg";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import { deleteJobCard } from "../actions/cardsAction";
import { showModal } from "../actions/modalActions";

type Props = {
  details: {} | any;
  headingFontSize: string;
  FontWeight: string;
  FontSize: string;
};

const Cards = ({
  details,
  headingFontSize,
  FontSize,
  FontWeight,
}: Props) => {
  const dispatch: any = useDispatch();
  const handleEdit = (id: string | number) => {
    dispatch(showModal(id));
  };
  return (
    <div className=" w-full lg:w-1/2 md:pr-4 md:pl-4">
      <div className="w-full relative lg:max-w-[800px] h-full lg:h-[320px] rounded-lg  border border-solid border-[#DADEDF] bg-[#FFF] px-6 py-4">
        <div className="max-w-sm w-full lg:max-w-full flex lg:flex-wrap">
          <div className="w-12 h-12">
            <img src={Netlifx} alt="Netflix logo" />
          </div>
          <div className="px-3">
            <section className="mb-6">
              <p
                className={`font-poppins text-[#000] font-${FontWeight} text-${headingFontSize}`}
              >
                {details?.title}
              </p>
              <p
                className={`font-poppins text-[#000] font-${FontSize} text-${FontSize}`}
              >
                {`${details?.company} - ${details?.industry}`}
              </p>
              <p
                className={`font-poppins text-placeholder font-${FontWeight} text-${FontSize}`}
              >
                {`${details?.location} (${details?.remote})`}
              </p>
            </section>
            <section className="mb-6">
              <p
                className={`font-poppins mildDark font-${FontWeight} text-${FontSize} mb-2`}
              >
                Part-Time (9.00 am - 5.00 pm IST)
              </p>
              <p
                className={`font-poppins mildDark font-${FontWeight} text-${FontSize} mb-2`}
              >
                Experience ({details?.experience?.minimum !== '' ? `${details?.experience?.minimum} - ${details?.experience?.maximum} years` : 'Nil' }) 
              </p>
              <p
                className={`font-poppins mildDark font-${FontWeight} text-${FontSize} mb-2`}
              >
                INR (₹) {details?.salary.minimum !== '' ? `${parseInt(details?.salary.minimum).toLocaleString(
                  "en-IN"
                )} - ${parseInt(details?.salary.maximum).toLocaleString(
                  "en-IN"
                )}` : '0'} / Month
              </p>
              <p
                className={`font-poppins mildDark font-${FontWeight} text-${FontSize}`}
              >
                {details?.total_employees !== '' ? details?.total_employees : 0} employees
              </p>
            </section>
            <section className="flex">
              {details?.apply_type === "quick" && (
                <button
                  className={`font-poppins text-${FontSize} font-${FontWeight} text-[#FFF] bg-primary py-2 px-4 rounded-md shadow-sm`}
                >
                  Apply Now
                </button>
              )}
              {details?.apply_type === "external" && (
                <button
                  className={`font-poppins text-${FontSize} font-${FontWeight} text-primary border border-primary bg-[#FFF] py-2 px-4 rounded-md`}
                >
                  External Apply
                </button>
              )}
              {/*  */}
            </section>
          </div>
          <div className="absolute right-1.5 xl:right-3">
            <section className="flex flex-col xl:flex-row">
              <button onClick={() => handleEdit(details?.id)}>
                <EditIcon />
              </button>
              <button onClick={() => dispatch(deleteJobCard(details?.id))}>
                <DeleteIcon />
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
