import { useForm } from "react-hook-form";
import FormFiled from "./FormFiled";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useEffect } from "react";

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
  };
  const formValue = watch();
  useEffect(() => setSearchFormValue(), [JSON.stringify(formValue)]);
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
          name={"genres"}
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
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default SearchForm;
