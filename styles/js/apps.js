// const Web3 = require("web3");

var web3 = AlchemyWeb3.createAlchemyWeb3("wss://polygon-mainnet.g.alchemy.com/v2/rOl8vpXFZqtOLshIVqpccqhOH3j0Xmlm");
// const web3 = new Web3("wss://eth-rinkeby.alchemyapi.io/v2/keC7ZRcIgiotApUd960gwire8vcu5YMa");
const contractABI = [{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"},{"internalType":"address payable","name":"_developer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"plan","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"COMMISSION_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEVELOPER_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_ACTIVE_STAKES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_HOLD_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getActiveDeposits","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"depositIndex","type":"uint256"}],"name":"getHoldBalanceByDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"plan","type":"uint256"}],"name":"getPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"depositIndex","type":"uint256"}],"name":"getPlanBalanceByDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"spercent","type":"uint256"},{"internalType":"uint256","name":"hpercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"plan","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getTotalHoldBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getTotalPlanBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint256","name":"plan","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"},{"internalType":"uint256","name":"holdwithdrawn","type":"uint256"},{"internalType":"uint256","name":"planWithdrawn","type":"uint256"},{"internalType":"bool","name":"eligible","type":"bool"},{"internalType":"bool","name":"isInvestmentActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrals","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"reinvestAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startUNIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address payable","name":"referrer","type":"address"},{"internalType":"uint256","name":"referrals","type":"uint256"},{"internalType":"uint256","name":"totalBonus","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"activeInvestments","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositIndex","type":"uint256"},{"internalType":"uint8","name":"_type","type":"uint8"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_type","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const contractAddress = "0x6be4746140cC17f4EfFA15eac978d71eD3A2685C";
// const contractAddress = "0xf48Cf04260835cC36B65ee908AEB0720499D2451";
var contractInstance = new web3.eth.Contract(contractABI, contractAddress);


function sendAlert(alertmsg, alertType) {
    $('#toaste').addClass("sshow "+alertType);
    console.log("Alert type is "+alertType);
    $('#toaste>#imgg').css('background-image', 'url(./styles/img/'+alertType+'.png)');
    $('#toaste').css("background-color", alertType);
    // $('#toaste>#imgg').text("hiiiiiii");
    setTimeout( function() {
        // xx.className = xx.className.replace("sshow", ""); 
        $('#toaste').removeClass("sshow "+alertType);
    }, 5000);
    $('#reponse-msg').text(alertmsg).show();
    // $('#reponse-msg').fadeOut(7000);
}

async function checkMetaMask() {
    if (window.ethereum.selectedAddress) {
        web3 = AlchemyWeb3.createAlchemyWeb3("wss://polygon-mainnet.g.alchemy.com/v2/rOl8vpXFZqtOLshIVqpccqhOH3j0Xmlm");
        contractInstance = new web3.eth.Contract(contractABI, contractAddress);
        account = window.ethereum.selectedAddress;
        $('.floating-connect-btn').text(("Connected: " + account).substring(0, 16) + "..." + ("" + account).slice(-2));
        $('.floating-connect-btn').css("background-color", 'green');
        $('.floating-connect-btn').prop('disabled', true);
        $('.connect-btn').text("Disconnect");
        $('.connect-btn').css("background-color", '#ff5757');
        $('.connect-btnx').addClass("connect-btnn");
        $('.connect-btn, .floating-connect-btn').attr("onclick", "disconnectWallet();");
        $('#reflink').val("https://maticalpha.io/?ref=" + account);
        modal3.style.display = "none";
        initializeUI();
        
        sendAlert("Automatically connected with MetaMask wallet!", "green");
        // var xx = document.getElementById("toaste")
        // xx.className = "sshow greenn";
        
        await chainChangedHandler().then(() => {});
    }
}

checkMetaMask();

function disconnectWallet() {
    $('.floating-connect-btn').text("  CONNECT WALLET");
    $('.floating-connect-btn').prop('disabled', false);
    $('.connect-btn').text('');
    $('.connect-btn').append('<i class="fas fa-link mr-2 connect-wallet"></i>  CONNECT WALLET');
    $('.connect-btn, .floating-connect-btn').attr("style", 'background: #904dbd; color: white;');
    $('.connect-btnx').removeClass("connect-btnn");
    $('.connect-btn, .floating-connect-btn').attr("onclick", "walletc();");
    // console.log("Wallet disconnect");
    $('#reflink').val("https://maticalpha.io/?ref=" + account);
    
}

async function checkWC() {
    // console.log("checking wc");
    var provider = new WalletConnectProvider.default({
        rpc: {
            // 1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
            // 4: "wss://eth-rinkeby.alchemyapi.io/v2/keC7ZRcIgiotApUd960gwire8vcu5YMa",
            137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
            // ...
    
        },
        bridge: 'https://bridge.walletconnect.org',
        qrcode: false,
    });
    web3 = new Web3(provider);
    window.w3 = web3;
    contractInstance = new web3.eth.Contract(contractABI, contractAddress);
    provider.enable();
    var wcaccounts = await web3.eth.getAccounts(); // get all connected accounts
    account = wcaccounts[0];
    // console.log(wcaccounts[0]);
    initializeUI();
    $('.floating-connect-btn').text(("Connected: " + account).substring(0, 16) + "..." + ("" + account).slice(-2));
    $('.floating-connect-btn').css("background-color", 'green');
    $('.floating-connect-btn').prop('disabled', true);
    $('.connect-btn').text("Disconnect");
    $('.connect-btn').css("background-color", '#ff5757');
    // $('.connect-btnx').addClass("connect-btnn");
    $('.connect-btn, .floating-connect-btn').attr("onclick", "disconnectWallet();");
    $('#reflink').val("https://maticalpha.io/?ref=" + account);
    sendAlert("Automatically connected with WalletConnect!", "green");
    chainChangedHandler();
}

if(!window.ethereum.selectedAddress) {
    checkWC();
}


// provider.enable();
// const web3wc = new Web3(provider);
// console.log("Testing WC");
// web3wc.eth.getAccounts().then(function(acc) {
//     if (acc) {
//         account = acc[0];
//         $('.connect-btn').text(("Connected: " + account).substring(0, 16) + "..." + ("" + account).slice(-2));
//         $('.connect-btn').css("background-color", 'green');
//         $('#reflink').val("https://maticalpha.io/?ref=" + account);
//         modal3.style.display = "none";
//         initializeUI();
//     }
// });


// console.log(contractInstance);
contractInstance.methods
    .totalUsers()
    .call()
    .then(function(_count) {
        $('#user-count').text(_count);
    });
contractInstance.methods
    .totalRefBonus()
    .call()
    .then(function(_refBonus) {
        $('#ref-bonus').text((_refBonus / 10 ** 18).toFixed(0));
        // $('#ref-bonus').text(_refBonus);
    });
contractInstance.methods
    .totalStaked()
    .call()
    .then(function(_count) {
        $('#total-staked').text((_count / 10 ** 18).toFixed(0));
        // $('#total-staked').text(_count);
    });
var account;
// var planID;

async function connectWC() {
    // https://docs.walletconnect.com/quick-start/dapps/web3-provider
    var provider = new WalletConnectProvider.default({
        rpc: {
            // 1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
            // 4: "wss://eth-rinkeby.alchemyapi.io/v2/keC7ZRcIgiotApUd960gwire8vcu5YMa",
            137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
            // ...

        },
        bridge: 'https://bridge.walletconnect.org',
    });
    //  Create Web3 instance
    provider.enable();
    const web3 = new Web3(provider);
    window.w3 = web3;
    contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    var accounts = await web3.eth.getAccounts(); // get all connected accounts
    // console.log("wc acc is " + accounts);
    modal3.style.display = "none";
    account = accounts[0]; // get the primary account
    initializeUI();
    $('.floating-connect-btn').text(("Connected: " + account).substring(0, 16) + "..." + ("" + account).slice(-2));
    $('.floating-connect-btn').css("background-color", 'green');
    $('.floating-connect-btn').prop('disabled', true);
    $('.connect-btn').text("Disconnect");
    $('.connect-btn').css("background-color", '#ff5757');
    $('.connect-btnx').addClass("connect-btnn");
    $('.connect-btn, .floating-connect-btn').attr("onclick", "disconnectWallet();");
    $('#reflink').val("https://maticalpha.io/?ref=" + account);
    chainChangedHandler();
}


var sign = async(msg) => {
    if (w3) {
        return await w3.eth.personal.sign(msg, account)
    } else {
        return false
    }
}

async function chainChangedHandler() {
    await web3.eth.getChainId().then(function(_id) {
        web3.eth.net.getNetworkType().then(function(_name) {
            if (_id != window.ethereum.networkVersion) {
                console.log("id is " + _id + " and network v is " + window.ethereum.networkVersion);
                console.log("type of id is " + typeof(_id));
                // sendAlert("Please switch to the " + _name + " network!")
                sendAlert("Please switch to the Polygon Mainnet network!", "orange")  
                window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x89" }],
                }).then(() => {
                    sendAlert("Connected to the Polygon Mainnet Network!", "green");
                }).catch((error) => {
                    sendAlert("User denied connection to Polygon Mainnet network", "red");
                });
            }
        });
    });
};

