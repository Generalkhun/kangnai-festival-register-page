import Link from 'next/link'
import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <div>
            feeling card
            <Link href={'/'}>
                <button>done (back)</button>
            </Link>
        </div>
    )
}

export default index