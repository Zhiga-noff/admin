import { Metadata } from 'next';
import React from 'react';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import DropzoneComponent from '@/components/form/form-elements/DropZone';
import ListComponent from '@/components/list/ListComponent';
import { GET_TRANSCRIBING_CHECK_LANGUAGE } from '@/constant/api';

export const metadata: Metadata = {
  title: 'AdminTranscrib',
  description: '!!!',
};

export default function TranscribinCheckLanguagePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Транскрибация" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="col-span-12">
          <DropzoneComponent keyOperation="transcribing-check-language" />
        </div>
        <div className="col-span-12">
          <ListComponent url={GET_TRANSCRIBING_CHECK_LANGUAGE} />
        </div>
      </div>
    </div>
  );
}
