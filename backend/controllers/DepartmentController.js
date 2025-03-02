import Department from "../models/Department.js";

export const addDepartment = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(422).json({ message: "field cannot be empty" });
  }
  let dep;
  try {
    dep = await Department.findOne({ name });
    if (dep) {
      res.status(400).json({ message: "department already exists" });
      return;
    } else {
      let newDept = new Department({
        name,
      });
      await newDept.save();
      res
        .status(200)
        .json({ message: "department created successfully", newDept });
    }
  } catch (err) {
    res.status(500).json({ message: "error occured", err });
  }
};
