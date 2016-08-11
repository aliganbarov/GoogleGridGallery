var bigPanels = []
for (var i = 0; i < $('.sliderPanel').length; i++) {
	bigPanels[i] = $('#bpanel' + (i + 1));
}

$(document).ready(function() {
	$('.panel').on('click', function() {
		//making slider div visible and place on window
		$('.slider').removeClass('hide').css("top", $(window).scrollTop())
		.css("height", $(window).height())

		//selecting active panel
		for (var i = 0; i < bigPanels.length; i++) {
			if (bigPanels[i].attr('id') == ('b' + $(this).attr('id'))) {
				activePanel = bigPanels[i];
			}
		}
		btnHideClick();

		//selecting prev and next panels
		prevPanel = activePanel.prev();
		nextPanel = activePanel.next();

		PlacePanels();
	})//end of panel on click function


	$('#btnLeft').on('click', function(){
		btnHideBtns();
		for (var i = 0; i < bigPanels.length; i++) {
			bigPanels[i].css({
				visibility: 'hidden'
			})
		}
		nextPanel = activePanel;
		activePanel = prevPanel;
		prevPanel = prevPanel.prev();

		SlideLeft();
	})//end of btnLeft on click function

	$('#btnRight').on('click', function(){
		btnHideBtns();
		for (var i = 0; i < bigPanels.length; i++) {
			bigPanels[i].css({
				visibility: 'hidden'
			})
		}
		prevPanel = activePanel;
		activePanel = nextPanel;
		nextPanel = nextPanel.next();

		SlideRight();

	})//end of btnLeft on click function

	$('.close').on('click', function() {
		$('.slider').addClass('hide');
		//making all slides hidden again and reseting
		for (var i = 0; i < bigPanels.length; i++) {
			bigPanels[i].css({
				visibility: 'hidden'
			})
		}
	})//end of close button on click function

})//end document ready function

//checks if end of slide hide related button on click to panel
function btnHideClick() {
	if (activePanel.attr('id') == 'bpanel1') {
		$('#btnLeft').css('visibility', 'hidden');
	}
	else {
		$('#btnLeft').css('visibility', 'visible');
	}
	if (activePanel.attr('id') == 'bpanel24') {
		$('#btnRight').css('visibility', 'hidden');
	}
	else {
		$('#btnRight').css('visibility', 'visible');
	}
}

//checks if end of slides according to left right btns
function btnHideBtns() {
	if (activePanel.attr('id') == 'bpanel2') {
		$('#btnLeft').css('visibility', 'hidden');
		console.log('hiding left btn ' + activePanel.attr('id') + ' == ' + 'bpanel2');
	}
	else {
		$('#btnLeft').css('visibility', 'visible');
	}
	if (activePanel.attr('id') == 'bpanel23') {
		console.log('hiding right btn ' + activePanel.attr('id') + ' == ' + 'bpanel23');
		$('#btnRight').css('visibility', 'hidden');
	}
	else {
		$('#btnRight').css('visibility', 'visible');
	}
}

//places panels
function PlacePanels() {
	//setting active panel
	activePanel
	.css({
		top: '200px',
		left: '600px',
		width: '680px',
		height: '560px',
		fontSize: '1em',
		visibility: 'visible',
	})
	.find('img').css({
		width: 'auto',
		left: '0px'
	})

	// .hide()
	// .fadeIn(100)
	// .animate({
	// 	top: '200px',
	// 	left: '600px',
	// 	width: '680px',
	// 	height: '560px',
	// 	padding: '60px 50px'
	// },200)

	//setting previous panel
	prevPanel
	.css({
		fontSize: '12px',
		height: '480px',
		top: '240px',
		left: '-500px',
		visibility: 'visible'
	})
	.find('img').css({
		width: '450px',
		left: '100px'
	})


	//setting next panel
	nextPanel
	.css ({
		height: '480px',
		top: '240px',
		left: ($(window).width() - 160) + 'px',
		visibility: 'visible'
	})
	.find('img').css({
		width: '450px'
	})
}

function SlideRight(){
	//putting all slides on right side
	for (var i = 0; i < bigPanels.length; i++) {
		bigPanels[i]
		.css({
			left: $(window).width() + 'px',
			top: '240px'
		})
	}

	prevPanel
	.css({
		visibility: 'visible',
		left: '600px',
		top: '200px'
	})
	.animate({
		left: '-500px',
		height: '480px',
		fontSize: '12px',
		top: '240px'
	}, 500)
	.find('img').animate({
		width: '450px',
		left: '100px'
	}, 500)

	activePanel
	.css({
		width: '680px',
		height: '560px',
		fontSize: '1em',
		visibility: 'visible'
	})
	.animate({
		left: '600px',
		top: '200px',
	}, 500)
	.find('img').css({
		width: 'auto',
		left: '0px'
	})

	nextPanel
	.css({
		visibility: 'visible',
		
		fontSize: '12px'
	})
	.animate({
		left: ($(window).width() - 160) + 'px',
		height: '480px',
		top: '240px'
	}, 500)
	.find('img').animate({
		width: '450px'
	}, 500)
}

function SlideLeft() {
	for (var i = 0; i < bigPanels.length; i++) {
		bigPanels[i].css({
			left: '-660px',
			top: '240px'
		})
	}
	prevPanel
	.css({
		visibility: 'visible',
	})
	.animate({
		left: '-500px',
		height: '480px',
		top: '240px',
		fontSize: '12px'
	}, 500)
	.find('img').animate({
		width: '450px',
		left: '100px'
	}, 500)

	activePanel
	.css({
		// top: '200px',
		width: '680px',
		height: '560px',
		fontSize: '1em',
		visibility: 'visible'
	})
	.animate({
		left: '600px',
		top: '200px'
	}, 500)
	.find('img').animate({
		width: '560px',
		left: '0px'
	})

	nextPanel
	.css({
		visibility: 'visible',
		fontSize: '12px',
		left: '600px',
		top: '200px'
	})
	.animate({
		left: ($(window).width() - 160) + 'px',
		height: '480px',
		top: '240px'
	}, 500)
	.find('img').animate({
		width: '450px'
	}, 500)
}


//small panels have class panel1, panel2..
//big panels have id bpanel1, bpanel2.. accordingly