import type { Meta, StoryObj } from '@storybook/react';
import { DjTable } from './DjTable';
import { Badge } from './Badge';
import { MoreHorizontal, Edit2, Trash2, Shield, Zap, Activity } from 'lucide-react';
import React from 'react';

const meta = {
  title: 'Components/DjTable',
  component: DjTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DjTable>;

export default meta;
type Story = StoryObj<typeof meta>;

interface SystemNode {
  id: string;
  node: string;
  status: 'active' | 'offline' | 'warning';
  load: number;
  uptime: string;
  protocol: string;
}

const data: SystemNode[] = [
  { id: 'NODE-01', node: 'Core Central', status: 'active', load: 12, uptime: '142h', protocol: 'TRICKY-X' },
  { id: 'NODE-02', node: 'Edge Proxy Alpha', status: 'warning', load: 88, uptime: '12h', protocol: 'TRICKY-S' },
  { id: 'NODE-03', node: 'Data Syphon 09', status: 'offline', load: 0, uptime: '0h', protocol: 'RAW-RAW' },
  { id: 'NODE-04', node: 'Telemetry Hub', status: 'active', load: 45, uptime: '1202h', protocol: 'PROTO-G' },
  { id: 'NODE-05', node: 'Security Shield', status: 'active', load: 8, uptime: '450h', protocol: 'AES-K' },
  { id: 'NODE-06', node: 'Load Balancer B', status: 'active', load: 62, uptime: '89h', protocol: 'NET-X' },
  { id: 'NODE-07', node: 'Backup Vault', status: 'warning', load: 92, uptime: '2h', protocol: 'COLD-S' },
  { id: 'NODE-08', node: 'CDN Global', status: 'active', load: 15, uptime: '3445h', protocol: 'HTTP-3' },
];

const columns = [
  {
    accessorKey: 'id',
    header: 'Node ID',
    cell: (info: any) => <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">{info.getValue()}</span>,
  },
  {
    accessorKey: 'node',
    header: 'Asset Name',
  },
  {
    accessorKey: 'status',
    header: 'Operational Status',
    cell: (info: any) => {
      const status = info.getValue() as string;
      return (
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            status === 'active' ? "bg-emerald-500 animate-pulse" : 
            status === 'warning' ? "bg-amber-500" : "bg-slate-300 dark:bg-slate-800"
          )} />
          <span className="uppercase text-[10px] font-black tracking-widest">{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'load',
    header: 'System Load',
    cell: (info: any) => (
      <div className="flex flex-col gap-1 w-24">
        <div className="flex justify-between text-[8px] font-black uppercase text-slate-400">
          <span>{info.getValue()}%</span>
          <span>CAPACITY</span>
        </div>
        <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full transition-all duration-1000",
              info.getValue() > 80 ? "bg-rose-500" : info.getValue() > 50 ? "bg-amber-500" : "bg-indigo-600"
            )}
            style={{ width: `${info.getValue()}%` }}
          />
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'protocol',
    header: 'Protocol',
    cell: (info: any) => (
      <Badge variant="outline" className="px-2 py-0 h-5 border-2 text-[8px] border-slate-100 dark:border-white/10 font-black">
        {info.getValue()}
      </Badge>
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <Edit2 size={14} />
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
          <Trash2 size={14} />
        </button>
      </div>
    ),
  },
];

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export const Default: Story = {
  args: {
    data: data,
    columns: columns as any,
    pageSize: 5,
  },
};

export const SelectionDisabled: Story = {
  args: {
    data: data,
    columns: columns as any,
    enableSelection: false,
    pageSize: 10,
  },
};
