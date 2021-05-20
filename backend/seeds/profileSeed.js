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
  {
    name: "Ron Burns",
    email: "RonBurns@gmail.com",
    age: 28,
    city: "las Vegas",
    dob: "08/09/1992",
  },
  {
    name: "Noreldin Saad",
    email: "Noreldin Saad@gmail.com",
    age: 26,
    city: "Anaheim",
    dob: "06/01/1994",
  },
  {
    name: "Robert Cooper",
    email: "RobertCooper@gmail.com",
    age: 28,
    city: "Costa Mesa",
    dob: "04/23/1992",
  },
];

const profileInfo = () => Profile.bulkCreate(profileData);
module.exports = profileInfo;
