import React from "react";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";
import {
    INTERNFT_URL,
    INTERNFT_DOCS_URL, PERSISTENCEJS_URL
} from "../../constants/config";
let explorerURL = process.env.REACT_APP_EXPLORER_URL;
let crust2ExplorerURL = process.env.REACT_APP_BLOCK_EXPLORER_URL;
const Tools = () => {
    const {t} = useTranslation();
    return (
        <section className="tools-section-boxes">
            <div className="container">
                <h3 className="section-title">{t("TOOLS_FRAME_WORKS")}</h3>
                <div className="boxes">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <p>{t("EXPLORERS")}</p>
                                <div className="logos flex-box">
                                    <div className="logo">
                                        <a className="link-box" href={`${explorerURL}`}rel="noopener noreferrer" target="_blank">Core-1</a>
                                        <a className="link-box" href={`${crust2ExplorerURL}`}rel="noopener noreferrer" target="_blank">Crust-2</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box box2">
                                <p>interNFT</p>
                                <div className="logo">
                                    <a href={INTERNFT_URL} rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="github2"/></a>
                                    <a className="link-box" href={INTERNFT_DOCS_URL} rel="noopener noreferrer" target="_blank">{t("DOCS")}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="box">
                                <p>PersistenceJS</p>
                                <div className="logo">
                                    <a href={PERSISTENCEJS_URL} rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="github2"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tools;