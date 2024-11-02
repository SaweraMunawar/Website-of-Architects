
export default function About(){
    return(
        <div>
            <div className="absolute w-[1170px] h-[435px] left-[135px] top-[1054px] bg-[#FFFFFF]"></div>
            <div>
                <img 
                src="about1.png" 
                alt="Image1" 
                width={270}
                height={265}
                className="absolute w-[270px] h-[265px] left-[235px] top-[1084px]"/>
                <img 
                src="about2.png" 
                alt="Image2" 
                width={270}
                height={140}
                className="absolute w-[270px] h-[140px] left-[235px] top-[1379px]"/>
                <img 
                src="about3.png" 
                alt="Image3" 
                width={270}
                height={345}
                className="absolute w-[270px] h-[345px] left-[535px] top-[1114px]"/>
            </div>
            <div>
                <h1 className="absolute left-[835px] top-[1084px] w-[168px] h-[64px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">About</h1>
                <p className="absolute w-[400px] h-[200px] left-[835px] top-[1168px] font-['Roboto'] nt-italic font-light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum hic beatae voluptates quo perferendis modi, dignissimos suscipit doloribus eum nesciunt nihil? Nulla quo adipisci architecto libero dignissimos necessitatibus quidem?</p>
                <div className="absolute w-[222px] h-[71px] left-[835px] top-[1388px] bg-[#FFFFFF]">
                    <button className="flex h-[12px] text-center items-center left-[20.34px] top-[24px] w-[152px] h-[24] space-[18px] text-[#333333] font-['Roboto'] not-italic text-[12px] leading-[12px] uppercase hover:color-[black]">read more →</button>
                </div>
            </div>

        </div>
    )
}