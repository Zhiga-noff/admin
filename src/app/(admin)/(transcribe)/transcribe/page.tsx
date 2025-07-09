import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DropzoneComponent from "@/components/form/form-elements/DropZone";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "AdminTranscrib",
    description:
        "!!!",
};

export default function TranscribePage() {
    return (
        <div>
            <PageBreadcrumb pageTitle="From Elements"/>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="col-span-12">
                    <DropzoneComponent/>
                </div>
            </div>
        </div>
    );
}
