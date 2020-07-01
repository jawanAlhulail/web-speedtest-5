let instructor = {
  name: "Menawer",
  courses: ["JavaScript", "React", "PHP"],
  githubAccount: {
    username: "careless10",
    numberOfRepos: 200,
  },
  sayHello: function  () {
    console.log("menawer");
  },

};
console.log(instructor.name)
console.log(instructor["courses"][0]);
console.log(instructor.githubAccount.username)
instructor["sayhello"]();
