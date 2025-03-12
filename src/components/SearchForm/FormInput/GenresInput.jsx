import useFetch from "@hooks/useFetch";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

function GenresInput({ control, onChange, value = [] }) {
  const mediaType = useWatch({ name: "MediaType", control });
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType },
  );
  useEffect(() => {
    if (mediaType) {
      onChange([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

  return (
    <div className="flex flex-wrap gap-1">
      {(data.genres || []).map((genre) => (
        <p
          key={genre.id}
          className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-slate-500 text-white" : ""}`}
          onClick={() => {
            let newValue;
            if (value.includes(genre.id)) {
              newValue = value.filter((g) => g !== genre.id);
            } else {
              newValue = [...value, genre.id];
            }
            onChange(newValue);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
}

export default GenresInput;