if (window.ethereum) {
    window.ethereum.on("chainChanged", chainChangedHandler);
}

function initializeUI() {
    contractInstance.methods
        .totalUsers()
        .call()
        .then(function(_count) {
            $('#user-count').text(_count);
        });
    contractInstance.methods
        .totalRefBonus()
        .call()
        .then(function(_refBonus) {
            $('#ref-bonus').text(_refBonus / 10 ** 18);
            // $('#ref-bonus').text(_refBonus);
        });
    contractInstance.methods
        .totalStaked()
        .call()
        .then(function(_count) {
            $('#total-staked').text((_count / 10 ** 18).toFixed(0));
            // $('#total-staked').text(_count);
        });
    contractInstance.methods
        .getUserTotalStaked(account)
        .call()
        .then(function(_staked) {
            // $('#t-staked').text(_staked / 10 ** 18 + " MATIC");
            $('#t-staked').text((_staked / 10 ** 18).toFixed(3) + " MATIC");
        });
    contractInstance.methods
        .getUserTotalWithdrawn(account)
        .call()
        .then(function(_withdrawn) {
            $('#t-withdrawn').text((_withdrawn / 10 ** 18).toFixed(3) + " MATIC");
        });
    contractInstance.methods
        .getTotalHoldBalance(account)
        .call()
        .then(function(_staked) {
            $('#h-bal').text((_staked / 10 ** 18).toFixed(3) + " MATIC");
        });
    contractInstance.methods
        .getTotalPlanBalance(account)
        .call()
        .then(function(_staked) {
            $('#p-bal').html((_staked / 10 ** 18).toFixed(3) + " MATIC");
        });
    contractInstance.methods
        .getUserReferrals(account)
        .call()
        .then(function(_ref) {
            $('#referrals').text(_ref);
        });
    contractInstance.methods
        .getUserReferralTotalBonus(account)
        .call()
        .then(function(_refBonus) {
            $('.ref-bonus').text((_refBonus / 10 ** 18).toFixed(3) + " MATIC");
        });

    contractInstance.methods
        .getActiveDeposits(account)
        .call()
        .then(function(_userDeposits) {
            // console.log("Your deposits: " + _userDeposits);
            var deposits = "" + _userDeposits;
            var userDeposits = deposits.split(",");
            $('.my-stakes #dashboard').empty();
            userDeposits.forEach(function(depositValue, depositIndex, array) {
                var i = depositValue;
                var planBalance;
                var holdBalance;

                contractInstance.methods
                    .getPlanBalanceByDeposit(account, i)
                    .call()
                    .then(function(_pb) {
                        planBalance = (_pb / 10 ** 18);
                        contractInstance.methods
                            .getHoldBalanceByDeposit(account, i)
                            .call()
                            .then(function(_hb) {
                                holdBalance = (_hb / 10 ** 18);
                                // console.log("pb is " + planBalance);
                                // console.log("hb is " + holdBalance);
                                contractInstance.methods
                                    .getUserDepositInfo(account, i)
                                    .call()
                                    .then(function(_deposits) {
                                        var planName;
                                        var planID = _deposits.plan;
                                        if (planID == 0) {
                                            planName = "Plan Omega";
                                        } else if (planID == 1) {
                                            planName = "Plan Delta";
                                        } else if (planID == 2) {
                                            planName = "Plan Gamma";
                                        } else if (planID == 3) {
                                            planName = "Plan Beta";
                                        } else if (planID == 4) {
                                            planName = "Plan Alpha";
                                        }
                                        var staked = (_deposits.amount / 10 ** 18);
                                        var profit = (_deposits.profit / 10 ** 18);
                                        // var staked = (_deposits.amount);
                                        // var profit = (_deposits.profit);
                                        var status;
                                        if (_deposits.eligible == true) {
                                            status = "Active";
                                        } else {
                                            status = "Forfeited";
                                            holdBalance = 0;
                                        }
                                        // console.log("hb for deposit ", i + " is ", holdBalance);
                                        // if(planID===0)
                                        var totalDays = Math.floor((_deposits.finish - _deposits.start) / 86400);
                                        var currentDate = new Date().toUTCString();
                                        // console.log("date is: " + currentDate);
                                        var date = new Date(currentDate);
                                        var noSeconds = date.getTime() / 1000; //1440516958
                                        // console.log("no seconds is " + noSeconds);
                                        // var noSeconds = currentDate.getSeconds()
                                        var remainingDays = Math.floor((_deposits.finish - noSeconds) / 86400);
                                        // console.log("remain: " + noSeconds);
                                        // console.log("finish: " + _deposits.finish);
                                        if (noSeconds > _deposits.finish) {
                                            remainingHours = 0;
                                            remainingDays = 0;
                                        } else {
                                            var remainingHours = Math.floor((_deposits.finish - noSeconds) % (3600 * 24) / 3600);
                                        }

                                        var timeLeft;
                                        if (remainingDays == 0 && remainingHours == 0) {
                                            timeLeft = "Ended";
                                        } else {
                                            timeLeft = remainingDays + " days, " + remainingHours + " hours";
                                        }

                                        $('.my-stakes #dashboard').prepend(
                                            `<div id="" class="mb-3 col-lg-4 col-xl-4 mt-1 d-flex flex-column align-items-stretch member-info" style="background: none;">
                                                            <div class="ybox d-flex flex-column " style="flex:1;">
                                                                <div class="d-flex align-items-center mb-4" style="margin: 25px;"><i class="icon icon-organize mr-2" style="color: black;"></i>
                                                                    <h3 class="mb-0">` + planName + `</h3>
                                                                </div>
                                
                                                                <div class="d-flex flex-column align-items-stretch justify-content-center flex-fill">
                                
                                
                                
                                
                                                                    <div class="m-3 mr-4 ml-4 accBalance d-flex align-items-center p-2 pt-3 pb-3" style="background: black;">
                                
                                                                        <div class="svg d-flex all-center p-2">
                                                                            <img src="styles/img/xx.webp" class="icon icon-ads float-ix" width="23px" height="23px" />
                                                                        </div>
                                                                        <div class="d-flex flex-column">
                                                                            <p class="m-0 p-0 pBalance"><span style="color: white; font-weight: bold;">Plan Info</span></p>
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Duration:</small> ` + totalDays + ` Days </span>
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Time Left:</small> ` + timeLeft + ` </span>
                                
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Staked:</small> ` + staked + ` MATIC </span>
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Expected Return:</small> ` + profit + ` MATIC </span>
                                
                                                                        </div>
                                                                    </div>
                                
                                
                                
                                                                    <div class="m-3 mr-4 ml-4 accBalance d-flex align-items-center p-2 pt-3 pb-3" style="background: black;">
                                
                                                                        <div class="svg d-flex all-center p-2">
                                                                            <img src="styles/img/xxx.png" class="icon icon-ads float-ix" width="23px" height="23px" />
                                                                        </div>
                                                                        <div class="d-flex flex-column">
                                                                            <p class="m-0 p-0 pBalance"><span style="color: white; font-weight: bold;">Plan Earning</span></p>
                                
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Hold Status:</small> ` + status + ` </span>
                                
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Plan Balance:</small> ` + planBalance + ` MATIC </span>
                                
                                                                            <span class="m-0 p-0 mBalance" style="color: white;"><small>Hold Balance:</small> ` + holdBalance + ` MATIC </span>
                                
                                                                        </div>
                                                                    </div>
                                
                                
                                
                                
                                
                                
                                
                                
                                                                    <div class="row m-0 mr-4 ml-4 mb-4 earningSmall">
                                
                                                                        <div class="col-sm wrap" align="center" style="margin: 7px;"><button id="myBtn3" onclick="withdrawByDeposit(` + i + `, ` + 1 + `)" class="js-open btn-open is-active btn pb-` + i + `-btn" style="background: #904dbd; color: white;">WITHDRAW PB</button></div>
                                                                        <div class="col-sm" align="center" style="margin: 7px;"><button id="myBtn4" onclick="withdrawByDeposit(` + i + `, ` + 2 + `)" class="js-open btn-open is-active btn hb-` + i + `-btn" style="background: #904dbd; color: white;">WITHDRAW HB</button></div>
                                
                                
                                                                    </div>
                                
                                
                                
                                
                                
                                
                                
                                                                </div>
                                                            </div>
                                
                                                        </div>`
                                        );
                                    });
                            });
                    });
            });
        });
}

