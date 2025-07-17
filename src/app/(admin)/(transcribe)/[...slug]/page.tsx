'use client';

import React, { useEffect } from 'react';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import DropzoneComponent from '@/components/form/form-elements/DropZone';
import ListComponent from '@/components/list/ListComponent';
import { notFound, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { getRequestSlice } from '@/store/slices/pages-request.slices';

export default function TranscrPage() {
  const path = usePathname();
  const { key, title, queuePath } = useSelector(getRequestSlice);
  const redactingUrl = queuePath.replace('/api/transcribation/projects', '');

  useEffect(() => {
    setTimeout(() => {
      if ('/' + key !== path) {
        notFound();
      }
    }, 1000);
  }, []);

  return (
    <div>
      <PageBreadcrumb pageTitle={title} />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="col-span-12">
          <DropzoneComponent keyOperation={key} />
        </div>
        <div className="col-span-12">
          <ListComponent url={redactingUrl} />
        </div>
      </div>
    </div>
  );
}
