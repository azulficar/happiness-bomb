// src/Button.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500",
    ghost: "bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500"
  };
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base"
  };
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].join(" ");
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: classes,
      disabled: disabled || isLoading,
      ...props,
      children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("svg", { className: "mr-2 h-4 w-4 animate-spin", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
        ] }),
        "Loading..."
      ] }) : children
    }
  );
};

// src/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseClasses = "rounded-lg bg-white";
  const variantClasses = {
    default: "shadow-md",
    bordered: "border border-gray-200"
  };
  const classes = [
    baseClasses,
    variantClasses[variant],
    className
  ].join(" ");
  return /* @__PURE__ */ jsx2("div", { className: classes, ...props, children });
};
var CardHeader = ({
  children,
  className = "",
  ...props
}) => /* @__PURE__ */ jsx2("div", { className: `p-4 border-b border-gray-200 ${className}`, ...props, children });
var CardContent = ({
  children,
  className = "",
  ...props
}) => /* @__PURE__ */ jsx2("div", { className: `p-4 ${className}`, ...props, children });
var CardFooter = ({
  children,
  className = "",
  ...props
}) => /* @__PURE__ */ jsx2("div", { className: `p-4 border-t border-gray-200 ${className}`, ...props, children });

// src/Input.tsx
import { forwardRef } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef(
  ({ className = "", label, error, ...props }, ref) => {
    return /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsx3("label", { className: "text-sm font-medium text-gray-700", children: label }),
      /* @__PURE__ */ jsx3(
        "input",
        {
          className: `w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""} ${className}`,
          ref,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx3("p", { className: "text-sm text-red-500", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/Tabs.tsx
import { createContext, useContext, useState } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var TabsContext = createContext(void 0);
var Tabs = ({
  defaultValue,
  children,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return /* @__PURE__ */ jsx4(TabsContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsx4("div", { className, children }) });
};
var TabsList = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx4("div", { className: `flex space-x-1 border-b border-gray-200 ${className}`, children });
};
var TabsTrigger = ({
  value,
  children,
  className = ""
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  return /* @__PURE__ */ jsx4(
    "button",
    {
      type: "button",
      className: `px-4 py-2 text-sm font-medium ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"} ${className}`,
      onClick: () => setActiveTab(value),
      children
    }
  );
};
var TabsContent = ({
  value,
  children,
  className = ""
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }
  const { activeTab } = context;
  if (activeTab !== value) {
    return null;
  }
  return /* @__PURE__ */ jsx4("div", { className: `pt-4 ${className}`, children });
};
export {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
};
