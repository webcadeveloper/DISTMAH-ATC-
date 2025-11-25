'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RoleSelectorProps {
  value: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN';
  onValueChange: (value: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN') => void;
  disabled?: boolean;
}

export function RoleSelector({ value, onValueChange, disabled }: RoleSelectorProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="STUDENT">Estudiante</SelectItem>
        <SelectItem value="INSTRUCTOR">Instructor</SelectItem>
        <SelectItem value="ADMIN">Admin</SelectItem>
      </SelectContent>
    </Select>
  );
}
