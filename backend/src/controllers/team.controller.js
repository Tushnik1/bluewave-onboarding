const settings = require("../../config/settings");
const TeamService = require("../service/team.service");
const { internalServerError } = require("../utils/errors");

const teamService = new TeamService();

const getTeamDetails = async (req, res) => {
  try {
    const data = await teamService.getTeam();
    const result = {
        name: data.team.name,
        users: data.users.map((user)=> ({
            name: user.name,
            email: user.email,
            role: settings.user.roleName[user.role]
        })),
    }
    return res.status(200).json(result);
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "GET_TEAM_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
};

const updateTeamDetails = async (req, res) => {
    const userId = req.user.id;
    const { name } = req.body;
    try {
      await teamService.updateTeam(userId, name);
      return res.status(200).json({ message: "Team Details Updated Successfully" });
    } catch (err) {
      const { statusCode, payload } = internalServerError(
        "UPDATE_TEAM_ERROR",
        err.message,
      );
      res.status(statusCode).json(payload);
    }
};

const removeMember = async (req, res) => {
  const userId = req.user.id;
  const { memberId } = req.body;
  try {
    await teamService.removeUserFromTeam(userId, memberId);
    return res.status(200).json({ message: "User Removed from Team Successfully" });
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "REMOVE_USER_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
}

const changeRole = async (req, res) => {
  const userId = req.user.id;
  const { memberId, role } = req.body;
  try {
    await teamService.updateUserRole(userId, memberId, role);
    return res.status(200).json({ message: "User Role Updated Successfully" });
  } catch (err) {
    const { statusCode, payload } = internalServerError(
      "CHANGE_ROLE_ERROR",
      err.message,
    );
    res.status(statusCode).json(payload);
  }
}

module.exports = { getTeamDetails, updateTeamDetails, removeMember, changeRole };
