import { CSSProperties, SVGProps } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    x?: string;
    y?: string;
  }
}

type SmartphoneProps = SVGProps<SVGSVGElement> & { src: string };

export function Smartphone({ src, ...svgProps }: SmartphoneProps) {
  return (
    <svg
      viewBox="0 0 250 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <g clipPath="url(#clip0_21_274)">
        <path
          d="M248.816 116.589C249.472 116.589 250 117.119 250 117.778V173.016C250 173.675 249.472 174.206 248.816 174.206H239.697C239.041 174.206 238.513 173.675 238.513 173.016V117.778C238.513 117.119 239.041 116.589 239.697 116.589H248.816Z"
          fill="black"
        />
        <mask
          id="mask0_21_274"
          style={{ maskType: 'luminance' } as CSSProperties}
          maskUnits="userSpaceOnUse"
          x="238"
          y="116"
          width="12"
          height="59"
        >
          <path
            d="M248.816 116.589C249.472 116.589 250 117.119 250 117.778V173.016C250 173.675 249.472 174.206 248.816 174.206H239.697C239.041 174.206 238.513 173.675 238.513 173.016V117.778C238.513 117.119 239.041 116.589 239.697 116.589H248.816Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_21_274)">
          <g filter="url(#filter0_f_21_274)">
            <path
              d="M248.564 117.65C249.149 117.65 249.62 118.123 249.62 118.71V172.085C249.62 172.672 249.149 173.145 248.564 173.145H248.236V117.65H248.564Z"
              fill="url(#paint0_linear_21_274)"
            />
          </g>
        </g>
        <path
          d="M10.3032 68.1937H1.18377C0.529993 68.1937 0 68.7263 0 69.3832V86.5649C0 87.2219 0.529993 87.7544 1.18377 87.7544H10.3032C10.957 87.7544 11.487 87.2219 11.487 86.5649V69.3832C11.487 68.7263 10.957 68.1937 10.3032 68.1937Z"
          fill="black"
        />
        <mask
          id="mask1_21_274"
          style={{ maskType: 'luminance' } as CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="68"
          width="12"
          height="20"
        >
          <path
            d="M10.3032 68.1937H1.18377C0.529993 68.1937 0 68.7263 0 69.3832V86.5649C0 87.2219 0.529993 87.7544 1.18377 87.7544H10.3032C10.957 87.7544 11.487 87.2219 11.487 86.5649V69.3832C11.487 68.7263 10.957 68.1937 10.3032 68.1937Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_21_274)">
          <g filter="url(#filter1_f_21_274)">
            <path
              d="M1.4356 69.2549C0.850947 69.2549 0.380371 69.7278 0.380371 70.3152V85.6329C0.380371 86.2204 0.850947 86.6933 1.4356 86.6933H1.76383V69.2549H1.4356Z"
              fill="url(#paint1_linear_21_274)"
            />
          </g>
        </g>
        <path
          d="M1.18408 104.672C0.528272 104.672 0 105.202 0 105.861V139.916C0 140.575 0.528272 141.106 1.18408 141.106H10.3027C10.9585 141.106 11.4868 140.575 11.4868 139.916V105.861C11.4868 105.202 10.9585 104.672 10.3027 104.672H1.18408Z"
          fill="black"
        />
        <mask
          id="mask2_21_274"
          style={{ maskType: 'luminance' } as CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="104"
          width="12"
          height="38"
        >
          <path
            d="M1.18408 104.672C0.528272 104.672 0 105.202 0 105.861V139.916C0 140.575 0.528272 141.106 1.18408 141.106H10.3027C10.9585 141.106 11.4868 140.575 11.4868 139.916V105.861C11.4868 105.202 10.9585 104.672 10.3027 104.672H1.18408Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_21_274)">
          <g filter="url(#filter2_f_21_274)">
            <path
              d="M1.4356 105.733C0.850948 105.733 0.380371 106.206 0.380371 106.793V138.984C0.380371 139.572 0.850948 140.045 1.4356 140.045H1.76383V105.733H1.4356Z"
              fill="url(#paint2_linear_21_274)"
            />
          </g>
        </g>
        <path
          d="M1.18408 150.49C0.528272 150.49 0 151.02 0 151.679V185.734C0 186.393 0.528272 186.924 1.18408 186.924H10.3027C10.9585 186.924 11.4868 186.393 11.4868 185.734V151.679C11.4868 151.02 10.9585 150.49 10.3027 150.49H1.18408Z"
          fill="black"
        />
        <mask
          id="mask3_21_274"
          style={{ maskType: 'luminance' } as CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="150"
          width="12"
          height="37"
        >
          <path
            d="M1.18408 150.49C0.528272 150.49 0 151.02 0 151.679V185.734C0 186.393 0.528272 186.924 1.18408 186.924H10.3027C10.9585 186.924 11.4868 186.393 11.4868 185.734V151.679C11.4868 151.02 10.9585 150.49 10.3027 150.49H1.18408Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask3_21_274)">
          <g filter="url(#filter3_f_21_274)">
            <path
              d="M1.4356 151.551C0.850948 151.551 0.380371 152.024 0.380371 152.611V184.802C0.380371 185.39 0.850948 185.863 1.4356 185.863H1.76383V151.551H1.4356Z"
              fill="url(#paint3_linear_21_274)"
            />
          </g>
        </g>
        <path
          d="M38.0141 0.524727C17.7083 0.524727 1.36182 16.9503 1.36182 37.3545V466.281C1.36182 486.685 17.7083 503.112 38.0141 503.112H112.294L113.812 500.951H119.199H130.801H136.187L137.706 503.112H211.986C232.292 503.112 248.638 486.685 248.638 466.281V37.3545C248.638 16.9503 232.292 0.524727 211.986 0.524727H38.0141Z"
          fill="black"
        />

        <clipPath id="screen">
          <path d="M38.7358 15.4921C26.3968 15.4921 16.4634 25.4737 16.4634 37.8724V465.765C16.4634 478.163 26.3968 488.145 38.7358 488.145H211.265C223.603 488.145 233.537 478.163 233.537 465.765V37.8724C233.537 25.4737 223.603 15.4921 211.265 15.4921H189.478C188.491 15.4922 187.545 15.8861 186.847 16.5872C186.149 17.2883 185.757 18.2391 185.757 19.2306V20.9519C185.757 27.6882 180.361 33.1118 173.657 33.1118H76.3429C69.6391 33.1118 64.2431 27.6882 64.2431 20.9519V19.2306C64.243 18.2391 63.851 17.2883 63.1533 16.5872C62.4556 15.8861 61.5093 15.4922 60.5226 15.4921H38.7358Z" />
        </clipPath>
        <g clipPath="url(#screen)">
          <foreignObject width="218" height="454" x="16" y="34">
            <div className="h-full flex items-center">
              <video src={src} autoPlay muted loop />
            </div>
          </foreignObject>
        </g>

        <rect x="16" y="15" width="218" height="19" fill="black" />
        <path
          d="M2.1958 52.2892H5.08884V48.8533H2.1958V52.2892Z"
          fill="#7D7E7F"
        />
        <path
          d="M2.1958 451.522H5.08884V52.2892H2.1958V451.522Z"
          fill="#EBEBEB"
        />
        <path
          d="M2.1958 454.959H5.08884V451.522H2.1958V454.959Z"
          fill="#7D7E7F"
        />
        <path
          d="M247.804 454.959H244.911V466.457C244.911 485.006 230.05 499.939 211.59 499.939H38.41C19.9501 499.939 5.08884 485.006 5.08884 466.457V454.959H2.1958V464.936C2.1958 485.646 18.7886 502.319 39.3987 502.319H210.601C231.211 502.319 247.804 485.646 247.804 464.936V454.959Z"
          fill="#EBEBEB"
        />
        <path
          d="M247.804 451.522H244.911V454.959H247.804V451.522Z"
          fill="#7D7E7F"
        />
        <path
          d="M247.804 52.2892H244.911V451.522H247.804V52.2892Z"
          fill="#EBEBEB"
        />
        <path
          d="M247.804 48.8533H244.911V52.2892H247.804V48.8533Z"
          fill="#7D7E7F"
        />
        <path
          d="M39.3987 1.58098C18.7886 1.58098 2.1958 18.2542 2.1958 38.9641V48.8533H5.08884V37.8383C5.08884 19.2891 19.9501 4.35721 38.41 4.35721H211.59C230.05 4.35721 244.911 19.2891 244.911 37.8383V48.8533H247.804V38.9641C247.804 18.2542 231.211 1.58098 210.601 1.58098H39.3987Z"
          fill="#EBEBEB"
        />
        <mask
          id="mask4_21_274"
          style={{ maskType: 'luminance' } as CSSProperties}
          maskUnits="userSpaceOnUse"
          x="2"
          y="1"
          width="246"
          height="502"
        >
          <path
            d="M39.3988 1.40516C18.7887 1.40516 2.1958 18.0783 2.1958 38.7883V464.76C2.1958 485.47 18.7887 502.143 39.3988 502.143H210.601C231.211 502.143 247.804 485.47 247.804 464.76V38.7883C247.804 18.0783 231.211 1.40516 210.601 1.40516H39.3988ZM38.41 4.1814H211.59C230.05 4.1814 244.911 19.1133 244.911 37.6625V466.281C244.911 484.83 230.05 499.763 211.59 499.763H38.41C19.9502 499.763 5.08887 484.83 5.08887 466.281V37.6625C5.08887 19.1133 19.9502 4.1814 38.41 4.1814Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask4_21_274)">
          <g filter="url(#filter4_f_21_274)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.336 8.08067C21.7618 7.96354 13.0439 9.35479 4.09207 19.4636C-8.92876 34.1674 2.72759 25.32 2.72759 25.32C2.72759 25.32 10.7265 12.8598 21.8872 11.2399C33.0479 9.61997 29.6373 8.49772 29.6373 8.49772C29.6373 8.49772 28.4151 8.13391 26.336 8.08067ZM223.664 8.08067C221.585 8.13391 220.363 8.49772 220.363 8.49772C220.363 8.49772 216.952 9.61997 228.113 11.2399C239.273 12.8598 247.272 25.32 247.272 25.32C247.272 25.32 258.929 34.1674 245.908 19.4636C236.956 9.35479 228.238 7.96354 223.664 8.08067ZM-1.69406 475.864C-2.69287 475.743 -2.01145 477.461 4.09207 484.353C17.1129 499.057 29.6373 495.319 29.6373 495.319C29.6373 495.319 33.0479 494.197 21.8872 492.577C10.7265 490.957 2.72759 478.497 2.72759 478.497C2.72759 478.497 -0.562085 476 -1.69406 475.864ZM251.694 475.864C250.562 476 247.272 478.497 247.272 478.497C247.272 478.497 239.273 490.957 228.113 492.577C216.952 494.197 220.363 495.319 220.363 495.319C220.363 495.319 232.887 499.057 245.908 484.353C252.011 477.461 252.693 475.743 251.694 475.864Z"
              fill="#434343"
            />
          </g>
        </g>
        <path
          d="M225.8 10.7206C224.984 10.6395 225.369 11.4566 227.2 13.1602C233.239 18.7811 236.988 26.9169 236.988 35.9725V251.994V468.016C236.988 477.072 233.239 485.207 227.2 490.828C225.369 492.532 224.984 493.349 225.8 493.268C226.289 493.219 227.211 492.847 228.511 492.15C237.337 487.419 242.463 477.211 242.463 466.37V251.994V37.6189C242.463 26.7772 237.337 16.5696 228.511 11.8382C227.211 11.1413 226.289 10.7693 225.8 10.7206Z"
          fill="url(#paint4_linear_21_274)"
        />
        <path
          d="M24.1997 10.7206C25.0154 10.6395 24.6303 11.4566 22.8 13.1602C16.7609 18.7811 13.0113 26.9169 13.0113 35.9725V251.994V468.016C13.0113 477.072 16.7609 485.207 22.8 490.828C24.6303 492.532 25.0154 493.349 24.1997 493.268C23.7103 493.219 22.7885 492.847 21.4884 492.15C12.6624 487.419 7.53711 477.211 7.53711 466.37V251.994V37.6189C7.53711 26.7772 12.6624 16.5696 21.4884 11.8382C22.7885 11.1413 23.7103 10.7693 24.1997 10.7206Z"
          fill="url(#paint5_linear_21_274)"
        />
        <path
          d="M38.3832 6.79725C32.3502 6.79725 26.738 8.53107 22 11.5238V15.4926C26.5154 12.5164 31.9214 10.7837 37.7484 10.7837H107.071H143.28H212.602C218.429 10.7837 223.835 12.5164 228.35 15.4926V11.5238C223.612 8.53107 218 6.79725 211.967 6.79725H143.28H107.071H38.3832Z"
          fill="url(#paint6_linear_21_274)"
        />
        <path
          d="M38.3832 496.84C32.3502 496.84 26.738 495.106 22 492.113V488.144C26.5154 491.12 31.9214 492.853 37.7484 492.853H107.071H143.28H212.602C218.429 492.853 223.835 491.12 228.35 488.144V492.113C223.612 495.106 218 496.84 211.967 496.84H143.28H107.071H38.3832Z"
          fill="url(#paint7_linear_21_274)"
        />
        <path
          d="M138.238 19.1523H112.196C111.152 19.1523 110.305 20.0031 110.305 21.0526C110.305 22.1021 111.152 22.9529 112.196 22.9529H138.238C139.282 22.9529 140.129 22.1021 140.129 21.0526C140.129 20.0031 139.282 19.1523 138.238 19.1523Z"
          fill="#1E1E1E"
        />
        <path
          d="M152.008 24.3547C153.957 24.3547 155.537 22.7669 155.537 20.8082C155.537 18.8496 153.957 17.2617 152.008 17.2617C150.059 17.2617 148.479 18.8496 148.479 20.8082C148.479 22.7669 150.059 24.3547 152.008 24.3547Z"
          fill="#2B2B2B"
        />
        <path
          d="M152.008 23.6498C153.569 23.6498 154.835 22.3776 154.835 20.8082C154.835 19.2388 153.569 17.9666 152.008 17.9666C150.446 17.9666 149.18 19.2388 149.18 20.8082C149.18 22.3776 150.446 23.6498 152.008 23.6498Z"
          fill="#0A0D13"
        />
        <path
          d="M152.008 22.9733C153.198 22.9733 154.162 22.0039 154.162 20.8082C154.162 19.6125 153.198 18.6431 152.008 18.6431C150.818 18.6431 149.853 19.6125 149.853 20.8082C149.853 22.0039 150.818 22.9733 152.008 22.9733Z"
          fill="#091427"
        />
        <g filter="url(#filter5_f_21_274)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150.524 19.3597C150.269 19.3867 149.906 19.7786 149.879 20.5488C149.852 21.319 150.188 21.7379 150.377 21.7379C150.565 21.7379 151.345 20.6164 150.524 19.3597Z"
            fill="#235A91"
            fillOpacity="0.556075"
          />
        </g>
        <g filter="url(#filter6_f_21_274)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M152.359 19.09C151.956 19.2146 151.879 19.8688 151.894 20.2426C151.91 20.6165 152.437 21.5977 153.072 21.3797C153.708 21.1616 153.817 20.3517 153.553 19.8065C153.289 19.2613 152.809 18.8719 152.359 19.09Z"
            fill="#235A91"
            fillOpacity="0.556075"
          />
        </g>
        <path
          d="M105.619 21.1351C105.619 21.8728 105.328 22.5804 104.81 23.103C104.292 23.6255 103.589 23.9205 102.855 23.9232C102.121 23.9259 101.415 23.6362 100.893 23.1175C100.371 22.5987 100.075 21.8933 100.07 21.1556C100.064 20.418 100.35 19.7082 100.865 19.1818C101.379 18.6554 102.08 18.3553 102.814 18.3472C103.548 18.339 104.255 18.6235 104.781 19.1384C105.307 19.6532 105.608 20.3565 105.619 21.0941L102.845 21.1351H105.619Z"
          fill="#0F0F0F"
        />
        <path
          d="M89.8842 21.2006C89.8842 22.2956 89.4454 23.346 88.6638 24.1218C87.8822 24.8975 86.8217 25.3353 85.7143 25.3394C84.607 25.3434 83.5432 24.9133 82.7559 24.1433C81.9686 23.3732 81.5219 22.326 81.5138 21.231C81.5056 20.136 81.9366 19.0824 82.7124 18.301C83.4882 17.5196 84.5455 17.0741 85.6527 17.062C86.76 17.0499 87.827 17.4722 88.62 18.2365C89.413 19.0008 89.8675 20.0447 89.8838 21.1396L85.6989 21.2006H89.8842Z"
          fill="#101010"
        />
        <path
          d="M174.273 20.7545C174.273 22.2265 173.686 23.6386 172.64 24.6813C171.595 25.7241 170.176 26.3127 168.695 26.3181C167.214 26.3235 165.791 25.7454 164.738 24.7102C163.685 23.6751 163.087 22.2674 163.076 20.7955C163.065 19.3235 163.642 17.9072 164.68 16.8568C165.717 15.8064 167.131 15.2075 168.613 15.1912C170.094 15.175 171.521 15.7427 172.582 16.7701C173.642 17.7975 174.25 19.2008 174.272 20.6726L168.674 20.7545H174.273Z"
          fill="#0F0F0F"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_21_274"
          x="247.697"
          y="117.11"
          width="2.4626"
          height="56.5744"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.269824"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <filter
          id="filter1_f_21_274"
          x="-0.159277"
          y="68.7152"
          width="2.4626"
          height="18.5177"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.269824"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <filter
          id="filter2_f_21_274"
          x="-0.159277"
          y="105.193"
          width="2.4626"
          height="35.391"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.269824"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <filter
          id="filter3_f_21_274"
          x="-0.159277"
          y="151.011"
          width="2.4626"
          height="35.391"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.269824"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <filter
          id="filter4_f_21_274"
          x="-2.6037"
          y="7.54181"
          width="255.207"
          height="488.734"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.266206"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <filter
          id="filter5_f_21_274"
          x="149.643"
          y="19.1255"
          width="1.48355"
          height="2.84663"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.117104"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <filter
          id="filter6_f_21_274"
          x="151.658"
          y="18.7942"
          width="2.26285"
          height="2.85098"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.117104"
            result="effect1_foregroundBlur_21_274"
          />
        </filter>
        <linearGradient
          id="paint0_linear_21_274"
          x1="248.236"
          y1="117.65"
          x2="248.236"
          y2="173.145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
          <stop offset="0.04" stopColor="#CBCBCB" />
          <stop offset="0.96" stopColor="#CBCBCB" />
          <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_274"
          x1="1.76383"
          y1="69.2549"
          x2="1.76383"
          y2="86.6933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
          <stop offset="0.05" stopColor="#CBCBCB" />
          <stop offset="0.95" stopColor="#CBCBCB" />
          <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_21_274"
          x1="1.76383"
          y1="105.733"
          x2="1.76383"
          y2="140.045"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
          <stop offset="0.05" stopColor="#CBCBCB" />
          <stop offset="0.95" stopColor="#CBCBCB" />
          <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_21_274"
          x1="1.76383"
          y1="151.551"
          x2="1.76383"
          y2="185.863"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
          <stop offset="0.05" stopColor="#CBCBCB" />
          <stop offset="0.95" stopColor="#CBCBCB" />
          <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_21_274"
          x1="236.267"
          y1="251.994"
          x2="242.463"
          y2="251.994"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#404040" />
          <stop offset="0.6" stopColor="#838383" />
          <stop offset="1" stopColor="#A7A7A7" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_21_274"
          x1="13.733"
          y1="251.994"
          x2="7.53712"
          y2="251.994"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#404040" />
          <stop offset="0.6" stopColor="#838383" />
          <stop offset="1" stopColor="#A7A7A7" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_21_274"
          x1="22"
          y1="15.4926"
          x2="228.35"
          y2="15.4926"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F4F4F" stopOpacity="0.130841" />
          <stop offset="0.07" stopColor="#4F4F4F" />
          <stop offset="0.937" stopColor="#4F4F4F" stopOpacity="0.953271" />
          <stop offset="1" stopColor="#4F4F4F" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_21_274"
          x1="22"
          y1="488.144"
          x2="228.35"
          y2="488.144"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F4F4F" stopOpacity="0.130841" />
          <stop offset="0.07" stopColor="#4F4F4F" />
          <stop offset="0.937" stopColor="#4F4F4F" stopOpacity="0.953271" />
          <stop offset="1" stopColor="#4F4F4F" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_21_274">
          <rect width="250" height="503.817" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
