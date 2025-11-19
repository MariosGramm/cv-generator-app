import React, { useState } from "react";

type SideItemProps = {
    title: string;
    icon: string;
    children: React.ReactNode;
};

export default function SideItem({ title, icon, children }: SideItemProps) {

    const [open, setOpen] = useState(true);

    return (
        <div className="bg-white rounded-3 shadow-sm w-75">

            {/* Header */}
            <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(!open)}
            >

                {/* Left: icon + title */}
                <div className="d-flex align-items-center gap-2">
                    <i className={`bi ${icon} fs-5`}></i>
                    <h4 className="m-0">{title}</h4>
                </div>

                {/* Right: caret */}
                <i
                    className={`bi fs-5 ${open ? "bi-caret-down" : "bi-caret-right"}`}
                ></i>

            </div>

            {/* Dropdown Content */}
            {open && (
                <div className="border-top p-3">
                    {children}
                </div>
            )}

        </div>
    );
}