import React from "react";
import establish from "../../assets/images1/establish.svg";
import event_complete from "../../assets/images1/event_complet.svg"
import event_running from "../../assets/images1/event_running.svg"
import event_pending from "../../assets/images1/event_pending.svg"
import Icon from "../../components/Icon";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {useTranslation} from "react-i18next";
import {
    PONE_ESTABLISHED_ARTICLE,
    PONE_ESTABLISHED_IMAGE_URL
} from "../../constants/config";

const Info = () => {
    const {t} = useTranslation();
    return (
        <section className="section-roadmap">
            <div className="container">
                <h1 className="title">
                    {t("ROADMAP")}
                </h1>
                <div className="content">
                    <Tabs defaultActiveKey="2021" id="uncontrolled-tab-example">
                        <Tab eventKey="2019" title="2019">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={establish} alt="establish-img"/>
                                            <p className="event-name establish">Persistence One Established</p>
                                            <a href={PONE_ESTABLISHED_ARTICLE}
                                               rel="noopener noreferrer" target="_blank" className="hover-blog">
                                                <img className="event-status-img blog-image" alt="blog2"
                                                     src={PONE_ESTABLISHED_IMAGE_URL}/>
                                                <div className="blog-info">
                                                    <div className="medium-icon">
                                                        <Icon viewClass="social_icon_imgg" icon="medium-m"/>
                                                    </div>
                                                    <p>
                                                        {t("2019_Q2_1")}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q2_2")} <span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q2_3")} <span>{t("DAPP")}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q3_1")} <span>{t("Core")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q3_2")}<span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q3_3")}<span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q4</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q4_1")}<span>{t("CORE")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q4_2")}<span>{t("TEAM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2019_Q4_3")}<span>{t("COMMUNITY")}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2020" title="2020">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q1</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2020_Q1_1")}</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2020_Q1_2")}<span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2020_Q1_3")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q2_1")}<span>{t("CORE")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q2_2")} <span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q2_3")}<span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q2_4")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q2_5")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q2_6")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q3_1")} <span>{t("CORE")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q3_2")} <span>{t("CORE")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q3_3")}</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q3_4")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q3_5")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q3_6")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q4</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_1")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_2")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_3")}<span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_4")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>

                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_5")}<span>{t("TOKEN")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_6")} <span>{t("TEAM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_7")} <span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_8")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_9")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_10")}<span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2020_Q4_11")} <span>{t("ECOSYSTEM")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2021" title="2021">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q1</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_12")}</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_13")} <span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_15")} <span>{t("TOKEN")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_9")} <span>{t("TOKEN")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_14")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_10")} <span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q1_11")} <span>{t("CORE")}</span></p>
                                        </div>  
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                    <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q2_2")}</p>
                                        </div> 
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_02_11")}</p>
                                        </div> 
                                        <div className="event">
                                            <img className="present-img event-status-img" src={event_complete}
                                                 alt="establish-img"/>
                                            <div className="circle event-status-img"></div>

                                            <p className="event-name">{t("2021_Q2_4")} <span>{t("DAPP")}</span></p>

                                          
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q2_5")} <span>{t("TOKEN")} </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_02_12")} <span>{t("DAPP")} </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q2_10")} <span>{t("ECOSYSTEM")} </span>
                                            </p>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q3_2")}<span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q3_3")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q3_4")} <span>{t("CORE")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_running} alt="establish-img"/>
                                            <p className="event-name">{t("2021_03_11")} <span>{t("DAPP")}</span></p>
                                            <p className="present-event ind"><span>We are here!</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q3_9")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                       
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">{t("2021_03_12")} <span>{t("DAPP")}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2022" title="Q4 2021 & BEYOND">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                    </div>
                                    <div className="eventes">
                                    <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="establish-img"/>
                                            <p className="event-name">{t("2021_Q3_10")} <span>{t("CORE")}</span></p>
                                        </div> 
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2022_Q1_2")} <span>{t("ECOSYSTEM")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2022_Q1_3")} <span>{t("TOKEN")}</span>
                                            </p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2022_Q1_4")} <span>{t("CORE")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2022_Q1_5")} <span>{t("DAPP")}</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">{t("2021_01_6")} <span>{t("DAPP")}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    )
};
export default Info;