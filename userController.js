const UserModel = require("../modules/userModules")

exports.getUsers = async (req, res) => {
    const Users = await UserModel.find({});
    res.json(Users);
};

exports.getUsersById = async (req, res) => {
        
    const { id } = req.params;
    const {isActive} = req.query;

    filter = {_id: Number(id)};
        
    if(isActive){
        filter['isActive'] = Boolean(isActive);
    }


    const user = await UserModel.findOne(filter);
    res.json(user);
};

exports.createUser = async (req,res) => {
    const user = req.body;
    UserModel.insertOne(user);
    res.end("User Created Succesfully");
}

exports.createUsers = async (req, res) => {
    const users = req.body; 
    await UserModel.insertMany(users);
    res.end("Users Created Successfully");
}




