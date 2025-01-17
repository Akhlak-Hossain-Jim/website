import React, { Component } from "react";
import ReactGa from "react-ga";
import { Modal } from "react-bootstrap";
import Icon from "../../components/Icon";
import "react-rangeslider/lib/index.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getCalculateMatic, getMaticStatusURL } from "../../constants/url";
import copy from "../../assets/images1/copy.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MaticWallets from "./maticWallet";
import { checkbech32 } from "../../actions/bech32Validation";

class MaticStakedrop extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            tcShow: false,
            volume: 0,
            blockHeight: "--",
            xprtAddressReward:"--",
            totalStaked: "--",
            statkedOnAudit: "--",
            totalRewards: "--",
            estimatedRewards: "--",
            globalTotalStaked: 0,
            globalAuditStaked: 0,
            globalAuditStakedInt: 0,
            totalDistributed: "",
            delegateAudit: 0,
            globalTotalStakedInt: 0,
            delegateOther: 0,
            errorAddress: false,
            copied: false,
            copyValue: false,
            errorxprtAddress: false,
            notParticipantAddress: false,
            showDelegateModal: false,
            showDelegateCliModal: false,
            showMagicTxnClieModel: false,
            totalDistributedInt: 0,
            account: "",
            disableBtn: "",
            metamaskShow: false,
            metamaskAccount: "",
            updateAccount: "",
            networkName: "",
        };
        this.handleCalculate = this.handleCalculate.bind(this);
      
        this.metamaskConnect = this.metamaskConnect.bind(this);
        this.handlexprtAddressChange = this.handlexprtAddressChange.bind(this);
    }
    onCopy = () => {
        this.setState({ copyValue: true });
        this.setState({ copied: true });
        setTimeout(() => {
            this.setState({ copyValue: false });
        }, 1000);
    };

    handleClose = () => {
        this.setState({ show: false });
        this.setState({ showDelegateModal: false });
        this.setState({ showDelegateCliModal: false });
        this.setState({ showMagicTxnClieModel: false });
    };

    handleTcModal = () => {
        this.setState({ tcShow: true });
    };
    handleDelegateModel = () => {
        this.setState({ showDelegateModal: true });
    };
    handleDelegateClieModel = () => {
        this.setState({ showDelegateModal: false });
        this.setState({ showDelegateCliModal: true });
    };

    handleMagicTxnClieModel = () => {
        this.setState({ show: false });
        this.setState({ showMagicTxnClieModel: true });
    };
    handleTerms = () => {
        this.setState({ tcShow: false });
        this.setState({ show: true });
    };
    handleCancelTerms = () => {
        this.setState({ tcShow: false });
        this.setState({ metamaskShow: false });
        this.setState({ disableBtn: true });
        this.props.history.push("/StakeDropMatic");
    };
    metamaskConnect = () => {
        const checkConnection = (cb) => {
            if (window.ethereum && window.ethereum.isMetaMask) {
                cb(null);
            } else {
                this.setState({ metamaskShow: true });
                this.setState({ disableBtn: true });
            }
        };
        checkConnection((err) => {
            if (err) {
                return;
            }
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((addr) => {
                    this.setState({ account: addr[0] });
                });
        });
    };

    componentDidMount = () => {

        window.scrollTo(0, 0);
        ReactGa.pageview(window.location.pathname + window.location.search);
        const Statusurl = getMaticStatusURL();
        axios.get(Statusurl).then((statusResponse) => {
            const totalDistributed =
                200000 - statusResponse.data.totalDistributed / 1000000;
            const worldTotalDelegations =
                statusResponse.data.totalStakeDropGlobalDelegation;
            const worldAuditDelegations = statusResponse.data.worldAuditDelegation;
            const worldGlobalDelegation = statusResponse.data.worldGlobalDelegation;
            this.setState({ totalDistributedInt: totalDistributed });
            this.setState({
                worldGlobalDelegation: (
                    Math.round(worldGlobalDelegation * 100) / 100
                ).toLocaleString(),
            });
            this.setState({ globalTotalStakedInt: worldTotalDelegations });
            this.setState({ globalAuditStakedInt: worldAuditDelegations });
            this.setState({ totalDistributed: totalDistributed.toLocaleString() });
            this.setState({
                globalTotalStaked: worldTotalDelegations.toLocaleString(),
            });
            this.setState({
                globalAuditStaked: worldAuditDelegations.toLocaleString(),
            });
        });
    };
    handlexprtAddressChange = (event) => {
        let calAddress = event.target.value;
        let checkBech32 = checkbech32(calAddress);
        if (checkBech32) {
            this.setState({ errorxprtAddress: false });
        } else {
            this.setState({ errorxprtAddress: true });
        }
    };

    handleCalculate = (e) => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        e.preventDefault();
        this.setState({ errorAddress: false });
        this.setState({ notParticipantAddress: false });
        const calAddress = e.target.maticAddress.value;
        var addressPrefix = calAddress.startsWith("0x");

        if (addressPrefix === true && calAddress.length === 42) {
            const url = getCalculateMatic(calAddress);
            axios.get(url).then((result) => {
                const calculatedata = result.data;
                if (calculatedata.success === true) {
                    const currentEarned = calculatedata.received / 1000000;
                    const yourEstimatedRewards = calculatedata.estimated / 1000000;
                    const totalStaked = calculatedata.globalDelegation.toFixed(2);
                    const statkedOnAudit = calculatedata.auditDelegation.toFixed(2);
                    this.setState({ blockHeight: calculatedata.magicTxCheckpoint });
                    this.setState({ xprtAddressReward: calculatedata.xprtAddress });
                    this.setState({ totalStaked: numberWithCommas(totalStaked) });
                    this.setState({ statkedOnAudit: numberWithCommas(statkedOnAudit) });
                    this.setState({
                        totalRewards: (Math.round(currentEarned * 100) / 100).toFixed(2),
                    });
                    this.setState({
                        estimatedRewards: (
                            Math.round(yourEstimatedRewards * 100) / 100
                        ).toFixed(2),
                    });
                } else {
                    this.setState({ notParticipantAddress: true });
                }
            });
        } else {
            this.setState({ errorAddress: true });
        }
    };

    render() {
        
        return (
            <div className="section-participate">
                <section className="participate-stakedrop">
                    <div className="container">
                        <div className="col-lg-12">
                            <p className="button-back" onClick={this.props.history.goBack}>
                                {" "}
                                <Icon viewClass="arrow-right" icon="arrow-right" /> Back to
                                Campaigns
                            </p>
                            <div className="row">
                                <div className="col-lg-4 section-campaign">
                                    <div className="row campaign-maintwo">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">
                                                Matic StakeDrop Campaign
                                            </h5>
                                        </div>
                                        <div className="row body-section">
                                            <div className="col-lg-12 card-content campaign-card">
                                                <div className="card-inner">
                                                    <h6>Rewards claim window</h6>
                                                    <h1>27 Days</h1>
                                                </div>
                                                <Icon viewClass="social_icon_imgg" icon="participate" />
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Rewards</h6>
                                                    <h1>200,000 XPRT</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Start Date</h6>
                                                    <h1>
                                                        29th of June 2021
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>End Date (Tentatively):</h6>
                                                    <h1>
                                                        26th of July 2021
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row campaign-maintwo second">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate two">
                                                Campaign Status
                                            </h5>
                                        </div>
                                        <div className="row body-section">
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Tokens left:</h6>
                                                    <h1>{this.state.totalDistributed} XPRT</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Time left:</h6>
                                                    <h1 className="countdown">00:00:00:00</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo">
                                                    <h6>Total Staked:</h6>
                                                    <h1>
                                                        {this.state.globalTotalStaked} MATIC{" "}
                                                        <span>
                              Total Active: {this.state.worldGlobalDelegation}
                            </span>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 card-content">
                                                <div className="participate-cardtwo end">
                                                    <h6>Total Staked on AUDIT.one:</h6>
                                                    <h1>{this.state.globalAuditStaked} MATIC</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 staking-second-section">
                                    
                                

                                    <div className="col-lg-12 stakerow">
                                        <div className="col-lg-12  header-section">
                                            <h5 className="heading-participate">
                                                Calculate Your Estimated Rewards
                                            </h5>
                                        </div>
                                        <div className="body-section">
                                            <form onSubmit={this.handleCalculate}>
                                                <div className="inputstaking">
                                                    <h5>Staking Address</h5>
                                                    <input
                                                        type="text"
                                                        name="maticAddress"
                                                        id="maticAddress"
                                                        value={this.state.maticAddress}
                                                        onChange={this.handleAddressChange}
                                                        placeholder="Enter Address"
                                                        required
                                                    />
                                                </div>
                                                <div className="inputstaking left-align-calculate">
                                                    <h5>&nbsp;</h5>
                                                    <div className="btn-calculate">
                                                        <button type="submit" className="btn">
                                                            Calculate
                                                        </button>
                                                    </div>
                                                </div>
                                                {this.state.errorAddress ? (
                                                    <h6 className="valid-add">Enter Valid Address</h6>
                                                ) : (
                                                    ""
                                                )}
                                                {this.state.notParticipantAddress ? (
                                                    <h6 className="valid-add">
                                                        Not a StakeDrop participant address, please send the
                                                        magic transaction
                                                    </h6>
                                                ) : (
                                                    ""
                                                )}
                                            </form>

                                            <div className="">
                                                <div className="inputstaking justify-start">
                                                    <h5>Start Checkpoint</h5>
                                                    <h5 className="text-color">
                                                        {this.state.blockHeight}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="inputstaking justify-start">
                                                    <h5>XPRT Address</h5>
                                                    <h5 className="text-color">
                                                        {this.state.xprtAddressReward}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row common-cards">
                                                <div className="inputstaking bottom">
                                                    <h5>Total Staked</h5>
                                                    <h5 className="value">
                                                        {this.state.totalStaked} MATIC
                                                    </h5>
                                                </div>

                                                <div className="inputstaking bottom">
                                                    <h5>Total Staked on AUDIT.one</h5>
                                                    <h5 className="value">
                                                        {this.state.statkedOnAudit} MATIC
                                                    </h5>
                                                </div>

                                                <div className="inputstaking bottom">
                                                    <h5>Total Rewards</h5>
                                                    <h5 className="value">
                                                        {this.state.totalRewards} XPRT
                                                    </h5>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal
                        show={this.state.metamaskShow}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <p className="tc">Please install metamask</p>
                            <div className="button-section">
                                <button
                                    className="btn decline"
                                    onClick={this.handleCancelTerms}
                                >
                                    Ok
                                </button>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal
                        size="lg"
                        show={this.state.show}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <div className="staking-wallet-section">
                                <h4 className="text-left title">
                                    List of instructions to send Magic Transaction
                                </h4>
                                <ul className="staking-instructions">
                                    <li className="text-left continue-text">
                                        After you have staked your tokens on Matic Network, to do
                                        magic tx, you have to send 0 Eth to the contract address{" "}
                                        <span className="addressmatic">
                      0x925d092D9Ff6c95EaB70Ee5a23C77F355C67F46d{" "}
                                            <CopyToClipboard
                                                onCopy={this.onCopy}
                                                text={"0x925d092D9Ff6c95EaB70Ee5a23C77F355C67F46d"}
                                            >
                        <img src={copy} alt="copy" className="copy-icon" />
                      </CopyToClipboard>
                    </span>{" "}
                                        from your ERC-20 wallet.
                                    </li>
                                    <p className="text-left continue-text">
                                        &emsp;Note: This address has to be same address from which
                                        you have staked your Matic tokens.
                                    </p>
                                    <p className="text-left continue-text">
                                        &emsp;Note: If you try to send more than 0 Eth, the
                                        transaction will fail.
                                    </p>
                                </ul>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal
                        size="lg"
                        show={this.state.showDelegateModal}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <div className="staking-wallet-section">
                                <h4 className="title">
                                    Available Methods to Participate in StakeDrop
                                </h4>

                                <p className="continue-text"> Choose wallet to continue</p>
                                <MaticWallets />
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal
                        size="lg"
                        show={this.state.showDelegateCliModal}
                        onHide={this.handleClose}
                        className="accountInfoModel"
                        centered
                    >
                        <Modal.Body>
                            <div className="cli-section">
                                <h3>CLI Method</h3>
                                <p className="info">
                                    Awesome, everything that you need is below
                                </p>
                                <div className="cli-address">
                                    <p>
                                        kvcli tx staking delegate
                                        kavavaloper14gfgngrgg0pj494euuuvhygrhfptzf2hxllsev [amount]
                                        --from [from_key_or_address] --chain-id kava-4 --node
                                        https://node1.rpc.kava.persistence.one:443
                                    </p>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        );
    }
}

export default withRouter(MaticStakedrop);
