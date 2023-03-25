import axios from "axios";

const pinnedApiUrl = "https://gh-pinned-repos.egoist.dev/?username=Moobell1212";

export default function PinnedRepositories() {

    return (
        axios.get(pinnedApiUrl)
    )
}