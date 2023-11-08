const studentModel = require("../models/studentModel");
const bcrypt = require('bcryptjs');

exports.studentEntry = async (req, res) => {
  try {
    const { name,f_name,m_name,mobile ,whatsapp,parent_mobile, email, aadhar,dob, blood_group, gender,caste_category,differently,ward,nationality } = req.body;
    
    const existingUser = await studentModel.findOne({email})
    if(existingUser){
      return res.status(404).json({
        success: false,
        message: "Email already Existed"
      })
    }
    const studentId = `STU-${Math.floor(100000 + Math.random() * 900000)}`;
    const password = bcrypt.hashSync(dob, 10);

    const response = await studentModel.create({ name,f_name,m_name,mobile ,whatsapp,parent_mobile, email, aadhar,dob, blood_group, gender,caste_category,differently,ward,nationality,studentId, password});
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfuly",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal server Error",
      message: err.message,
    });
  }
};