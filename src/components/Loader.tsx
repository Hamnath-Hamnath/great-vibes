type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-7 h-7 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
