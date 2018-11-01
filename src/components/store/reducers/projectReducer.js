const initState = {
  projects: [
    { id: "1", title: "cow jumped over moon", content: " rrr ttt" },
    { id: "2", title: "cat in the hat", content: "wwwwww" },
    { id: "3", title: "mary had a lamb", content: "llllll" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
