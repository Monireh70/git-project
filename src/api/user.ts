import {Octokit} from "octokit";

const token="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"

async function getUser(){

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ 
    auth: token });

const response = await octokit.request("GET/users/{username}",{
    username:"USERNAME",
    Headers:{
        "X-GitHub-Api-Version":"2022-11-28",
    },
})

return response.data;
}

export {getUser};