declare module '@happiness-bomb/ui' {
  import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    children: ReactNode;
  }

  export const Button: React.FC<ButtonProps>;

  export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'bordered';
    children: ReactNode;
  }

  export const Card: React.FC<CardProps>;
  export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const CardContent: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>>;

  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
  }

  export const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

  export interface TabsProps {
    defaultValue: string;
    children: ReactNode;
    className?: string;
  }

  export const Tabs: React.FC<TabsProps>;

  export interface TabsListProps {
    children: ReactNode;
    className?: string;
  }

  export const TabsList: React.FC<TabsListProps>;

  export interface TabsTriggerProps {
    value: string;
    children: ReactNode;
    className?: string;
  }

  export const TabsTrigger: React.FC<TabsTriggerProps>;

  export interface TabsContentProps {
    value: string;
    children: ReactNode;
    className?: string;
  }

  export const TabsContent: React.FC<TabsContentProps>;
} 