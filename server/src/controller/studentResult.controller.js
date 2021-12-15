const express = require("express");
const studentResultSchema = require("../model/studentResult.model");

const router = express.Router();
router.post("/", async (req, res) => {
  const studentResult = await studentResultSchema.create(req.body);
  return res.status(201).json({ data: studentResult });
});

router.get("/", async (req, res) => {
  const studentResult = await studentResultSchema.find();
  return res.status(200).json({ data: studentResult });
});

router.get("/:id", async (req, res) => {
  const studentResult = await studentResultSchema.findById(req.params.id);
  return res.status(200).json({ data: studentResult });
});

router.patch("/:id", async (req, res) => {
  const studentResult = await studentResultSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.status(200).json({ data: studentResult });
});

router.delete("/:id", async (req, res) => {
  const studentResult = await studentResultSchema.findByIdAndDelete(
    req.params.id
  );
  return res.status(204).json({ data: studentResult });
});

module.exports = router;
