import UppclMeter from "./uppclmeter/uppclmeter";
import UppclResult from "./uppclmeter/result";
import UppclObjectives from "./uppclmeter/Objectives";
import UppclChallenges from "./uppclmeter/Challenges";
const UppclMeters=() => {
    return(
        <div>
            <UppclMeter/>
            <UppclObjectives/>
            <UppclChallenges/>
            <UppclResult/>
        </div>
    );
}
export default UppclMeters;