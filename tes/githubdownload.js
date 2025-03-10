const fetchGitHubRepoInfo = require('../script/githubdownload.js');

(async () => {
  const repo = 'https://github.com/zervidas/c.git';
  try {
    const data = await fetchGitHubRepoInfo(repo);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()