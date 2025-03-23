import { NextResponse } from "next/server";
import axios from "axios";

const OWNER = "DhavalDudheliya"; // Replace with your GitHub username

// Function to fetch commits for all repos
export async function GET() {
    try {
        // Step 1: Fetch all repositories of the user
        const reposResponse = await axios.get(`https://api.github.com/users/${OWNER}/repos`);
        const repos: { name: string }[] = reposResponse.data;

        let totalCommits = 0;

        // Step 2: Loop through each repo and get commit count
        for (const repo of repos) {
            const API_URL = `https://api.github.com/repos/${OWNER}/${repo.name}/commits`;
            const response = await axios.get(`${API_URL}?per_page=1&page=1`);

            console.log("🚀 ~ response-->", response)
            const linkHeader = response.headers.link;

            if (!linkHeader) {
                totalCommits += response.data.length;
            } else {
                const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
                totalCommits += lastPageMatch ? parseInt(lastPageMatch[1], 10) : 1;
            }
        }

        return NextResponse.json({ totalCommits });
    } catch (error) {
        console.error("Error fetching commits:", error);
        return NextResponse.json({ error: "Error fetching commits" }, { status: 500 });
    }
}
