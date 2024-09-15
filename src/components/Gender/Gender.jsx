export default function Gender({ gender }) {
  return (
    <button className="w-24 h-11 rounded-3xl border border-gray-500 mr-3">
      <div className="flex justify-center">
        {gender === "male" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
            className="w-5 h-5"
          >
            <path d="M96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64S60.7 0 96 0m48 144h-11.4c-22.7 10.4-49.6 10.9-73.3 0H48c-26.5 0-48 21.5-48 48v136c0 13.3 10.7 24 24 24h16v136c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24V352h16c13.3 0 24-10.7 24-24V192c0-26.5-21.5-48-48-48z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            className="w-5 h-5"
          >
            <path d="M128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64c-35.3 0-64-28.7-64-64S92.7 0 128 0m119.3 354.2l-48-192A24 24 0 0 0 176 144h-11.4c-22.7 10.4-49.6 10.9-73.3 0H80a24 24 0 0 0 -23.3 18.2l-48 192C4.9 369.3 16.4 384 32 384h56v104c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V384h56c15.6 0 27.1-14.7 23.3-29.8z" />
          </svg>
        )}{" "}
        {gender === "male" ? <span>Male</span> : <span>Female</span>}
      </div>
    </button>
  );
}
