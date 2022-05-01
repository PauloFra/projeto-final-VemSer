import load from "../../images/712.gif";
import { DivForLoading } from "./loading.style";
type LoadingProps = {
  largura?: string;
  altura?: string;
};
function Loading({ largura, altura }: LoadingProps) {
  return (
    <DivForLoading largura={largura} altura={altura} >
      <img src={load} alt="gif de loading" />
    </DivForLoading>
  );
}

export default Loading;
