'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
      <Card>
        <CardHeader>
          <CardTitle>Inscripciones e Ingresos (últimos 12 meses)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#666', fontSize: 12 }}
                stroke="#ccc"
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: '#666', fontSize: 12 }}
                stroke="#ccc"
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: '#666', fontSize: 12 }}
                stroke="#ccc"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <Legend />
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

      <Card>
        <CardHeader>
          <CardTitle>Crecimiento de Usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#666', fontSize: 12 }}
                stroke="#ccc"
              />
              <YAxis tick={{ fill: '#666', fontSize: 12 }} stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <Legend />
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
