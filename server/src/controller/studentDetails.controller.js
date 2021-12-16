const express = require("express");
const studentDetailsSchema = require("../model/studentDetails.model");

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - gender
 *         - age
 *       properties:
 *         name:
 *           type: string
 *           description: The book title
 *         gender:
 *           type: string
 *           description: The book author
 *         age:
 *           type: string
 *           description: The book author
 *       example:
 *         name: Vivek Ranjan
 *         gender: Male
 *         age: 24 
 */

 /**
  * @swagger
  * tags:
  *   name: studentDetails
  *   description: The Student StudentDetails API
  */

/**
 * @swagger
 * /studentDetails:
 *   post:
 *     summary: Add a new student
 *     tags: [studentDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The student was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */
const router = express.Router();
router.post("/", async (req, res) => {
  const studentData = await studentDetailsSchema.create(req.body);
  return res.status(201).json({ data: studentData });
});

/**
 * @swagger
 * /studentDetails:
 *   get:
 *     summary: Returns the list of all the Students
 *     tags: [studentDetails]
 *     collectionFormat: multi
 *     responses:
 *       200:
 *         description: The list of the students
 *         produces:
 *          -application/yaml
 *          -application/json
 *          -application/xml
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *           application/yaml:
 *             schema:
 *               type: array
 *             items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get("/", async (req, res) => {
  const studentData = await studentDetailsSchema.find();
  return res.status(200).json({ data: studentData });
});

/**
 * @swagger
 * /studentDetails/{id}:
 *   get:
 *     summary: Get the student by id
 *     tags: [studentDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: The student description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The student was not found
 */

router.get("/:id", async (req, res) => {
  const studentData = await studentDetailsSchema.findById(req.params.id);
  return res.status(200).json({ data: studentData });
});

/**
 * @swagger
 * /studentDetails/{id}:
 *  patch:
 *    summary: Update the student by the id
 *    tags: [studentDetails]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The student id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The student was not found
 *      500:
 *        description: Some error happened
 */

router.patch("/:id", async (req, res) => {
  const studentData = await studentDetailsSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.status(200).json({ data: studentData });
});

/**
 * @swagger
 * /studentDetails/{id}:
 *   delete:
 *     summary: Remove the student by id
 *     tags: [studentDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 * 
 *     responses:
 *       200:
 *         description: The student was deleted
 *       404:
 *         description: The student was not found
 */

router.delete("/:id", async (req, res) => {
  const studentData = await studentDetailsSchema.findByIdAndDelete(
    req.params.id
  );
  return res.status(204).json({ data: studentData });
});

module.exports = router;
