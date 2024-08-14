import projectImg from "../assets/portfolio-project.png";

export default function Portfolio() {
  return (
    <>
      <h1 className="text-black font-semibold">My Portfolio Projects</h1>
      <p>Explore the artistry and precision in my portfolio projects</p>
      {/* Project Cards */}
      <a href="">
        <div className="mt-4">
          <div className="p-7 rounded-lg bg-whitish">
            <img
              className="mx-auto"
              src={projectImg}
              alt="The Bee Charge Design Project"
            />
          </div>
          <h2 className="mt-3 font-semibold text-left text-black">
            The Bee Charge Design
          </h2>
        </div>
      </a>
    </>
  );
}
