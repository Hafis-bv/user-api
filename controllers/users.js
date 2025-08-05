import { jsonResponse } from "../middlewares/jsonResponse.js";
import { parseBody } from "../utils/bodyParser.js";

const users = [
  {
    id: 1,
    name: "Hafis",
    age: 18,
    funFact: "I love coding!",
  },

  {
    id: 2,
    name: "Togrul",
    age: 18,
    funFact: "I love korean movies!",
  },

  {
    id: 3,
    name: "Abbas",
    age: 18,
    funFact: "I am Hafis's master!",
  },

  {
    id: 4,
    name: "Tima",
    age: 18,
    funFact: "Qiz qorsen zorlamaq lazimdi!",
  },

  {
    id: 5,
    name: "Orxan",
    age: 18,
    funFact: "Men alkash kimi qorunurem amma icmemshem!",
  },

  {
    id: 6,
    name: "Navid",
    age: 18,
    funFact: "Sumqaitde qalannara pis baxiram!",
  },
];

export const handleAllUsers = (req, res) => {
  jsonResponse(res, 200, users);
};

export const handleUserById = (req, res) => {
  const id = Number(req.url.split("/")[3]);

  const user = users.find((user) => user.id === id);

  if (user) {
    jsonResponse(res, 200, user);
  } else {
    jsonResponse(res, 404, { error: "User not found" });
  }
};

export const handleCreateUser = async (req, res) => {
  try {
    const body = await parseBody(req);

    const { name, age, funFact } = body;

    if (!name || !age || !funFact) {
      jsonResponse(res, 400, { error: "All fields are required" });
      return;
    }

    const newUser = {
      id: users.length + 1,
      // name: name
      name,
      // age: age
      age,
      // funFact: funFact
      funFact,
    };

    users.push(newUser);
    console.log(users);

    jsonResponse(res, 201, {
      message: "User successfully created",
      user: newUser,
    });
  } catch (e) {
    jsonResponse(res, 500, { error: e });
  }
};
