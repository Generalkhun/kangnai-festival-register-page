import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      home page
      <Link href={'/register-form'}>
        <button>register</button>
      </Link>
    </div>
  )
}
