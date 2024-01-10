
const generateToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const users = [
  {
    id: 1,
    username: "Gezart",
    password: "gezi",
    email: "gezi@demogency.com",
    token: generateToken(),
  },
  {
    id: 2,
    username: "jane_doe",
    password: "janes_password",
    email: "jane@example.com",
    token: generateToken(),
  },
  {
    id: 3,
    username: "alice_smith",
    password: "alices_password",
    email: "alice@example.com",
    token: generateToken(),
  },
  {
    id: 4,
    username: "bob_jackson",
    password: "bobs_password",
    email: "bob@example.com",
    token: generateToken(),
  },
  {
    id: 5,
    username: "emily_white",
    password: "emilys_password",
    email: "emily@example.com",
    token: generateToken(),
  },
  {
    id: 6,
    username: "charlie_brown",
    password: "charlies_password",
    email: "charlie@example.com",
    token: generateToken(),
  },
  {
    id: 7,
    username: "olivia_martin",
    password: "olivias_password",
    email: "olivia@example.com",
    token: generateToken(),
  },
  {
    id: 8,
    username: "david_clark",
    password: "davids_password",
    email: "david@example.com",
    token: generateToken(),
  },
  {
    id: 9,
    username: "sophia_adams",
    password: "sophias_password",
    email: "sophia@example.com",
    token: generateToken(),
  },
  {
    id: 10,
    username: "michael_hill",
    password: "michaels_password",
    email: "michael@example.com",
    token: generateToken(),
  },
];

export default users;
