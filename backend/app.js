// index.js 또는 app.js
const express = require('express');
const connectDB = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
const app = express();
const port = 8090;


// MongoDB 연결
const startApp = async () => {
    try {
        await connectDB();
        console.log('MongoDB 연결');
    } catch (error) {
        console.error("서버 연결 실패", error);
        process.exit(1);
    }
};

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트
app.use('/api', todoRoutes);

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello World with Mongoose and Express!');
});

// /ads/:params 설정
app.get('/ads/:params', (req, res) => {
    const { params } = req.params;
    res.send(`Hello ads ${params}`);
});

app.use(cors({
    origin: 'http://localhost:5173/', // 프론트엔드 도메인 설정
}));

startApp();

module.exports = app;
