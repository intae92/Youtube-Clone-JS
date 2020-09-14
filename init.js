import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
//dotenv파일에 있는 값을 변수로 저장해서 다른곳에 키값으로 줄수 있음
import "./models/Video";
import "./models/Video";

const PORT = process.env.PORT;
const handleListening = () =>
  console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
