const { getCaseData } = require("./case-model");

exports.alternateCases = (req, res, next) => {
  const { lowercase, uppercase } = req.query;
  getCaseData(lowercase, uppercase).then(data => res.status(200).send(data));
};
