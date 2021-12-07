import {data} from './pages.json';

export const pages = data.map((page) => {

  return (
    <li>
      <button className="whitespace-nowrap"
        hidden={page[Object.keys(page)[0]].hidden}
        onClick={(e) => {
          window.location.href = page[Object.keys(page)[0]].url;
        }}
      >
        {Object.keys(page)[0]}
      </button>
    </li>
  );
});
