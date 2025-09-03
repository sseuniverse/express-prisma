import { Router } from "express";
import {
  createTodoValidator,
  getAllTodosQueryValidators,
  updateTodoValidator,
} from "../validators/todo.validators";
import { validate } from "../validators/validate";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  toggleTodoDoneStatus,
  updateTodo,
} from "../controllers/todo.controller";
import { verifyJWT } from "../middlewares/auth.middleware";
import { mongoIdPathVariableValidator } from "../validators/mongodb.validators";

const router = Router();

router.use(verifyJWT);

router
  .route("/")
  .post(createTodoValidator(), validate, createTodo)
  .get(getAllTodosQueryValidators(), validate, getAllTodos);

router
  .route("/:todoId")
  .get(mongoIdPathVariableValidator("todoId"), validate, getTodoById)
  .patch(
    mongoIdPathVariableValidator("todoId"),
    updateTodoValidator(),
    validate,
    updateTodo
  )
  .delete(mongoIdPathVariableValidator("todoId"), validate, deleteTodo);

router
  .route("/toggle/status/:todoId")
  .patch(
    mongoIdPathVariableValidator("todoId"),
    validate,
    toggleTodoDoneStatus
  );

export default router;
