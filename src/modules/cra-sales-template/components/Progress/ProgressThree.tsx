import React from 'react';

const ProgressThree: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Progress Style 3
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex max-w-[470px] flex-col gap-7">
          {/* Progress Bar 1 */}
          <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 flex h-full w-1/2 items-center justify-center rounded-full bg-primary">
              <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
                50%
              </p>
            </div>
            {/* Floating Label */}
            <span className="absolute bottom-full right-1/2 z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white">
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                Task 1
              </span>
          </div>

          {/* Progress Bar 2 */}
          <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 flex h-full w-4/5 items-center justify-center rounded-full bg-primary">
              <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
                80%
              </p>
            </div>
            {/* Floating Label */}
           
            <span className="absolute bottom-full right-1/4 z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white">
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                Task 2
              </span>
          </div>

          {/* Progress Bar 3 */}
          <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 flex h-full w-3/4 items-center justify-center rounded-full bg-primary">
              <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
                75%
              </p>
            </div>
            {/* Floating Label */}
            <span className="absolute bottom-full right-2 z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white">
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                Task 3
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressThree;
