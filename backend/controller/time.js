const Time = require('../model/time');

exports.createTime = async (req, res, next) => {
  const { hour } = req.body;

  const time = await Time.findOne({ hour });
  if (time) return res.status(400).json({ success: false, message: 'Time has exist' });

  try {
    const newTime = new Time({
      hour,
    });

    await newTime.save();

    return res
      .status(201)
      .json({ success: true, message: 'New Time successfully created', time: newTime });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getTime = async (req, res, next) => {
  try {
    const time = await Time.find({});
    return res.status(200).json({ success: true, time });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateTime = async (req, res, next) => {
  const { id } = req.params;
  const { hour } = req.body;

  try {
    const time = await Time.findByIdAndUpdate(id, { hour });

    if (!time)
      return res
        .status(400)
        .json({ success: false, message: "Can't update time that doesn't exist" });

    return res.status(200).json({ success: true, message: 'Time successfully updated' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteTime = async (req, res, next) => {
  const { id } = req.params;

  try {
    const time = await Time.findByIdAndDelete(id);
    console.log(time);
    if (!time)
      return res
        .status(400)
        .json({ success: false, message: "Can't delete time that doesn't exist" });

    return res.status(200).json({ success: true, message: 'Time successfully deleted' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
