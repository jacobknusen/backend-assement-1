const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/ranfortune", (req, res) => {
  const fortune = ["dang you look good today!",
					 "is that bathing ape?! its in your furture",
					 "your going to recive 1 million dollars.",
           "you'll go to the league!",
           "all your hard work is going to pay off!"
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomfortune = fortune[randomIndex];

  res.status(200).send(randomfortune);
  
});
app.get("/api/weather", (req, res) => {
  const fortune = ["dang its hot!",
					 "its so cold",
					 "i love the rain",
           "pls we need more snow!",
           "its a perfect beach day!"
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomfortune = fortune[randomIndex];

  res.status(200).send(randomfortune);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
