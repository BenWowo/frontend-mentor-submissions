import PropTypes from "prop-types";
import { useState } from "react";
import plusIcon from "/assets/images/icon-plus.svg";
import minusIcon from "/assets/images/icon-minus.svg";

export default function AccordionItem({ title, text }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex-col space-y-4">
      <div className="flex space-x-6">
        <h1 className="text-lg text-dark-purple font-semibold mr-auto">
          {title}
        </h1>
        <button onClick={() => setOpened(!opened)}>
          <img
            src={opened ? minusIcon : plusIcon}
            alt="toggle reveal"
            width={32}
            height={32}
            className="min-w-[32px]"
          />
        </button>
      </div>
      {opened && (
        <>
          <div className="text-grayish-purple">{text}</div>
        </>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
