import Students from "../models/Students";

class StudentsController {
  async store(req, res) {
    const { email } = req.body;
    const student = await Students.findOne({ where: email });
    if (student)
      return res
        .status(401)
        .json({ error: "A student with that email already exists." });
    const { id, name, age, weight, height } = await Students.create(req.body);
    return res.status(201).json({
      id,
      email,
      name,
      age,
      weight,
      height
    });
  }

  async update(req, res) {
    const student = await Students.findByPk(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found." });
    const studentUpdated = student.update(req.body);
    return res.json(studentUpdated);
  }
}

export default new StudentsController();
