import About from "../components/about";
"use client"
import { useRouter } from "next/navigation";
export default function Main(){
    const router = useRouter();
    return(
        <div className="max-w-[100%] overflow-hidden">
            <div>
            
            <h1 className="absolute w-[277.76px] h-[64px] left-[135px] top-[438px] text-[#BDBDBD] font-['Roboto'] not-italic font-light text-[64px] leading-[64px]">PROJECT</h1>
            
            <h2 className="absolute w-[186px] h-[64px] left-[135px] top-[502px] text-[#333333] font-['Roboto'] not-italic font-bold text-[64px] leading-[64px]">LORUM</h2>
            </div>
            <div>
                <img src="main.png" alt="Building image" className="absolute w-[770px] h-[829px] left-[535px] top-[105px] "/>
                <div className="absolute w-[221.81px] h-[71px] left-[534.66px] top-[863px] bg-[#FFFFFF] pl-7 pt-7">
                    <button className="flex h-[12px] text-center items-center left-[20.34px] top-[24px] w-[152px] h-[24] space-[18px] text-[#333333] font-['Roboto'] not-italic text-[12px] leading-[12px] uppercase" onClick={()=>router.push('/project')}>View projects →</button>
                </div>
            </div>
        </div>

    )
}