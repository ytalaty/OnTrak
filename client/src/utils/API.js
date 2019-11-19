import axios from "axios";
/* eslint-disable no-console */
export default {
  getLoginStatus: async () => {
    try {
      const res = await axios.get("/api/login/status");
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  postUserLogin: async (user, done) => {
    try {
      const res = await axios.post("/api/login", user);
      // Async function for logging in, setting up callback to return two params, ( error: false if no error, res.data: userData from server )
      return res.data.user.username
        ? done(false, res.data)
        : done(false, "error logging in");
    } catch (err) {
      console.log("serverside error thrown failed log in attempt");
      return done(true, false);
    }
  },
  getLoggedOut: async () => {
    try {
      const res = await axios.get("/api/logout");
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  postNewUser: async newUser => {
    // Example POST: { "vals": ["test_user", "111111", 1] }
    console.log(newUser);
    try {
      let { username, password, access_id } = newUser;
      const res = await axios.post("/api/user", {
        vals: [
          username,
          password,
          access_id,
          Math.random() * 9999999,
          access_id === '1'
            ? "Student"
            : access_id === '2'
            ? "Professor"
            : access_id === '3'
            ? "Admin"
            : "Student"
        ]
      });
      console.log(res);
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  getAllUsers: async () => {
    try {
      const res = await axios.get("/api/user");
      console.log(res);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  deleteUserById: async id => {
    try {
      const res = await axios.delete(`api/user/${id}`);
      console.log(res);
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  //NEW STUFF attempt BELOW
  groupsByUserById: async id => {
    try {
      const res = await axios.get(`api/group/${id}`);
      console.log(res);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  coursesByUserById: async id => {
    try {
      const res = await axios.get(`api/course/${id}`);
      console.log(res);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  groupsByCourseById: async id => {
    try {
      const res = await axios.get(`api/group/course/${id}`);
      console.log(res);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  getAllTasks: async () => {
    try {
      const res = await axios.get("/api/task");
      console.log(res);
      return res.data;
    } catch (err) {
      return console.log(err);
    }
  },
  updateTaskById: async id => {
    try {
      const res = await axios.delete(`api/task/${id}`);
      console.log(res);
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
  postNewTask: async newTask => {
    // Example POST: { "vals": ["test_user", "111111", 1] }

    console.log(newTask);
    try {
      let { taskId, groupId, description, deadline, taskName, userId, creationDate, status } = newTask;
      const res = await axios.post("/api/task", {
        //If we want to autogenerate a value, change one of the values here
        vals: [
          taskId, //Ex: instead of taskId here, we could have a random number generated.
          groupId,
          description,
          deadline,
          taskName,
          userId,
          creationDate,
          status
        ]
      });
      console.log(res);
      return res;
    } catch (err) {
      return console.log(err);
    }
  },
};
