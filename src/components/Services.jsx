import figma from "../assets/figma.svg"


export default function Services() {
    return (
        <>
            <div className="mt-2 py-8 px-5 rounded-lg bg-whitish">
                <img className="mx-auto" src={figma} alt=" " />
                <h2 className="font-medium text-[13.3px] text-black mt-[18px]">User Research and Analysis</h2>
                <p className="text-[13.3px] mt-2">Understanding user needs and behaviors through methods like surveys and interviews to inform design decisions and create user personas.</p>
            </div>
        </>
    )
}