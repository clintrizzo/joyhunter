const { Profile } = require("../models");

const profileData = [
  {
    name: "Elton Lac",
    email: "EltonLac@gmail.com",
    age: 23,
    city: "Rosemead",
    dob: "11/17/1997",
  },
  {
    name: "John Duong",
    email: "JohnDuong@gmail.com",
    age: 24,
    city: "San Diego",
    dob: "06/09/1996",
  },
];

const profileInfo = () => Profile.bulkCreate(profileData);
module.exports = profileInfo;
