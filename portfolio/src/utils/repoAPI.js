import axios from "axios";

const repoApiUrl = "https://api.github.com/users/Moobell1212/repos";

export default function Repositories() {

    return (
        axios.get(repoApiUrl)
    )
}