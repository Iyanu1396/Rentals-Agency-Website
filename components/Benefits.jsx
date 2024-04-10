import benefitsImg from "../src/assets/benefitsSectionIcons/brown-sofa-near-glass-window.avif";

import dollarIcon from "../src/assets/benefitsSectionIcons/dollar-icon.png";
import houseIcon from "../src/assets/benefitsSectionIcons/house-icon.png";
import stackIcon from "../src/assets/benefitsSectionIcons/stack-icon.png";
import plantIcon from "../src/assets/benefitsSectionIcons/dollar-icon.png";
import shieldIcon from "../src/assets/benefitsSectionIcons/shield-icon.png";
import eyeIcon from "../src/assets/benefitsSectionIcons/eye-icon.png";

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <p>Minimum Living Cost Takes Care Of Everything</p>
        <hr />
        <img
          className="benefitsImg"
          src={benefitsImg}
          alt="view of a swimming pool"
        />

        <figure>
          <img src={dollarIcon} alt="" />
          <figcaption>Enjoy wisdom of community!</figcaption>
        </figure>

        <figure>
          <img src={houseIcon} alt="" />
          <figcaption>Let's somebody else take care of Landlord!</figcaption>
        </figure>

        <figure>
          <img src={stackIcon} alt="" />
          <figcaption>Enjoy peaceful Environment!</figcaption>
        </figure>

        <figure>
          <img src={plantIcon} alt="" />
          <figcaption>Stay Safe! Save Money!</figcaption>
        </figure>

        <figure>
          <img src={shieldIcon} alt="" />
          <figcaption>Pay for what you use !</figcaption>
        </figure>

        <figure>
          <img src={eyeIcon} alt="" />
          <figcaption>Pay as Little as possible!</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Benefits;
