const { Profile } = require("../models");

exports.eventLists = function (req, res) {
  Profile.findAll().then((data) => {
    console.log(data);
    res.json(data);
  });
};

exports.reserve = async (req, res) => {
  try {
    const { userId, eventId, eventType } = req.body;
    // if ... else... 
    const profiles = await Profile.findOne({
      where: {
        id: userId,
      },
      //include: [Airsoft,Paintball],
    });

    const dbEventId = profiles.dataValues.event_id;

    if (dbEventId) {
      const newEventId = `${dbEventId} ${eventId}`;

      const dbUser = await Profile.update(
        { event_id: newEventId },
        {
          where: { id: userId },
        }
      );

      res.sendStatus(200);
    } else {
      const dbUser = await Profile.update(
        { event_id: eventId },
        {
          where: { id: userId },
        }
      );

      res.sendStatus(200);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

