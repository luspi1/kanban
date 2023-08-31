import express from "express";
import cors from "cors";
import { columns } from "./mockData/columns.mjs";
import { titleColumns } from "./mockData/titleColumns.mjs";

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
const getAllColumns = (req, res) => {
  res.status(200).json(columns);
};
const getTitleColumns = (req, res) => {
  res.status(200).json(titleColumns);
};


const updateColumn = (req, res) => {
  const newColumn = req.body;
  const colIdx = +newColumn.id;
  columns.splice(colIdx, 1, newColumn);
  res.status(201).json(columns);
};
const updateAllColumns = (req, res) => {
  const newColumns = req.body
  columns.splice(0, 4, ...newColumns)
  res.status(201).json(newColumns);
};


app.get("/api/v1/columns", getAllColumns);
app.get("/api/v1/titleColumns", getTitleColumns);
app.put("/api/v1/columns/:id", updateColumn);
app.put("/api/v1/allCol", updateAllColumns);
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


