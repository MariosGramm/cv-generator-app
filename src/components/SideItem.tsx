import React from "react";

type SideItemProps = {
    title: string;
    icon: string;
    children: React.ReactNode;
    canDelete?: boolean; // optional delete button
};

export default function SideItem({ title, icon, children, canDelete }: SideItemProps) {

    return (
        <div className="bg-white rounded-3 shadow-sm w-75">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center p-3">

                {/* Left: icon + title */}
                <div className="d-flex align-items-center gap-2">
                    <i className={`bi ${icon} fs-5`}></i>
                    <h4 className="m-0">{title}</h4>
                </div>

                {/* Right: caret + optional delete */}
                <div className="d-flex align-items-center gap-3">

                    {/* Caret icon */}
                    <i className="bi bi-caret-down fs-5"></i>

                    {/* Optional delete button */}
                    {canDelete && (
                        <i className="bi bi-x-circle fs-5 text-danger" role="button"></i>
                    )}
                </div>

            </div>

            {/* Dropdown Content*/}
            <div className="border-top p-3">
                {children}
            </div>

        </div>
    );
}