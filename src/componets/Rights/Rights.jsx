import "./Rights.css"
import ka from "../Rights/ka.jpg"
export const Rights=()=>{
    return(
        <div className="Rights" id="rights">
            <div className="king">

            <span>Child Rights</span>
            <p>
Based on the UN Convention on the Rights of the Child, the Child Friendly Cities Initiative builds on four key articles of the Convention.

Non-discrimination <br /> (Article 2):The rights of all children are respected, without discrimination of any kind irrespective of the child’s or his or her parent’s or legal guardian’s race, colour, sex, language, religion, political or other opinion, national, ethnic or social origin, property, disability, birth or other status.

Best interests of the child <br />(Article 3): The best interests of children are a primary consideration in decisions that may affect them with State Parties assuring the care and protection necessary for their wellbeing.

The inherent right to life, survival and development <br />(Article 6): Children have the right to life, with States Parties committed to ensuring the maximum extent possible, their right to survival and healthy development.

Respect for the views of the child <br />(Article 12): Children have the right to voice their opinions and have these be taken into account in decisions that affect them.</p>
            </div>
<div className="image">

  <img  src={ka} alt="kin" style={{height:"170px",width:"200px"}}/>
</div>

 </div>
    )
}