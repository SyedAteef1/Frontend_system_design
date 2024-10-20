import Link from "next/link"
import Neuro from "./neuro/page"
export default function Home(){
  return(
    <div>
      <p>this is web app page</p>
      <ul>
        <li><Link href={'/neuro'}>Neuro</Link></li>
      </ul>
  
     </div>
  )
}