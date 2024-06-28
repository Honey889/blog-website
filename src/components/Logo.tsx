import Link from 'next/link';
import React from 'react'
interface Props {
    title?:string;
    classname?:string;
}
const Logo = ({title , classname} : Props) => {
  return (
    <div>
        <Link href={"/"}>
       <h1 className={`text-3xl uppercase font-extrabold font-serif ${classname}`}>{title || "Earthly Endeavors"}</h1>
       </Link>
    </div>
  )
}

export default Logo
