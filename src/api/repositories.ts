import { Octokit } from "octokit";
import { token, username } from "../const";


export interface RepoInterface {
    name:string | null;
    forks_count:number;
    private: boolean;
    visibility:"public" | "private" ;
    language:string | null;
}
async function getAllRepo(): Promise<RepoInterface> {
  const octokit = new Octokit({
    auth: token,
  });

  const repos = await octokit.request("GET /users/{username}/repos", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
 
  return repos.data

}

export { getAllRepo };
