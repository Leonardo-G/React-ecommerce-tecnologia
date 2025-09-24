export default function LoadingOrder() {
  return (
    <div className="border border-gray-300 rounded-xl animate-pulse mt-10">
      <div className="flex justify-between p-10 items-center">
        <div>
          <div className="h-6 w-80 bg-gray-300 rounded-xl"></div>
          <div className="h-3 mt-4 w-80 bg-gray-300 rounded-xl"></div>
        </div>
        <div className="ml-auto">
          <div className="h-4 w-25 rounded-xl bg-gray-300"></div>
        </div>
      </div>
      <div className="h-px bg-gray-300"></div>
      <div className="p-10">
        <div className="bg-gray-300 h-4 w-30 rounded-xl"></div>
        <div className="flex flex-col mt-8 divide-gray-200 divide-y">
          {Array.from({ length: 5 }, (_, idx) => idx).map((product) => (
            <div key={product} className="flex justify-between py-5">
              <div>
                <div className="h-5 w-20 rounded-xl bg-gray-300"></div>
                <div className="h-3 mt-4 rounded-xl bg-gray-300"></div>
              </div>
              <div>
                <div className="bg-gray-300 h-5 w-20 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-10 rounded-b-xl">
        <div className="mt-7 flex align-center gap-5"></div>
      </div>
    </div>
  );
}
