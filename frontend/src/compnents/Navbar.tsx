import { useNavigate } from 'react-router-dom';
import { Button } from './Button'

export function Navbar({ className }: {
    className: string
} ){
    const navigate = useNavigate();
    return (
        <main className={` grid grid-cols-2 text-white bg-black w-full h-20 ${ className } `}>
            <div className="flex justify-center  items-center text-xl gap-2 font-semibold">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                Medium
            </div>
            <div className="flex items-center justify-end pr-4 gap-2">
                <a href="/signin">
                    <Button className='bg-white text-black' label='Signin' />
                </a>
                <a href="/signup">
                    <Button className='bg-white text-black' label='Signup'/>
                </a>
                { <Button label='logout' onClick={()=>{
                     localStorage.removeItem("token");
                     navigate("/signin")
                }}/>}
            </div>
        </main>
    )
}