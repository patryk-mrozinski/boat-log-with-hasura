import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";

const DateField = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field }) => (
        <div className="text-sm">
          <label>{label}:</label>
          <input
            name={field.name}
            aria-label="Date and time"
            type="datetime-local"
            onChange={field.onChange}
            value={field.value}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      )}
      control={control}
      name={name}
    />
  );
};

export default DateField;