async function connectWalletHandler() {
    if (window.ethereum && window.ethereum.isMetaMask) {
        // console.log("MetaMask Here!");
        web3 = AlchemyWeb3.createAlchemyWeb3("wss://polygon-mainnet.g.alchemy.com/v2/rOl8vpXFZqtOLshIVqpccqhOH3j0Xmlm");
        contractInstance = new web3.eth.Contract(contractABI, contractAddress);
        await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((result) => {
                console.log("acc request " + result);
                account = window.ethereum.selectedAddress;
                $('.floating-connect-btn').text(("Connected: " + account).substring(0, 16) + "..." + ("" + account).slice(-2));
                $('.floating-connect-btn').css("background-color", 'green');
                $('.floating-connect-btn').prop('disabled', true);
                $('.connect-btn').text("Disconnect");
                $('.connect-btn').css("background-color", '#ff5757');
                $('.connect-btnx').addClass("connect-btnn");
                $('.connect-btn, .floating-connect-btn').attr("onclick", "disconnectWallet();");
                $('#reflink').val("https://maticalpha.io/?ref=" + account);
                modal3.style.display = "none";
                sendAlert("Successfully connected MetaMask wallet!", "green");
                initializeUI();
                chainChangedHandler();
            })
            .catch((error) => {
                sendAlert("Something went wrong", "red");
                console.log("error is " + error.message);
            });
    } else {
        sendAlert("Install MetaMask browser extension", "red");
        // console.log("Need to install MetaMask");
        // console.log("Please install MetaMask browser extension to interact");
    }
};

