import React from "react";

// Inline copies of the three icons the site uses, so nothing is fetched from an icon API at runtime.
export const ArrowUpRight = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="1em" height="1em">
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
    </svg>
);

export const StarFourPoints = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="1em" height="1em">
        <path d="M12 1 9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8Z" />
    </svg>
);

export const Square = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="1em" height="1em">
        <path d="M5 5h14v14H5z" />
    </svg>
);
