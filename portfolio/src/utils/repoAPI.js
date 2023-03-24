import axios from "axios";

export default function Repositories() {

    const repoApiUrl = "https://api.github.com/users/Moobell1212/repos";

    return (
        axios.get(repoApiUrl)
    )

}