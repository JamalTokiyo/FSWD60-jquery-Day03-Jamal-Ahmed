$(document).ready(function(){
	

	var img=['sphone.png','iphoneX.png'];
	for(i=0; i<2;i++){
		$('.container').append(`<div class="col-xs-12 col-md-6">
			<!-- First product box start here-->
			<div class="prod-info-main prod-wrap clearfix">
				<div class="row">
					<div class="col-md-5 col-sm-12 col-xs-12"> 
						<div class="product-image"> 
							<img src="${img[i]}" class="img-responsive"> 
							<span class="tag2 hot">
								HOT
							</span> 
						</div>
					</div>
					<div class="col-md-7 col-sm-12 col-xs-12">
						<div class="product-deatil">
							<h5 class="name">
								<a href="#">
									IPhone
								</a>
								<a href="#">
									<span>Product Category</span>
								</a>                            

							</h5>
							<p class="price-container">
								<span>$1050</span>
							</p>
							<span class="tag1"></span> 
						</div>
						<div class="description">
							<p>A Short product description here </p>
						</div>
						<div class="product-info smart-form">
							<div class="row">
								<div class="col-md-12"> 
									<a href="javascript:void(0);" class="btn btn-danger">Add to cart</a>
									<a href="javascript:void(0);" class="btn btn-info">More info</a>
								</div>
								<div class="col-md-12">
									<div class="rating">Rating:
										<label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
										<label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
										<label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end product -->
		</div>`);


	}
	
var color=['red','green','blue'];
	$('.product-image >img[src*="notebook"]').css("background-color","red");
	$('.product-image >img[src*="phone"]').css("background-color","green");
	$('.product-image >img[src*="tablet"]').css("background-color","blue");

	//var classes=['.notebook_image','.phone_image','.tablet_image'];
//	for(i=0; i<color.length; i++){
	//$(classes[i]).css('background-color',color[i]);//first solution
//	}
	//$('.phone_image').css('background-color','green');
	//$('.tablet_image').css('background-color','blue');
})