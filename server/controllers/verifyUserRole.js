const verifyUserRole = async (req, res) => {
  try {
    console.log("req0 in verifyUserRole", req.user);
    const user = req.user;
    return res.status(200).send(user);
  } catch (err) {
    console.log("err in verifyUserRole.js", err);
  }
};
module.exports = verifyUserRole;
