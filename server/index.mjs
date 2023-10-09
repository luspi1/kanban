import express from "express";
import cors from "cors";
import { titleColumns } from "./mockData/titleColumns.mjs";
import { tracks } from "./mockData/tracks.mjs";
import { boards } from "./mockData/boards.mjs";
import { archiveTasks } from "./mockData/archive.mjs";

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
const getArchiveTasks = (req, res) => {
  res.status(200).json(archiveTasks);
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
  const taskId = req.params.id;
  const newTask = req.body;

  const newTracks = tracks.map(track => {
    const newTracksArr = track.columns.map(column => {
      const newColumnsArr = column.tasks.map(task => {
        if (task.id === taskId) {
          return newTask;
        } else {
          return task;
        }
      });
      return {
        ...column,
        tasks: newColumnsArr
      };
    });

    return {
      ...track,
      columns: newTracksArr
    };

  });

  tracks.splice(0, tracks.length, ...newTracks);


  res.status(201).json(tracks);
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


const addNewTask = (req, res) => {
  const { columnId, title } = req.body;
  const currentDate = new Date();
  const newTask = {
    id: String(Date.now()),
    title,
    startDate: currentDate,
    priority: "lower",
    difficult: "common",
    category: "programming",
    desc: "",
    executor: "",
    checkboxes: [],
    photos: [],
    parentTask: null,
    dependencyTask: [],
    comments: []
  };

  const newTracks = tracks.map(track => {
    const newTracksArr = track.columns.map(column => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [
            ...column.tasks,
            newTask
          ]
        };
      } else {
        return column;
      }
    });
    return {
      ...track,
      columns: newTracksArr
    };
  });

  tracks.splice(0, tracks.length, ...newTracks);

  res.status(201).json(newTracks);
};


const deleteTask = (req, res) => {
  const taskId = req.params.id;
  let searchedTask = {};

  const newTracks = tracks.map(track => {
    const newTracksArr = track.columns.map(column => {
      const newColumnsArr = column.tasks.filter(task => {
        if (task.id === taskId) {
          searchedTask = task;
          return false;
        } else {
          return true;
        }
      });
      return {
        ...column,
        tasks: newColumnsArr
      };
    });
    return {
      ...track,
      columns: newTracksArr
    };
  });
  tracks.splice(0, tracks.length, ...newTracks);
  archiveTasks.push(searchedTask);

  res.status(201).json(newTracks);
};

const restoreTask = (req, res) => {
  const restoreTask = req.body;

  const filteredArchiveTasks = archiveTasks.filter(archiveTask => archiveTask.id !== restoreTask.id);

  tracks[0].columns[0].tasks.push(restoreTask);
  archiveTasks.splice(0, archiveTasks.length, ...filteredArchiveTasks);

  res.status(201).json(restoreTask);

};


app.get("/api/v1/boards/:id/allColumns", getAllColumns);
app.get("/api/v1/boards/:id/tracks", getAllTracks);
app.get("/api/v1/boards/:id/archive", getArchiveTasks);
app.get("/api/v1/boards/:id/titleColumns", getTitleColumns);
app.put("/api/v1/boards/:id/columns", updateColumn);
app.put("/api/v1/boards/:id/updAllCol", updateAllColumns);
app.put("/api/v1/taskItem/:id", updateTask);
app.get("/api/v1/allBoards", getAllBoards);
app.get("/api/v1/boards/:id", getBoardById);
app.get("/api/v1/task/:id", getTaskById);
app.post("/api/v1/addTask", addNewTask);
app.delete("/api/v1/taskDelete/:id", deleteTask);
app.post("/api/v1/taskRestore", restoreTask);
app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));



