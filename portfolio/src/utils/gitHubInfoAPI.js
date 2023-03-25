import axios from "axios";

const bioApiUrl = "https://api.github.com/users/Moobell1212";

export default function GitHubInfo() {

    return (
        axios.get(bioApiUrl)
    )
}