import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('M')
    return (
        <small>{value}</small>
    )
})