async function plan(_plan) {
    // chainChangedHandler();
    $('.stake-btn').css("background-color", "green");
    $('.stake-btn').attr('value', "Staking...");
    // console.log("Testing stake: " + $('#plan-' + _plan).val());
    const userStaked = $('#plan-' + _plan).val() * 10 ** 18;
    // console.log("User staked " + userStaked);
    const plan = _plan;
    const pageurl = window.location.href;
    const refquery = "?ref=";
    var referrer;

    await contractInstance.methods
        .getUserReferrer(account)
        .call()
        .then(function(_referrer) {
            if (_referrer == "0x0000000000000000000000000000000000000000") {
                if (pageurl.includes(refquery)) {
                    referrer = pageurl.substring(pageurl.indexOf(refquery) + refquery.length);
                } else {
                    referrer = "0x969c370A954d0C25445a61807D640493e6BA678F";
                }
            } else {
                referrer = _referrer;
                // console.log("ref is" + referrer);
            }
        });

    //to do: if user referrer is 0 (get from smart contract)
    /* function getUserReferrer(address userAddress) public view returns(address) {
		    return users[userAddress].referrer;
	        }*/
    //only then use the url link or default referrer wallet
    // $('#p-'+_plan+'-r').hide();
    // $('#p-'+_plan+'-h').hide();
    // console.log("val is"+parseInt($('#p-'+_plan+'-t').val()));
    // $('#p-'+_plan+'-t').hide();
    // console.log("val is"+parseInt($('#p-'+_plan+'-t').val()));
    // $('#p-'+_plan+'--r').text($('#plan-'+_plan).val()*$('#p-'+_plan+'-r').val()/100);
    // $('#p-'+_plan+'--h').text($('#plan-'+_plan).val()*$('#p-'+_plan+'-h').val()/100);
    // $('#p-'+_plan+'--t').text($('#plan-'+_plan).val()*$('#p-'+_plan+'-t').val()/100);
    await contractInstance.methods
        .INVEST_MIN_AMOUNT()
        .call()
        .then(function(_stake) {
            // console.log("_stake " + _stake + " userStaked " + userStaked);
            // console.log("account is: <" + account + ">");
            if (userStaked >= _stake) {
                $('.stake-btn-' + plan).attr('value', "Staking...");
                contractInstance.methods.invest(referrer, plan).send({
                    from: account, // must match user's active address.
                    value: "" + userStaked,
                    maxFeePerGas: "0x80087357E",
                    maxPriorityFeePerGas: "0x80087357E",
                    gasLimit: "500000",
                }).then(function() {
                    // userMsg = "Successfully staked tokens!";
                    sendAlert("Successfully staked tokens!", "green");
                    setTimeout(function() {
                        $('.stake-btn-' + plan).attr('value', "Stake Now");
                        $('.stake-btn-' + plan).css("background-color", "black");
                    }, 3000);
                    $('.stake-btn-' + plan).attr('value', "Successful");
                    $('.stake-btn-' + plan).css("background-color", "green");
                    // console.log("Initializing UI again");
                    initializeUI();
                    // console.log("UI initialized");
                    // console.log("test " + userMsg);
                    // sendAlert("Successfully staked tokens!");
                    // console.log("Successfully staked tokens!");
                    // $('#reponse-msg').text("Success staked");
                }).catch(function(error) {
                    setTimeout(function() {
                        $('.stake-btn-' + plan).attr('value', "Stake Now");
                        $('.stake-btn-' + plan).css("background-color", "black");
                    }, 3000);
                    $('.stake-btn-' + plan).attr('value', "Failed");
                    $('.stake-btn-' + plan).css("background-color", "red");
                    sendAlert("Something went wrong", "red");
                    // console.log("test " + userMsg);
                    // sendAlert("Error:");
                    // console.log(error.message);
                });
            } else {
                // userMsg = "Please stake more than the minimum amount!";
                sendAlert("Error: Stake more than the minimum amount!", "red");
                setTimeout(function() {
                    $('.stake-btn-' + plan).attr('value', "Stake Now");
                    $('.stake-btn-' + plan).css("background-color", "black");
                }, 3000);
                $('.stake-btn-' + plan).attr('value', "Failed");
                $('.stake-btn-' + plan).css("background-color", "red");
                // $('#reponse-msg').text(userMsg);;
            }
            // sendAlert(userMsg);
            // $('#reponse-msg').text(userMsg);;
            // console.log("test after if " + userMsg);
        });
    await contractInstance.methods
        .getUserTotalStaked(account)
        .call()
        .then(function(_staked) {
            $('#t-staked').text(_staked / 10 ** 18 + " MATIC");
        });
    // initializeUI();
};

