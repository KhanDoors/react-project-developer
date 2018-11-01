const initState = {
  projects: [
    { id: "1", title: "cow jumped over moon", content: " rrr ttt" },
    { id: "2", title: "cat in the hat", content: "wwwwww" },
    { id: "3", title: "mary had a lamb", content: "llllll" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
