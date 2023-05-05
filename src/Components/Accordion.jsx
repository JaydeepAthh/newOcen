import { useState } from "react";

function Accordion() {
  let data = [
    {
      title: "What Is Gas?",
      content: `Gas is the cost of moving anything on the blockchain from one place to another. Every transaction has to be validated (approved) by an on chain third party. Gas pays for the transfer cost plus a tip to these validators so your transaction gets approved. In the case of Frosty Narwhals, gas is needed to mint a Narwhal and transfer it to your MetaMask wallet.`,
    },
    {
      title: "What Is An NFT?",
      content: `An NFT stands for “Non-fungible token”. This is a complicated way of saying a non-replicable digital asset that users can buy, own, and trade. While the art from one piece to the next may look the same, every NFT is stored on the blockchain with a unique identifier which makes it impossible to replicate. NFTs have a variety of functions from being digital art, exclusive access to websites, or allowing participation in an event.`,
    },
    {
      title: "How Are Charities Chosen?",
      content: `Charities are chosen on a monthly basis. There is a week long period in which new charities can be proposed via Crew3 and thenevaluated. After evaluation if the proposed charity meets the criteria, the charity will be added to a monthly vote for the holders to vote on. `,
    },
  ];

  const [accordionItems, setAccordionItems] = useState(() => {
    const accordion = data.map((item) => ({
      title: item.title,
      content: item.content,
      open: false,
    }));
    return accordion;
  });

  const handleClick = (index) => {
    const newAccordion = [...accordionItems];
    let delay = 0;

    newAccordion.forEach((item, i) => {
      if (i !== index) {
        if (item.open) {
          item.open = false;
        }
      } else {
        if (item.open) {
          item.open = false;
        } else {
          item.open = true;
        }
      }
    });

    setTimeout(() => {
      setAccordionItems(newAccordion);
    }, 100);
  };

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={index}>
          <div className="title" onClick={() => handleClick(index)}>
            <div className="arrow-wrapper">
              <i
                className={
                  item.open
                    ? "fa fa-angle-down fa-rotate-180"
                    : "fa fa-angle-down"
                }
              ></i>
            </div>
            <span className="title-text animate__animated animate__fadeInRightBig">
              {item.title}
            </span>
          </div>
          <div className={item.open ? "content content-open" : "content"}>
            <div
              className={
                item.open
                  ? "content-text content-text-open animate__animated animate__fadeInRightBig"
                  : "content-text"
              }
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
