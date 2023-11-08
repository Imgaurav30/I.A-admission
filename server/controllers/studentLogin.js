const studentModel = require("../models/studentModel");

exports.studentLogin = async (req, res) => {
    const { studentId, dob } = req.body;
    try {
      const user = await studentModel.findOne({ studentId, dob });
      if (user) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
}