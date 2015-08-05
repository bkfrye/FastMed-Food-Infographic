$( document ).ready(function() {
	var distances = [2.5,2.2,3.5,4.2,5.7,1.6];
	var percentDis= [30,24,50,64,80,12];
	var currentCount;
	var options = {
	  useEasing : false, 
	  useGrouping : true, 
	  separator : ',', 
	  decimal : '.', 
	  prefix : '', 
	  suffix : '' 
	};
	var s = skrollr.init({
		forceHeight:true,
		smoothScrolling: true,
		constants: {
    		//fill the box for a "duration" of 150% of the viewport (pause for 150%)
    		//adjust for shorter/longer pause
    		box: '150p'
    	},
    	render: function() {
            $('.running-man').each(function(index) {
				if ($(this).hasClass('skrollable-between')) {
					if (currentCount != $(this).attr('id').slice(3,4) && !$(this).hasClass('done')){
						$(this).addClass('done');
						$(this).css("-webkit-animation-play-state", "running");
						currentCount = $(this).attr('id').slice(3,4);
						var distance = distances[Number(currentCount)-1];
						var countContainer = $('#count'+currentCount).parent().parent();
						var numAnim = new CountUp('count'+currentCount, 0, distance, 1, 3, options);
						numAnim.start();
						
						$(this).animate({left:percentDis[Number(currentCount)-1]+'%'}, 3000,'linear', function() {
							$(this).css("-webkit-animation-play-state", "paused");
							//countContainer.children('p').css('opacity', '1');
							countContainer.children('p').animate({ "opacity": "1" }, "slow", "easeInOutQuint");
						});
					}
				}
				if ($(this).hasClass('skrollable-before')) {
					$(this).css("-webkit-animation-play-state", "paused");
				}
				if ($(this).hasClass('skrollable-after')) {
					$(this).css("-webkit-animation-play-state", "paused");
				}
			});
        }
	});
	skrollr.menu.init(s, {
	    animate: true,
	    //The easing function to use.
	    easing: 'sqrt',
	    duration: function(currentTop, targetTop) {
	        return 1000;
	    }
	});

	// $('#zip').numeric();

	$('#zipSearch').click(function(event) {
	    window.open("http://www.fastmed.com/locations/fastmed-office-finder?zip="+$('#zip').val(), "popupWindow");
	});















});