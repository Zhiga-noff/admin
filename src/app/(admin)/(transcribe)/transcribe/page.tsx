import { Metadata } from 'next';
import React from 'react';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import DropzoneComponent from '@/components/form/form-elements/DropZone';
import RecentOrders from '@/components/ecommerce/RecentOrders';
import ListComponent from '@/components/list/ListComponent';

export const metadata: Metadata = {
  title: 'AdminTranscrib',
  description: '!!!',
};

export default function TranscribePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Транскрибация" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="col-span-12">
          <DropzoneComponent />
        </div>
        <div className="col-span-12">
          <ListComponent />
        </div>
      </div>
    </div>
  );
}
