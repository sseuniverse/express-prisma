import { body, query, ValidationChain } from "express-validator";

const getAllTodosQueryValidators = (): ValidationChain[] => {
  return [
    query("query").optional(),
    query("complete")
      .optional()
      .isBoolean({
        loose: true,
      })
      .withMessage("complete flag must be a boolean."),
  ];
};

const createTodoValidator = (): ValidationChain[] => {
  return [
    body("title").trim().notEmpty().withMessage("Todo title is required"),
    body("description")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
  ];
};

const updateTodoValidator = (): ValidationChain[] => {
  return [
    body("title")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
    body("description")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Todo title is required"),
  ];
};

export { createTodoValidator, updateTodoValidator, getAllTodosQueryValidators };
