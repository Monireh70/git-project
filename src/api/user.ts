import { Octokit } from "octokit";
import { token ,username } from "../const";



export interface User {
  login: string;
  avatar_url: string;
  name: string | null;
  company: string | null;
  bio: string | null;
  followers: number | null;
  following: number | null;
}
async function getUser(): Promise<User> {
  const octokit = new Octokit({
    auth: token,
  });

  const response = await octokit.request("GET /users/{username}", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log("user");
  console.log({ response });

  //response.data
  return response.data;
}

export { getUser };