async function withdrawall(_type) {
    // chainChangedHandler();
    var btnClass;
    var btnText;
    if (_type == 1) {
        btnClass = ".withdrawall-1";
        btnText = "WITHDRAW PB";
    } else if (_type == 2) {
        btnClass = ".withdrawall-2";
        btnText = "WITHDRAW HB";
    }
    $(btnClass).text("WITHDRAWING...");
    await contractInstance.methods.withdrawAll(_type).send({
        from: account,
        value: "0",
        maxFeePerGas: "0x80087357E",
        maxPriorityFeePerGas: "0x80087357E",
        gasLimit: "500000",
    }).then(() => {
        sendAlert("Successfully withdrew all available balance", "green");
        setTimeout(function() {
            $(btnClass).text(btnText);
            $(btnClass).css("background-color", "#904dbd");
        }, 3000);
        $(btnClass).text("SUCCESSFUL");
        $(btnClass).css("background-color", "green");
        initializeUI();
    }).catch((error) => {
        sendAlert("Something went wrong", "red");
        setTimeout(function() {
            $(btnClass).text(btnText);
            $(btnClass).css("background-color", "#904dbd");
        }, 3000);
        $(btnClass).text("FAILED");
        $(btnClass).css("background-color", "red");
    });
};

async function reinvest() {
    // chainChangedHandler();
    var optionSelecter = document.getElementById("reinvest-sel");
    var investmentPlan = optionSelecter.value;
    $('.reinvest-all').text("REINVESTING...");
    await contractInstance.methods.reinvestAll(investmentPlan).send({
        from: account,
        maxFeePerGas: "0x80087357E",
        maxPriorityFeePerGas: "0x80087357E",
        gasLimit: "500000",
    }).then(() => {
        sendAlert("Successfully reinvested all available balance!", "green");
        setTimeout(function() {
            $('.reinvest-all').text("REINVEST ALL");
            $('.reinvest-all').css("background-color", "#904dbd");
        }, 3000);
        $('.reinvest-all').text("SUCCESSFUL");
        $('.reinvest-all').css("background-color", "green");
        initializeUI();
    }).catch((error) => {
        sendAlert("Somethin went wrong", "red");
        setTimeout(function() {
            $('.reinvest-all').text("REINVEST ALL");
            $('.reinvest-all').css("background-color", "#904dbd");
        }, 3000);
        $('.reinvest-all').text("FAILED");
        $('.reinvest-all').css("background-color", "red");
    });
};

