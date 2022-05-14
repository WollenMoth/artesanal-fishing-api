const app = require("./lib/server");
const port = 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
