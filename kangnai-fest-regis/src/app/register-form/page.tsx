import Link from 'next/link'
import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <div>
            register form
            <Link href={'/emotional-check'}>
                <button>next</button>
            </Link>
        </div>
    )
}

export default index