import type { Metadata } from 'next';
import React from 'react';
import ListComponent from '@/components/list/ListComponent';

export const metadata: Metadata = {
  title: 'AdminTranscrib',
  description: '!!!',
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {/* <div className="col-span-12 space-y-6 xl:col-span-7"> */}
      {/*  <EcommerceMetrics /> */}

      {/*  <MonthlySalesChart /> */}
      {/* </div> */}

      {/* <div className="col-span-12 xl:col-span-5"> */}
      {/*  <MonthlyTarget /> */}
      {/* </div> */}

      {/* <div className="col-span-12"> */}
      {/*  <StatisticsChart /> */}
      {/* </div> */}

      {/* <div className="col-span-12 xl:col-span-5"> */}
      {/*  <DemographicCard /> */}
      {/* </div> */}

      {/* список для видео */}
      <div className="col-span-12">
        <ListComponent />
      </div>
    </div>
  );
}
