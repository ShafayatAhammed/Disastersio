import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Map from "../../assets/map.png";

const Step3 = ({ address }) => {
  return (
    <div className="flex items-center justify-center px-8 mt-8 mb-16 xspghd:mb-40 sm:px-20">
      <div>
        <div>
          <h1 className="text-xl font-bold text-center smpghd:text-2xl xl4:text-4xl text-high-dark smincident:text-start">
            Where’s the incident?
          </h1>
          <p className="mt-1 text-xs font-normal text-center xspghd:text-sm xl4:text-xl text-medium-gray smincident:text-start">
            Enter a GPS, address. or pin point on the map. Try to be as accurate
            as <br className="hidden smincident:block" /> possible, or
            click:Jurisdiction Wide
          </p>
        </div>
        <div className="relative mt-4 rounded-lg w-fit h-fit">
          <div className="absolute top-2 left-2">
            <div className="relative rounded-md w-fit h-fit text-medium-gray">
              <Icon
                icon="material-symbols:search"
                className="absolute text-lg -translate-y-1/2 xl4:text-2xl xspghd:text-xl top-1/2 left-1"
              />
              <input
                type="text"
                placeholder="Enter incident address or GPS"
                className="w-[220px] xspghd:w-[250px] xl4:w-[340px] outline-none bg-normal-whitesmoke border border-high-whitesmoke rounded-md py-2 pl-6 pr-1 text-xs xspghd:text-sm xl4:text-xl xl4:pl-7 font-normal"
                onChange={(e) => address.setAddress(e.target.value)}
                value={address.address}
              />
            </div>
            <div className="relative rounded-md w-fit h-fit text-medium-gray">
              <Icon
                icon="material-symbols:search"
                className="absolute text-lg -translate-y-1/2 xl4:text-2xl xspghd:text-xl top-1/2 left-1"
              />
              <input
                type="text"
                placeholder="Pinpoint damage"
                className="w-[220px] xspghd:w-[250px] xl4:w-[340px] xl4:pl-7 outline-none bg-normal-whitesmoke border border-high-whitesmoke rounded-md py-2 pl-6 pr-1 text-xs xspghd:text-sm font-normal mt-1 xl4:text-xl"
              />
            </div>
          </div>
          <img
            src={Map}
            alt="map"
            className="w-[750px] xl4:w-[850px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
