

export default function Contact(){
    
    return(
        <div>
            <h1 className="absolute w-[338Hug] h-[64Hug] left-[135px] top-[165px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Contact <br/><span className="font-bold text-[black]">Information</span></h1>

            <h2 className="absolute w-[280Hug] h-[46Hug] left-[135px] top-[327px] font-['Roboto'] not-italic font-bold text-[18px] leading-[auto] text-[#333333]">Company Name <br/><span className="text-[#BDBDBD] font-light text-[16px] leading-[140.8%]">1234 Sample Street Austin Texas 76401</span></h2>

            <p className="absolute w-[114px] h-[21px] left-[135px] top-[417px] font-['Roboto'] not-italic font-bold text-[18px] leading-[auto] text-[#333333]">512.333.2222</p>

            <p className="absolute w-[179px] h-[19px] left-[135px] top-[491px] font-['Roboto'] not-italic font-light text-[16px] leading-[auto] text-[#333333]">sampleemail@gmail.com</p>
            <button className="absolute w-[221.81px] h-[71px] left-[135px] top-[543px] bg-[#333333] text-[#FFFFFF] flex justify-center items-center">Contact us</button>

            <img 
            src="locate.png" 
            alt="location Image"
            width={1319}
            height={501}
            className="absolute left-[650px] top-[105px] w-[1319px] h-[501]" />
            

        </div>
    )
}