async function withdrawByDeposit(depositIndex, _type) {
    // chainChangedHandler();
    // console.log("function called by " + this.id);
    var btnClass;
    var btnText;
    if (_type == 1) {
        btnClass = ".pb-" + depositIndex + "-btn";
        btnText = "WITHDRAW PB";
        contractInstance.methods.getUserDepositInfo(account, depositIndex).call().then( function(_deposits) {
            var currentDate = new Date().toUTCString();
            var date = new Date(currentDate);
            var noSeconds = date.getTime() / 1000; //1440516958
            if(_deposits.eligible==true && _deposits.finish > noSeconds) {
                sendAlert("You're about to forfeit hold balance", "orange");
            }
        })
    } else if (_type == 2) {
        btnClass = ".hb-" + depositIndex + "-btn";
        btnText = "WITHDRAW HB";
    }
    $(btnClass).text("WITHDRAWING...");
    await contractInstance.methods.withdraw(depositIndex, _type).send({
        from: account,
        value: "0",
        maxFeePerGas: "0x80087357E",
        maxPriorityFeePerGas: "0x80087357E",
        gasLimit: "500000",
    }).then(() => {
        if (_type == 1) {
            var _planType = "plan balance";
        } else if (_type == 2) {
            var _planType = "hold balance";
        };
        sendAlert("Successfully withdrew " + _planType, "green");
        setTimeout(function() {
            $(btnClass).text(btnText);
            $(btnClass).css("background-color", "#904dbd");
        }, 3000);
        $(btnClass).text("SUCCESSFUL");
        $(btnClass).css("background-color", "green");
        initializeUI();
    }).catch((error) => {
        sendAlert("Somethin went wrong", "red");
        setTimeout(function() {
            $(btnClass).text(btnText);
            $(btnClass).css("background-color", "#904dbd");
        }, 3000);
        $(btnClass).text("FAILED");
        $(btnClass).css("background-color", "red");
    });
}

