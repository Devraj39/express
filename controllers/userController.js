const userList = ["dev","raj","singh"];

exports.getUsers = (req, res) => {
    res.json(userList);  
};