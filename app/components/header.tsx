import logo from "./public/logo.png";
export default function Header(){
    return(
        <div className="header">
            <div className="w-[100%] h-[102px]">
                <img src="logo.png" alt="logo" loading="lazy" width={70} height={43.71} decoding="async" data-nimg="1" className ="absolute w-[70px] h-[43.71px] left-[135px] top-[29.14px]"/>
            </div>
            <div className="absolute w-[40%] left-[38.12%] top-[44.69px]">
                <ul className="flex justify-between font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase text-[#333333]">
                   <a href="/"><li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">Main</li></a>
                   <a href="gallery"><li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">Gallery</li></a>
                   <a href="project"><li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">Projects</li></a>
                   <a href="certification"><li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">Certifications</li></a>
                   <a href="contact"><li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">Contact</li></a>
                </ul>
            </div>
        </div>
    )
}