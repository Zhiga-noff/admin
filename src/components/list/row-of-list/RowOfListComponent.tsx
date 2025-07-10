import React, { FC } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import Badge from '@/components/ui/badge/Badge';
import Button from '@/components/ui/button/Button';
import { DownloadIcon } from '@/icons';
import { ListTypes } from '@/types/list.types';

interface RowOfListProps {
  file: ListTypes;
  flag: boolean;
}

const RowOfListComponent: FC<RowOfListProps> = ({ file, flag }) => (
  <div>
    <TableRow key={file.id} className="">
      <TableCell className="py-3">
        <div className="flex items-center gap-3">
          {/* <div className="h-[50px] w-[50px] overflow-hidden rounded-md"> */}
          {/* <Image */}
          {/*    width={50} */}
          {/*    height={50} */}
          {/*    src={product.image} */}
          {/*    className="h-[50px] w-[50px]" */}
          {/*    alt={product.name} */}
          {/* /> */}
          {/* </div> */}
          <div>
            <a href={file.source} className="font-medium underline  text-gray-800 text-theme-sm dark:text-white/90">
              {file.name}
            </a>
          </div>
        </div>
      </TableCell>
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">🔽</TableCell>
      {flag && <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{file.category}</TableCell>}
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        <Badge
          size="sm"
          color={file.status === 'Delivered' ? 'success' : file.status === 'Pending' ? 'warning' : 'error'}
        >
          {file.status}
        </Badge>
      </TableCell>
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        <span className="text-gray-500 text-theme-xs dark:text-gray-400">Добавлено: {String(file.published)}</span>{' '}
        <br /> <span className="text-gray-500 text-theme-xs dark:text-gray-400">Обновлено: {String(file.update)}</span>
      </TableCell>
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        {file.status === 'Canceled' ? (
          ''
        ) : (
          <a href={file.download}>
            <Button
              size="sm"
              startIcon={<DownloadIcon />}
              variant={file.status === 'Pending' ? 'outline' : 'primary'}
              disabled={file.status === 'Pending'}
            />
          </a>
        )}
      </TableCell>
    </TableRow>
    <TableRow key={file.id} className="">
      <TableCell className="py-3">
        <div className="flex items-center gap-3">
          {/* <div className="h-[50px] w-[50px] overflow-hidden rounded-md"> */}
          {/* <Image */}
          {/*    width={50} */}
          {/*    height={50} */}
          {/*    src={product.image} */}
          {/*    className="h-[50px] w-[50px]" */}
          {/*    alt={product.name} */}
          {/* /> */}
          {/* </div> */}
          <div>
            <a href={file.source} className="font-medium underline  text-gray-800 text-theme-sm dark:text-white/90">
              {file.name}
            </a>
          </div>
        </div>
      </TableCell>
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">🔽</TableCell>
      {flag && <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{file.category}</TableCell>}
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        <Badge
          size="sm"
          color={file.status === 'Delivered' ? 'success' : file.status === 'Pending' ? 'warning' : 'error'}
        >
          {file.status}
        </Badge>
      </TableCell>
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        <span className="text-gray-500 text-theme-xs dark:text-gray-400">Добавлено: {String(file.published)}</span>{' '}
        <br /> <span className="text-gray-500 text-theme-xs dark:text-gray-400">Обновлено: {String(file.update)}</span>
      </TableCell>
      <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
        {file.status === 'Canceled' ? (
          ''
        ) : (
          <a href={file.download}>
            <Button
              size="sm"
              startIcon={<DownloadIcon />}
              variant={file.status === 'Pending' ? 'outline' : 'primary'}
              disabled={file.status === 'Pending'}
            />
          </a>
        )}
      </TableCell>
    </TableRow>
  </div>
);

export default RowOfListComponent;
