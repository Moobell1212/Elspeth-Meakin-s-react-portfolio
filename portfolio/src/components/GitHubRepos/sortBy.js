import React from "react";

export default function Sorting() {
    
    
    function date(a, b) {
        if (a.updated_at < b.updated_at) {
            return -1;
        }
        if (a.updated_at > b.updated_at) {
            return 1;
        }
        return 0;
    }

    repos.sort(date)

}