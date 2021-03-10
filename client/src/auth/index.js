import axios from "axios";
import { API } from "../config";

export const verifyEmail = async (value) => {
  const token = {
    token: value,
  };
  const result = await axios.post(`${API}/accounts/verify-email`, token);
  return result;
};

export const createAccount = (values) => {
  return fetch(`${API}/accounts/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err.json();
    });
};

export const signIn = (values) => {
  return fetch(`${API}/accounts/authenticate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err.json();
    });
};

export const forgotPassword = (values) => {
  return fetch(`${API}/accounts/forgot-password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err.json();
    });
};

export const resetPassword = (values) => {
  return fetch(`${API}/accounts/reset-password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err.json();
    });
};

// export const verifyEmail = (token) => {
//   return fetch(`${API}/accounts/verify-email`, {
//     // mode: "no-cors",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(token),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => {
//       return err.json();
//     });
// };

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwtToken", JSON.stringify(data));
  }
};

export const signOut = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwtToken");
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwtToken")) {
    return JSON.parse(localStorage.getItem("jwtToken"));
  } else {
    return false;
  }
};
