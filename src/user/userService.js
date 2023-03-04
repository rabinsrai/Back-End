var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({})
      .then(result => {
        return result;
      })
      .catch(error => {
        console.error(error);
        return false;
      });
  }
  

  module.exports.createUserDBService = (userDetails) => {
    const userModelData = new userModel({
      name: userDetails.name,
      address: userDetails.address,
      phone: userDetails.phone
    });
  
    return userModelData.save()
      .then(result => {
        return true;
      })
      .catch(error => {
        console.error(error);
        return false;
      });
  }
  


  module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return userModel.findByIdAndUpdate(id, userDetails)
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  }

 module.exports.removeUserDBService = (id) => { 
    return userModel.findByIdAndDelete(id)
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  }
  