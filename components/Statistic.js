const Statistic = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              445%
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Business Growth</p>
          <p className="text-gray-700">
            The percentage of business growth since using Quickly.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              72
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Invoices paid early</p>
          <p className="text-gray-700">
            The total number of invoices paid 28 days earlier since using
            Quickly.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              28
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Average time paid early</p>
          <p className="text-gray-700">
            Based on invoice due date vs when payment is made using Quickly.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statistic;
