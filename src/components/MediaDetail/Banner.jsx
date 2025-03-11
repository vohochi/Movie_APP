import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import ImageComponent from "@components/Image";

const Banner = ({
  mediaInfo,
  title,
  backdrop_path,
  certification,
  crews,
  release_date,
  genres,
  overview,
  point = 0,
  poster_path,
}) => {
  console.log({ mediaInfo });

  const groupedCrews = groupBy(crews, "job");

  console.log({ crews, groupedCrews });

  return (
    <div className="relative overflow-hidden text-white shadow-sm shadow-slate-800">
      <ImageComponent
        className="absolute inset-0 brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            width={600}
            height={900}
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title || name}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification || "TV Show"}
            </span>
            <p>{release_date}</p>
            <p>{(genres || []).map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round((point || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
              />{" "}
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
            {/*             
            <div>
              <p className="font-bold">Director</p>
              <p>Jennifer Phang</p>
            </div>
            <div>
              <p className="font-bold">Writer</p>
              <p>Dan Frey, Russell Sommer</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
