import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJobCard, editJobCard } from "../actions/cardsAction";
import { hideModal } from "../actions/modalActions";
interface FormState {
  title: string;
  company: string;
  industry: string;
  location: string;
  remote: string;
  experience: {
    minimum: string | any;
    maximum: string | any;
  };
  salary: {
    minimum: string | any;
    maximum: string | any;
  };
  total_employees: string;
  apply_type: string;
  id: string | number;
}

interface Errors {
  errors: {
    title?: string;
    company?: string;
    industry?: string;
  };
}

const FormComponent = ({ onClose }: any) => {
  const [steps, setSteps] = useState<number>(1);
  const { modal, cards }: any = useSelector((state) => state);
  const {id}: any = modal;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<FormState>({
    title: "",
    company: "",
    industry: "",
    location: "",
    remote: "",
    experience: {
      minimum: "",
      maximum: "",
    },
    salary: {
      minimum: "",
      maximum: "",
    },
    total_employees: "",
    apply_type: "",
    id: "",
  });
  const [error, setError] = useState<Errors>({
    errors: {
      title: "",
      company: "",
      industry: "",
    },
  });

  useEffect(() => {
    if (id !== undefined) {
      const particularJobCard = cards?.cards.find(
        (data: any) => data.id === id
      );
      setFormData(particularJobCard);
    }
  }, [id]);

  const validate = () => {
    const errors: Errors | any = {};

    // validate Job Title
    if (!formData.title.trim()) {
      errors.title = "Job title is required";
    } else if (formData.title.length < 3) {
      errors.title = "Job title must be at least 3 characters long";
    }

    // validate Company name
    if (!formData.company.trim()) {
      errors.company = "Company name is required";
    } else if (formData.company.length < 3) {
      errors.company = "Company name must be at least 3 characters long";
    }

    // validate industry
    if (!formData.industry.trim()) {
      errors.industry = "Industry is required";
    } else if (formData.title.length < 3) {
      errors.industry = "Industry must be at least 3 characters long";
    }
    setError({ ...error, errors });
    return Object.keys(errors).length === 0;
  };

  const handleSteps = (e: any) => {
    e.preventDefault();
    if (validate()) {
      setSteps((prevState: number) => prevState + 1);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      if(id === undefined){
        dispatch(createJobCard(formData));
      }else{
        dispatch(editJobCard(formData))
      }
      dispatch(hideModal());
    }
  };

  const { errors } = error;
  const {
    title,
    company,
    industry,
    location,
    remote,
    experience,
    salary,
    total_employees,
    apply_type,
  } = formData;

  return (
    <div className="w-full max-w-lg">
      <div className="flex justify-between mb-6">
        <span className="text-darkBlack font-poppins font-normal text-xl">
          Create a job
        </span>

        <span className="text-base text-darkBlack font-poppins font-medium">
          Step {steps}
        </span>
      </div>

      {steps === 1 && (
        <form className="bg-[#FFF]">
          <div className="mb-6">
            <label
              className="block text-darkBlack font-poppins font-medium mb-0.5"
              htmlFor="title"
            >
              Job title
              <span className="text-error">*</span>
            </label>
            <input
              className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
              id="title"
              type="text"
              placeholder="ex. UX UI Designer"
              value={title}
              onChange={(event) =>
                setFormData({ ...formData, title: event.target.value })
              }
            />
            {errors.title && (
              <p className="text-error text-xs">{errors.title}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-darkBlack font-poppins font-medium mb-0.5"
              htmlFor="company"
            >
              Company name
              <span className="text-error">*</span>
            </label>
            <input
              className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
              id="company"
              type="text"
              placeholder="ex. Google"
              value={company}
              onChange={(event) =>
                setFormData({ ...formData, company: event.target.value })
              }
            />
            {errors.company && (
              <p className="text-error text-xs">{errors.company}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-darkBlack font-poppins font-medium mb-0.5"
              htmlFor="info_tech"
            >
              Industry
              <span className="text-error">*</span>
            </label>
            <input
              className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
              id="info_tech"
              type="text"
              placeholder="ex. Information Technology "
              value={industry}
              onChange={(event) =>
                setFormData({ ...formData, industry: event.target.value })
              }
            />
            {errors.industry && (
              <p className="text-error text-xs">{errors.industry}</p>
            )}
          </div>
          <div className="flex flex-wrap -mx-3 mb-10 lg:mb-24">
            <div className="w-full md:w-1/2 px-3 mb-6 lg:mb-0">
              <label
                className="block text-darkBlack font-poppins font-medium mb-0.5"
                htmlFor="info_tech"
              >
                Location
              </label>
              <input
                className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
                id="Location"
                type="text"
                placeholder="ex. Chennai"
                value={location}
                onChange={(event) =>
                  setFormData({ ...formData, location: event.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-darkBlack font-poppins font-medium mb-0.5"
                htmlFor="Remote"
              >
                Remote type
              </label>
              <input
                className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
                id="Remote"
                type="text"
                placeholder="ex. In-office"
                value={remote}
                onChange={(event) =>
                  setFormData({ ...formData, remote: event.target.value })
                }
              />
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-end">
            <button
              className="shadow-sm font-poppins font-medium text-base bg-primary focus:shadow-outline text-[#FFF] font-bold py-2 px-4 rounded w-full md:w-auto"
              type="button"
              onClick={handleSteps}
            >
              Next
            </button>
          </div>
        </form>
      )}

      {steps === 2 && (
        <form className="bg-[#FFF]">
          <div className="mb-6">
            <label
              className="block text-darkBlack font-poppins font-medium mb-0.5"
              htmlFor="Experience"
            >
              Experience
            </label>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 ">
                <input
                  className="mb-3 md:mb-0 appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
                  id="Experience"
                  type="text"
                  placeholder="Minimum"
                  value={experience.minimum}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      experience: {
                        ...formData.experience,
                        minimum: event.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
                  id="Experience"
                  type="text"
                  placeholder="Maximum"
                  value={experience.maximum}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      experience: {
                        ...formData.experience,
                        maximum: event.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-darkBlack font-poppins font-medium mb-0.5"
              htmlFor="Salary"
            >
              Salary
            </label>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 ">
                <input
                  className="mb-3 md:mb-0 appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
                  id="Salary"
                  type="text"
                  placeholder="Minimum"
                  value={salary.minimum}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      salary: {
                        ...formData.salary,
                        minimum: event.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
                  id="Remote"
                  type="text"
                  placeholder="Maximum"
                  value={salary.maximum}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      salary: {
                        ...formData.salary,
                        maximum: event.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-darkBlack font-poppins font-medium mb-0.5"
              htmlFor="Total"
            >
              Total employee
            </label>
            <input
              className="appearance-none border border-[#E6E6E6] rounded w-full py-2 px-3 text-sm font-poppins focus:outline-none placeholder-placeholder"
              id="Total"
              type="text"
              placeholder="ex. 100"
              value={total_employees}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  total_employees: event.target.value,
                })
              }
            />
          </div>
          <div className="mb-10 md:mb-28">
            <label className="block text-darkBlack font-poppins text-sm font-medium mb-3">
              Apply type
            </label>
            <div className="flex justify-start">
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-[#D8D8D8] border-[#D8D8D8] before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-placeholder checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]   checked:focus:border-primary checked:focus:before:scale-100"
                  type="radio"
                  name="inlineRadioOptions"
                  id="quick"
                  value="quick"
                  checked={apply_type === "quick"}
                  onChange={(event) =>
                    setFormData({ ...formData, apply_type: event.target.value })
                  }
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer font-poppins text-sm font-normal text-placeholder"
                  htmlFor="quick"
                >
                  Quick apply
                </label>
              </div>
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-[#D8D8D8] border-[#D8D8D8] before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-placeholder checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]   checked:focus:border-primary checked:focus:before:scale-100"
                  type="radio"
                  name="inlineRadioOptions"
                  id="external"
                  value="external"
                  checked={apply_type === "external"}
                  onChange={(event) =>
                    setFormData({ ...formData, apply_type: event.target.value })
                  }
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer font-poppins  font-normal text-placeholder"
                  htmlFor="external"
                >
                  External apply
                </label>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-end">
            <button
              className="shadow-sm w-full md:w-auto font-poppins font-medium text-base bg-primary focus:shadow-outline text-[#FFF] font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
