const axios = require('axios')

  async function fetchGitHubRepos(query, sort = 'stars', order = 'desc') {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=${sort}&order=${order}`,
        {
          headers: {
            'User-Agent': 'GitHub-Repo-Search',
          },
        }
      );

      const repos = response?.data?.items || [];
      return {
        status: true,
        result: repos.map((repo) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          owner: repo.owner.login,
          owner_avatar: repo.owner.avatar_url,
          description: repo.description,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          url: repo.html_url,
        })),
      };
    } catch (error) {
      console.error("Error fetching from GitHub API:", error.message);
      return { status: false, error: error.message };
    }
  }
  
  module.exports = fetchGitHubRepos