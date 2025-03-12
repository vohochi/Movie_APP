import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState } from "react";

function SearchPage() {
  const [searchFormValue, setSearchFormValue] = useState({
    MediaType: "movie",
    genre: [],
    rating: "All",
  });
  console.log({ searchFormValue });
  console.log(searchFormValue.MediaType);

  const { data } = useFetch(`/discover/${searchFormValue.MediaType}`);
  console.log({ data });
  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">search page</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValue={setSearchFormValue} />
        </div>
        <div className="flex-[3]">result</div>
      </div>
    </div>
  );
}

export default SearchPage;
