import axios from "axios";

const FIREBASE_URL =
  "https://expense-tracker-app-74bc3-default-rtdb.firebaseio.com/";
const BACKEND_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
const API_KEY = "AIzaSyC29yeStRMbJANm7v51ITvX0sDbheZaxQU";

const authenticate = async (mode, email, password) => {
  const url = `${BACKEND_URL}${mode}?key=${API_KEY}`;
  const userData = { email, password, returnSecureToken: true };
  const response = await axios.post(url, userData);
  const token = response.data.idToken;
  return token;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};

export const fetchProtectedData = async (authUrl) => {
  const response = await axios.get(`${FIREBASE_URL}${authUrl}`);
  return response.data;
};
