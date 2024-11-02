 "use client"
import { useRouter } from "next/navigation"

export default function Projects(){
    const router = useRouter(); 

   return(
        <div>
            <h1 className="absolute w-[277.76Hug] h-[64Hug] left-[135px] top-[165px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Our<br/><span className="font-bold text-[black]">Projects</span></h1>

            <div className="absolute w-[1170px] h-[435px] left-[135px] top-[353px]" />
            
            
                <img src="sample1.png" alt="Project Image1" width={670} height={435} className="absolute w-[670px] h-[435px] left-[135px] top-[353px]"/>
                <h1 className="absolute w-[440px] h-[47px] left-[835px] top-[383px] font-['Roboto'] not-italic font-light text-[40px] leading-[auto] text-[#BDBDBD] ">Sample Project</h1>
                <p className="absolute w-[400px] h-[120px] left-[835px] top-[503px] font-['Roboto'] not-italic font-light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum alias debitis magni eum! Sed, non voluptate blanditiis, corrupti itaque a sit voluptas ullam alias possimus officiis cum, ad suscipit.</p>
                
                <button type="button" className="absolute w-[222px] h-[71px] left-[835px] top-[687px] bg-[#FFFFFF] flex items-center justify-center font-['Roboto'] not-italic text-[14px] text-[#000000]" onClick={()=>router.push('/sample')} >View More →</button>
            
            
                
 

            <div className="absolute w-[1170px] h-[435px] left-[135px] top-[848px]"/>

                <img src="sample2.png" alt="Project Image2" width={670} height={435} className="absolute w-[670px] h-[435px] left-[135px] top-[848px]"/>
                <h1 className="absolute w-[440px] h-[47px] left-[835px] top-[878px] font-['Roboto'] not-italic font-light text-[40px] leading-[auto] text-[#BDBDBD] ">Sample Project 2</h1>
                <p className="absolute w-[400px] h-[120px] left-[835px] top-[998px] font-['Roboto'] not-italic font-light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum alias debitis magni eum! Sed, non voluptate blanditiis, corrupti itaque a sit voluptas ullam alias possimus officiis cum, ad suscipit.</p>

                <button className="absolute w-[222px] h-[71px] left-[835px] top-[1182px] bg-[#FFFFFF] flex items-center justify-center font-['Roboto'] not-italic text-[14px] text-[#000000]">View More →</button>

            <div className="absolute w-[1170px] h-[435px] left-[135px] top-[1343px]"/>
                <img src="sample3.png" alt="Project Image3" width={670} height={435} className="absolute w-[670px] h-[435px] left-[135px] top-[1343px]"/>
                <h1 className="absolute w-[440px] h-[47px] left-[835px] top-[1373px] font-['Roboto'] not-italic font-light text-[40px] leading-[auto] text-[#BDBDBD] ">Sample Project 3</h1>
                <p className="absolute w-[400px] h-[120px] left-[835px] top-[1493px] font-['Roboto'] not-italic font-light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum alias debitis magni eum! Sed, non voluptate blanditiis, corrupti itaque a sit voluptas ullam alias possimus officiis cum, ad suscipit.</p>

                <button className="absolute w-[222px] h-[71px] left-[835px] top-[1677px] bg-[#FFFFFF] flex items-center justify-center font-['Roboto'] not-italic text-[14px] text-[#000000] ">View More →</button>
        </div>
    )
}