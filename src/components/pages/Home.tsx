import { PropsWithChildren } from "react";
import { Typography } from "../atoms/Typography";
import { Navbar } from "../demo/Navbar";

export const Badge = ({
  variant,
  children,
}: { variant: string } & PropsWithChildren) => (
  <div className="">
    <Typography variant="default" as="span">
      {children}
    </Typography>
  </div>
);

export const HomePage = () => {
  return (
    <div className="bg-white flex flex-col gap-[120px]">
      <div className="flex flex-col gap-6xl">
        <Navbar />
        <div className="grid grid-cols-2 gap-4xl">
          <div className="w-full max-w-2xl flex flex-col gap-3xl">
            <div className="w-full"> rocket</div>
            <div className="w-full flex gap-lg">
              <Badge variant="primary">Whats new</Badge>
              <Badge variant="secondary">Lorem ipsum color</Badge>
            </div>
            <Typography as="h1" variant="primary">
              Deploy to the cloud with confidence
            </Typography>
            <Typography as="p" variant="secondary">
              Lorem ipsum dolor sit amet consectetur. Ac sem viverra proin ac.
              Velit pretium quisque enim molestie. Nullam sagittis consequat
              malesuada nisl amet amet lectus.
            </Typography>
          </div>
          <img
            className="border-neutral-900/10 border-[12px] rounded-md"
            src="https://s3-alpha-sig.figma.com/img/6701/d4b8/26e15621aeecbf718d003ba9f67beb9c?Expires=1703462400&Signature=X2FEnebZYuHzf7Td5zjq2SQMuRP1mGIl~nHm1ISEY-FW4OeXzwLkn5c8mWsBcyX3htk6tkCxq43iF4MutkTiV2ouAgWwuvg-LmKRO7NXlwuyeuT0tObIOpWoPxBY4gmaW775ZnTkapQk5oJw9titWBoh~FSWufErmfdLNem7Xf3JgW2-32sGK9zeu22k-SJZKWxmH68q3zIwotjIFBIDnOBs8YIIfKa1LHRtbLE2XnSe5NaOYhzsAwsjSPMfAq6wIBC3puRtN~KkvNyaQdTWOkAl1Kk-mpcUU-OsKGOvuAGb390P4JAMq2YpOMcO6yle938i95qTnNsBFVkT2D~KaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="hero_image"
          />
        </div>
      </div>
    </div>
  );
};
