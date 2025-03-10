const fetchGitHubRepos = require('../script/githubsearch.js');

(async () => {
  const query = 'androrat';
  try {
    const data = await fetchGitHubRepos(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()