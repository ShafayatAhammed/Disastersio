const Step2 = ({ details }) => {
  const setDetails = (field, value) => {
    details.setDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex items-center justify-center px-8 mt-8 mb-16 xspghd:mb-40 sm:px-20">
      <div>
        <div className="text-center smpghd:text-start">
          <h1 className="text-xl font-bold xl4:text-4xl smpghd:text-2xl text-high-dark">
            Let’s give the incident a title?
          </h1>
          <p className="mt-1 text-xs font-normal xspghd:text-sm xl4:text-xl xl4:mt-2 text-medium-gray">
            Make a title that will easily identify the incidents
          </p>
          <input
            type="text"
            placeholder="Add title here"
            className="w-[300px] xspghd:w-[400px] smincident:w-[500px] md:w-[600px] mdincident:w-[750px] px-2 py-3 text-sm xl4:text-xl font-normal border rounded-md outline-none bg-normal-whitesmoke border-high-whitesmoke text-medium-gray mt-4"
            value={details.details.title}
            onChange={(e) => setDetails("title", e.target.value)}
          />
        </div>
        <div className="mt-5 text-center smpghd:text-start">
          <h1 className="text-xl font-bold xl4:text-4xl smpghd:text-2xl text-high-dark">
            Describe what happened during the incident?
          </h1>
          <p className="mt-1 text-xs font-normal xspghd:text-sm xl4:text-xl xl4:mt-2 text-medium-gray">
            Share some information about the incident. The when, where, how.{" "}
          </p>
          <textarea
            placeholder="Type here"
            className="px-2 py-3 text-sm font-normal border rounded-md outline-none resize-none bg-normal-whitesmoke border-high-whitesmoke text-medium-gray h-[127px] mt-4 w-[300px] xspghd:w-[400px] smincident:w-[500px] md:w-[600px] mdincident:w-[750px] xl4:text-xl"
            value={details.details.description}
            onChange={(e) => setDetails("description", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
