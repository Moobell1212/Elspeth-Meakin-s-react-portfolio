import axios from "axios";

const bioApiUrl = "https://api.github.com/users/Moobell1212";

export default function GitHubBioInfo() {

    return (
        axios.get(bioApiUrl)
    )
}