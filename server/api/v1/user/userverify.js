const bcrypt=require('bcrypt');

const encrypt=(val)=>{

    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(val, salt);

};

const decrypt=(val,hash)=>{

    return bcrypt.compareSync(val, hash);
}
module.exports={
    encrypt,
    decrypt
}