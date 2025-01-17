import React from "react";
import visionbg from "../../assets/images1/visionbg.svg";
import curved_line from "../../assets/images1/curvedBorder.svg"
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t} = useTranslation();
    return (
        <section className="vision-banner-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 content">
                        <h1 className="heading">{t("MISSION_BANNER_HEADING")}</h1>
                        <p>{t("MISSION_BANNER_TEXT3")}</p>
                        <p>{t("MISSION_BANNER_TEXT1")}</p>
                        <p>{t("MISSION_BANNER_TEXT2")}</p>
                        <div className="quote-section">
                            <p className="quote-text">{t("MISSION_BANNER_QUOTE1")} &nbsp;
                                <span>{t("MISSION_BANNER_QUOTE2")}</span>
                                <img src={curved_line} alt="curved_line"/>
                            </p>
                           
                        </div>
                    </div>
                    <div className="col-md-4 image-section text-right">
                        <img src={visionbg} alt="visionbg"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;