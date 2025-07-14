import React, { FC, useState } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import Badge from '@/components/ui/badge/Badge';
import Button from '@/components/ui/button/Button';
import { DownloadIcon } from '@/icons';
import { ListTypes } from '@/types/list.types';
import { toFormatDate } from '@/utils/time';
import { GET_TRANSCRIBATION } from '@/constant/api';
import { api } from '@/utils/api.services';
import DropDownList from '@/components/list/row-of-list/drop-down-list/DropDownList';
import styles from './RowOfListComponent.module.css';

interface RowOfListProps {
  file: ListTypes;
  flag: boolean;
}

const RowOfListComponent: FC<RowOfListProps> = ({ file, flag }) => {
  // const { title, inFilePath, outFilePath, done, dateCreate, dateUpdate, id, stateTitle } = file;
  const [stateList, setStateList] = useState([]);
  const [openDropMenu, setOpenDropMenu] = useState(false);

  const fetchStateList = async () => {
    if (stateList.length) {
      setOpenDropMenu((pre) => !pre);
      return;
    }
    const result = await api.get(`${GET_TRANSCRIBATION}/${file.id}/stages`, {
      params: {
        page: 1,
        size: 10,
      },
    });
    setStateList(result.data);
    setOpenDropMenu((pre) => !pre);
  };

  const published = toFormatDate(file?.dateCreate);
  const update = toFormatDate(file?.dateUpdate);

  return (
    <>
      <TableRow className="">
        <TableCell className="py-3">
          <div className="flex items-center gap-3">
            {/* <div className="h-[50px] w-[50px] overflow-hidden rounded-md flex center"> */}
            {/*  <Image width={24} height={24} src={'/images/upload.svg'} className="h-[24px] w-[24px]" alt={file.status}/> */}
            {/* </div> */}
            <div>
              <a
                href={file?.inFilePath ?? ''}
                className="font-medium underline  text-gray-800 text-theme-sm dark:text-white/90"
              >
                {file?.title}
              </a>
            </div>
          </div>
        </TableCell>
        <TableCell
          className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 cursor-pointer"
          onClick={fetchStateList}
        >
          <div className={`${styles.arrow} ${openDropMenu ? styles.active : ''}`} />
        </TableCell>
        {/* {flag && <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{file.category}</TableCell>} */}
        <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
          <Badge size="sm" color={file?.done ? 'success' : file?.stateTitle === 'Ошибка' ? 'error' : 'warning'}>
            {file?.stateTitle}
          </Badge>
        </TableCell>
        <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
          <span className="text-gray-500 text-theme-xs dark:text-gray-400">Добавлено: {String(published)}</span>
          <br /> <span className="text-gray-500 text-theme-xs dark:text-gray-400">Обновлено: {String(update)}</span>
        </TableCell>
        <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
          {file?.stateTitle === 'Ошибка' ? (
            ''
          ) : (
            <a href={file?.outFilePath ?? ''}>
              <Button
                size="sm"
                startIcon={<DownloadIcon />}
                variant={file?.done ? 'primary' : 'outline'}
                disabled={!file?.done}
              />
            </a>
          )}
        </TableCell>
      </TableRow>
      {stateList.length && openDropMenu ? stateList.map((item) => <DropDownList file={item} />) : ''}
    </>
  );
};

export default RowOfListComponent;
