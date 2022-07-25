export default (UserModel) => {
    return UserModel.bulkCreate([{
        id : 1,
        username : "user1",
        email : "user1@gmail.com",
        password : 'user1password'
    },{
        id : 2,
        username : "user2",
        email : "user2@gmail.com",
        password : 'user2passsword'
    }
    ]);

}