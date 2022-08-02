import { useState } from 'react';

function Card({ width, elm, widthVal }) {
  const [title, setTitle] = useState(elm.title);
  const [isTitle, setIsTitle] = useState(true);

  let bgCol = 'bg-purple-100';
  let textCol = 'text-gray-900';

  if (widthVal < 6) {
    bgCol = 'bg-gray-900';
    textCol = 'text-white';
  }

  return (
    <article
      className={`${width} m-1 mb-4 ${bgCol} ${textCol} shadow-lg shadow-gray-600 flex flex-col justify-between`}
    >
      <div className="pb-2 flex flex-col">
        {isTitle ? (
          <a
            href={elm.url}
            className="font-semibold text-2xl text-center mt-2 hover:underline"
          >
            {title}
          </a>
        ) : (
          <div className="flex self-center mt-2">
            <input
              type="text"
              className="border px-1 rounded-sm border-black mr-2 !text-black"
              value={title}
              onChange={(elm) => {
                setTitle(elm.target.value);
              }}
            />
            <button
              className="bg-green-600 border-2 border-green-600 px-2 text-sm font-semibold text-white  hover:bg-white hover:text-green-600"
              onClick={() => {
                setIsTitle(true);
              }}
            >
              Save
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setIsTitle(false);
            if (!isTitle) {
              setIsTitle(true);
            }
          }}
          className="text-sm self-start ml-1 hover:underline"
        >
          Edit title
        </button>
      </div>
      <a className="h-full" href={elm.url}>
        <img
          className="h-full w-full"
          src={elm.imageUrl + '&height=1000&width=1500'}
          alt="alt tekst"
        />
      </a>
    </article>
  );
}

export default Card;
