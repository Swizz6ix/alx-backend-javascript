const { default: AppController } = require("../controllers/AppController");
const { default: StudentsController } = require("../controllers/StudentsController");

const mapRoutes = (app) => {
    app.get('/', AppController.getHomepage);
    app.get('/students', StudentsController.getAllStudent);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
