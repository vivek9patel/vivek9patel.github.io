import React from 'react'

export default function Todoist() {
    return (
        <iframe src="https://todoist.com/app/project/2293470570" frameBorder="0" title="To Do" className="h-full w-full"></iframe>
        // just to bypass the headers 🙃
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
