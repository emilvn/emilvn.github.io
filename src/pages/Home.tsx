import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className={
        "flex justify-center items-center h-screen w-screen bg-cover bg-no-repeat bg- bg-[url('/assets/images/landscape-tree-nature-forest-wilderness-branch-838595-pxhere.com.jpg')]"
      }
    >
      <div className="relative overflow-hidden rounded w-96 h-[600px] bg-top bg-cover bg-no-repeat bg-[url('/assets/images/me.jpg')]">
        <div className="absolute bottom-0 w-full bg-white bg-opacity-50 backdrop-blur-sm p-2">
          <h1 className="text-2xl p-4 font-semibold text-center">
            Emil Vennervald Nielsen
          </h1>
          <div className={"flex w-full justify-between p-4"}>
            <a
              href="https://www.linkedin.com/in/emil-nielsen-48b259266/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-xl [&>*]:hover:text-white"
              title="View my LinkedIn profile"
            >
              <FaLinkedin className="text-5xl text-blue-600" />{" "}
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.github.com/emilvn"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-xl [&>*]:hover:text-white"
              title="View my Github profile"
            >
              <FaGithub className="text-5xl" /> <span>Github</span>
            </a>
            <a
              href="/assets/documents/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-xl [&>*]:hover:text-white"
              title="View my CV"
            >
              <FaFile className="text-5xl text-stone-600" /> <span>CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
