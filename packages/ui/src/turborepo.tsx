type TurborepoProps = {
  location?: string
}
const Turborepo = ({ location }: TurborepoProps) => {
  return (
    <div className="flex items-center gap-4">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.9747 11.1875C20.5084 11.1875 11.1797 20.5236 11.1797 31.9989C11.1797 43.4743 20.5084 52.8104 31.9747 52.8104C43.4411 52.8104 52.7698 43.4743 52.7698 31.9989C52.7698 20.5236 43.4411 11.1875 31.9747 11.1875ZM31.9747 42.7689C26.0305 42.7689 21.2132 37.9478 21.2132 31.9989C21.2132 26.05 26.0305 21.2289 31.9747 21.2289C37.919 21.2289 42.7363 26.05 42.7363 31.9989C42.7363 37.9478 37.919 42.7689 31.9747 42.7689Z" fill="black" />
        <path fillRule="evenodd" clipRule="evenodd" d="M33.7174 7.77038V0C50.5936 0.902991 64 14.8858 64 32C64 49.1142 50.5936 63.0931 33.7174 64V56.2296C46.2952 55.3305 56.2551 44.8124 56.2551 32C56.2551 19.1876 46.2952 8.66949 33.7174 7.77038ZM13.6349 47.8895C10.3007 44.0373 8.15151 39.1309 7.76814 33.744H0C0.402735 41.2818 3.4155 48.1221 8.13602 53.3889L13.631 47.8895H13.6349ZM30.2324 64V56.2296C24.8458 55.846 19.9433 53.6989 16.0941 50.3582L10.599 55.8576C15.8656 60.5857 22.7005 63.5969 30.2285 64H30.2324Z" fill="url(#paint0_linear_1064_14)" />
        <defs>
          <linearGradient id="paint0_linear_1064_14" x1="34.9724" y1="4.4999" x2="3.47235" y2="35.9752" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex items-center gap-4">
        <p className="text-4xl font-bold text-neutral-900">Turborepo</p>
        {location && <p className="text-4xl text-neutral-900">{location}</p>}
      </div>
    </div>

  );
}

export default Turborepo;