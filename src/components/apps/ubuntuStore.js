import React from 'react'

export default function UbuntuStore() {
    return (
        <iframe src="https://snapcraft.io/store" frameBorder="0" title="UbuntuStore" className="h-full w-full"></iframe>
    )
}

export const displayUbuntuStore = () => {
    <UbuntuStore> </UbuntuStore>
}
