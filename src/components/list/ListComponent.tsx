'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

import {usePathname} from "next/navigation";
import Button from "@/components/ui/button/Button";
import {DownloadIcon} from '@/icons'
import {ListConstant} from "@/constant/list.constant";

export default function ListComponent() {
    
    const path = usePathname()
    const flag = path ==='/'

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Recent Orders
                    </h3>
                </div>

                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                        See all
                    </button>
                </div>
            </div>
            <div className="max-w-full overflow-x-auto">
                <Table>
                    {/* Table Header */}
                    <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Название
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >⠀
                            </TableCell>
                            {flag && <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Операция
                            </TableCell>}
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Статус
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Дата добавления и обновления
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Скачать
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */}

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {ListConstant.map((file) => (
                            <TableRow key={file.id} className="">
                                <TableCell className="py-3">
                                    <div className="flex items-center gap-3">
                                        {/*<div className="h-[50px] w-[50px] overflow-hidden rounded-md">*/}
                                            {/*<Image*/}
                                            {/*    width={50}*/}
                                            {/*    height={50}*/}
                                            {/*    src={product.image}*/}
                                            {/*    className="h-[50px] w-[50px]"*/}
                                            {/*    alt={product.name}*/}
                                            {/*/>*/}
                                        {/*</div>*/}
                                        <div>
                                            <a href={file.source} className="font-medium underline  text-gray-800 text-theme-sm dark:text-white/90">
                                                {file.name}
                                            </a>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    🔽
                                </TableCell>
                                {flag && <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    {file.category}
                                </TableCell>}
                                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <Badge
                                        size="sm"
                                        color={
                                            file.status === "Delivered"
                                                ? "success"
                                                : file.status === "Pending"
                                                    ? "warning"
                                                    : "error"
                                        }
                                    >
                                        {file.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        Добавлено: {String(file.published)}
                      </span> <br/> <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                       Обновлено: {String(file.update)}
                      </span>
                                </TableCell>
                                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                    {file.status === 'Canceled' ? '':
                                        <a href={file.download}>
                                            <Button size={'sm'}
                                                    startIcon={<DownloadIcon/>}
                                                    variant={file.status === 'Pending' ? 'outline' : 'primary'}
                                                    disabled={file.status === 'Pending'}
                                    ></Button></a>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