function refBonus() {
    // await web3.eth.getChainId().then(function(_id) {
    //     if (_id == )
    // });
    contractInstance.methods.totalRefBonus.call().then(function(_bonus) {
        // console.log("Total ref bonus is " + _bonus);
    })
}

async function bonusClaim() {
    $('#claim-btn').text("Claiming");
    contractInstance.methods.bonusClaim().send({
        from: account,
        value: "0",
        maxFeePerGas: "0x80087357E",
        maxPriorityFeePerGas: "0x80087357E",
        gasLimit: "500000",
    }).then(() => {
        sendAlert("Successfully claimed referral bonus", "green");
        setTimeout(function() {
            $('#claim-btn').text("Claim Bonus");
            $('#claim-btn').css("background-color", "#904dbd");
        }, 3000);
        $('#claim-btn').text("SUCCESSFUL");
        $('#claim-btn').css("background-color", "green");
        initializeUI();
    }).catch((error) => {
        sendAlert("Something went wrong", "red");
        setTimeout(function() {
            $('#claim-btn').text("Claim Bonus");
            $('#claim-btn').css("background-color", "#904dbd");
        }, 3000);
        $('#claim-btn').text("FAILED");
        $('#claim-btn').css("background-color", "red");
    });
}


$('#plan-0, #plan-1, #plan-2, #plan-3, #plan-4, #plan-5').on("input", function() {
    var planRewardPercent = parseFloat($("." + this.id + "-p-val").text());
    var holdRewardPercent = parseFloat($("." + this.id + "-h-val").text());
    var totalRewardPercent = parseFloat($("." + this.id + "-t-val").text());
    if ($(this).val() == 0) {
        $("." + this.id + '-info>small').text("%"); //change from MATIC to %
        $("." + this.id + "-p-val").show(); //reshow the percentages when input is cleared
        $("." + this.id + "-h-val").show(); //reshow the percentages when input is cleared
        $("." + this.id + "-t-val").show(); //reshow the percentages when input is cleared
        $("." + this.id + '-p').hide(); //and hide the estimated values
        $("." + this.id + '-h').hide();
        $("." + this.id + '-t').hide();
    } else {
        $("." + this.id + "-p-val").hide(); //hide percentage values
        $("." + this.id + "-h-val").hide();
        $("." + this.id + "-t-val").hide();
        $("." + this.id + '-p').text(($(this).val() * planRewardPercent / 100).toFixed(2)) //calculate estimates
        $("." + this.id + '-h').text(($(this).val() * holdRewardPercent / 100).toFixed(2))
        $("." + this.id + '-t').text(($(this).val() * totalRewardPercent / 100).toFixed(2));
        $("." + this.id + '-info>small').text("MATIC"); //chanes from % to MATIC
        $("." + this.id + '-p').show(); //show estimated plan balance earning
        $("." + this.id + '-h').show(); //show estimated hold balance earning
        $("." + this.id + '-t').show(); //show estimated total earning
    }
});

async function launchContract() {
    await contractInstance.methods.launch().send({
        from: account,
    }).then(() => {
        sendAlert("Contract successfully launched!", "green");
    }).catch((error) => {
        sendAlert("Somethin went wrong", "red");
    });
}