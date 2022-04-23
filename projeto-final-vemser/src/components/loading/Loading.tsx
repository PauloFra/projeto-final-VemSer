import { DivForLoading } from './loading.style'
import load from '../../images/712.gif'
function Loading() {
  return (
    <DivForLoading>
        <img src={load} alt="" />
    </DivForLoading>
  )
}

export default Loading