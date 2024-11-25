const getApiUrl = () =>
  `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_API_URL
  }/api`;

export default getApiUrl;
