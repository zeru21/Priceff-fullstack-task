 const express = require('express');
const {getRandomUsersData,
        getAverageAge,
        getMinimumAge,
        getMaximumAge,
        getNorthernMostUser,
        getSouthernMostUser} = require('../Helpers');
const app = express();
const PORT = 8585;

app.get("/average-age", (req, res) => {
  console.log("Average age requested");
  getRandomUsersData().then(response=>{
    console.log("Response Data: ", response.data.results);
    res.json(getAverageAge(response.data.results));
  })
  .catch(error =>{console.log("Error: ", error);res.json({error:"Data Error"});
    });
});

app.get("/min-age", (req, res) =>
  {
    getRandomUsersData().then(response=>{
      res.json(getMinimumAge(response.data.results));
    })
    .catch(error =>{res.json({error:"Data Error"});
  });
});

app.get("/max-age", (req, res) =>
  {
    getRandomUsersData().then(response=>{
      res.json(getMaximumAge(response.data.results));
    })
    .catch(error =>{res.json({error:"Data Error"});
  });
});

app.get("/northern-most", (req, res) =>
    {
      getRandomUsersData().then(response=>{
        res.json(getNorthernMostUser(response.data.results));
      })
      .catch(error =>{res.json({error:"Data Error"});
    });
});

app.get("/southern-most", (req, res) =>
      {
        getRandomUsersData().then(response=>{
          res.json(getSouthernMostUser(response.data.results));
        })
        .catch(error =>{res.json({error:"Data Error"});
      });
 });

app.listen(PORT, () => {console.log(`Server started at port: ${PORT}`)});
