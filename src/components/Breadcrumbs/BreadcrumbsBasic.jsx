import React from "react";

function BreadcrumbsBasic({ items }) {
  return (
    <div className="text-md breadcrumbs">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.icon && (
              <a href={item.url}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  {item.icon}
                </svg>
              </a>
            )}
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreadcrumbsBasic;
