Vue.config.devtools = true;
var Date = new Date();
var Month = Date.getMonth();
var Days = Date.getDate();
var Hours = Date.getHours();
var Mins = Date.getMinutes();
new Vue({
	el:"#app",
	data:{
	 todotask:'',
	 todolist:[],
	 hardness:100,
	 cracked: false,
	 inquiry:'',
	 wordmax:30,
	 less10:false,
	 voted:false,
	 isActive:false,
	 more:false,
	 answered:false,
	 doneinquiry:false,
	 	 //電車の金額データ
	 choice:'section1',
	 trainhotelfee:8900,
	 trainhoteltimes:'',
	 trainfoodfee:1890,
	 trainfoodtimes:'',
	 //飛行機の金額
	 planehotelfee:16200,
	 planehoteltimes:'',
	 planefoodfee:4320,
	 planefoodtimes:'',
	 //車の金額
	 carhotelfee:6700,
	 carhoteltimes:'',
	 carfoodfee:2870,
	 carfoodtimes:'',
	 traveldatasent:false,
	 submitAgree:false

	},
	methods:{
		addItem:function(){
			if(this.todotask == '') return
			var todo = {
				task:this.todotask,
				isListed:true
			}//end of var todo
			this.todolist.push(todo)
			this.todotask=''
		},//end of addItem
		  deleteItem:function(index){
		  	this.todolist.splice(index,1)
		  },//end of deleteItem
		  knock:function(){
		  	this.hardness -= 10
		  	if(this.hardness <= 0){
		  		this.cracked = true
		  	}
		  },//end of knock
		  restart:function(){
		  	this.hardness = 100
		  	this.cracked = false
		  },
		  active: function () {
		    this.isActive =  !this.isActive
		    this.voted = !this.voted
		  	},
		  answer:function(){
  		  this.answered = !this.answered
  		
  		},// end of answer
	  	sentinquiry:function(){
	  		this.doneinquiry = !this.doneinquiry
	  	},// end of sentinquiry

	  	//電車の計算メソッド
			trainstay:function(){
	  		var trainhotel = this.trainhotelfee * this.trainhoteltimes
	  		var trainfood = this.trainfoodfee * this.trainfoodtimes
	  		var trainwholetotal = trainhotel + trainfood + 4900
	  	  // console.log(trainwholetotal)
	  		return trainwholetotal
  		},// End of 電車の計算メソッド
  		planestay:function(){
	  		var planehotel = this.planehoteltimes * this.planehotelfee
	  		var planfood = this.planefoodfee * this.planefoodtimes
	  		var planewholetotal = planehotel + planfood + 38840
	  		// console.log(planewholetotal)
	  		return planewholetotal

  		},//end of飛行機の計算メソッド
  		carstay:function(){
	  		var carhotel = this.carhotelfee * this.carhoteltimes
	  		var carfood = this.carfoodfee * this.carfoodtimes
	  		var carwholetotal = carhotel + carfood + 1490
	  		 console.log(carwholetotal)
	  		return carwholetotal
  		},// end of 車の計算メソッド
  		confirm:function(){
	  		alert('送信してよろしいですか？')
	  	　this.traveldatasent = !this.traveldatasent
  		}// end of data 送信

	}, //end of methods

	computed:{
		commentWords:function(){
		var rest = this.wordmax - this.inquiry.length
		return rest
		//赤くならない・・・
		if(this.rest <= 10){
			this.less10 = !this.less10
			} 
		},// end of commentWords
		displayBar:function(){
			return this.more ? '閉じる' : 'もっと見る'
		}
	}//end of computed


	



});