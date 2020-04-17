DApp = {
	factoryContract: null,
	factoryAbi: [{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"findFreeReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"viewUserReferral","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referrerID","type":"uint256"}],"name":"regUser","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currUserID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"isExist","type":"bool"},{"name":"id","type":"uint256"},{"name":"referrerID","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_manager","type":"address"}],"name":"setManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"},{"name":"_level","type":"uint256"}],"name":"viewUserLevelExpired","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_level","type":"uint256"}],"name":"buyLevel","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_referrer","type":"address"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"buyLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"prolongateLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_referral","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_referral","type":"address"},{"indexed":false,"name":"_level","type":"uint256"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"lostMoneyForLevelEvent","type":"event"}],
	emptyAddress: '0x79C0CE16329055f2e49ccF21352Ee9775DD9BE4a',

	// Local
	//factoryAddress: "0x79C0CE16329055f2e49ccF21352Ee9775DD9BE4a",

	// Ropsten
	//factoryAddress: "",

	// Mainnet
    factoryAddress: "0x79C0CE16329055f2e49ccF21352Ee9775DD9BE4a",

	init: function() {
		console.log('[x] Initializing DApp.');
		this.initWeb3();
	},

	initWeb3: function() {
		window.addEventListener('load', () => {
			// If web3 is not injected
			if (typeof web3 === 'undefined') {
				// Listen for provider injection
				window.addEventListener('message', ({ data }) => {
					if (data && data.type && data.type === 'ETHEREUM_PROVIDER_SUCCESS') {
						// Use injected provider
						web3 = new Web3(ethereum);
						console.log('[x] web3 object initialized.');
						DApp.initContracts();
					} else {
						// No web3 instance available show a popup
						$('#metamaskModal').modal('show');
					}
				});
				// Request provider
				window.postMessage({ type: 'ETHEREUM_PROVIDER_REQUEST' }, '*');
			}
			// If web3 is injected use it's provider
			else {
				web3 = new Web3(web3.currentProvider);
				console.log('[x] web3 object initialized.');
				DApp.initContracts();
			}
		});
	},

	initContracts: function() {
		DApp.factoryContract = new web3.eth.Contract(DApp.factoryAbi, DApp.factoryAddress);
		console.log('[x] Factory contract initialized.');

		DApp.loadAccount();
	},

	loadAccount: function() {
		web3.eth.getAccounts(function(error, accounts) {
			if(error) {
				console.error("[x] Error loading accounts", error);
			} else {
				DApp.currentAccount = accounts[0];
				console.log("[x] Using account", DApp.currentAccount);

				DApp.initActions();
				DApp.initFrontend();
			}
		});
	},

	checkSubdomainOwner: function(subdomain, domain, topdomain){
		DApp.factoryContract.methods.subdomainOwner(subdomain, domain, topdomain).call(
				function(error, addr){
				if(error){
					console.log('[x] Error during execution', error);
				} else {
					$("#subdomain").removeClass("is-valid is-invalid");
					if(addr === DApp.emptyAddress){
						$('#valid').text("It's available! Go for it tiger!");
						$('#subdomain').addClass('is-valid');
					} else if(addr === DApp.currentAccount) {
						$('#valid').text("It's your subdomain! Edit away!");
						$('#subdomain').addClass('is-valid');
					} else {
						$('#invalid').text("Oops! It's already taken by: " + addr);
						$('#subdomain').addClass('is-invalid');
					}
				}
			})
	},

	newSubdomain: function(subdomain, domain, topdomain, owner, target) {
		DApp.factoryContract.methods.newSubdomain(
			subdomain, domain, topdomain, owner, target).send(
			{
				gas: 150000,
				from: DApp.currentAccount
			},
			function(error, result){
				if(error){
					console.log('[x] Error during execution', error);
				} else {
					console.log('[x] Result', result);
				}
			})
	},

	initActions: function() {
		$("#domain").on("change", function() {
			DApp.updateDomainAvailable();
		});

		$("#subdomain").on("paste keyup", function() {
			DApp.updateDomainAvailable();
		});

		$("#owner").on("paste keyup", function() {
			$("ownerHelp").remove();
			DApp.validateAddress("#owner");
		});

		$("#target").on("paste keyup", function() {
			$("targetHelp").remove();
			DApp.validateAddress("#target");
		});

		$("#subdomain-form").submit(function(event) {
			event.preventDefault();
			$("#ownerHelp").remove();
			$("#targetHelp").remove();

			let fullDomain = $('#subdomain').val() + "." +
				$('#domain option').filter(":selected").val() + "." +
                $('#topdomain option').filter(":selected").val();
			$("a").attr("href", "https://etherscan.io/enslookup?q=" + fullDomain);
			$('#confirmModal').modal('show');
			$("#subdomain").removeClass("is-valid is-invalid");

			DApp.newSubdomain(
				$('#subdomain').val(),
				$('#domain option').filter(":selected").val(),
				$('#owner').val(),
				$('#target').val()
			);
		});
	},

	validateAddress: function(element){
		if(web3.utils.isAddress($(element).val())){
			$(element).removeClass("is-invalid");
		} else {
			$(element).addClass("is-invalid");
		}
	},

	initFrontend: function(){
		$('#owner').val(DApp.currentAccount);
		$('#target').val(DApp.currentAccount);
		$("#domain").append("<option value='freedomain'>freedomain</option>");
        $("#topdomain").append("<option value='eth'>eth</option>");
	},

	updateDomainAvailable: function(){
		$("#subdomain").removeClass("is-valid is-invalid");
		let cleaned = $('#subdomain').val().replace(/[^a-z0-9]/gi,'').toLowerCase();
		$('#subdomain').val(cleaned);
		if($('#subdomain').val().length > 0) {
			DApp.checkSubdomainOwner(
				$('#subdomain').val(),
				$('#domain option').filter(":selected").val()
				);
		}
	}
}

$(function() {
	DApp.init();
});
