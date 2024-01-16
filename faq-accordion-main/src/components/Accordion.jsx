import AccordionItem from "./AccordionItem";
import starIcon from "/assets/images/icon-star.svg";

export default function Accordion() {
  return (
    <article className="flex-col space-y-8 bg-white rounded-xl px-6 py-12 max-w-xl min-w-[400px] shadow-lg">
      <div className="flex space-x-6">
        <img src={starIcon} alt="" width={32} height={32} />
        <h1 className="font-bold text-dark-purple text-5xl">FAQs</h1>
      </div>
      <div className="flex-col space-y-6">
        {accordionContents.map((content) => {
          return (
            <>
              <AccordionItem
                key={content.id}
                title={content.title}
                text={content.text}
              />
              {content.id !== accordionContents.length && <hr />}
            </>
          );
        })}
      </div>
    </article>
  );
}

const accordionContents = [
  {
    id: 1,
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];
