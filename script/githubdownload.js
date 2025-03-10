const axios = require('axios');

  async function fetchGitHubRepoInfo(repoUrl) {
    try {
      // Hapus ".git" dari URL jika ada
      repoUrl = repoUrl.replace(/\.git$/, "");

      // Parsing URL untuk mendapatkan owner dan repo name
      const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (!match) throw new Error("Invalid GitHub repository URL");

      const owner = match[1];
      const repo = match[2];

      // Ambil data repo dari GitHub API
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { 'User-Agent': 'GitHub-Repo-Downloader' }
      });

      const repoData = response.data;
      const downloadUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/${repoData.default_branch}.zip`;

      return {
        status: true,
        result: {
          id: repoData.id,
          name: repoData.name,
          full_name: repoData.full_name,
          owner: repoData.owner.login,
          owner_avatar: repoData.owner.avatar_url,
          description: repoData.description,
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          language: repoData.language,
          default_branch: repoData.default_branch,
          repo_url: repoData.html_url,
          download_zip: downloadUrl
        }
      };
    } catch (error) {
      console.error("Error fetching repo info:", error.message);
      return { status: false, error: error.message };
    }
  }
  
  module.exports = fetchGitHubRepoInfo