import { FaArrowDown, FaArrowUp, FaCommentDots } from 'react-icons/fa';
const IssuesThumbs = () => {
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-xl">
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-3 bg-slate-900 text-white">
          <h2 className="font-bold">React Icons</h2>
          <time className="text-sm">22 September, 2022</time>
        </div>
        <div className="p-3">
          <p className="mb-2 font-semibold">Maecenas tempor sem quis neque mattis vulputate. Nulla sollicitudin quam at lorem malesuada dapibus. Aliquam mi eros, lobortis ac enim et, tempor eleifend turpis.</p>
          <hr className="w-full  bg-slate-900 my-2" />
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <FaArrowUp size={20} /> 34
              </div>
              <div className="flex gap-1 items-center">
                <FaArrowDown size={20} />5
              </div>
              <div className="flex gap-1 items-center">
                <FaCommentDots size={20} /> 1
              </div>
            </div>
            <p className="text-slate-900 font-semibold text-end">
              <span className="text-sm">Written by:</span> Azmye
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesThumbs;
