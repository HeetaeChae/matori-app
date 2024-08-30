import { axiosInstanceWithAccessToken } from "../network/_index";

const handleLogout = async () => {
  const accessToken =
    axiosInstanceWithAccessToken.defaults.headers.common["Authorization"];
  if (accessToken) {
    delete axiosInstanceWithAccessToken.defaults.headers.common[
      "Authorization"
    ];
  }
};

export default handleLogout;
