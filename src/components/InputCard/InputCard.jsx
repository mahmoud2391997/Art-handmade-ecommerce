export default function InputCard({ type, value, onChange }) {
  return (
    <div>
      <div className="w-72  space-y-3 mt-5">
        <div>
          <label
            htmlFor="hs-leading-icon"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            {type}
          </label>
          <div className="relative mt-3">
            <input
              onChange={(e) => {
                onChange(e.target.value);
              }}
              value={value}
              type="text"
              id="hs-leading-icon"
              name="hs-leading-icon"
              className="py-3 px-4 ps-11 block w-[90%] border-0 border-b-gray-500 shadow-sm border-b   text-sm focus:z-10 focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder={
                type == "Phone Number"
                  ? "123-456-789"
                  : type == "Email Address"
                  ? "you@site.com"
                  : type == "Birthday"
                  ? "DD | MM | YYYY"
                  : null
              }
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              {type == "Email Address" ? (
                <svg
                  className="shrink-0 size-4 text-gray-400 dark:text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              ) : type == "Phone Number" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-5 h-5 "
                >
                  <path
                    fill="gray"
                    d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"
                  />
                </svg>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
