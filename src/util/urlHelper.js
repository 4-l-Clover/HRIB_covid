export const getServerURL = () => {
  // return process.env.NODE_ENV === "production"
  //   ? "https://api.adaptusnow.com"
  //   : "https://api-dev.adaptusnow.com";
  return "https://api-dev.adaptusnow.com";
};

export const getEndpoint = (URL) => `${getServerURL()}/${URL}`;
