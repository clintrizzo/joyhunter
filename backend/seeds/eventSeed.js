const { Event } = require("../models");

const eventData = [
  {
    eventTitle: "Birthday Party",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "06/09/2020",
  },
  {
    eventTitle: "Night raid at woods",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "12/13/2020",
  },
  {
    eventTitle: "Warehouse raid",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "02/17/2021",
  },
  {
    eventTitle: "Factory raid",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "03/22/2021",
  },
  {
    eventTitle: "Labs raid",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "04/12/2021",
  },
];

const eventInfo = () => Event.bulkCreate(eventData);
module.exports = eventInfo;
