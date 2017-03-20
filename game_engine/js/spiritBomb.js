function createSpiritBomb()
{
	var chargeLight = particles.explosions.create(0, game.height/2, 'redPartical');
	chargeLight.scale.setTo(8,8);
}

function animateSpiritBomb()
{
	particles.spiritBomb.setAll('x', 10, true, true, 1);
	particles.spiritBomb.forEach(checkSpiritBomb, this, true);
}

function doSpiritBomb()
{
	//game.time.events.repeat(50, 0, createSpiritBomb, this);
	createSpiritBomb();
}

function checkSpiritBomb(sprite)
{
	try
	{
		//log(['checkSprite', 'sprite.x'], sprite.x);
		//log(['checkSprite', 'game.width/2'], game.width/2)
		//log(['checkSprite','if'],sprite.x > game.width/2);
		if (sprite.x > game.width)
		{
			sprite.kill();
			//particles.zombies.remove(sprite,true);
		}
	}
	catch(error)
	{
		log(['checkSpiritBomb','catch'], sprite);
	}
}