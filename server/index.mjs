import express from "express";
import cors from "cors";
import { titleColumns } from "./mockData/titleColumns.mjs";
import { tracks } from "./mockData/tracks.mjs";
import { boards } from "./mockData/boards.mjs";

const PORT = 4001;
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
const getAllTracks = (req, res) => {
  res.status(200).json(tracks);
};

const getAllColumns = (req, res) => {

  const columnsArr = [];

  tracks.forEach(track => {
    columnsArr.push(...track.columns);
  });

  res.status(200).json(columnsArr);
};
const getAllBoards = (req, res) => {
  res.status(200).json(boards);
};

const getTitleColumns = (req, res) => {
  res.status(200).json(titleColumns);
};


const updateColumn = (req, res) => {
  const newColumn = req.body;
  const colId = +newColumn.id;
  let colIdx = 0;

  const currentTrack = tracks.find(track => {
    return track.columns.some(column => +column.id === colId);
  });
  const trackIdx = +currentTrack.id;

  currentTrack.columns.forEach((column, i) => {
    if (+column.id === colId) {
      colIdx = i;
    }
  });
  tracks[trackIdx].columns.splice(colIdx, 1, newColumn);
  res.status(201).json(tracks);
};

const updateAllColumns = (req, res) => {
  const newColumns = req.body;
  tracks.map(track => {
    const colLength = track.columns.length;
    const currentCols = newColumns.splice(0, colLength);
    track.columns.splice(0, colLength, ...currentCols);
  });
  res.status(201).json(newColumns);
};

const updateTask = (req, res) => {
  const taskInfo = req.body;

  res.status(201).json(taskInfo);
};

const getBoardById = (req, res) => {
  const boardId = req.params.id;
  const foundBoard = boards.find(board => {
    return board.id === boardId;
  });
  res.status(201).json(foundBoard);
};
const getTaskById = (req, res) => {
  const taskId = req.params.id;
  const allTasks = tracks.map(track => {
    return track.columns.map(column => column.tasks);
  }).flat(Infinity);
  const foundTask = allTasks.find(task => {
    return task.id === taskId;
  });
  res.status(201).json(foundTask);
};

app.get("/api/v1/boards/:id/allColumns", getAllColumns);
app.get("/api/v1/boards/:id/tracks", getAllTracks);
app.get("/api/v1/boards/:id/titleColumns", getTitleColumns);
app.put("/api/v1/boards/:id/columns", updateColumn);
app.put("/api/v1/boards/:id/updAllCol", updateAllColumns);
app.put("/api/v1/taskItem", updateTask);
app.get("/api/v1/allBoards", getAllBoards);
app.get("/api/v1/boards/:id", getBoardById);
app.get("/api/v1/task/:id", getTaskById);
app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));



