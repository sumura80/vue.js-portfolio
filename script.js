Vue.config.devtools = true;
var Date = new Date();
var Month = Date.getMonth();
var Days = Date.getDate();
var Hours = Date.getHours();
var Mins = Date.getMinutes();

Vue.component('my-product',{
	template:`
	<div class="wrapMain container mt-4">
		<div class="row">
			<div class="col-sm-6 product-image mt-2">
				 <img class="makaron-img-size img-thumbnail" v-bind:src="image" alt="makaron-image">
			</div><!-- end of product-image-->
			
			<div class="col-sm-6  product-info mt-2">

				<h2>{{ product }}</h2>
				<p v-if="inventory > 1">在庫あり</p>
				<p v-else>在庫なし</p>
				<ul>
					<li v-for="item in details">{{ item }}</li>
				</ul>

				<div class="row makaronColorBox"><!-- makaron color box-->
					<div v-for="(makaron,index) in makaronpoints" v-bind:key="makaron.makaronId" class="col-3 col-sm-3 mx-2 color-box" v-on:mouseover="updateMakaronImg(index)" v-bind:style='{backgroundColor: makaron.makaronColor}'>	 
		 			</div>
			</div><!-- makaron color box-->

			<div class="button-box">
				<div class="btn-color" v-on:click="AddToCart"  v-bind:class="{disableButton: !inventory}">カートに入れる</div>
			</div><!-- end of button- box-->

			

			</div><!-- end of product-info -->
		</div><!-- end of row -->
	 
	</div><!-- end of wrapMain -->
	`,
	data:function(){
			return{
	 product:'極上のマカロン',
	 // image:'pink.jpg',

	 //inventory:true,
	 
	 chosenmakaron:0, 
	 details:[
	 	'外は、サックリしていて中はしっとり','間にクリームが入っています','色とバリエーションが豊富','ダイエット中にもオススメ','注文ご2日以内にお届けします'
	 	],
	 	makaronpoints:[
	 	{makaronId:1 ,makaronColor:'pink',makaronImage:'pink.jpg',makaronQuantity:10,makaronName:'ストロベリー'},
	 	{makaronId:2 ,makaronColor:'lightgreen',makaronImage:'lightgreen.jpg' ,makaronQuantity:0 ,makaronName:'グリーンティー'},
	 	{makaronId:3 ,makaronColor:'plum',makaronImage:'purple.jpg' ,makaronQuantity:5 ,makaronName:'カシス'},
	 	{makaronId:4 ,makaronColor:'lightblue',makaronImage:'lightblue.jpg' ,makaronQuantity:7 ,makaronName:'ミント'},
	 	{makaronId:5 ,makaronColor:'peru',makaronImage:'brown.jpg' ,makaronQuantity:4 ,makaronName:'チョコレート'},
	 	{makaronId:6 ,makaronColor:'lemonchiffon',makaronImage:'yellow.jpg' ,makaronQuantity:0 ,makaronName:'レモン'}

	 	]
			} // end of return
	  },  
	  computed:{
  	image:function(){
  		return this.makaronpoints[this.chosenmakaron].makaronImage
  	},
  	inventory:function(){
  		return this.makaronpoints[this.chosenmakaron].makaronQuantity
  	}
  },// end of computed
  methods:{
  	AddToCart:function(){
  		this.$emit('increase-cart',this.makaronpoints[this.chosenmakaron].makaronName)
  	},
  	updateMakaronImg:function(index){
  		this.chosenmakaron = index
  		console.log(index)
  	}// end of methods
  }

})



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
	 submitAgree:false,
	 cart:[]

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
  		},// end of data 送信
  		increaseCart:function(name){
			this.cart.push(name)
			}// end of increase cart	

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