import React from "react";

const ServicesDetail = () => {
  return (
    <div className="display flex flex-col gap-10 text-sm text-paleBlack">
      <div className="flex flex-col gap-3">
        <p className="font-medium uppercase tracking-widest">My Expertise</p>
        <ul className="grid grid-cols-2 gap-y-1">
          <li>Branding & Logo</li>
          <li>Craft CMS</li>
          <li>Illustration</li>
          <li>Web Development</li>
          <li>Interface Design</li>
          <li>Wordpress</li>
          <li>Project Management</li>
          <li>Asset Animation</li>
          <li>Art Direction</li>
          <li>Hand Lettering</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-medium uppercase tracking-widest">
          Experience & Clients
        </p>
        <ul className="grid grid-cols-2 gap-y-1">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Figma</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>TikTok</li>
          <li>Google</li>
          <li>Grab</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDetail;
