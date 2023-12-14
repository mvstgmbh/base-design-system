import { PropsWithChildren } from "react";
import { Typography } from "../atoms/Typography";
import { Navbar } from "../demo/Navbar";
import { Button } from "../atoms/Button";
import { cn } from "../../lib/utils";

export const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
  >
    <path
      d="M38.6422 19.9938C38.5875 19.8703 37.264 16.9344 34.3219 13.9922C30.4015 10.0719 25.45 8 20 8C14.55 8 9.59842 10.0719 5.67811 13.9922C2.73592 16.9344 1.40623 19.875 1.3578 19.9938C1.28672 20.1536 1.25 20.3266 1.25 20.5016C1.25 20.6765 1.28672 20.8495 1.3578 21.0094C1.41248 21.1328 2.73592 24.0672 5.67811 27.0094C9.59842 30.9281 14.55 33 20 33C25.45 33 30.4015 30.9281 34.3219 27.0094C37.264 24.0672 38.5875 21.1328 38.6422 21.0094C38.7132 20.8495 38.75 20.6765 38.75 20.5016C38.75 20.3266 38.7132 20.1536 38.6422 19.9938ZM20 30.5C15.1906 30.5 10.989 28.7516 7.51092 25.3047C6.0838 23.8855 4.86965 22.2671 3.90623 20.5C4.86939 18.7327 6.08357 17.1143 7.51092 15.6953C10.989 12.2484 15.1906 10.5 20 10.5C24.8094 10.5 29.0109 12.2484 32.489 15.6953C33.9189 17.114 35.1357 18.7324 36.1015 20.5C34.975 22.6031 30.0672 30.5 20 30.5ZM20 13C18.5166 13 17.0666 13.4399 15.8332 14.264C14.5998 15.0881 13.6385 16.2594 13.0709 17.6299C12.5032 19.0003 12.3547 20.5083 12.6441 21.9632C12.9335 23.418 13.6478 24.7544 14.6967 25.8033C15.7456 26.8522 17.0819 27.5665 18.5368 27.8559C19.9917 28.1453 21.4997 27.9968 22.8701 27.4291C24.2406 26.8614 25.4119 25.9002 26.236 24.6668C27.0601 23.4334 27.5 21.9834 27.5 20.5C27.4979 18.5115 26.7071 16.6051 25.301 15.199C23.8949 13.7929 21.9885 13.0021 20 13ZM20 25.5C19.0111 25.5 18.0444 25.2068 17.2221 24.6574C16.3999 24.1079 15.759 23.327 15.3806 22.4134C15.0021 21.4998 14.9031 20.4945 15.0961 19.5246C15.289 18.5546 15.7652 17.6637 16.4644 16.9645C17.1637 16.2652 18.0546 15.789 19.0245 15.5961C19.9944 15.4032 20.9998 15.5022 21.9134 15.8806C22.827 16.259 23.6079 16.8999 24.1573 17.7222C24.7067 18.5444 25 19.5111 25 20.5C25 21.8261 24.4732 23.0979 23.5355 24.0355C22.5978 24.9732 21.3261 25.5 20 25.5Z"
      fill="#255EF3"
    />
  </svg>
);

export const Badge = ({
  className,
  children,
}: { variant: string; className: string } & PropsWithChildren) => (
  <div className={cn(className, "px-md py-xs rounded-full")}>
    <Typography variant="subHeading" as="span">
      {children}
    </Typography>
  </div>
);

export const HomePage = () => {
  return (
    <div className="bg-white flex flex-col gap-[120px]">
      <div className="flex flex-col gap-6xl">
        <Navbar />
        <div className="relative grid grid-cols-2 gap-4xl">
          <div className="w-full pl-7xl max-w-2xl flex flex-col gap-3xl">
            <div className="w-full">
              <EyeIcon />
            </div>
            <div className="w-full flex gap-lg">
              <Badge
                variant="primary"
                className="text-primary-700 bg-primary-100"
              >
                Whats new
              </Badge>
              <Badge variant="secondary" className="text-neutral-900/50">
                Lorem ipsum color
              </Badge>
            </div>
            <Typography as="h1" variant="h1">
              Deploy to the cloud with confidence
            </Typography>
            <Typography
              as="p"
              variant="subHeading"
              className="text-neutral-900/50"
            >
              Lorem ipsum dolor sit amet consectetur. Ac sem viverra proin ac.
              Velit pretium quisque enim molestie. Nullam sagittis consequat
              malesuada nisl amet amet lectus.
            </Typography>
            <div className="flex gap-lg">
              <Button variant="primary">Button</Button>
              <Button variant="secondary">Button</Button>
            </div>
          </div>
          <img
            className="absolute left-2/4 max-h-[574px] border-neutral-900/10 border-[12px] rounded-md"
            src="https://s3-alpha-sig.figma.com/img/6701/d4b8/26e15621aeecbf718d003ba9f67beb9c?Expires=1703462400&Signature=X2FEnebZYuHzf7Td5zjq2SQMuRP1mGIl~nHm1ISEY-FW4OeXzwLkn5c8mWsBcyX3htk6tkCxq43iF4MutkTiV2ouAgWwuvg-LmKRO7NXlwuyeuT0tObIOpWoPxBY4gmaW775ZnTkapQk5oJw9titWBoh~FSWufErmfdLNem7Xf3JgW2-32sGK9zeu22k-SJZKWxmH68q3zIwotjIFBIDnOBs8YIIfKa1LHRtbLE2XnSe5NaOYhzsAwsjSPMfAq6wIBC3puRtN~KkvNyaQdTWOkAl1Kk-mpcUU-OsKGOvuAGb390P4JAMq2YpOMcO6yle938i95qTnNsBFVkT2D~KaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="hero_image"
          />
        </div>
      </div>
    </div>
  );
};
