const githubstalk = require('../script/githubstalk.js');

(async () => {
  const user = 'XBotzLauncher';
  try {
    const data = await githubstalk(user);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()