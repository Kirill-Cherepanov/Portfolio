import { SVGProps } from 'react';

type MonitorProps = SVGProps<SVGSVGElement> & { src: string };

export function Monitor({ src, ...svgProps }: MonitorProps) {
  return (
    <>
      <svg viewBox="0 0 581 476" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
        <path
          d="M219.629 379C219.629 379 217.6 421.037 207.088 430.946C202.785 435.004 186.97 434.797 182.338 438.135C181.635 438.641 182.229 443.782 182.338 443.886C184.737 446.138 198.509 447 198.509 447H382.987C382.987 447 396.759 446.138 399.157 443.886C399.265 443.782 399.859 438.641 399.157 438.135C394.522 434.797 378.709 435.004 374.407 430.946C363.894 421.037 361.867 379 361.867 379H219.629Z"
          fill="url(#paint0_linear_45_3)"
        />
        <path
          d="M382.984 445.29H198.509C198.509 445.29 184.737 444.1 182.338 441C181.636 441.696 182.228 448.778 182.338 448.92C184.737 452.021 198.509 453.209 198.509 453.209H382.984C382.984 453.209 396.753 452.021 399.153 448.92C399.264 448.778 399.857 441.696 399.153 441C396.753 444.1 382.984 445.29 382.984 445.29Z"
          fill="url(#paint1_linear_45_3)"
        />
        <g opacity="0.5">
          <path
            d="M399.947 448.208C397.526 451.339 383.622 452.534 383.622 452.534H197.377C197.377 452.534 183.475 451.339 181.055 448.208C180.986 448.122 180.978 448.778 181.055 448.875C183.475 452.004 197.377 453.2 197.377 453.2H383.622C383.622 453.2 397.526 452.004 399.947 448.875C400.021 448.778 400.014 448.122 399.947 448.208Z"
            fill="#231F20"
          />
        </g>
        <path
          d="M23.76 0.476286C10.64 0.476286 0 8.82989 0 19.1316V360.346C0 370.648 10.64 379 23.76 379H556.382C569.504 379 580.144 370.648 580.144 360.346V19.1316C580.144 8.82989 569.504 0.476286 556.382 0.476286H23.76Z"
          fill="url(#paint2_linear_45_3)"
        />

        <clipPath id="screen">
          <path d="M573.212 339.464C573.212 351.908 562.575 362 549.452 362H30.6922C17.5697 362 6.93217 351.908 6.93217 339.464V30.5359C6.93217 18.0883 17.5697 8 30.6922 8H549.452C562.575 8 573.212 18.0883 573.212 30.5359V339.464Z" />
        </clipPath>
        <g clipPath="url(#screen)">
          <foreignObject width="566.28" height="354" x="7" y="8">
            <div className="h-full flex items-center justify-center">
              <video src={src} autoPlay muted loop playsInline />
            </div>
          </foreignObject>
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_45_3"
            x1="290.747"
            y1="379"
            x2="290.747"
            y2="447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#797D7F" />
            <stop offset="0.100006" stopColor="#909497" />
            <stop offset="0.195803" stopColor="#909497" />
            <stop offset="0.42424" stopColor="#D2D3D7" />
            <stop offset="0.581818" stopColor="#C5C6CA" />
            <stop offset="0.709091" stopColor="#8D9193" />
            <stop offset="0.836365" stopColor="#D2D3D7" />
            <stop offset="1" stopColor="#D2D3D7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_45_3"
            x1="182"
            y1="447.105"
            x2="399.492"
            y2="447.105"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#808184" />
            <stop offset="0.199997" stopColor="#E6E7E8" />
            <stop offset="0.800003" stopColor="#E6E7E8" />
            <stop offset="1" stopColor="#808184" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_45_3"
            x1="-33.4452"
            y1="308.18"
            x2="548.866"
            y2="-37.6747"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#909497" />
            <stop offset="0.415038" stopColor="#D2D3D7" />
            <stop offset="1" stopColor="#D2D3D7" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
