import PdclChallenges from "./pdcl/PdclChallenges";
import PdclDigital from "./pdcl/PdclDigital";
import PdclObjectives from "./pdcl/PdclObjectives";
import PdclResult from "./pdcl/PdclResult";

const PdclMeter=() => {
    return(
        <div>
            <PdclDigital/>
            <PdclObjectives/>
            <PdclChallenges/>
            <PdclResult/>
        </div>
    );
}
export default PdclMeter;