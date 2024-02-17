const { data } = require("../users.json");
// const getQueryErrors = require("../validators/users.validators");


const getAllUsers = (req, res) => {
    res.json(data);
}

const getUsersByUuid = (req, res) => {
    console.log("getUsersByUuid is called")
    const { uuid } = req.params;
    const result = data.find((item) => item.login.uuid === uuid);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
}



const searchUsersByQuery = (req, res) => {
    console.log("searchUsersByQuery called")
    const {gender, age} = req.query;
    // const error = getQueryErrors({ age, gender });
    // if (error) {
    //     return res.status(422).json(error);
    // }
    if (gender && age) {
        const results = data.filter((item) => item.gender === gender && Number(item.dob.age) >= Number(age))
        res.json(results);
    } else if (gender) {
        const results = data.filter((item) => item.gender === gender);
        res.json(results);
    } else if (age) {
        const results = data.filter((item) => Number(item.dob.age) >= Number(age))
        res.json(results);
    } else {
        res.sendStatus(404);
    }

}

module.exports = {
    getAllUsers,
    getUsersByUuid,
    searchUsersByQuery
}