import axios from "axios";
import { useEffect, useState } from "react";

export default function Repositories() {
    const [repos, setRepos] = useState([]);

    const repoApiUrl = "https://api.github.com/users/Moobell1212/repos";

    return (
        axios.get(repoApiUrl).then((response) => { setRepos(response.data) })
    )
}