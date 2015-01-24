var $playerXml = $('<TextureAtlas imagePath="sprites.png"><SubTexture name="b1.png" x="0" y="390" width="128" height="128"/><SubTexture name="b10.png" x="780" y="910" width="128" height="128"/><SubTexture name="b2.png" x="0" y="260" width="128" height="128"/><SubTexture name="b3.png" x="0" y="130" width="128" height="128"/><SubTexture name="b4.png" x="0" y="0" width="128" height="128"/><SubTexture name="b5.png" x="390" y="780" width="128" height="128"/><SubTexture name="b6.png" x="910" y="260" width="128" height="128"/><SubTexture name="b7.png" x="910" y="130" width="128" height="128"/><SubTexture name="b8.png" x="910" y="0" width="128" height="128"/><SubTexture name="b9.png" x="780" y="1040" width="128" height="128"/><SubTexture name="cb1.png" x="780" y="780" width="128" height="128"/><SubTexture name="cb2.png" x="780" y="650" width="128" height="128"/><SubTexture name="cb3.png" x="780" y="520" width="128" height="128"/><SubTexture name="cb4.png" x="780" y="390" width="128" height="128"/><SubTexture name="cb5.png" x="780" y="260" width="128" height="128"/><SubTexture name="cb6.png" x="780" y="260" width="128" height="128"/><SubTexture name="cb7.png" x="780" y="130" width="128" height="128"/><SubTexture name="cb8.png" x="780" y="130" width="128" height="128"/><SubTexture name="cb9.png" x="780" y="260" width="128" height="128"/><SubTexture name="cf1.png" x="780" y="0" width="128" height="128"/><SubTexture name="cf2.png" x="650" y="1040" width="128" height="128"/><SubTexture name="cf3.png" x="650" y="910" width="128" height="128"/><SubTexture name="cf4.png" x="650" y="780" width="128" height="128"/><SubTexture name="cf5.png" x="650" y="650" width="128" height="128"/><SubTexture name="cf6.png" x="650" y="520" width="128" height="128"/><SubTexture name="cf7.png" x="650" y="390" width="128" height="128"/><SubTexture name="cf8.png" x="650" y="260" width="128" height="128"/><SubTexture name="cf9.png" x="650" y="130" width="128" height="128"/><SubTexture name="cs1.png" x="650" y="0" width="128" height="128"/><SubTexture name="cs2.png" x="520" y="1040" width="128" height="128"/><SubTexture name="cs3.png" x="520" y="910" width="128" height="128"/><SubTexture name="cs4.png" x="520" y="780" width="128" height="128"/><SubTexture name="cs5.png" x="520" y="650" width="128" height="128"/><SubTexture name="cs6.png" x="520" y="520" width="128" height="128"/><SubTexture name="cs7.png" x="520" y="390" width="128" height="128"/><SubTexture name="cs8.png" x="520" y="260" width="128" height="128"/><SubTexture name="cs9.png" x="520" y="130" width="128" height="128"/><SubTexture name="f1.png" x="520" y="0" width="128" height="128"/><SubTexture name="f10.png" x="390" y="0" width="128" height="128"/><SubTexture name="f2.png" x="390" y="1040" width="128" height="128"/><SubTexture name="f3.png" x="390" y="910" width="128" height="128"/><SubTexture name="f4.png" x="910" y="390" width="128" height="128"/><SubTexture name="f5.png" x="390" y="650" width="128" height="128"/><SubTexture name="f6.png" x="390" y="520" width="128" height="128"/><SubTexture name="f7.png" x="390" y="390" width="128" height="128"/><SubTexture name="f8.png" x="390" y="260" width="128" height="128"/><SubTexture name="f9.png" x="390" y="130" width="128" height="128"/><SubTexture name="gg1.png" x="260" y="1040" width="128" height="128"/><SubTexture name="i1.png" x="260" y="910" width="128" height="128"/><SubTexture name="i2.png" x="260" y="780" width="128" height="128"/><SubTexture name="i3.png" x="260" y="650" width="128" height="128"/><SubTexture name="i4.png" x="260" y="520" width="128" height="128"/><SubTexture name="i5.png" x="260" y="390" width="128" height="128"/><SubTexture name="i6.png" x="260" y="260" width="128" height="128"/><SubTexture name="i7.png" x="260" y="130" width="128" height="128"/><SubTexture name="i8.png" x="260" y="0" width="128" height="128"/><SubTexture name="i9.png" x="130" y="1040" width="128" height="128"/><SubTexture name="jb1.png" x="130" y="910" width="128" height="128"/><SubTexture name="jf1.png" x="130" y="780" width="128" height="128"/><SubTexture name="js1.png" x="130" y="650" width="128" height="128"/><SubTexture name="s1.png" x="130" y="520" width="128" height="128"/><SubTexture name="s10.png" x="0" y="520" width="128" height="128"/><SubTexture name="s2.png" x="130" y="390" width="128" height="128"/><SubTexture name="s3.png" x="130" y="260" width="128" height="128"/><SubTexture name="s4.png" x="130" y="130" width="128" height="128"/><SubTexture name="s5.png" x="130" y="0" width="128" height="128"/><SubTexture name="s6.png" x="0" y="1040" width="128" height="128"/><SubTexture name="s7.png" x="0" y="910" width="128" height="128"/><SubTexture name="s8.png" x="0" y="780" width="128" height="128"/><SubTexture name="s9.png" x="0" y="650" width="128" height="128"/></TextureAtlas>');
var $envXml = $('');
var $deathXml = $('');
var $tileXml = $('<TextureAtlas imagePath="sprites.png"><SubTexture name="Lava1.png" x="0" y="130" width="128" height="128"/><SubTexture name="Lava2.png" x="0" y="260" width="128" height="128"/><SubTexture name="Platform1.png" x="130" y="0" width="128" height="128"/><SubTexture name="Platform2.png" x="0" y="0" width="128" height="128"/></TextureAtlas>');
var $keyXml = $('<TextureAtlas imagePath="sprites.png"><SubTexture name="1.png" x="260" y="127" width="128" height="125"/><SubTexture name="10.png" x="260" y="508" width="128" height="125"/><SubTexture name="11.png" x="260" y="381" width="128" height="125"/><SubTexture name="12.png" x="260" y="254" width="128" height="125"/><SubTexture name="13.png" x="520" y="381" width="128" height="125"/><SubTexture name="14.png" x="260" y="0" width="128" height="125"/><SubTexture name="15.png" x="130" y="508" width="128" height="125"/><SubTexture name="16.png" x="130" y="381" width="128" height="125"/><SubTexture name="17.png" x="130" y="254" width="128" height="125"/><SubTexture name="18.png" x="130" y="127" width="128" height="125"/><SubTexture name="19.png" x="130" y="0" width="128" height="125"/><SubTexture name="2.png" x="520" y="254" width="128" height="125"/><SubTexture name="20.png" x="0" y="508" width="128" height="125"/><SubTexture name="21.png" x="0" y="381" width="128" height="125"/><SubTexture name="22.png" x="0" y="254" width="128" height="125"/><SubTexture name="23.png" x="0" y="127" width="128" height="125"/><SubTexture name="24.png" x="0" y="0" width="128" height="125"/><SubTexture name="3.png" x="520" y="127" width="128" height="125"/><SubTexture name="4.png" x="520" y="0" width="128" height="125"/><SubTexture name="5.png" x="390" y="508" width="128" height="125"/><SubTexture name="6.png" x="390" y="381" width="128" height="125"/><SubTexture name="7.png" x="390" y="254" width="128" height="125"/><SubTexture name="8.png" x="390" y="127" width="128" height="125"/><SubTexture name="9.png" x="390" y="0" width="128" height="125"/></TextureAtlas>');
var $heartXml = $('<TextureAtlas imagePath="sprites.png"><SubTexture name="1.png" x="260" y="130" width="128" height="128"/><SubTexture name="10.png" x="260" y="520" width="128" height="128"/><SubTexture name="11.png" x="260" y="390" width="128" height="128"/><SubTexture name="12.png" x="260" y="260" width="128" height="128"/><SubTexture name="13.png" x="520" y="390" width="128" height="128"/><SubTexture name="14.png" x="260" y="0" width="128" height="128"/><SubTexture name="15.png" x="130" y="520" width="128" height="128"/><SubTexture name="16.png" x="130" y="390" width="128" height="128"/><SubTexture name="17.png" x="130" y="260" width="128" height="128"/><SubTexture name="18.png" x="130" y="130" width="128" height="128"/><SubTexture name="19.png" x="130" y="0" width="128" height="128"/><SubTexture name="2.png" x="520" y="260" width="128" height="128"/><SubTexture name="20.png" x="0" y="520" width="128" height="128"/><SubTexture name="21.png" x="0" y="390" width="128" height="128"/><SubTexture name="22.png" x="0" y="260" width="128" height="128"/><SubTexture name="23.png" x="0" y="130" width="128" height="128"/><SubTexture name="24.png" x="0" y="0" width="128" height="128"/><SubTexture name="3.png" x="520" y="130" width="128" height="128"/><SubTexture name="4.png" x="520" y="0" width="128" height="128"/><SubTexture name="5.png" x="390" y="520" width="128" height="128"/><SubTexture name="6.png" x="390" y="390" width="128" height="128"/><SubTexture name="7.png" x="390" y="260" width="128" height="128"/><SubTexture name="8.png" x="390" y="130" width="128" height="128"/><SubTexture name="9.png" x="390" y="0" width="128" height="128"/></TextureAtlas>');

var playerRunAnimation = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"];
var playerMiscAnimation = ["1.png","1.png","2.png","2.png","3.png","3.png","4.png","4.png","5.png","5.png","6.png","6.png","7.png","7.png","8.png","8.png","9.png","9.png"];

var tileAnimation = ["1.png","2.png"];

/*
var playerJumpAnimation = ["jump.png"];

var playerFallAnimation = ["fall.png"];

var playerDeathAnimation = ["death01.png", "death02.png", "death03.png", "death04.png", "death05.png", "death06.png", "death07.png", "death08.png", 
							"death09.png", "death10.png", "death11.png", "death12.png", "death13.png"]

var enemyAnimation = ["attack1.png" , "attack2.png", "attack3.png", "attack4.png", "attack5.png", "attack6.png", "attack7.png", "attack8.png", "attack9.png"];
*/