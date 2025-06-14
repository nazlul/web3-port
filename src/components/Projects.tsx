import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { LinkPreview } from "../components/ui/link-preview"; 

const projects = [
  {
    title: "Lifeliner by BMH",
    description: "A modern developer portfolio built with Next.js and Tailwind CSS.",
    image: "/lifeliner.png",
    demoLink: "https://lifeliner.org/",
    codeLink: "https://github.com/nazlul/lifeliner",
  },
  {
    title: "Task Manager App",
    description: "A simple task management tool with drag-and-drop support.",
    image: "/images/taskmanager.png",
    demoLink: "https://taskmanager.com",
    codeLink: "https://github.com/yourusername/task-manager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-10 md:px-20 lg:px-40">
      <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <CardContainer key={idx} className="inter-var">
            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-white border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-white dark:text-black">
                {project.title}
              </CardItem>
              <CardItem translateZ="60" className="text-sm max-w-sm mt-2 text-neutral-300 dark:text-neutral-800">
                {project.description}
              </CardItem>
              <CardItem translateZ="70" className="w-full mt-4">
                <img
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Project screenshot"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem translateZ={71} className="text-xs font-normal">
                  <LinkPreview url={project.demoLink}>
                    <span className="inline-flex items-center gap-1 text-white dark:text-black hover:underline">
                      <ExternalLinkIcon size={18} />
                      Live
                    </span>
                  </LinkPreview>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.codeLink}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-black text-black dark:text-white text-xs font-bold"
                >
                  <GithubIcon size={18} />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
