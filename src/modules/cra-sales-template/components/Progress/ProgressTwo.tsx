import React from 'react';

const ProgressTwo: React.FC = () => {
  const progressData = [
    { percentage: 75, label: 'Task 1' },
    { percentage: 50, label: 'Task 2' },
    { percentage: 80, label: 'Task 3' },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Progress Style 2
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex max-w-[470px] flex-col gap-5">
          {progressData.map((item, index) => (
            <div key={index} className="relative h-6 w-full rounded-full bg-stroke dark:bg-strokedark overflow-hidden">
              {/* Progress bar */}
              <div
                className="absolute left-0 flex h-full items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
                style={{ width: `${item.percentage}%` }}
              >
                {item.label}
              </div>
              {/* Tooltip with percentage at the end of the progress */}
              <span
                className="absolute -top-5 z-1 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white"
                style={{ left: `calc(${item.percentage}% - 10px)` }} // Adjust tooltip position
              >
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTwo;
