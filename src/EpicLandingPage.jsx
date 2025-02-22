import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Circle, Diamond } from 'lucide-react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// A small dataset for the table
const tableData = [
  { id: 1, product: 'Alpha Gadget', price: 199.99, sales: 50 },
  { id: 2, product: 'Beta Gizmo', price: 349.49, sales: 20 },
  { id: 3, product: 'Gamma Widget', price: 99.99, sales: 120 },
  { id: 4, product: 'Delta Tool', price: 249.0, sales: 75 },
  { id: 5, product: 'Omega Device', price: 499.99, sales: 12 },
];

// A small dataset for the chart
const chartData = [
  { day: 'Mon', visits: 110 },
  { day: 'Tue', visits: 210 },
  { day: 'Wed', visits: 160 },
  { day: 'Thu', visits: 300 },
  { day: 'Fri', visits: 420 },
  { day: 'Sat', visits: 230 },
  { day: 'Sun', visits: 350 },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('product', {
    header: 'Product',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor('sales', {
    header: 'Sales',
    cell: (info) => `${info.getValue()}`,
  }),
];

function EpicLandingPage() {
  // Setup for the table
  const tableInstance = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white flex flex-col">
      {/* Header / Hero Section */}
      <header className="relative overflow-hidden flex justify-center items-center h-96">
        {/* Animated Circles in the background */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <Circle className="text-white/20" size={200} />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex justify-end items-center mr-10"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <Diamond className="text-white/20" size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 ml-10 mb-10"
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        >
          <Activity className="text-white/20" size={64} />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to the Epic Landing
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A single-page extravaganza showcasing modern React + Tailwind + Framer Motion.
          </motion.p>
          <motion.button
            className="mt-8 px-5 py-3 bg-white text-purple-600 font-bold rounded-full flex items-center gap-x-2 hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Explore
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-7xl w-full mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        <motion.div
          className="flex-1 bg-white/10 rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Activity size={48} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold">Stunning Animations</h3>
          <p className="text-sm mt-2 text-white/80">
            Using Framer Motion to create smooth transitions and engaging interactions.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white/10 rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Diamond size={48} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold">Tailwind Styling</h3>
          <p className="text-sm mt-2 text-white/80">
            Leverage utility-first styling for a clean, responsive UI without extra overhead.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 bg-white/10 rounded-lg p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Circle size={48} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold">Lucide Icons</h3>
          <p className="text-sm mt-2 text-white/80">
            Beautifully designed icons to enrich your user interface and enhance visuals.
          </p>
        </motion.div>
      </section>

      {/* Table Section */}
      <section className="bg-white rounded-t-3xl py-12 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Product Sales Overview
          </motion.h2>
          <div className="overflow-x-auto">
            <motion.table
              className="w-full text-left table-auto rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <thead className="bg-purple-600 text-white">
                {tableInstance.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="px-4 py-2">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {tableInstance.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-b last:border-b-0">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="bg-white pb-12 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-2xl font-bold text-center mt-10 mb-4"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Weekly Visitor Trend
          </motion.h3>
          <motion.div
            className="w-full h-72"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="visits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9333ea" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#9333ea"
                  fillOpacity={1}
                  fill="url(#visits)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white/5 text-white flex flex-col items-center py-8 mt-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-lg font-semibold">Thanks for Visiting!</h4>
        </motion.div>
        <motion.p
          className="mt-2 text-sm text-white/70 text-center px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Built with React, Tailwind CSS, Framer Motion, Recharts, and TanStack Table
        </motion.p>
        <motion.div
          className="flex gap-x-4 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm font-medium flex items-center gap-x-1">
            <ArrowRight size={16} /> Go to Top
          </button>
        </motion.div>
      </footer>
    </div>
  );
}

export default EpicLandingPage;