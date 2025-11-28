'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface AnalyticsChartsProps {
  enrollmentsByMonth: Array<{
    month: string;
    count: number;
    revenue: number;
  }>;
  userGrowth: Array<{
    month: string;
    students: number;
    instructors: number;
  }>;
}

export function AnalyticsCharts({ enrollmentsByMonth, userGrowth }: AnalyticsChartsProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const chartColors = {
    grid: isDark ? '#374151' : '#f0f0f0',
    axis: isDark ? '#9ca3af' : '#ccc',
    tick: isDark ? '#9ca3af' : '#666',
    tooltipBg: isDark ? '#1f2937' : '#fff',
    tooltipBorder: isDark ? '#374151' : '#ccc',
  };

  const formatMonth = (month: string) => {
    const [year, monthNum] = month.split('-');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[parseInt(monthNum) - 1]} ${year}`;
  };

  const enrollmentData = enrollmentsByMonth.reverse().map(item => ({
    month: formatMonth(item.month),
    inscripciones: item.count,
    ingresos: item.revenue,
  }));

  const userGrowthData = userGrowth.reverse().map(item => ({
    month: formatMonth(item.month),
    estudiantes: item.students,
    instructores: item.instructors,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="text-neutral-900 dark:text-white">Inscripciones e Ingresos (últimos 12 meses)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="month"
                tick={{ fill: chartColors.tick, fontSize: 12 }}
                stroke={chartColors.axis}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: chartColors.tick, fontSize: 12 }}
                stroke={chartColors.axis}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: chartColors.tick, fontSize: 12 }}
                stroke={chartColors.axis}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: chartColors.tooltipBg,
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: '4px',
                  color: isDark ? '#fff' : '#000',
                }}
              />
              <Legend wrapperStyle={{ color: chartColors.tick }} />
              <Bar
                yAxisId="left"
                dataKey="inscripciones"
                fill="#1F4E79"
                name="Inscripciones"
              />
              <Bar
                yAxisId="right"
                dataKey="ingresos"
                fill="#003366"
                name="Ingresos (USD)"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="text-neutral-900 dark:text-white">Crecimiento de Usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis
                dataKey="month"
                tick={{ fill: chartColors.tick, fontSize: 12 }}
                stroke={chartColors.axis}
              />
              <YAxis tick={{ fill: chartColors.tick, fontSize: 12 }} stroke={chartColors.axis} />
              <Tooltip
                contentStyle={{
                  backgroundColor: chartColors.tooltipBg,
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: '4px',
                  color: isDark ? '#fff' : '#000',
                }}
              />
              <Legend wrapperStyle={{ color: chartColors.tick }} />
              <Line
                type="monotone"
                dataKey="estudiantes"
                stroke="#1F4E79"
                strokeWidth={2}
                name="Estudiantes"
                dot={{ fill: '#1F4E79' }}
              />
              <Line
                type="monotone"
                dataKey="instructores"
                stroke="#003366"
                strokeWidth={2}
                name="Instructores"
                dot={{ fill: '#003366' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
