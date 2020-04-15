var myContractInstance;
var abi = [{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"findFreeReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"viewUserReferral","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referrerID","type":"uint256"}],"name":"regUser","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currUserID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"isExist","type":"bool"},{"name":"id","type":"uint256"},{"name":"referrerID","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_manager","type":"address"}],"name":"setManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"},{"name":"_level","type":"uint256"}],"name":"viewUserLevelExpired","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_level","type":"uint256"}],"name":"buyLevel","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_referrer","type":"address"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"buyLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"prolongateLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_referral","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_referral","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"lostMoneyForLevelEvent","type":"event"}]

var address = "0x79C0CE16329055f2e49ccF21352Ee9775DD9BE4a";
var account = "";

   


function SigninPage(){
  
    if (typeof web3 !== 'undefined') {
     
        $('#lgambtn').show();
       
        web3 = new Web3(web3.currentProvider);

        web3.eth.getAccounts().then(function (result) {
            account = result[0];
          
        });
        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;



    } else {
       
        const infura = 'https://mainnet.infura.io/v3/bb53409129cd49ef8809f668af522aac';
          const web3 = new Web3(new Web3.providers.HttpProvider(infura));

        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;
    }


 //var events = myContractInstance.allEvents({ fromBlock: "latest", toBlock: 'latest' });
    //// watch for changes
    //events.watch(function (error, event) {
    //    if (!error) {

    //        if (event.event == "getMoneyForLevelEvent") {
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '/Content/assets/img/b1.png',
    //                    title: "User " + event.args._referral,
    //                    message: "Received " + event.args._level.c[1] == 1 ? level1 : event.args._level.c[1] == 2 ? level2 : event.args._level.c[1] == 3 ? level3 : level4 + " referral income from " + event.args._user
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }

    //        if (event.event == "regLevelEvent") {
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '/Content/assets/img/b1.png',
    //                    title: "Congragulations! New User " + event.args._user + " Registered ",
    //                    message: "Welcome to BullRun"
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }


    //        if (event.event == "getPoolPayment") {
    //            // Notification 1
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '/Content/assets/img/b1.png',
    //                    title: "User " + event.args._receiver,
    //                    message: "Received " + event.args._level.c[1] == 1 ? pool1_price : event.args._level.c[1] == 2 ? pool2_price : event.args._level.c[1] == 3 ? pool3_price : event.args._level.c[1] == 4 ? pool4_price : event.args._level.c[1] == 5 ? pool5_price : event.args._level.c[1] == 6 ? pool6_price : event.args._level.c[1] == 7 ? pool7_price : event.args._level.c[1] == 8 ? pool8_price : event.args._level.c[1] == 9 ? pool9_price : pool10_price + " Pool income from " + event.args._user
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }

    //    }
    //});

}

$(document).ready(function () { 

    $('#lgambtn').click(function () {
       

        try {
            myContractInstance.methods.users(account).call().then(function (result) {
                if (result[0]) {
                    localStorage.setItem("address", account);
                    location.href = "/Home/Dashboard";
                }
                else {
                    $('.error').html('You need to register first');
                    $('.error').show();
                }


            });
        }
        catch (e) {
            console.log(e)
        }
    })

    function trackTransaction(result) {

        console.log(result);
        web3.eth.getTransactionReceipt(result, function (error, result1) {
            if (result1 == null) {
                $('.error').html('Pending : Transaction waiting for comfirmation');
                $('.error').show();

                trackTransaction(result)
            }
            else {
                if (result1.status == "0x1") {
                    alert("success")
                    localStorage.setItem("address", account);
                    location.href = "/Home/Dashboard";
                }
                else {
                    $('.error').html('Transaction Failed');
                    $('.error').show();
                }
            }
        })
    }

    $('#lgmbtnsup').click(async () => {
      
        var add = $('[name="referral"]').val();
        if (add.length == 0) {
            $('.error').html('Enter referral code');
            $('.error').show();

            return false;
        }
      
        if (typeof web3 !== 'undefined') {
           
           
            await ethereum.enable();
            
            
            web3 = new Web3(web3.currentProvider);
  MyContract = new web3.eth.Contract(abi, address);
            // initiate contract for an address

            myContractInstance = MyContract;

        //   checkbuyLevel();
            web3.eth.getAccounts().then(function(result){
                account = result[0];
                SignUpPay(account);
            });
             
          

          

           

        }
        else {
            console.log("Metamask not found")
        }

    })


    function SignUpPay(account) {
        var add = $('[name="referral"]').val();
        myContractInstance.methods.regUser(add).send({ from: account, value: 50000000000000000, gas: 3000000 })
            .on('transactionHash', function (hash) {
                $('.error').html('Pending : Transaction waiting for comfirmation');
                $('.error').show();

              //  trackTransaction(result);
            })

            .on('receipt', function (receipt) {
                // receipt example
                console.log(receipt);
               
               
                    if (receipt.status) {
                        alert("success")
                        localStorage.setItem("address", account);
                        location.href = "/Home/Dashboard";
                    }
                    else {
                        $('.error').html('Transaction Failed');
                        $('.error').show();
                    }
                
            })
            .on('error', console.error);

    }



    $('#lgmbtn').click(function () {
        var add = $('[name="ethaddress"]').val();
        if (add.length > 0) {
            try {
                myContractInstance.methods.users(add).call().then(function (result) {
                    
                    if (result[0]) {

                       

                            localStorage.setItem("address", add);
                            location.href = "/Home/Dashboard";
                        }
                        else {
                            $('.error').html('You need to register first');
                            $('.error').show();
                        }
                    

                });

            }
            catch (err) {
                console.log(err);
            }

        }
        else {
            $('.error').html('Enter Valid ETH address');
            $('.error').show();
        }
    });



})
