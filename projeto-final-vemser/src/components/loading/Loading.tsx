import { DivForLoading } from "./loading.style";
import load from "../../images/712.gif";
type LoadingProps = {
  largura?: string;
  altura?: string;
};
function Loading({ largura, altura }: LoadingProps) {
  return (
    <DivForLoading largura={largura} altura={altura}>
      <img src={load} alt="" />
    </DivForLoading>
  );
}

export default Loading;
