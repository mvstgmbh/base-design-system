import { Button } from "../atoms/Button";
import { PropsWithChildren } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export const MVSTLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49"
    height="14"
    viewBox="0 0 49 14"
    fill="none"
  >
    <g id="MVST">
      <path
        id="Vector"
        d="M48.7564 0.708984V3.17498H45.4084V13.345H42.3304V3.17498H38.9824V0.708984H48.7564Z"
        fill="black"
      />
      <path
        id="Vector_2"
        d="M33.5238 13.4713C32.5998 13.4713 31.7718 13.3213 31.0398 13.0213C30.3078 12.7213 29.7198 12.2773 29.2758 11.6893C28.8438 11.1013 28.6158 10.3933 28.5918 9.5653H31.8678C31.9158 10.0333 32.0778 10.3933 32.3538 10.6453C32.6298 10.8853 32.9898 11.0053 33.4338 11.0053C33.8898 11.0053 34.2498 10.9033 34.5138 10.6993C34.7778 10.4833 34.9098 10.1893 34.9098 9.8173C34.9098 9.5053 34.8018 9.2473 34.5858 9.0433C34.3818 8.8393 34.1238 8.6713 33.8118 8.5393C33.5118 8.4073 33.0798 8.2573 32.5158 8.0893C31.6998 7.8373 31.0338 7.5853 30.5178 7.3333C30.0018 7.0813 29.5578 6.7093 29.1858 6.2173C28.8138 5.7253 28.6278 5.0833 28.6278 4.2913C28.6278 3.1153 29.0538 2.1973 29.9058 1.5373C30.7578 0.865296 31.8678 0.529297 33.2358 0.529297C34.6278 0.529297 35.7498 0.865296 36.6018 1.5373C37.4538 2.1973 37.9098 3.1213 37.9698 4.3093H34.6398C34.6158 3.9013 34.4658 3.5833 34.1898 3.3553C33.9138 3.1153 33.5598 2.9953 33.1278 2.9953C32.7558 2.9953 32.4558 3.0973 32.2278 3.3013C31.9998 3.4933 31.8858 3.7753 31.8858 4.1473C31.8858 4.5553 32.0778 4.8733 32.4618 5.1013C32.8458 5.3293 33.4458 5.5753 34.2618 5.8393C35.0778 6.1153 35.7378 6.3793 36.2418 6.6313C36.7578 6.8833 37.2018 7.2493 37.5738 7.7293C37.9458 8.2093 38.1318 8.8273 38.1318 9.5833C38.1318 10.3033 37.9458 10.9573 37.5738 11.5453C37.2138 12.1333 36.6858 12.6013 35.9898 12.9493C35.2938 13.2973 34.4718 13.4713 33.5238 13.4713Z"
        fill="black"
      />
      <path
        id="Vector_3"
        d="M28.025 0.708984L23.543 13.345H19.691L15.209 0.708984H18.485L21.617 10.249L24.767 0.708984H28.025Z"
        fill="black"
      />
      <path
        id="Vector_4"
        d="M14.31 0.708984V13.345H11.232V5.76698L8.406 13.345H5.922L3.078 5.74898V13.345H0V0.708984H3.636L7.182 9.45698L10.692 0.708984H14.31Z"
        fill="black"
      />
    </g>
  </svg>
);

export const Link = ({ to, children }: { to: string } & PropsWithChildren) => {
  return (
    <a href={to} className="">
      {children}
    </a>
  );
};

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-7xl py-3xl">
      <MVSTLogo />
      <div className="flex gap-2xl">
        {navigation.map((nav) => (
          <Link to={nav.href}>{nav.name}</Link>
        ))}
      </div>
      <div className="flex gap-lg">
        <Button variant="secondary">Button</Button>
        <Button variant="primary">Button</Button>
      </div>
    </header>
  );
};
