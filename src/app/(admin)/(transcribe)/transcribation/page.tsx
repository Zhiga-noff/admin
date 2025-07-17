import { Metadata } from 'next';
import React from 'react';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import DropzoneComponent from '@/components/form/form-elements/DropZone';
import ListComponent from '@/components/list/ListComponent';
import { GET_TRANSCRIBATION } from '@/constant/api';

export const metadata: Metadata = {
  title: 'AdminTranscrib',
  description: '!!!',
};

export default function TranscribationPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Транскрибация" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="col-span-12">
          <DropzoneComponent keyOperation="transcribation" />
        </div>
        <div className="col-span-12">
          <ListComponent url={GET_TRANSCRIBATION} />
        </div>
      </div>
    </div>
  );
}
