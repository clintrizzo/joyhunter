const { Paintball } = require("../models");

const paintballData = [
  {
    eventTitle: "Hollywood sports Paintball",
    location: "9030 Somerset Blvd, Bellflower, CA 90706",
    phoneNumber: "5628679600",
    date: "06/08/2021 07:00 PM",
    rule1: "1- No Standing",
    rule2: "2- No Body Armor"
  },
  {
    eventTitle: "Paintball Gateway",
    location: "13142 W Garden Grove Blvd, Garden Grove, CA 92843",
    phoneNumber: "7146638900",
    date: "06/15/2021 09:30 PM",
    rule1: "1- No Running",
    rule2: "2- No Vest"
  },
  {
    eventTitle: "WPN Inc",
    location: "18042 Cortney Ct, City of Indusrty, CA 91748",
    phoneNumber: "6268393332",
    date: "06/19/2021 10:30 PM",
    rule1: "1- Long Range",
    rule2: "2- body Armor"
  },
  {
    eventTitle: "Tac City Paintball",
    location: "2430 Artesia Ave, Fullerton, CA 92833",
    phoneNumber: "6578886111",
    date: "06/26/2021 10:30 PM",
    rule1: "1- No Standing",
    rule2: "2- Short Range"
  },
  {
    eventTitle: "WPN Inc",
    location: "18042 Cortney Ct, City of Indusrty, CA 91748",
    phoneNumber: "6268393332",
    date: "06/29/2021 09:30 PM",
    rule1: "1- Short Range",
    rule2: "2- body Armor"
  },
  {
    eventTitle: "Paintball Gateway",
    location: "13142 W Garden Grove Blvd, Garden Grove, CA 92843",
    phoneNumber: "7146638900",
    date: "07/03/2021 08:30 PM",
    rule1: "1- No Running",
    rule2: "2- No Vest"
  },
  {
    eventTitle: "Hollywood sports Paintball",
    location: "9030 Somerset Blvd, Bellflower, CA 90706",
    phoneNumber: "5628679600",
    date: "07/12/2021 08:00 PM",
    rule1: "1- No Standing",
    rule2: "2- No Body Armor"
  },
];

const paintballInfo = () => Paintball.bulkCreate(paintballData);
module.exports = paintballInfo;