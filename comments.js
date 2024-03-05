// Create web server
// 1. Import express
const express = require("express");
// 2. Create web server
const app = express();
// 3. Define port
const port = 3000;
// 4. Define route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 5. Start web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// 6. Define route
app.get("/comments", (req, res) => {
  res.send("Comments");
});
// 7. Define route
app.get("/comments/:id", (req, res) => {
  res.send(`Comment ID: ${req.params.id}`);
});
// 8. Define route
app.post("/comments", (req, res) => {
  res.send("Create comment");
});
// 9. Define route
app.put("/comments/:id", (req, res) => {
  res.send(`Update comment ID: ${req.params.id}`);
});
// 10. Define route
app.delete("/comments/:id", (req, res) => {
  res.send(`Delete comment ID: ${req.params.id}`);
});
// 11. Define route
app.get("/comments/:id/replies", (req, res) => {
  res.send(`Replies of comment ID: ${req.params.id}`);
});
// 12. Define route
app.get("/comments/:id/replies/:replyId", (req, res) => {
  res.send(`Reply ID: ${req.params.replyId} of comment
