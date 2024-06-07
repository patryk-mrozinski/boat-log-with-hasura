import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DateField from "./datetime-filed";

const CreateForm = ({ closeFormModal }) => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);

    closeFormModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-2xl border border-gray-300">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg">
            <div className="flex flex-wrap items-center space-x-4 my-4 m-6">
              <DateField name="start-time" label="Start Date" />
              <DateField name="estimated-end-time" label="Estimated finish" />
            </div>

            <div className="flex flex-wrap items-center space-x-4 my-4 m-6">
              <div className="text-sm flex flex-col">
                <label>Start port:</label>
                <input
                  type="string"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("start_port")}
                />
              </div>
              <div className="text-sm flex flex-col">
                <label>Estimated finish port:</label>
                <input
                  type="string"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("estimated_finish_port")}
                />
              </div>
            </div>

            <hr className="mb-3" />

            <div className="flex space-x-3 m-4 ml-6">
              <input
                type="submit"
                className="bg-lime-200 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                onClick={closeFormModal}
                className="bg-red-300 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateForm;
