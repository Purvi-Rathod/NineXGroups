"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string | null;
  onValueChange: (value: string | null) => void;
  type: "single" | "multiple";
  collapsible?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string | null) => void;
  className?: string;
  children: React.ReactNode;
}

export function Accordion({
  type = "single",
  collapsible = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | null>(defaultValue || null);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = React.useCallback(
    (newValue: string | null) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [controlledValue, onValueChange]
  );

  return (
    <AccordionContext.Provider value={{ value, onValueChange: handleValueChange, type, collapsible }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined);

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("border-b last:border-b-0", className)} data-value={value}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

export function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const item = React.useContext(AccordionItemContext);
  if (!item) throw new Error("AccordionTrigger must be used within AccordionItem");

  const isOpen = context.value === item.value;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (context.type === "single") {
      if (isOpen && context.collapsible) {
        context.onValueChange(null);
      } else if (!isOpen) {
        context.onValueChange(item.value);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

export function AccordionContent({ className, children }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const item = React.useContext(AccordionItemContext);
  if (!item) throw new Error("AccordionContent must be used within AccordionItem");

  const isOpen = context.value === item.value;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
    >
      {children}
    </div>
  );
}


