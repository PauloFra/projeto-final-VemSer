import load from "../../images/712.gif";
import { DivForLoading } from "./loading.style";
type LoadingProps = {
  largura?: string;
  altura?: string;
  padding?:string;
};
function Loading({ largura, altura , padding}: LoadingProps) {
  return (
    <DivForLoading largura={largura} altura={altura} padding={padding} >
      <img src={load} alt="gif de loading" />
    </DivForLoading>
  );
}

export default Loading;
