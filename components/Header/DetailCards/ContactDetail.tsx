import React from "react";

interface Props {
  isAnimated: boolean;
}

const ContactDetail = ({ isAnimated }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-3xl font-medium">
        <p>Having a Project in Mind?</p>
        <p>Let&apos;s Collaborate.</p>
      </div>
      <div className="flex flex-col gap-1 text-sm text-paleBlack">
        <p className="mb-3 font-medium uppercase tracking-widest">
          GET IN TOUCH
        </p>
        <p>hello@alphaproject.com</p>
        <p>(607) 467-1254</p>
        <p>30548 State 17th Hwy</p>
        <p>Deposit, New York (NY), 13754</p>
      </div>
    </div>
  );
};

export default ContactDetail;
