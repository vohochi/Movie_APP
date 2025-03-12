import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import FormFiled from "./SearchForm/FormFiled";
import MediaTypeInput from "./SearchForm/FormInput/MediaTypeInput";
import GenresInput from "./SearchForm/FormInput/GenresInput";
import RatingInput from "./SearchForm/FormInput/RatingInput";

function SearchForm({ setSearchFormValue }) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      MediaType: "movie",
      genre: [],
      rating: "All",
    },
  });

  const onSubmit = (data) => {
    console.log({ FormData: data });
    setSearchFormValue(data);
  };

  const formValue = watch();
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear previous timeout to implement debouncing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a timeout to avoid too frequent updates
    timeoutRef.current = setTimeout(() => {
      setSearchFormValue(formValue);
    }, 300); // 300ms debounce

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // Use JSON.stringify to compare the actual values, not object references
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValue)]);

  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormFiled
          name={"MediaType"}
          label={"Media Type"}
          control={control}
          Component={MediaTypeInput}
        />
        <FormFiled
          name={"genre"}
          label={"Genres"}
          control={control}
          Component={GenresInput}
        />
        <FormFiled
          name={"rating"}
          label={"Rating"}
          control={control}
          Component={RatingInput}
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
