import Logo from "../../assets/higherme_logo.png";

interface Props {
  background?: string;
  opacity?: number;
}

const LoadingOverlay: React.FC<Props> = ({ background, opacity = 85 }) => {
  return (
    <div
      className={`absolute top-[0] bottom-[0] left-[0] right-[0] z-10 ${
        background ? background : "bg-gray-800"
      } bg-opacity-${opacity}`}
    >
      <div className="h-full w-full flex justify-center items-center flex-col">
        <div>
          <img
            src={Logo}
            className="w-[120px] lg:w-[280px] h-auto
          "
          />
        </div>
        <div className="loadbar w-[180px] lg:w-[300px] h-[2px] lg:h-[4px] rounded-[1px] lg:rounded-sm bg-slate-800 mt-4 relative overflow-hidden">
          <div className="absolute w-1/2 h-full bg-blue-400 animate-side2side" />
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
