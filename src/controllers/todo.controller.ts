import { db } from "../lib/db";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const getAllTodos = asyncHandler(async (req, res) => {
  const { query, complete } = req.query;

  const todos = await db.todo.findMany({
    where: {
      AND: [
        typeof query === "string" && query.trim().length > 0
          ? {
              title: {
                contains: query.trim(),
                mode: "insensitive",
              },
            }
          : {},
        complete !== undefined
          ? {
              isComplete: JSON.parse(complete as string), // parse string to boolean and use correct field name
            }
          : {},
        { userId: req.user.id },
      ],
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, todos, "Todos fetched successfully"));
});

const getTodoById = asyncHandler(async (req, res) => {
  const { todoId } = req.params;

  const todo = await db.todo.findUnique({
    where: { id: todoId, userId: req.user.id },
  });

  if (!todo) {
    throw new ApiError(404, "Todo does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo Fetched successfully"));
});

const createTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const todo = await db.todo.create({
    data: {
      title,
      description,
      userId: req.user.id,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, todo, "Todo created successfully"));
});

const updateTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;
  const { title, description } = req.body;

  const isTodo = await db.todo.findUnique({
    where: { id: todoId, userId: req.user.id },
  });

  if (!isTodo) {
    throw new ApiError(404, "Todo does not exist");
  }

  const todo = await db.todo.update({
    where: { id: todoId, userId: req.user.id },
    data: { title, description },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, todo, "Todo updated successfully"));
});

const toggleTodoDoneStatus = asyncHandler(async (req, res) => {
  const { todoId } = req.params;

  const todo = await db.todo.findUnique({
    where: { id: todoId, userId: req.user.id },
  });

  if (!todo) {
    throw new ApiError(404, "Todo does not exist");
  }

  const updatedTodo = await db.todo.update({
    where: { userId: req.user.id, id: todoId },
    data: { isComplete: !todo.isComplete },
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedTodo,
        `Todo marked ${updatedTodo.isComplete ? "done" : "undone"}`
      )
    );
});

const deleteTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;

  const isTodo = await db.todo.findUnique({
    where: { id: todoId, userId: req.user.id },
  });

  if (!isTodo) {
    throw new ApiError(404, "Todo does not exist");
  }

  const todo = await db.todo.delete({
    where: { id: todoId, userId: req.user.id },
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, { deletedTodo: todo }, "Todo deleted successfully")
    );
});

export {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodoDoneStatus,
};
