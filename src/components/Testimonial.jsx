export default function Testimonial() {
  const data = [
    {
      person: "Alamaster",
      message:
        "I just wanted to share a quick note and let you know that you are doing  really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
    },
    {
      person: "Dev Ade",
      message:
        "I pray you become the best version of yourself and also the biggest techie in Arewa and Naija in a whole insha Allah.",
    },
    {
      person: "Techbro",
      message:
        "You have some cool stuff here, i’ll send your work to my other guys to see what the outcome will be. Don’t stop designing bcos u really have some good concept.",
    },
    { person: "Damilola", message: "This is impressive, i must commend you." },
    {
      person: "GDG",
      message:
        "Thanks to you and your team for bringing your passion and creativity to the design of #DevFest",
    },
  ];
  return (
    <div className="bg-whitish p-5 mt-2">
      <h3 className="font-semibold text-[13.3px] text-black mt-[18px] md:text-lg lg:mt-8 lg:text-[1.5rem]">
        From {data[0].person}
      </h3>
      <p className="text-[11px] mt-2 lg:mt-4 lg:text-[1.25rem]">
        {data[0].message}
      </p>
    </div>
  );
}
