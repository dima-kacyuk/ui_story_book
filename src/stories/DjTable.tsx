import { 
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useMemo, useState } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DjTableStyles {
  headerBg?: string;
  headerText?: string;
  rowBg?: string;
  rowText?: string;
  rowHoverBg?: string;
  accentColor?: string;
  borderColor?: string;
}

export interface DjTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  pageSize?: number;
  className?: string;
  onRowClick?: (row: TData) => void;
  enableSelection?: boolean;
  variant?: 'black' | 'white';
  styles?: DjTableStyles;
}

/**
 * DjTable is a professional-grade data grid powered by TanStack Table.
 * Features row selection, sorting, filtering, and adaptive pagination with a high-contrast industrial UI.
 */
export function DjTable<TData>({
  data,
  columns,
  pageSize = 10,
  className,
  onRowClick,
  enableSelection = true,
  variant = 'white',
  styles,
}: DjTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const isBlack = variant === 'black';
  const isWhite = variant === 'white';

  const finalColumns = useMemo(() => {
    if (!enableSelection) return columns;

    const selectionColumn: ColumnDef<TData> = {
      id: 'selection',
      header: ({ table }) => (
        <div className="px-1">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-2 border-slate-200 dark:border-white/10 checked:bg-slate-900 dark:checked:bg-white transition-all cursor-pointer accent-slate-900 dark:accent-white"
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-2 border-slate-200 dark:border-white/10 checked:bg-slate-900 dark:checked:bg-white transition-all cursor-pointer accent-slate-900 dark:accent-white"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </div>
      ),
    };

    return [selectionColumn, ...columns];
  }, [columns, enableSelection]);

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div className={cn("flex flex-col w-full h-full gap-4", className)}>
      <div 
        className={cn(
          "overflow-x-auto rounded-3xl",
          isBlack && "bg-slate-900 border-2 border-white",
          isWhite && "bg-white border-2 border-slate-900"
        )}
        style={{ 
          backgroundColor: styles?.rowBg,
          borderColor: styles?.borderColor 
        }}
      >
        <table className="w-full text-sm text-left border-collapse">
          <thead
            className={cn(
              isBlack && "bg-slate-900 text-white border-b-2 border-white",
              isWhite && "bg-white text-slate-900 border-b-2 border-slate-900"
            )}
            style={{ 
              backgroundColor: styles?.headerBg,
              color: styles?.headerText 
            }}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={cn(
                      "px-6 py-5 font-black uppercase tracking-widest text-[10px] select-none",
                      isBlack && "border-r-2 border-white last:border-r-0",
                      isWhite && "border-r-2 border-slate-900 last:border-r-0"
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          "flex items-center gap-2",
                          header.column.getCanSort() && "cursor-pointer hover:opacity-80 transition-opacity"
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <ChevronUp size={12} className={cn(styles?.accentColor || "text-indigo-600")} />,
                          desc: <ChevronDown size={12} className={cn(styles?.accentColor || "text-indigo-600")} />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody 
            className={cn(
              "divide-y",
              isBlack && "divide-white",
              isWhite && "divide-slate-900"
            )}
            style={{ borderColor: styles?.borderColor }}
          >
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cn(
                  "transition-colors",
                  isBlack && !row.getIsSelected() && "hover:bg-slate-800",
                  isWhite && !row.getIsSelected() && "hover:bg-slate-50",
                  row.getIsSelected() && isBlack && "bg-slate-800",
                  row.getIsSelected() && isWhite && "bg-slate-100",
                  onRowClick && "cursor-pointer"
                )}
                style={{ 
                  backgroundColor: row.getIsSelected() ? undefined : styles?.rowBg,
                }}
                onClick={() => onRowClick?.(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td 
                    key={cell.id} 
                    className={cn(
                      "px-6 py-4 font-medium whitespace-nowrap transition-colors",
                      isBlack && "text-white border-r-2 border-white last:border-r-0",
                      isWhite && "text-slate-900 border-r-2 border-slate-900 last:border-r-0"
                    )}
                    style={{ color: styles?.rowText }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- PAGINATION --- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lines:</span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="bg-transparent text-[10px] font-black uppercase tracking-widest outline-none border-none cursor-pointer text-slate-900 dark:text-white"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-900 dark:text-white disabled:opacity-30 transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(table.getPageCount(), 5) }, (_, i) => {
              const pageIdx = i; // Minimal pagination for small screen
              return (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(pageIdx)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl text-[10px] font-black transition-all",
                    table.getState().pagination.pageIndex === pageIdx
                      ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-lg"
                      : "bg-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5"
                  )}
                >
                  {pageIdx + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-900 dark:text-white disabled:opacity-30 transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
