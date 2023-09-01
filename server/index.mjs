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
  const newColumns = req.body
  tracks.map(track => {
    const colLength = track.columns.length;
    const currentCols = newColumns.splice(0, colLength);
    track.columns.splice(0, colLength, ...currentCols);
  });
  res.status(201).json(newColumns);
};


app.get("/api/v1/boards/:id/allColumns", getAllColumns);
app.get("/api/v1/boards/:id/tracks", getAllTracks);
app.get("/api/v1/boards/:id/titleColumns", getTitleColumns);
app.put("/api/v1/boards/:id/columns", updateColumn);
app.put("/api/v1/boards/:id/allCol", updateAllColumns);
app.get("/api/v1/allBoards", getAllBoards);
app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));


// const changeStatus = (id) => {
//   const mutableRequest = requests.find(request => request.id === id)
//   setTimeout(() => {
//     mutableRequest.status.code = 'SUCCESS'
//   }, 5000)
// }

// const getRequestById = (req, res) => {
//   const requestId = req.params.id
//   const desiredRequest = requests.find(request => request.id === requestId)
//
//   res.status(200).json(desiredRequest)
// }
// const getRequestStatusById = (req, res) => {
//   const requestId = req.params.id
//   const desiredRequest = requests.find(request => request.id === requestId)
//   res.status(200).json(desiredRequest.status.code)
// }

// const getProcessingStatus = (req, res) => {
//   const processingStatus = {
//     isProcessing: false,
//     reqId: null
//   }
//   requests.forEach(request => {
//     if (request.status.code === 'PROCESSING') {
//       processingStatus.isProcessing = true
//       processingStatus.reqId = request.id
//       return res.status(200).json(processingStatus)
//     }
//   })
//   res.status(200).json(processingStatus)
// }

// const addRequest = (req, res) => {
//   countId++
//   const newRequest = {
//     ...req.body,
//     id: countId.toString(),
//     createDate: date,
//   }
//   newRequest.auto.model.id = countId.toString()
//   requests.push(newRequest)
//   res.status(201).json(newRequest)
//   if (newRequest.status.code === 'PROCESSING') {
//     changeStatus(newRequest.id)
//   }
// }
//


//
// app.get('/api/v1/dictionary/DICT_CITIES', getAllCities)
//
// app.get('/api/v1/requests', getAllRequests)
// app.get('/api/v1/request/:id', getRequestById)
// app.get('/api/v1/request/status/:id', getRequestStatusById)
// app.get('/api/v1/requests/processing', getProcessingStatus)
//
//
// app.post('/api/v1/request/registration', addRequest)
//


