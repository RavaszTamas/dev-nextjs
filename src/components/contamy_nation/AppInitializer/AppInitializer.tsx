import { CircularProgress } from "@material-ui/core";
import useImagePreloader from "../hooks/useImagePreloader";
import fish1 from "@/assets/images/fishes/1.jpg";
import fish2 from "@/assets/images/fishes/2.jpg";
import fish3 from "@/assets/images/fishes/3.jpg";
import fish4 from "@/assets/images/fishes/4.jpg";

const preloadSrcList = [
  fish1,
  fish2,
  fish3,
  fish4,
];

export default function AppInitializer(props: { children: JSX.Element }) {
  return <>{props.children}</>;
}
