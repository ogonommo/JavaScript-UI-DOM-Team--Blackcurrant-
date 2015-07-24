var Raft = (function(){
	'use strict';
	
	function Raft(data, imgList, layer) {
		this.position = data.position;
		this.side = 'left';
		this.seats = data.seats;
		this.seatsTaken = {left: false, right: false};
		this.seated = {left: null, right: null};
		this.image = imgList.getImage('raft');
		this.inAnimation = false;
		this.layer = layer;
		this.animation = null;
	}
	
	Raft.prototype.onClick = function() {
		if (this.inAnimation) {
			return;
		}
		var self = this;
		if (this.side === 'left') {
			this.inAnimation = true;
			this.side = 'right';
			this.animation = new Kinetic.Tween({
				node: self.player,
				x: self.position.right.x,
				y: self.position.right.y,
				duration: 0.7,
				onFinish: function(){
					self.inAnimation = false;
				}
			});
			this.animation.play();
		} else {
			this.inAnimation = true;
			this.side = 'left';
			this.animation = new Kinetic.Tween({
				node: self.player,
				x: self.position.left.x,
				y: self.position.left.y,
				duration: 0.7,
				onFinish: function(){
					self.inAnimation = false;
				}
			});
			this.animation.play();
		}
	};
	
	Raft.prototype.takeASeat = function () {
		if (!this.seatsTaken.left) {
			return {
				x: this.seats.seat1.position[this.side].x,
				y: this.seats.seat1.position[this.side].y
			}
		} else if (!this.seatsTaken.right) {
			
		} else {
			throw 'All seats are taken. Make sure you check with raft.hasFreeSeats() for free seats first!';
		}
	};
 	
	Raft.prototype.hasFreeSeats = function () {
		return !(this.seatsTaken.left && this.seatsTaken.right);
	};
	
	Raft.prototype.init = function () {
		var self = this;
		this.player = new Kinetic.Image({
			x: this.position[this.side].x,
			y: this.position[this.side].y,
			image: this.image
		});
		this.player.on('click', function(){
			self.onClick();
		});
		this.layer.add(this.player);
		this.layer.batchDraw();
	};
	
	return Raft;
})();