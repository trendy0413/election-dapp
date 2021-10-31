import axios from 'axios';

axios.defaults.withCredentials = true;

const isAdmin = async () => {
  try {
    const res = await axios.get(`http://localhost:5000/auth/isadmin`);
    console.log('Auth res: ', res);
    return res.data.isAdmin;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios.post('http://localhost:5000/auth/login', {
      email: email,
      password: password,
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return { msg: 'Some Error Occured' };
  }
};

const logout = async () => {
  try {
    const res = await axios.get('http://localhost:5000/auth/logout');
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return { msg: 'Some Error Occured' };
  }
};

const sendOTP = async voterID => {
  try {
    const res = await axios.get('http://localhost:5000/api/regVoter/sendOTP', {
      params: { voterID: voterID },
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return { msg: 'OTP not sent' };
  }
};

const verifyOTP = async (phone, code) => {
  console.log('phone => ' + phone);
  console.log('code => ' + code);
  try {
    const res = await axios.post(
      'http://localhost:5000/api/regVoter/verifyOTP',
      {
        phone: phone,
        code: code,
      }
    );
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return { msg: 'OTP not verified' };
  }
};

export { isAdmin, login, logout, sendOTP, verifyOTP };
