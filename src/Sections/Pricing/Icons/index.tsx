import { memo } from "react";

const ArrowDownIconMemo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={28} fill="none">
    <g clipPath="url(#a)">
      <rect
        width={26.467}
        height={26.467}
        x={26.664}
        y={27.14}
        fill="#7D4283"
        rx={13.234}
        transform="rotate(-180 26.664 27.14)"
      />
      <path
        fill="#fff"
        d="M16.71 11.914a.635.635 0 0 1 .468-.213c.176 0 .345.077.47.213a.73.73 0 0 1 .143.236.788.788 0 0 1 0 .556.728.728 0 0 1-.144.236l-3.747 4.06a.637.637 0 0 1-.47.213.637.637 0 0 1-.469-.213l-3.747-4.06a.728.728 0 0 1-.144-.236.787.787 0 0 1 .144-.792.635.635 0 0 1 .469-.213c.175 0 .344.077.469.213l3.28 3.33 3.277-3.33Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect
          width={26.467}
          height={26.467}
          x={0.197}
          y={0.673}
          fill="#fff"
          rx={11.405}
        />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowDownIcon = memo(ArrowDownIconMemo);

const ArrowUpIconMemo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} fill="none">
    <g clipPath="url(#a)">
      <rect
        width={26.467}
        height={26.467}
        x={0.196}
        y={0.233}
        fill="#FDECFF"
        fillOpacity={0.93}
        opacity={0.3}
        rx={13.234}
      />
      <path
        fill="#F6F5FA"
        d="M10.152 15.459a.636.636 0 0 1-.47.213.636.636 0 0 1-.468-.213.728.728 0 0 1-.144-.236.787.787 0 0 1 .144-.792l3.747-4.06a.637.637 0 0 1 .47-.213c.175 0 .344.076.469.213l3.747 4.06a.73.73 0 0 1 .144.236.788.788 0 0 1 0 .556.728.728 0 0 1-.144.236.636.636 0 0 1-.469.213.636.636 0 0 1-.469-.213l-3.28-3.33-3.277 3.33Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect
          width={26.467}
          height={26.467}
          x={26.664}
          y={26.7}
          fill="#fff"
          rx={11.405}
          transform="rotate(180 26.664 26.7)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const ArrowUpIcon = memo(ArrowUpIconMemo);
