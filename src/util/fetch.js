import fetch from "unfetch";

const util = {
  getRepoDetails: (user, repo) => {
    return fetch(`https://api.github.com/repos/${user}/${repo}`).then(r =>
      r.json()
    );
  },
  getContributors: (user, repo) => {
    return fetch(
      `https://api.github.com/repos/${user}/${repo}/contributors`
    ).then(r => r.json());
  }
};

export default util;
