"use client"
import { useRouter } from "next/navigation"


export default function OurProject(){
    const router = useRouter();
    return(
        <div>
            <div className="absolute w-[1170px] h-[765px] left-[135px] top-[2027px]"></div>
            <div>
                <h1 className="absolute w-[346px] h-[64px] left-[135px] top-[2027px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Our Project</h1>
                <img
                src="pro1.png"
                alt="project1"
                width={570}
                height={255}
                className="absolute w-[570px] h-[255px] left-[135px] top-[2151px]"/>
                <span className="absolute w-[570px] h-[255px] left-[135px] top-[2151px] bg-[#333333] opacity-80"></span>
                <h2 className="absolute w-[233px] h-[128px] left-[214px] top-[2199px] font-['Roboto'] not-italic font-bold text-[64px] leading-[64px] text-[#FFFFFF]">Sample Project</h2>
                <button className="absolute w-[129px] h-[24px] left-[214px] top-[2335px] flex text-[#FFFFFF]" onClick={()=>router.push('/sample')}>View More →
                </button>
                <img
                src="pro2.png"
                alt="project2"
                width={570}
                height={255}
                className="absolute w-[570px] h-[255px] left-[735px] top-[2151px]"/>
                <img 
                src="pro3.png" 
                alt="project3"
                width={270}
                height={255}
                className="absolute w-[270px] h-[255px] left-[135px] top-[2436px]" />
                <img 
                src="pro4.png" 
                alt="project4"
                width={470}
                height={255}
                className="absolute w-[470px] h-[255px] left-[435px] top-[2436px]" />
                <img 
                src="pro5.png" 
                alt="project5"
                width={370}
                height={255}
                className="absolute w-[370px] h-[255px] left-[935px] top-[2436px]" />
                <button className="absolute w-[221.81px] h-[71px] left-[1083px] top-[2721px] bg-[#333333] text-[#ffffff] flex justify-center items-center" onClick={()=>router.push('/project')}>All Projects →</button>

            </div>
        </div>
    )
}