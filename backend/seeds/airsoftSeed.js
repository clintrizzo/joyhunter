const { Airsoft } = require("../models");

const airsoftData = [
  {
    eventTitle: "Birthday Party",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "7146638908",
    date: "06/09/2021 09:00 PM",
    rule1: "1- Close Range",
    rule2: "2- No Body Armor"
  },
  {
    eventTitle: "Night raid at woods",
    location: "13142 Garden Grove blvd, Garden Grove, CA 92843",
    phoneNumber: "8669854932",
    date: "06/16/2021 08:30 PM",
    rule1: "1- No Running",
    rule2: "2- No Body Armor"
  },
  {
    eventTitle: "Airsoft Master",
    location: "97903 Knott Ave #A, Buena Park, CA 90620",
    phoneNumber: "7135231323",
    date: "06/20/2021 09:30 PM",
    rule1: "1- Long Range",
    rule2: "2- body Armor"
  },
  {
    eventTitle: "Tac City Airsoft",
    location: "2430 Artesia Ave, Fullerton, CA 92833",
    phoneNumber: "6578886111",
    date: "06/25/2021 10:00 PM",
    rule1: "1- Pistol Only",
    rule2: "2- Short Range"
  },
  {
    eventTitle: "Gateway Airsoft",
    location: "13142 W Garden Grove Blvd, garden Grove, CA 92843",
    phoneNumber: "7146638900",
    date: "06/27/2021 09:45 PM",
    rule1: "1- No Helmet",
    rule2: "2- No Vest"
  },
  {
    eventTitle: "Airsoft GI",
    location: "21077 Commerce Pointe dr, Walnut, CA 91789",
    phoneNumber: "9098690671",
    date: "07/03/2021 10:20 PM",
    rule1: "1- Sniper Only",
    rule2: "2- Long Range"
  },
  {
    eventTitle: "Airsoft Megastore",
    location: "12140 Altamar Pl, Santa Fe Springs, CA 90670",
    phoneNumber: "5622878918",
    date: "07/11/2021 08:50 PM",
    rule1: "1- No Standing",
    rule2: "2- Sniper Only"
  },
];

const airsoftInfo = () => Airsoft.bulkCreate(airsoftData);
module.exports = airsoftInfo;

