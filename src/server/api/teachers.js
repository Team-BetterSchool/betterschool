const router = require('express').Router();
const { Teacher, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const teachers = await Teacher.findAll();
    res.send(teachers);
  } catch (err) {
    next(err);
  }
});

router.get('/:teacherId', async (req, res, next) => {
  try {
    const teacher = await Teacher.findOne({
      where: {
        id: +req.params.teacherId,
      },
      include: Student,
    });
    res.send(teacher);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.send(teacher);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    await teacher.update(req.body);
    res.send(teacher);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    await teacher.destroy();
    res.send(teacher);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
