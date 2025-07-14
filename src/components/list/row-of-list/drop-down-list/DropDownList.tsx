import React, { FC } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { ListTypes } from '@/types/list.types';
import { toFormatDate } from '@/utils/time';
import styles from './DropDownList.module.css';

interface ListProps {
  file: ListTypes;
}

const DropDownList: FC<ListProps> = ({ file }) => {
  const published = toFormatDate(file?.dateCreate);
  const update = toFormatDate(file?.dateUpdate);

  return (
    <TableRow className={styles.DropDownList}>
      <TableCell className="py-1">
        <div className="flex items-center gap-3">
          {/* <div className="h-[50px] w-[50px] overflow-hidden rounded-md flex center"> */}
          {/*  <Image width={24} height={24} src={'/images/upload.svg'} className="h-[24px] w-[24px]" alt={file.status}/> */}
          {/* </div> */}
          <div>
            <a
              href={file?.outFilePath ?? ''}
              className="font-medium underline  text-gray-500 text-theme-xs dark:text-white/90"
            >
              {file?.stateTitle}
            </a>
          </div>
        </div>
      </TableCell>
      <TableCell className="py-1 text-gray-500 text-theme-xs dark:text-gray-400 cursor-pointer">ㅤ</TableCell>
      {/* {flag && <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{file.category}</TableCell>} */}
      <TableCell className="py-1 text-gray-500 text-theme-xs dark:text-gray-400">ㅤ</TableCell>
      <TableCell className="py-1 text-gray-500 text-theme-xs dark:text-gray-400">
        <span className="text-gray-500 text-theme-xs dark:text-gray-400">Добавлено: {String(published)}</span>
        <br /> <span className="text-gray-500 text-theme-xs dark:text-gray-400">Обновлено: {String(update)}</span>
      </TableCell>
      <TableCell className="py-1 text-gray-500 text-theme-xs dark:text-gray-400">ㅤ</TableCell>
    </TableRow>
  );
};

export default DropDownList;
