import { Watch } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrap>
      <Watch
        visible={true}
        height={
          window.innerWidth > 319 && window.innerWidth < 768 ? "250" : "400"
        }
        width={
          window.innerWidth > 319 && window.innerWidth < 768 ? "250" : "400"
        }
        radius="48"
        color="#54be96"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderWrap>
  );
};
